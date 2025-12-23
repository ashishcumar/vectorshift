import * as React from "react";
const ReloadSvg = ({size}) => (
  <svg
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium size-6 transition-transform duration-300 p-[0.5] ease-in-out text-slate-700 css-vubbuv"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="LoopIcon"
   width={size}
    height={size}
  >
    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z" />
  </svg>
);
export default ReloadSvg;
