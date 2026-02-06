import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, ChevronRight, Apple, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B6B]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B6B]/10 text-[#FF6B6B] text-sm font-bold tracking-wider uppercase mb-6">
              New: iOS 18 Support
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Your Personal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]">
                Strength Training
              </span> <br />
              Companion
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Track workouts, crush personal records, and compete with friends. Rep makes every rep count.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                <Apple size={24} fill="currentColor" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
              <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                See Features
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            {/* iPhone Mockup Frame */}
            <div className="relative mx-auto w-[320px] h-[640px] bg-[#000] rounded-[3rem] border-8 border-[#1a1a1a] shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                <div className="w-24 h-6 bg-black rounded-b-2xl" /> {/* Dynamic Island */}
              </div>
              
              {/* App Content UI */}
              <div className="absolute inset-0 bg-[#1C1C1E] flex flex-col p-6 pt-12">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-white/60 text-xs font-medium uppercase tracking-widest">Active Session</h3>
                    <h2 className="text-white text-2xl font-bold">Chest Day A</h2>
                  </div>
                  <div className="w-10 h-10 bg-[#FF6B6B]/20 rounded-full flex items-center justify-center text-[#FF6B6B]">
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>

                {/* Workout Card */}
                <div className="bg-white/5 rounded-3xl p-5 border border-white/10 mb-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-white font-bold text-lg">Bench Press</h4>
                      <p className="text-white/40 text-sm">Set 3 of 4</p>
                    </div>
                    <span className="text-[#FF6B6B] font-mono text-xl font-bold">01:45</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#1C1C1E] rounded-2xl p-4 text-center border border-white/5">
                      <div className="text-white/40 text-[10px] uppercase font-bold mb-1">Weight</div>
                      <div className="text-white text-xl font-black">225 <span className="text-[10px] text-white/40 font-normal">lb</span></div>
                    </div>
                    <div className="bg-[#1C1C1E] rounded-2xl p-4 text-center border border-white/5">
                      <div className="text-white/40 text-[10px] uppercase font-bold mb-1">Reps</div>
                      <div className="text-white text-xl font-black">8</div>
                    </div>
                  </div>

                  <button className="w-full bg-[#FF6B6B] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#FF6B6B]/20">
                    Log Set
                  </button>
                </div>

                {/* Progress Visual */}
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-white/60 text-xs">Session Progress</span>
                    <span className="text-white font-bold text-xs">65%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]" />
                  </div>
                </div>

                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1764908912200-a516ab1a9b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdGhsZXRlJTIwdHJhaW5pbmclMjBpbnRlbnNlJTIwZ3ltfGVufDF8fHx8MTc3MDMxMzMwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Workout"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -right-12 top-20 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <ChevronRight size={16} className="rotate-[-90deg]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/60 font-bold uppercase">New PR</div>
                  <div className="text-white font-bold">225 lb Bench</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Mockup shadow */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[300px] h-[40px] bg-black/40 blur-[40px] rounded-full" />
        </div>
      </div>
    </section>
  );
};
