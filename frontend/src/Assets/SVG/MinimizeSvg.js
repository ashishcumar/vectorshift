import * as React from "react";
const MinimizeSvg = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-minimize2 size-6 text-slate-700"
  >
    <path d="M4 14h6v6m10-10h-6V4m0 6 7-7M3 21l7-7" />
  </svg>
);
export default MinimizeSvg;
