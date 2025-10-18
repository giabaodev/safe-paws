import { SvgIcon, SvgIconProps } from '../ui';

export const RemoveIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_52_8543"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_52_8543)">
        <path
          d="M6.5 12.5C6.35833 12.5 6.23958 12.452 6.14375 12.356C6.04792 12.26 6 12.1411 6 11.9993C6 11.8574 6.04792 11.7388 6.14375 11.6433C6.23958 11.5478 6.35833 11.5 6.5 11.5H17.5C17.6417 11.5 17.7604 11.548 17.8562 11.644C17.9521 11.74 18 11.8589 18 12.0008C18 12.1426 17.9521 12.2612 17.8562 12.3567C17.7604 12.4522 17.6417 12.5 17.5 12.5H6.5Z"
          fill="#161D1A"
        />
      </g>
    </svg>
  </SvgIcon>
);
