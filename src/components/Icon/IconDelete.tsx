import React from 'react';

const IconDelete = ({ size, color }: { size: number; color: string }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 4H8l-7 8l7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 5l-6 6m0-6l6 6"></path>
    </svg>
  );
};

export default IconDelete;
