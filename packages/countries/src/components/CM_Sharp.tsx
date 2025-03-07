// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CM_SharpProps = CountrySymbolProps;

const CM_Sharp = forwardRef<SVGSVGElement, CM_SharpProps>(function CM_Sharp(
  props: CM_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="CM_Sharp"
      aria-label="Cameroon"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-CM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-CM-a)`}>
        <path fill="#FBD381" d="M0 0h72v50H0z" />
        <path fill="#005B33" d="M0 0h23v50H0z" />
        <path
          fill="#DD2033"
          fillRule="evenodd"
          d="M49-11H23v72h26v-72ZM33.318 22.068 36 16l2.683 6.068 6.317.807-4.66 4.558L41.563 34 36 30.25 30.438 34l1.222-6.567L27 22.875l6.318-.807Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default CM_Sharp;
