const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
]

export function Keyboard() {
  const getKeyColor = (key: string) => {
    if (['Q', 'W', 'E', 'R'].includes(key)) return 'text-neon-blue border-neon-blue/30'
    if (['T', 'Y', 'U', 'I'].includes(key)) return 'text-neon-cyan border-neon-cyan/30'
    if (['O', 'P', 'ENTER'].includes(key)) return 'text-neon-pink border-neon-pink/30'
    if (['A', 'S', 'D', 'F'].includes(key)) return 'text-neon-green border-neon-green/30'
    if (['G', 'H', 'J', 'K'].includes(key)) return 'text-neon-yellow border-neon-yellow/30'
    return 'text-neon-pink border-neon-pink/30'
  }

  return (
    <nav className="glass-box p-6 rounded-3xl border border-white/10 shadow-2xl transform-gpu">
      <div className="flex flex-col gap-3 items-center">
        {ROWS.map((row, i) => (
          <div key={i} className="flex gap-2">
            {row.map((key) => (
              <button
                key={key}
                className={`
                  px-3 py-4 rounded-xl border font-black transition-all duration-200
                  hover:scale-110 active:scale-95 hover:bg-white/5
                  ${key.length > 1 ? 'min-w-[80px]' : 'min-w-[45px]'}
                  ${getKeyColor(key)}
                  uppercase tracking-tighter text-xs
                `}
              >
                {key === 'BACKSPACE' ? '⌫' : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </nav>
  )
}
