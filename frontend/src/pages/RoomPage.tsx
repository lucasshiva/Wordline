import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Settings, Users, Trash2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlayerBoard } from '../components/PlayerBoard'
import { Keyboard } from '../components/Keyboard'

export default function RoomPage() {
  const navigate = useNavigate()
  const [players, setPlayers] = useState([{ id: 1, color: '#22c55e' }])

  const addPlayer = () => {
    if (players.length < 4) {
      const colors = ['#22c55e', '#eab308', '#06b6d4', '#ec4899']
      const nextId = Math.max(...players.map(p => p.id), 0) + 1
      setPlayers([...players, { id: nextId, color: colors[players.length] }])
    }
  }

  const removePlayer = (id: number) => {
    if (players.length > 1) {
      setPlayers(players.filter(p => p.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col font-sans selection:bg-cyan-500/30">
      
      {/* HEADER */}
      <header className="p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-3xl font-black italic tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          WordLine
        </h1>
        <div className="flex gap-4">
           <button 
             onClick={() => navigate('/')}
             className="glass-morphism px-4 py-2 rounded-full text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest border border-white/10"
           >
             Help
           </button>
           <button className="glass-morphism px-4 py-2 rounded-full text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest border border-white/10 text-pink-500">
             About
           </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR - Room Settings & Players */}
        <aside className="w-80 border-r border-white/5 p-8 flex flex-col gap-10 overflow-y-auto bg-black/20">
          <section>
            <div className="flex items-center gap-2 mb-6 text-cyan-400">
              <Settings size={18} />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Room Settings</h2>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Game Language</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500/50">
                  <option>English (US)</option>
                  <option>Português (BR)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Max Tries</label>
                  <input type="number" defaultValue={6} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm outline-none focus:border-cyan-500/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Word Length</label>
                  <input type="number" defaultValue={5} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm outline-none focus:border-cyan-500/30" />
                </div>
              </div>
            </div>
          </section>

          <section className="flex-1">
            <div className="flex items-center gap-2 mb-6 text-pink-500">
              <Users size={18} />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Players ({players.length}/4)</h2>
            </div>
            
            <div className="space-y-3">
              {players.map((p) => (
                <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color, boxShadow: `0 0 10px ${p.color}` }} />
                  <span className="text-sm font-medium flex-1">Player {p.id}</span>
                  {players.length > 1 && (
                    <button 
                      onClick={() => removePlayer(p.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-all"
                      title="Remove Player"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
              
              {players.length < 4 && (
                <button 
                  onClick={addPlayer}
                  className="w-full p-3 rounded-xl border border-dashed border-white/20 flex items-center justify-center gap-2 text-white/40 hover:text-white hover:border-white/40 transition-all text-xs font-bold uppercase"
                >
                  <Plus size={14} /> Add Player
                </button>
              )}
            </div>
          </section>
        </aside>

        {/* GAME AREA - Dynamic Dashboard */}
        <main className="flex-1 overflow-y-auto p-12 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
          <div className="flex flex-wrap gap-10 justify-center items-start max-w-7xl mx-auto">
            <AnimatePresence>
              {players.map((p) => (
                <PlayerBoard key={p.id} playerNumber={p.id} color={p.color} />
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* KEYBOARD - Fixed at Bottom */}
      <footer className="p-8 flex justify-center bg-gradient-to-t from-black to-transparent">
        <div className="w-full max-w-4xl glass-morphism p-4 rounded-[2rem] border-t border-white/10">
           <Keyboard />
        </div>
      </footer>
    </div>
  )
}

