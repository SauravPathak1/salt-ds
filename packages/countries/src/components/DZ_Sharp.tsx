// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type DZ_SharpProps = CountrySymbolProps;

const DZ_Sharp = forwardRef<SVGSVGElement, DZ_SharpProps>(function DZ_Sharp(
  props: DZ_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="DZ_Sharp"
      aria-label="Algeria"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-DZ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-DZ-a)`}>
        <path fill="#005B33" d="M0 0h72v50H0z" />
        <path fill="#F5F7F8" d="M36 0h36v50H36z" />
        <path
          fill="#DD2033"
          d="M41 9c4.73 0 8.98 2.053 11.91 5.315C49.365 8.717 43.117 5 36 5c-11.046 0-20 8.954-20 20s8.954 20 20 20c7.117 0 13.365-3.717 16.91-9.315A15.96 15.96 0 0 1 41 41c-8.837 0-16-7.163-16-16S32.163 9 41 9Z"
        />
        <path
          fill="#DD2033"
          d="m39.704 24.34-2.926-7.562 7.563 2.926 6.157-4.762-.088 7.966 6.732 4.62-8.048 1.566-1.567 8.048-4.619-6.732-7.966.088 4.762-6.157Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default DZ_Sharp;
