interface GameBoardProps {
  playerName?: string
  color?: 'green' | 'yellow'
  grid?: string[][] // 6 rows, 5 cols
  states?: ('correct' | 'present' | 'absent' | 'empty')[][]
}

export function GameBoard({ playerName = 'PLAYER 1', color = 'green', grid, states }: GameBoardProps) {
  // Fallback to empty grid
  const displayGrid = grid || Array(6).fill(null).map(() => Array(5).fill(''))
  const displayStates = states || Array(6).fill(null).map(() => Array(5).fill('empty'))

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'correct': return 'bg-neon-green-30 border-neon-green text-neon-green shadow-[0_0_10px_rgba(57,255,20,0.5)]'
      case 'present': return 'bg-neon-yellow-30 border-neon-yellow text-neon-yellow shadow-[0_0_10px_rgba(254,254,51,0.5)]'
      case 'absent': return 'bg-gray-700-50 border-gray-600 text-gray-400'
      default: return 'bg-transparent border-neon-' + color + '-30'
    }
  }

  return (
    <div className={`p-6 rounded-2xl border-2 border-neon-${color}/50 glass-panel shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
      <div className={`text-center mb-4 font-bold uppercase tracking-widest text-neon-${color}`}>
        {playerName}
      </div>
      <div className="grid grid-rows-6 gap-3">
        {displayGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-3">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={`w-12 h-12 flex items-center justify-center text-xl font-bold rounded-lg border-2 transition-all duration-500 ${getStatusClass(displayStates[rowIndex][colIndex])}`}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
