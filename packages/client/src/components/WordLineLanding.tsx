

const WordLineLanding = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Main Content Container with entrance animation */}
      <div className="text-center space-y-12 animate-[fadeIn_1.5s_ease-out]">
        
        {/* Title with Neon Glow */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]">
            WordLine
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 tracking-widest font-light uppercase">
            Welcome to the ultimate word quest
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12">
          
          {/* Single Player Button - Green Neon Effect */}
          <button className="w-64 px-8 py-4 text-lg font-bold tracking-wider uppercase rounded-md border-2 border-green-400 text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(74,222,128,0.8)] hover:-translate-y-1">
            Single Player
          </button>

          {/* Multiplayer Button - Fuchsia Neon Effect */}
          <button className="w-64 px-8 py-4 text-lg font-bold tracking-wider uppercase rounded-md border-2 border-fuchsia-500 text-fuchsia-500 transition-all duration-300 hover:bg-fuchsia-500 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] hover:-translate-y-1">
            Multiplayer
          </button>

        </div>
      </div>

      {/* Inline styles for the custom fade-in animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
      `}} />
    </div>
  );
};

export default WordLineLanding;
