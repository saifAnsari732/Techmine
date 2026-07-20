import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-2 mb-6"
        >
          <div className="flex items-center gap-4">
            <img 
              src="/techmine_icon.jpg" 
              className="w-12 h-12 object-cover rounded-xl" 
              alt="TechMine Icon" 
            />
            <div className="flex flex-col justify-center text-left">
              <span className="text-3xl font-black tracking-tight font-heading leading-none text-white">
                TECH<span className="text-[#29aae1]">MINE</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest leading-none mt-1 text-white/70">
                DIGITAL GROWTH PARTNER
              </span>
            </div>
          </div>
        </motion.div>
        
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
