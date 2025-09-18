import React from 'react'

interface InReviewingIconProps {
  className?: string
  size?: number
}

export const InReviewingIcon: React.FC<InReviewingIconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" className={className}>
      <path d="M0.9375 7.5a6.5625 6.5625 0 1 0 13.125 0 6.5625 6.5625 0 1 0 -13.125 0" />
      <path d="m8.100000000000001 2.725 1.7874999999999999 1.7937500000000002 -1.7874999999999999 1.7874999999999999" />
      <path d="m6.8999999999999995 8.69375 -1.7874999999999999 1.7874999999999999 1.7874999999999999 1.7937500000000002" />
      <path d="M11.08125 6.90625A3.5812500000000003 3.5812500000000003 0 0 1 7.5 10.48125H5.1125" />
      <path d="M3.9187499999999997 8.125A3.5812500000000003 3.5812500000000003 0 0 1 7.5 4.518750000000001h2.3874999999999997" />
    </svg>
  )
}

export default InReviewingIcon