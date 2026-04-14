import type { ButtonHTMLAttributes } from 'react'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'green' | 'pink' | 'yellow' | 'cyan'
  variant?: 'solid' | 'outline'
}

export function NeonButton({ children, color = 'blue', variant = 'outline', className = '', ...props }: NeonButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-full font-bold uppercase tracking-wider transition-all duration-300 active:scale-95'
  
  const colorStyles = {
    blue: 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,210,255,0.6)]',
    green: 'border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]',
    pink: 'border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]',
    yellow: 'border-2 border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-black hover:shadow-[0_0_20px_rgba(254,254,51,0.6)]',
    cyan: 'border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]',
  }

  return (
    <button className={`${baseStyles} ${colorStyles[color]} ${className}`} {...props}>
      {children}
    </button>
  )
}
