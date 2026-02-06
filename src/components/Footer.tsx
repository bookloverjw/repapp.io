import React from 'react';
import { Instagram, Twitter, Youtube, Apple } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black pt-20 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm italic">R</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Rep</span>
            </div>
            <p className="text-white/40 max-w-xs mb-4">
              The premium iOS fitness app for serious strength training. Built to help you crush your personal records.
            </p>
            <p className="text-[#FF6B6B] text-sm font-medium mb-8">repapp.io</p>
            <div className="flex gap-4">
              <Instagram size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Youtube size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('pricing')}>Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Exercise Library</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('privacy')}>Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('terms')}>Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Safety</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Status</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <div className="text-white/20 text-xs">
            © 2026 Rep Fitness. All rights reserved.
          </div>
          <button className="bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
            <Apple size={16} fill="currentColor" />
            Download on App Store
          </button>
        </div>
      </div>
    </footer>
  );
};
