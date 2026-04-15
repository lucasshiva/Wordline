import type { ReactNode } from 'react'

interface NeonBoxProps {
  children: ReactNode
  color?: 'blue' | 'green' | 'pink' | 'yellow' | 'cyan'
  className?: string
  title?: string
}

export function NeonBox({ children, color = 'blue', className = '', title }: NeonBoxProps) {
  const colorVar = `var(--color-neon-${color})`
  
  return (
    <div 
      className={`glass-box p-4 relative border !border-opacity-30 ${className}`}
      style={{ borderColor: colorVar, boxShadow: `0 0 15px color-mix(in srgb, ${colorVar} 20%, transparent)` }}
    >
      {title && (
        <div 
          className="absolute -top-3 left-6 px-3 bg-bg-dark text-[10px] font-black uppercase tracking-widest"
          style={{ color: colorVar }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  )
}
