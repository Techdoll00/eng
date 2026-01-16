import { UpgradeResult } from "../types";

export function getMockUpgrade(input: string): UpgradeResult {
  const inputLower = input.toLowerCase();
  
  // Basic context detection
  const isBusiness = inputLower.includes('work') || inputLower.includes('email') || inputLower.includes('client') || inputLower.includes('meeting');
  const isIelts = inputLower.includes('think') || inputLower.includes('opinion') || inputLower.includes('believe') || inputLower.includes('advantage');

  return {
    id: `mock-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    original: input,
    acknowledgedMeaning: `我完全理解你想表达的深层含义。通过精准的语言表达，你的想法会更具说服力。`,
    clear: `I'm basically saying that ${inputLower}. It's quite straightforward.`,
    business: `I am writing to formalize our stance regarding the point that ${inputLower}. This aligns with our current strategy.`,
    ielts: `From a socio-economic perspective, the notion that ${inputLower} carries significant weight and warrants careful analysis.`,
    patterns: [
      { 
        title: "Establishing Context", 
        template: "In light of recent developments regarding...", 
        note: "在阐述你的核心观点前，先铺垫背景，增加权威感。" 
      },
      { 
        title: "Nuanced Argument", 
        template: "While it is true that X, we must also consider...", 
        note: "展示双向思考，这是雅思高分和成熟职场沟通的关键。" 
      }
    ],
    feynmanChallenge: "如果你要向一个十岁的孩子解释这个想法，你会如何简化它？",
    timestamp: Date.now(),
    isOffline: true
  };
}