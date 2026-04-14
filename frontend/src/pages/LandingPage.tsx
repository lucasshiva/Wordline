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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="rainbow-title mb-12">{APP_NAME}</h1>
      
      <NeonBox color="blue" className="w-full max-w-md p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold tracking-widest text-white-50 uppercase">Nickname</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter your name..."
              className="bg-white-5 border-2 border-neon-blue/30 rounded-xl px-6 py-4 text-white outline-none focus:border-neon-blue transition-all text-xl"
            />
          </div>
          
          <NeonButton
            color="blue"
            onClick={handleCreateRoom}
            disabled={!nickname || loading}
            className="w-full py-4 text-xl"
          >
            {loading ? 'Connecting...' : 'Create Game'}
          </NeonButton>
          
          <div className="text-center text-xs text-white/30 uppercase tracking-[0.3em] font-medium">
            Join the word world
          </div>
        </div>
      </NeonBox>
      
      <div className="mt-12 flex gap-4">
        <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse delay-75"></div>
        <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse delay-150"></div>
      </div>
    </div>
  )
}
