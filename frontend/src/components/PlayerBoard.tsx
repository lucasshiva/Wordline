import { motion } from "framer-motion";

interface PlayerBoardProps {
  playerNumber: number;
  color: string; // Ex: 'var(--color-neon-green)'
}

export const PlayerBoard = ({ playerNumber, color }: PlayerBoardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-morphism rounded-[2rem] p-6 min-w-[300px]"
      style={{ 
        boxShadow: `0 0 20px color-mix(in srgb, ${color}, transparent 80%)`, 
        borderColor: color,
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      <div className="flex justify-between mb-4">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>
          Player {playerNumber}
        </span>
      </div>
      
      {/* Grid de Letras - 5x6 */}
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="aspect-square rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-2xl font-bold text-white"
          >
            {/* Letra aqui */}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
