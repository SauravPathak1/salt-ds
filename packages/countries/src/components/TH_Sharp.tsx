// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TH_SharpProps = CountrySymbolProps;

const TH_Sharp = forwardRef<SVGSVGElement, TH_SharpProps>(function TH_Sharp(
  props: TH_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="TH_Sharp"
      aria-label="Thailand"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-TH-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-TH-a)`}>
        <path fill="#A00009" d="M0 50V0h72v50z" />
        <path fill="#F5F7F8" d="M0 43V7h72v36z" />
        <path fill="#004692" d="M0 33V17h72v16z" />
      </g>
    </CountrySymbol>
  );
});

export default TH_Sharp;
