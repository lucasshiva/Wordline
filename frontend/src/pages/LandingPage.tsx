import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NeonButton } from '../components/NeonButton'
import { NeonBox } from '../components/NeonBox'
import { APP_NAME } from '../constants/config'

export default function LandingPage() {
  const [nickname, setNickname] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleCreateRoom = async () => {
    if (!nickname) return
    setLoading(true)
    try {
      // Use full URL to avoid proxy issues if not configured
      const response = await fetch('http://localhost:8000/api/rooms', {
        method: 'POST',
      })
      const data = await response.json()
      // Redirect to the room
      navigate(`/room/${data.id}`)
    } catch (error) {
      console.error('Failed to create room:', error)
      alert('Failed to connect to backend. Make sure the server is running on localhost:8000')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-bg-dark">
      <h1 className="rainbow-title mb-12 drop-shadow-2xl">{APP_NAME}</h1>
      
      <NeonBox color="blue" className="w-full max-w-md p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Nickname</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="ENTER YOUR NAME..."
              className="bg-white/5 border border-neon-blue/20 rounded-xl px-6 py-4 text-white outline-none focus:border-neon-blue/60 transition-all text-xl font-black placeholder:text-white/10"
            />
          </div>
          
          <NeonButton
            color="blue"
            onClick={handleCreateRoom}
            disabled={!nickname || loading}
            className="w-full py-6 text-xl"
          >
            {loading ? 'CONNECTING...' : 'CREATE GAME'}
          </NeonButton>
          
          <div className="text-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
            Join the word world
          </div>
        </div>
      </NeonBox>
      
      <div className="mt-12 flex gap-4">
        {['neon-blue', 'neon-green', 'neon-pink'].map((color, i) => (
          <div 
            key={color}
            className={`w-1.5 h-1.5 rounded-full animate-pulse-slow`}
            style={{ 
              backgroundColor: `var(--color-${color})`,
              boxShadow: `0 0 10px var(--color-${color})`,
              animationDelay: `${i * 150}ms`
            }}
          />
        ))}
      </div>
    </div>
  )
}
