import React from 'react';

export const MinimalMark: React.FC<{ active?: boolean; size?: number }> = ({ active, size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className="transition-transform duration-500">
    {/* Abstract cat outline: single imperfect line */}
    <path 
      d="M10 18 C 10 12, 12 8, 16 8 C 18 8, 20 10, 20 12 C 20 10, 22 8, 24 8 C 28 8, 30 12, 30 18 C 30 28, 20 34, 20 34 C 20 34, 10 28, 10 18 Z" 
      stroke="#2d2d2d" 
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? "animate-pulse" : ""}
      style={{ filter: "url(#hand-drawn)" }}
    />
    {/* Dot eyes */}
    <circle cx="16" cy="18" r="1.2" fill="#2d2d2d" />
    <circle cx="24" cy="18" r="1.2" fill="#2d2d2d" />
    
    {active && (
      <path 
        d="M17 25 Q 20 27, 23 25" 
        stroke="#2d2d2d" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        className="animate-bounce"
      />
    )}
  </svg>
);

export const NotebookAccents: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Margin lines */}
      <path d="M12 0 V 100" stroke="#f06292" strokeWidth="0.15" strokeDasharray="1,1" />
      <path d="M14 0 V 100" stroke="#f06292" strokeWidth="0.15" strokeDasharray="1,1" />
      
      {/* Random subtle doodle marks in corners */}
      <circle cx="95" cy="5" r="2" stroke="#2d2d2d" strokeWidth="0.05" fill="none" />
      <path d="M5 95 L15 85" stroke="#2d2d2d" strokeWidth="0.05" />
    </svg>
  </div>
);