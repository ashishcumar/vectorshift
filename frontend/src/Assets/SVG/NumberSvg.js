import React from "react";

const NumberSvg = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 5H17V7H7V5ZM7 11H17V13H7V11ZM7 17H17V19H7V17Z" fill="currentColor"/>
    </svg>
  );
};

export default NumberSvg;

