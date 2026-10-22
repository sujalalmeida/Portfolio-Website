export type Category = "All work" | "AI & privacy" | "Applications";
export interface Project {
  id: string;
  name: string;
  category: Exclude<Category, "All work">;
  subtitle: string;
  description: string;
  detail: string;
  stack: string[];
  href: string;
  linkLabel: string;
  demo?: string;
}
export const projects: Project[] = [
  {
    id: "along",
    name: "Along",
    category: "Applications",
    subtitle: "A little more room to think.",
    description:
      "A native macOS window manager that arranges your apps in a scrolling row. Keep your windows at a useful size and move through your workspace.",
    detail:
      "Built with Swift, SwiftUI and AppKit. Keyboard navigation, independent column resizing, and restoration of original window positions. Open-source preview for Apple Silicon, macOS 13+.",
    stack: ["Swift", "SwiftUI", "AppKit"],
    href: "https://github.com/sujalalmeida/Along",
    linkLabel: "Explore source",
  },
  {
    id: "privmed",
    name: "PrivMed",
    category: "AI & privacy",
    subtitle: "Learn together. Keep data local.",
    description:
      "A healthcare research platform for distributed disease prediction, with encrypted model aggregation and a dashboard for labs and administrators.",
    detail:
      "Federated learning keeps training data decentralized. CKKS homomorphic encryption protects model updates during aggregation; the dashboard brings training and evaluation into view.",
    stack: ["Python", "React", "Flask", "Flower", "CKKS"],
    href: "https://github.com/sujalalmeida/privmed",
    linkLabel: "Explore source",
  },
  {
    id: "plan",
    name: "Plan",
    category: "Applications",
    subtitle: "A calendar that keeps up.",
    description:
      "An offline-first calendar with tasks, handwritten notes, and optional cloud sync. Built to save immediately, even when the connection drops.",
    detail:
      "An installable PWA using Preact and IndexedDB, with recurring events, Apple Pencil whiteboards, JSON backups, and optional Firebase synchronization.",
    stack: ["TypeScript", "Preact", "Dexie", "Firebase"],
    href: "https://github.com/sujalalmeida/bettercalender",
    linkLabel: "Explore source",
    demo: "https://bettercalender.sujalalmeida13.workers.dev",
  },
  {
    id: "truthlens",
    name: "TruthLens",
    category: "AI & privacy",
    subtitle: "Look a little closer.",
    description:
      "An AI-assisted misinformation analysis tool that breaks text into a multi-stage workflow and returns a classification, confidence score, and explanation.",
    detail:
      "LangGraph coordinates preprocessing, Gemini analysis, language-pattern scoring, and output formatting. A research prototype for exploring claims; its output still needs human verification.",
    stack: ["Python", "LangGraph", "Gemini", "Streamlit"],
    href: "https://github.com/sujalalmeida/Misinformation-analyser",
    linkLabel: "Explore source",
  },
  {
    id: "civicecho",
    name: "CivicEcho",
    category: "AI & privacy",
    subtitle: "Help a city hear its people.",
    description:
      "A civic issue reporting system that combines text, images, and voice with automated complaint triage and routing.",
    detail:
      "Combines crowd and AI verification to filter spam and group duplicate reports. Built with React Native, Flask, MediaPipe, Whisper, Vakyansh and Gemini. Project documented in my resume.",
    stack: ["React Native", "Flask", "Whisper", "Gemini"],
    href: "/Sujal-Almeida-Resume.pdf",
    linkLabel: "Read in resume",
  },
  {
    id: "ridechain",
    name: "RideChain",
    category: "Applications",
    subtitle: "A different route to ride sharing.",
    description:
      "A decentralized ride-sharing prototype connecting a React interface to Solidity contracts for requesting, accepting, and completing rides.",
    detail:
      "Explores rider and driver registration, payments, ratings and transparent fees. Smart-contract development and testing use Hardhat, Ethers.js, Chai and Mocha.",
    stack: ["React", "TypeScript", "Solidity", "Hardhat"],
    href: "https://github.com/sujalalmeida/RideChain",
    linkLabel: "Explore source",
  },
];
export const profile = {
  email: "almeida.su@northeastern.edu",
  github: "https://github.com/sujalalmeida",
  linkedin: "https://www.linkedin.com/in/sujal-almeida/",
  resume: "/Sujal-Almeida-Resume.pdf",
};
