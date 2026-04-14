import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { GameBoard } from '../components/GameBoard'
import { Keyboard } from '../components/Keyboard'
import { NeonButton } from '../components/NeonButton'

export default function RoomPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-vh p-8 flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center px-4">
        <NeonButton color="blue" onClick={() => navigate('/')}>HELP</NeonButton>
        <h1 className="rainbow-title text-5xl">WORDLINE</h1>
        <NeonButton color="pink">ABOUT</NeonButton>
      </header>

      {/* Main Content Area */}
      <main className="flex gap-8 items-start">
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>

        {/* Game Area */}
        <section className="flex flex-col gap-8 flex-1">
          <div className="flex gap-8 justify-center">
            {/* Player 1's Board */}
            <GameBoard 
              playerName="PLAYER 1" 
              color="green" 
              grid={[
                ['D', 'E', 'R', 'R', 'E', 'Y'],
                ['T', 'A', 'R', 'K', 'E', 'T'],
                ['L', 'A', 'L', 'Y', 'E', 'R'],
                ['', '', '', '', '', ''],
                ['', '', '', '', '', ''],
                ['', '', '', '', '', '']
              ]}
              states={[
                ['correct', 'correct', 'correct', 'correct', 'present', 'absent'],
                ['correct', 'present', 'correct', 'present', 'correct', 'absent'],
                ['correct', 'correct', 'correct', 'present', 'correct', 'absent'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty']
              ]}
            />

            {/* Player 2's Board */}
            <GameBoard 
              playerName="PLAYER 2" 
              color="yellow" 
            />
          </div>

          {/* Virtual Keyboard */}
          <div className="w-full">
            <Keyboard />
          </div>
        </section>
      </main>

      {/* Footer Sparkle */}
      <div className="fixed bottom-8 right-8 text-white/20 select-none pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
