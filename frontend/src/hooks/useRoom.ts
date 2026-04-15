import { useState, useEffect } from 'react'

export interface Player {
  id: number
  color: string
}

export interface RoomSettings {
  language: string
  maxTries: number
  wordLength: number
}

const DEFAULT_PLAYERS: Player[] = [{ id: 1, color: '--color-neon-green' }]
const DEFAULT_SETTINGS: RoomSettings = {
  language: 'English (US)',
  maxTries: 6,
  wordLength: 5,
}

const STORAGE_KEYS = {
  PLAYERS: 'wordline_players',
  SETTINGS: 'wordline_settings',
}

export function useRoom() {
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PLAYERS)
    return saved ? JSON.parse(saved) : DEFAULT_PLAYERS
  })

  const [settings, setSettings] = useState<RoomSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS)
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS
  })

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(players))
  }, [players])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings))
  }, [settings])

  const addPlayer = () => {
    if (players.length < 4) {
      const colors = ['--color-neon-green', '--color-neon-yellow', '--color-neon-cyan', '--color-neon-pink']
      const nextId = Math.max(...players.map((p) => p.id), 0) + 1
      setPlayers([...players, { id: nextId, color: colors[players.length] }])
    }
  }

  const removePlayer = (id: number) => {
    if (players.length > 1) {
      setPlayers(players.filter((p) => p.id !== id))
    }
  }

  const updateSettings = (updates: Partial<RoomSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }))
  }

  return {
    players,
    settings,
    addPlayer,
    removePlayer,
    updateSettings,
  }
}
