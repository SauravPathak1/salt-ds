// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type NG_SharpProps = CountrySymbolProps;

const NG_Sharp = forwardRef<SVGSVGElement, NG_SharpProps>(function NG_Sharp(
  props: NG_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="NG_Sharp"
      aria-label="Nigeria"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-NG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-NG-a)`}>
        <path fill="#005B33" d="M0 50h72V0H0z" />
        <path fill="#F5F7F8" d="M24 50h24V0H24z" />
      </g>
    </CountrySymbol>
  );
});

export default NG_Sharp;
