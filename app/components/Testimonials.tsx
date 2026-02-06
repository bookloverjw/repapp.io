import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Powerlifter',
    content: 'The cleanest interface I’ve ever used. Tracking my progressive overload has never been easier.',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Fitness Coach',
    content: 'Rep replaced three other apps for me. The analytics on strength trends are game-changing for my clients.',
    rating: 5
  },
  {
    name: 'David Wilson',
    role: 'Casual Lifter',
    content: 'Actually makes me look forward to logging sets. The gamification with friends keeps me consistent.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#FF6B6B" color="#FF6B6B" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join Thousands of Lifters</h2>
          <p className="text-white/60 text-lg">Rated 4.9/5 on the App Store</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-[2rem] relative">
              <Quote size={40} className="text-[#FF6B6B]/20 absolute top-8 right-8" />
              <p className="text-white/80 text-lg italic mb-6 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4A90D9] to-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
