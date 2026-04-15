import { useNavigate } from 'react-router-dom'
import { Plus, Settings, Users, Trash2 } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { PlayerBoard } from '../components/PlayerBoard'
import { Keyboard } from '../components/Keyboard'
import { useRoom } from '../hooks/useRoom'

export default function RoomPage() {
  const navigate = useNavigate()
  const { players, settings, addPlayer, removePlayer, updateSettings } = useRoom()

  return (
    <div className="flex h-screen bg-bg-dark text-white overflow-hidden font-sans selection:bg-neon-cyan/30">
      
      {/* NAVIGATION / SIDEBAR */}
      <aside className="w-80 glass-box border-r border-white/5 p-8 flex flex-col shrink-0 gap-10 overflow-y-auto z-20">
        
        {/* LOGO & QUICK NAV */}
        <header className="flex flex-col gap-4">
          <h1 
            onClick={() => navigate('/')}
            className="text-4xl font-black italic tracking-tighter bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
          >
            WordLine
          </h1>
          <nav className="flex gap-2">
            {['Help', 'About'].map(item => (
              <button 
                key={item}
                className="glass-box px-3 py-1.5 rounded-full text-[10px] font-bold hover:bg-white/10 transition-all uppercase tracking-widest border border-white/10"
              >
                {item}
              </button>
            ))}
          </nav>
        </header>

        {/* SETTINGS SECTION */}
        <section aria-labelledby="settings-title">
          <div className="flex items-center gap-2 mb-6 text-neon-cyan">
            <Settings size={16} />
            <h2 id="settings-title" className="text-[10px] font-black uppercase tracking-[0.2em]">Room Settings</h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Game Language</label>
              <select 
                value={settings.language}
                onChange={(e) => updateSettings({ language: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-neon-cyan/50"
              >
                <option>English (US)</option>
                <option>Portuguese (BR)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Max Tries', key: 'maxTries', val: settings.maxTries },
                { label: 'Word Length', key: 'wordLength', val: settings.wordLength }
              ].map(field => (
                <div key={field.key} className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">{field.label}</label>
                  <input 
                    type="number" 
                    value={field.val}
                    onChange={(e) => updateSettings({ [field.key]: parseInt(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm outline-none focus:border-neon-cyan/30" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLAYERS SECTION */}
        <section className="flex-1" aria-labelledby="players-title">
          <div className="flex items-center gap-2 mb-6 text-neon-pink">
            <Users size={16} />
            <h2 id="players-title" className="text-[10px] font-black uppercase tracking-[0.2em]">Players ({players.length}/4)</h2>
          </div>
          
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {players.map((p) => (
                <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group transition-colors hover:bg-white/10">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ 
                      backgroundColor: `var(${p.color})`, 
                      boxShadow: `0 0 10px var(${p.color})` 
                    }} 
                  />
                  <span className="text-sm font-medium flex-1">Player {p.id}</span>
                  {players.length > 1 && (
                    <button 
                      onClick={() => removePlayer(p.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-all"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </AnimatePresence>
            
            {players.length < 4 && (
              <button 
                onClick={addPlayer}
                className="w-full p-3 rounded-xl border border-dashed border-white/20 flex items-center justify-center gap-2 text-white/40 hover:text-white hover:border-white/40 transition-all text-[10px] font-black uppercase tracking-widest"
              >
                <Plus size={14} /> Add Player
              </button>
            )}
          </div>
        </section>
      </aside>

      {/* GAME ARENA */}
      <main className="flex-1 flex flex-col h-full bg-[radial-gradient(circle_at_top_right,rgba(0,210,255,0.05)_0%,transparent_50%)] overflow-hidden">
        
        {/* GAME AREA - Independent scroll flow */}
        <section className="flex-1 overflow-y-auto p-10 flex flex-col items-center justify-center custom-scrollbar">
          <div className="flex flex-wrap gap-12 justify-center items-center w-full max-w-7xl min-h-fit">
            <AnimatePresence mode="popLayout">
              {players.map((p) => (
                <PlayerBoard key={p.id} playerNumber={p.id} color={`var(${p.color})`} />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CONTROLS AREA - Fixed at base, no overlap */}
        <footer className="p-10 flex justify-center bg-black/20 backdrop-blur-xl border-t border-white/5 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
           <div className="w-full max-w-4xl">
              <Keyboard />
           </div>
        </footer>

      </main>
    </div>
  )
}

