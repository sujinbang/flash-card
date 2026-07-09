import React from 'react';
import { motion } from 'motion/react';

interface ThemeBackgroundProps {
  theme: 'dark' | 'light';
}

export default function ThemeBackground({ theme }: ThemeBackgroundProps) {
  const isDark = theme === 'dark';
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 select-none transition-colors duration-500 ${isDark ? 'bg-[#030712]' : 'bg-[#FAF8F5]'}`}>
      {/* Tiny Grid Dot Pattern */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundImage: `radial-gradient(${isDark ? '#3b82f6' : '#bca38a'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: isDark ? 0.15 : 0.2,
        }}
      />

      {/* Deep Blue-Indigo Radial Vignette Glow */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDark 
          ? 'bg-radial-gradient from-transparent via-[#030712]/50 to-[#020617]' 
          : 'bg-radial-gradient from-transparent via-[#FAF8F5]/30 to-[#F5efe6]'
      }`} />

      {/* Floating Ambient Glow Orbs */}
      <motion.div 
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] transition-colors duration-500 ${isDark ? 'bg-blue-600/10' : 'bg-[#EADBC8]/25'}`}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div 
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] transition-colors duration-500 ${isDark ? 'bg-indigo-600/10' : 'bg-amber-600/10'}`}
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Extra Subtle Central Glow behind the active Card */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 ${
        isDark ? 'bg-blue-500/5' : 'bg-amber-500/5'
      }`} />
    </div>
  );
}

