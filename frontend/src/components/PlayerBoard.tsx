import { motion, type Variants } from "framer-motion";

interface PlayerBoardProps {
  playerNumber: number;
  color: string; // Ex: 'var(--color-neon-green)'
}

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { opacity: 0, scale: 0.9, y: 10 }
};

export const PlayerBoard = ({ playerNumber, color }: PlayerBoardProps) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="glass-box w-[320px] rounded-[2.5rem] p-8 neon-glow transform-gpu"
      style={{ '--player-color': color } as React.CSSProperties}
    >
      <header className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-glow" style={{ color }}>
          Player 0{playerNumber}
        </span>
      </header>
      
      {/* Letter Grid */}
      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="aspect-square rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-xl font-bold text-white/10"
          >
            -
          </div>
        ))}
      </div>
    </motion.div>
  );
};
