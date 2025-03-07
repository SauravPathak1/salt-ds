// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TJ_SharpProps = CountrySymbolProps;

const TJ_Sharp = forwardRef<SVGSVGElement, TJ_SharpProps>(function TJ_Sharp(
  props: TJ_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="TJ_Sharp"
      aria-label="Tajikistan"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-TJ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-TJ-a)`}>
        <path fill="#008259" d="M0 50V34h72v16z" />
        <path fill="#F5F7F8" d="M0 34V16h72v18z" />
        <path fill="#DD2033" d="M0 16V0h72v16z" />
        <path
          fill="#F1B434"
          d="M33.977 13.371 35.467 10l1.49 3.371 3.51.449-2.589 2.532.679 3.648-3.09-2.083L32.377 20l.678-3.648-2.588-2.532 3.51-.449ZM35.5 26l5.143 5.143L43.5 29l4 3-1.17 6H24.67l-1.17-6 4-3 2.857 2.143L35.5 26ZM18.132 15.904l.713 3.616-2.618 2.381 3.573.59 1.536 3.377 1.337-3.479 3.726-.066-2.649-2.599.669-3.559-3.133 1.646-3.154-1.907ZM12.51 29.371 14 26l1.49 3.371 3.51.449-2.589 2.532.68 3.648L14 33.917 10.91 36l.679-3.648L9 29.82l3.51-.449ZM58 26l-1.49 3.371-3.51.449 2.589 2.532-.68 3.648L58 33.917 61.09 36l-.679-3.648L63 29.82l-3.51-.449L58 26Zm-8.286-8.19 3.154-1.906-.713 3.616 2.618 2.381-3.573.59-1.537 3.377-1.336-3.479-3.726-.066 2.648-2.599-.668-3.559 3.133 1.646Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default TJ_Sharp;
