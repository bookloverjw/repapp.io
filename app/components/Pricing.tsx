import React from 'react';
import { Check, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#FF6B6B]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start Free, Go Premium</h2>
          <p className="text-white/60 text-lg">Choose the plan that fits your goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="bg-[#1C1C1E] border border-white/5 p-10 rounded-[2.5rem] flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
            <div className="text-4xl font-black text-white mb-8">$0 <span className="text-lg font-normal text-white/40">/ forever</span></div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                '3 custom workouts',
                'Basic progress tracking',
                'Exercise library',
                'Standard achievements'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60">
                  <Check size={20} className="text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
              Get Started
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-[#1C1C1E] border-2 border-[#FF6B6B] p-10 rounded-[2.5rem] flex flex-col relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#FF6B6B] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-white">Premium</h3>
              <Zap size={20} fill="#FF6B6B" color="#FF6B6B" />
            </div>
            <div className="text-4xl font-black text-white mb-8">$4.99 <span className="text-lg font-normal text-white/40">/ month</span></div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                'Unlimited workouts',
                'Advanced analytics',
                'Leaderboards & social features',
                'Priority support',
                'Apple Health & Oura integration',
                'Custom exercise creator'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check size={20} className="text-[#FF6B6B] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white font-bold shadow-xl shadow-[#FF6B6B]/20 hover:scale-[1.02] transition-transform">
              Try Premium Free for 7 Days
            </button>
            <p className="text-center text-[10px] text-white/40 mt-4">Billed annually or monthly through App Store.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
