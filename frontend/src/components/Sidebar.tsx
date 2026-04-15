import { NeonButton } from './NeonButton'

export function Sidebar() {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <div className="text-3xl font-black italic tracking-tighter text-white/90">
        SIDEBAR
      </div>

      <div className="flex flex-col gap-4">
        <div className="uppercase text-xs font-bold tracking-[0.2em] text-white-50">
          ROOM SETTINGS
        </div>
        
        <select className="bg-[#1a1c2e] border-2 border-neon-blue/50 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-blue transition-all">
          <option>Game Language</option>
          <option>English</option>
          <option>Portuguese</option>
        </select>

        <div className="flex items-center justify-between glass-panel px-4 py-3 rounded-xl border-white-10">
          <span className="text-sm font-medium">- Max tries</span>
          <input type="number" defaultValue={6} className="bg-transparent text-right w-12 outline-none font-bold" />
        </div>

        <div className="flex items-center justify-between glass-panel px-4 py-3 rounded-xl border-white-10">
          <span className="text-sm font-medium">- Word length?</span>
          <input type="number" defaultValue={5} className="bg-transparent text-right w-12 outline-none font-bold" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="uppercase text-xs font-bold tracking-[0.2em] text-white-50">
          PLAYERS (3/4)
        </div>
        
        <div className="flex flex-col gap-2">
          {['PLAYER 1', 'PLAYER 2', 'PLAYER 3'].map((player, i) => (
            <div key={i} className="px-4 py-3 rounded-xl border-2 border-neon-cyan/30 text-neon-cyan font-bold tracking-wider bg-neon-cyan-5">
              {player}
            </div>
          ))}
        </div>

        <NeonButton color="cyan" className="flex items-center justify-center gap-2 mt-2">
          <span className="text-xl">+</span> ADD
        </NeonButton>
      </div>
    </div>
  )
}
