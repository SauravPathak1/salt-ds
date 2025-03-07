import {
  DateValue,
  endOfMonth,
  endOfYear,
  getLocalTimeZone,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfYear,
  today,
} from "@internationalized/date";
import { useControlled } from "@salt-ds/core";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import {
  isRangeOrOffsetSelectionValue,
  UseMultiSelectionCalendarProps,
  UseOffsetSelectionCalendarProps,
  UseRangeSelectionCalendarProps,
  useSelectionCalendar,
  useSelectionCalendarProps,
  UseSingleSelectionCalendarProps,
} from "./useSelection";

interface BaseUseCalendarProps {
  defaultVisibleMonth?: DateValue;
  onVisibleMonthChange?: (
    event: SyntheticEvent,
    visibleMonth: DateValue
  ) => void;
  isDayUnselectable?: (date: DateValue) => string | false | void;
  isDayHighlighted?: (date: DateValue) => string | false | void;
  isDayDisabled?: (date: DateValue) => boolean;
  visibleMonth?: DateValue;
  hideOutOfRangeDates?: boolean;
  hideYearDropdown?: boolean;
  minDate?: DateValue;
  maxDate?: DateValue;
}

export type useCalendarProps = (
  | Omit<UseSingleSelectionCalendarProps, "isDaySelectable">
  | Omit<UseMultiSelectionCalendarProps, "isDaySelectable">
  | Omit<UseRangeSelectionCalendarProps, "isDaySelectable">
  | Omit<UseOffsetSelectionCalendarProps, "isDaySelectable">
) &
  BaseUseCalendarProps;

const defaultIsDayUnselectable = (): string | false => false;
const defaultIsDayHighlighted = (): string | false => false;
const defaultIsDayDisabled = (): false => false;

