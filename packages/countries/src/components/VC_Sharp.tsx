// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type VC_SharpProps = CountrySymbolProps;

const VC_Sharp = forwardRef<SVGSVGElement, VC_SharpProps>(function VC_Sharp(
  props: VC_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="VC_Sharp"
      aria-label="Saint Vincent and the Grenadines"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-VC-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-VC-a)`}>
        <path fill="#009B77" d="M72 50H18V0h54z" />
        <path
          fill="#FBD381"
          fillRule="evenodd"
          d="M18 50h36V0H18v50Zm2-32.296 6.617 11.703 6.515-11.704L26.618 6 20 17.704ZM45.383 6l-6.515 11.703 6.514 11.704L52 17.703 45.383 6ZM42.49 34.52 36 22.857 29.508 34.52 35.998 46l6.492-11.48Z"
          clipRule="evenodd"
        />
        <path fill="#004692" d="M18 50H0V0h18z" />
      </g>
    </CountrySymbol>
  );
});

export default VC_Sharp;
