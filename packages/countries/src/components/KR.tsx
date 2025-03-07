// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type KRProps = CountrySymbolProps;

const KR = forwardRef<SVGSVGElement, KRProps>(function KR(props: KRProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="KR"
      aria-label="Korea (the Republic of)"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-KR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-KR-a)`}>
        <path fill="#F5F7F8" d="M0 0h72v72H0z" />
        <path
          fill="#DD2033"
          fillRule="evenodd"
          d="M49 36.004C49 43.175 43.182 49 35.995 49 28.81 49 23 43.175 23 36.004 23 28.834 28.818 23 36.005 23 43.19 23 49 28.834 49 36.004Z"
          clipRule="evenodd"
        />
        <path
          fill="#004692"
          fillRule="evenodd"
          d="M23.188 33.712c.412 3.275 1.011 6.923 6.104 7.294 1.906.115 5.62-.442 6.891-5.594 1.683-4.94 6.713-6.357 10.14-3.683 1.961 1.257 2.498 3.249 2.623 4.754-.152 4.78-2.944 8.94-6.515 10.8-4.117 2.417-9.81 2.47-14.795-1.195-2.246-2.08-5.388-5.931-4.448-12.376Z"
          clipRule="evenodd"
        />
        <path
          fill="#31373D"
          d="m19.537 9.837-9.9 9.9 2.121 2.12 9.9-9.899-2.121-2.121Zm-9.9 42.427 9.9 9.899 2.12-2.121-9.899-9.9-2.12 2.121Zm38.891-4.95 4.243-4.243 2.12 2.121-4.242 4.243-2.121-2.121Zm7.778-.707-4.243 4.242 2.122 2.122 4.242-4.243-2.12-2.121Zm-.707 7.778 4.243-4.243 2.12 2.121-4.242 4.243-2.121-2.121Zm-8.485-5.657-4.243 4.243 2.121 2.12 4.243-4.242-2.121-2.121Zm-.707 7.778 4.242-4.242 2.121 2.12-4.242 4.243-2.121-2.12Zm7.778-.707-4.243 4.243 2.121 2.121 4.243-4.243-2.121-2.121Zm-36.77-2.829-4.242-4.242 2.12-2.121 4.244 4.242-2.122 2.122Zm3.535-.706-2.12 2.12 4.242 4.243 2.121-2.12-4.242-4.243Zm-7.777-28.992 9.9-9.9 2.12 2.122-9.899 9.9-2.121-2.122Zm33.234-7.778 9.9 9.9 2.12-2.122-9.9-9.9-2.12 2.122ZM16.708 26.808l9.9-9.9 2.121 2.121-9.9 9.9-2.12-2.121Zm0 18.384 9.9 9.9 2.12-2.121-9.899-9.9-2.12 2.121Zm37.477-28.991-4.243-4.243 2.121-2.121 4.243 4.243-2.121 2.121ZM42.871 19.03l4.243 4.242 2.121-2.121-4.243-4.243-2.12 2.121Zm16.971 2.828-4.243-4.243 2.121-2.121 4.243 4.242-2.121 2.122Zm-11.314 2.828 4.243 4.243 2.12-2.121-4.242-4.243-2.121 2.121Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default KR;
