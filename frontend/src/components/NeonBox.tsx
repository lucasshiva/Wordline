import type { ReactNode } from 'react'

interface NeonBoxProps {
  children: ReactNode
  color?: 'blue' | 'green' | 'pink' | 'yellow' | 'cyan'
  className?: string
  title?: string
}

export function NeonBox({ children, color = 'blue', className = '', title }: NeonBoxProps) {
  const colorClass = `neon-border-${color}`
  
  return (
    <div className={`glass-panel ${colorClass} p-4 relative ${className}`}>
      {title && (
        <div className={`absolute -top-3 left-6 px-3 bg-[#0a0b10] text-sm font-bold uppercase tracking-widest text-neon-${color}`}>
          {title}
        </div>
      )}
      {children}
    </div>
  )
}
