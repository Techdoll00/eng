import React from 'react';

export const MinimalMark: React.FC<{ active?: boolean; size?: number }> = ({ active, size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className="transition-transform duration-500">
    {/* Abstract cat outline: single imperfect line */}
    <path 
      d="M12 18 C 12 12, 14 8, 18 8 C 20 8, 20 10, 20 12 C 20 10, 22 8, 24 8 C 28 8, 30 12, 30 18 C 30 28, 20 34, 20 34 C 20 34, 10 28, 10 18 C 10 16, 11 16.5, 12 18" 
      stroke="#2d2d2d" 
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "url(#hand-drawn-filter)" }}
      className={active ? "animate-pulse" : ""}
    />
    {/* Simple dot eyes */}
    <circle cx="17" cy="19" r="1.5" fill="#2d2d2d" />
    <circle cx="25" cy="19" r="1.5" fill="#2d2d2d" />
    
    {active && (
      <path 
        d="M18 26 Q 21 28, 24 26" 
        stroke="#2d2d2d" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        className="animate-bounce"
      />
    )}
  </svg>
);

export const NotebookAccents: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] opacity-25">
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Hand-drawn margin line */}
      <path d="M15 0 Q 14 50, 15 100" stroke="#f06292" strokeWidth="0.1" strokeDasharray="1,1" fill="none" />
      
      {/* Abstract doodle in corner */}
      <path d="M92 8 L98 2" stroke="#2d2d2d" strokeWidth="0.05" />
      <path d="M92 2 L98 8" stroke="#2d2d2d" strokeWidth="0.05" />
    </svg>
  </div>
);