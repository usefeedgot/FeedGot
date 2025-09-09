import React from 'react'

interface LinearIconProps {
  className?: string
  size?: number
}

export const LinearIcon: React.FC<LinearIconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Linear--Streamline-Simple-Icons" className={className}
      width={size}
      height={size}>
  <desc>
    Linear Streamline Icon: https://streamlinehq.com
  </desc>
  <title>Linear</title>
  <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64 -1.62 6.903 -4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-0.524 0.33 -1.075 0.62 -1.65 0.866L0.951 7.277c0.247 -0.575 0.537 -1.126 0.866 -1.65ZM0.322 9.163l14.515 14.515c-0.71 0.172 -1.443 0.282 -2.195 0.322L0 11.358a12 12 0 0 1 0.322 -2.195Zm-0.17 4.862 9.823 9.824a12.02 12.02 0 0 1 -9.824 -9.824Z" fill="#000000" strokeWidth="1"></path>
</svg>
  )
}

export default LinearIcon