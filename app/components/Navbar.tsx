import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Support', id: 'support' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1E]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] rounded-xl flex items-center justify-center shadow-lg shadow-coral-500/20">
            <span className="text-white font-black text-xl italic leading-none">R</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Rep</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id === 'home' ? 'home' : 'home')} // For now just scroll or home
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </button>
          ))}
          <button 
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all flex items-center gap-2"
          >
            <Smartphone size={16} />
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-[#1C1C1E] border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate('home');
                setIsOpen(false);
              }}
              className="text-white/70 hover:text-white text-left text-lg font-medium"
            >
              {link.name}
            </button>
          ))}
          <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2">
            <Smartphone size={20} />
            Download on App Store
          </button>
        </motion.div>
      )}
    </nav>
  );
};