export function useCalendar(props: useCalendarProps) {
  const {
    selectedDate,
    defaultSelectedDate,
    visibleMonth: visibleMonthProp,
    hideYearDropdown,
    hideOutOfRangeDates,
    defaultVisibleMonth = today(getLocalTimeZone()),
    onSelectedDateChange,
    onVisibleMonthChange,
    isDayUnselectable = defaultIsDayUnselectable,
    isDayHighlighted = defaultIsDayHighlighted,
    isDayDisabled = defaultIsDayDisabled,
    minDate = hideYearDropdown
      ? startOfYear(today(getLocalTimeZone()))
      : undefined,
    maxDate = hideYearDropdown
      ? endOfYear(today(getLocalTimeZone()))
      : undefined,
    selectionVariant,
    onHoveredDateChange,
    hoveredDate,
    // startDateOffset,
    // endDateOffset,
  } = props;
  const [visibleMonth, setVisibleMonthState] = useControlled({
    controlled: visibleMonthProp ? startOfMonth(visibleMonthProp) : undefined,
    default: startOfMonth(defaultVisibleMonth),
    name: "Calendar",
    state: "visibleMonth",
  });

  const isOutsideAllowedDates = useCallback(
    (date: DateValue) => {
      return (
        (minDate != null && date.compare(minDate) < 0) ||
        (maxDate != null && date.compare(maxDate) > 0)
      );
    },
    [maxDate, minDate]
  );

  const isOutsideAllowedMonths = (date: DateValue) => {
    return (
      (minDate != null && endOfMonth(date).compare(minDate) < 0) ||
      (maxDate != null && startOfMonth(date).compare(maxDate) > 0)
    );
  };

  const isOutsideAllowedYears = (date: DateValue) => {
    return (
      (minDate != null && endOfYear(date).compare(minDate) < 0) ||
      (maxDate != null && startOfYear(date).compare(maxDate) > 0)
    );
  };

  const isDaySelectable = useCallback(
    (date?: DateValue) =>
      !(
        date &&
        (isDayUnselectable(date) ||
          isDayDisabled(date) ||
          isOutsideAllowedDates(date))
      ),
    [isDayUnselectable, isDayDisabled, isOutsideAllowedDates]
  );

  const selectionManager = useSelectionCalendar({
    defaultSelectedDate: defaultSelectedDate,
    selectedDate,
    onSelectedDateChange,
    startDateOffset:
      props.selectionVariant === "offset"
        ? props.startDateOffset
        : (date) => date,
    endDateOffset:
      props.selectionVariant === "offset"
        ? props.endDateOffset
        : (date) => date,
    isDaySelectable,
    selectionVariant,
    onHoveredDateChange,
    hoveredDate,
  } as useSelectionCalendarProps);

  const [calendarFocused, setCalendarFocused] = useState(false);

  const isInVisibleMonth = (
    date: DateValue | undefined | null
  ): date is DateValue => date != null && isSameMonth(date, visibleMonth);

  const getInitialFocusedDate = (): DateValue => {
    const selectedDate = selectionManager.state.selectedDate;
    // Case range or offset
    if (isRangeOrOffsetSelectionValue(selectedDate)) {
      if (isInVisibleMonth(selectedDate?.startDate)) {
        return selectedDate.startDate;
      }
      if (isInVisibleMonth(selectedDate?.endDate)) {
        return selectedDate.endDate;
      }
      if (
        selectedDate?.startDate &&
        selectedDate?.endDate &&
        visibleMonth.compare(selectedDate.startDate) < 0 &&
        visibleMonth.compare(selectedDate.endDate) > 0
      ) {
        return startOfMonth(visibleMonth);
      }
    }
    // Case multiselect
    if (Array.isArray(selectedDate)) {
      // return first selected day in visible month
      const selectionInMonth = selectedDate
        .filter((day) => isInVisibleMonth(day))
        .sort((a, b) => a.compare(b));
      if (selectionInMonth.length > 0) {
        return selectionInMonth[0];
      }
    }
    // Case single select
    if (
      !isRangeOrOffsetSelectionValue(selectedDate) &&
      !Array.isArray(selectedDate) &&
      isInVisibleMonth(selectedDate)
    ) {
      return selectedDate;
    }
    // default
    if (isInVisibleMonth(today(getLocalTimeZone()))) {
      return today(getLocalTimeZone());
    }
    return startOfMonth(visibleMonth);
  };

  const [focusedDate, setFocusedDateState] = useState<DateValue>(
    getInitialFocusedDate
  );

  const isDayVisible = useCallback(
    (date: DateValue) => {
      const startInsideDays = startOfMonth(visibleMonth);

      if (date.compare(startInsideDays) < 0) return false;

      const endInsideDays = endOfMonth(visibleMonth);

      return !(date.compare(endInsideDays) > 0);
    },
    [visibleMonth]
  );

  const setVisibleMonth = useCallback(
    (event: SyntheticEvent, newVisibleMonth: DateValue) => {
      setVisibleMonthState(newVisibleMonth);
      onVisibleMonthChange?.(event, newVisibleMonth);
    },
    [onVisibleMonthChange, setVisibleMonthState]
  );

  const setFocusedDate = useCallback(
    (event: SyntheticEvent, date: DateValue) => {
      if (isSameDay(date, focusedDate) || isOutsideAllowedDates(date)) return;

      setFocusedDateState(date);

      const shouldTransition =
        !isDayVisible(date) &&
        isDaySelectable(date) &&
        !isOutsideAllowedDates(date);
      if (shouldTransition) {
        setVisibleMonth(event, startOfMonth(date));
      }
    },
    [
      focusedDate,
      isDaySelectable,
      isDayVisible,
      isOutsideAllowedDates,
      setVisibleMonth,
    ]
  );

  useEffect(() => {
    if (!isDayVisible(focusedDate)) {
      setFocusedDateState(startOfMonth(visibleMonth));
    }
  }, [isDayVisible, focusedDate, visibleMonth]);

  return {
    state: {
      visibleMonth,
      focusedDate,
      minDate,
      maxDate,
      selectionVariant,
      hideOutOfRangeDates,
      calendarFocused,
      ...selectionManager.state,
    },
    helpers: {
      setVisibleMonth,
      setFocusedDate,
      setCalendarFocused,
      isDayUnselectable,
      isDayHighlighted,
      isDayDisabled,
      isDayVisible,
      isOutsideAllowedDates,
      isOutsideAllowedMonths,
      isOutsideAllowedYears,
      ...selectionManager.helpers,
    },
  };
}
