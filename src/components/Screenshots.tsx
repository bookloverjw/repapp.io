import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const screenshots = [
  {
    title: 'Workout Log',
    image: 'https://images.unsplash.com/photo-1656774950529-44a6153521ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRlciUyMGxpZnRpbmclMjBoZWF2eSUyMGJhcmJlbGwlMjBkYXJrJTIwZ3ltJTIwbW90aXZhdGlvbnxlbnwxfHx8fDE3NzA0MTIzMzd8MA',
    label: 'Tracking'
  },
  {
    title: 'Analytics',
    image: 'https://images.unsplash.com/photo-1580983693000-5654250f64d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlciUyMGFwcCUyMGludGVyZmFjZSUyMGd5bSUyMGNvbnRleHR8ZW58MXx8fHwxNzcwNDEyMzM3fDA',
    label: 'Progress'
  },
  {
    title: 'Achievements',
    image: 'https://images.unsplash.com/photo-1758875568800-29fb434c7b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvd2VybGlmdGluZyUyMGJhcmJlbGwlMjBneW0lMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzcwNDEyMzM3fDA',
    label: 'XP & Badges'
  },
  {
    title: 'Exercise Library',
    image: 'https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZyUyMGVxdWlwbWVudCUyMGNsb3NlJTIwdXAlMjB3ZWlnaHRzfGVufDF8fHx8MTc3MDQxMjMzN3ww',
    label: 'Tutorials'
  },
];

export const Screenshots: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Inside the App</h2>
          <p className="text-white/50 text-lg">Designed for athletes, by athletes.</p>
        </div>
      </div>

      <div className="flex gap-6 px-6 overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing">
        {screenshots.map((shot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[280px] md:w-[320px] group"
          >
            <div className="relative aspect-[9/19] bg-[#1C1C1E] rounded-[2.5rem] border-4 border-white/10 overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={shot.image}
                alt={shot.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[#FF6B6B] text-[10px] font-bold uppercase tracking-widest mb-1 block">
                  {shot.label}
                </span>
                <h4 className="text-white font-bold text-xl">{shot.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
