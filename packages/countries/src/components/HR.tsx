// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type HRProps = CountrySymbolProps;

const HR = forwardRef<SVGSVGElement, HRProps>(function HR(props: HRProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="HR"
      aria-label="Croatia"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-HR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-HR-a)`}>
        <path fill="#004692" d="M0 72V48h72v24z" />
        <path fill="#F5F7F8" d="M0 48V24h72v24z" />
        <path fill="#DD2033" d="M0 24V0h72v24z" />
        <path
          fill="#F5F7F8"
          d="M22 24h28v16c0 7.732-6.268 14-14 14s-14-6.268-14-14V24Z"
        />
        <mask
          id={`${uid}-HR-b`}
          x="22"
          y="24"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#F5F7F8"
            d="M22 24h28v16c0 7.732-6.268 14-14 14s-14-6.268-14-14V24Z"
          />
        </mask>
        <g mask={`url(#${uid}-HR-b)`}>
          <path
            fill="#DD2033"
            fillRule="evenodd"
            d="M29 24h-7v7h7v7h-7v7h7v7h-7v7h7v-7h7v7h7v-7h7v-7h-7v-7h7v-7h-7v-7h-7v7h-7v-7Zm7 14h7v-7h-7v7Zm0 7h-7v-7h7v7Zm0 0h7v7h-7v-7Z"
            clipRule="evenodd"
          />
        </g>
        <path fill="#0091DA" d="m22 17 4.5-3 4.5 3v7h-9v-7Z" />
        <path fill="#004692" d="m31 17 5-3 5 3v7H31v-7Z" />
        <path fill="#0091DA" d="m41 17 4.5-3 4.5 3v7h-9v-7Z" />
      </g>
    </CountrySymbol>
  );
});

export default HR;
