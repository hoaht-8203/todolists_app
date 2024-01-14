import React from 'react';

const IconEdit = ({ size, color }: { size: number; color: string }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke={color} strokeLinejoin="round" strokeWidth="4">
        <path strokeLinecap="round" d="M7 42h36"></path>
        <path d="M11 26.72V34h7.317L39 13.308L31.695 6z"></path>
      </g>
    </svg>
  );
};

export default IconEdit;
