import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, TrendingUp, Trophy, Flame, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Track Every Rep',
    description: 'Log sets, reps, and weights with one tap. Auto-fill from your last workout.',
    icon: <Dumbbell className="text-[#FF6B6B]" />,
    bgColor: 'bg-[#FF6B6B]/10',
  },
  {
    title: 'Watch Your Progress',
    description: 'Personal records, volume trends, and strength curves. See how far you\'ve come.',
    icon: <TrendingUp className="text-[#4A90D9]" />,
    bgColor: 'bg-[#4A90D9]/10',
  },
  {
    title: 'Compete & Achieve',
    description: 'Earn XP, unlock achievements, and climb leaderboards with friends.',
    icon: <Trophy className="text-[#8B5CF6]" />,
    bgColor: 'bg-[#8B5CF6]/10',
  },
  {
    title: 'Smart Warmups',
    description: 'Customizable warmup protocols that adapt to your working weight.',
    icon: <Flame className="text-[#F97316]" />,
    bgColor: 'bg-[#F97316]/10',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built for Serious Training</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to track, analyze, and improve your performance in the gym.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all cursor-default"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
