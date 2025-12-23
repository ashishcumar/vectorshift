import React from "react";

const ConditionSvg = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
      <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor"/>
    </svg>
  );
};

export default ConditionSvg;

