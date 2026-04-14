import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { PlayerBoard } from '../components/PlayerBoard'
import { Keyboard } from '../components/Keyboard'
import { NeonButton } from '../components/NeonButton'

export default function RoomPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-vh p-8 flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center px-4">
        <NeonButton color="blue" onClick={() => navigate('/')}>HELP</NeonButton>
        <h1 className="rainbow-title text-5xl">WordLine</h1>
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
            <PlayerBoard 
              playerNumber={1} 
              color="var(--color-neon-green)" 
            />

            {/* Player 2's Board */}
            <PlayerBoard 
              playerNumber={2} 
              color="var(--color-neon-yellow)" 
            />
          </div>

          {/* Virtual Keyboard */}
          <div className="w-full">
            <Keyboard />
          </div>
        </section>
      </main>

    </div>
  )
}
