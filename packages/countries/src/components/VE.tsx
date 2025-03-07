// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type VEProps = CountrySymbolProps;

const VE = forwardRef<SVGSVGElement, VEProps>(function VE(props: VEProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="VE"
      aria-label="Venezuela (Bolivarian Republic of)"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-VE-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-VE-a)`}>
        <path fill="#DD2033" d="M0 72V52h72v20z" />
        <path fill="#004692" d="M0 52V20h72v32z" />
        <path fill="#F1B434" d="M0 20V0h72v20z" />
        <path
          fill="#F5F7F8"
          d="m34.867 22-1.49 3.371-3.51.449 2.588 2.532L31.777 32l3.09-2.083L37.957 32l-.679-3.648 2.589-2.532-3.51-.449L34.867 22Zm-17.335 5.904.713 3.616-2.618 2.381 3.573.59 1.536 3.377 1.337-3.479 3.726-.066-2.649-2.599.668-3.559-3.132 1.646-3.154-1.907ZM13.4 38l-1.49 3.371-3.51.449 2.588 2.532L10.31 48l3.09-2.083L16.49 48l-.679-3.648L18.4 41.82l-3.51-.449L13.4 38Zm44 0-1.49 3.371-3.51.449 2.589 2.532-.68 3.648 3.09-2.083L60.49 48l-.679-3.648L62.4 41.82l-3.51-.449L57.4 38Zm-5.132-10.096-3.155 1.907-3.132-1.646.668 3.56-2.648 2.598 3.726.066 1.336 3.48L50.6 34.49l3.573-.589-2.618-2.38.713-3.617Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default VE;
