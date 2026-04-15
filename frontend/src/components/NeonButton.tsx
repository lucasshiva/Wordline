import type { ButtonHTMLAttributes } from 'react'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'green' | 'pink' | 'yellow' | 'cyan'
}

export function NeonButton({ children, color = 'blue', className = '', ...props }: NeonButtonProps) {
  const colorVar = `var(--color-neon-${color})`
  
  return (
    <button 
      className={`
        px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px]
        transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none
        border border-opacity-50 hover:border-opacity-100 hover:bg-white/5
        ${className}
      `}
      style={{ 
        borderColor: colorVar,
        color: colorVar,
        boxShadow: `0 0 15px color-mix(in srgb, ${colorVar} 15%, transparent)`
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  )
}
