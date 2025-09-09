import React from 'react'

interface TraeAIIconProps {
  className?: string
  size?: number
}

export const TraeAIIcon: React.FC<TraeAIIconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg className={className}
      width={size}
      height={size}  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><title>TRAE</title><path d="M21.596 2H2.404A.404.404 0 002 2.404v19.192c0 .223.18.404.404.404h19.192c.223 0 .404-.18.404-.404V2.404A.404.404 0 0021.596 2z" fill="#FF4A36"></path><path d="M18.366 16.15H11.9v2.214h6.465v-2.215z" fill="#fff"></path></svg>
  )
}

export default TraeAIIcon