export interface QuizQuestion {
  question: string;
  options: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Do you need help with probate services in New Zealand?",
    options: ["Yes, I need guidance", "I'm researching options", "Not yet sure"]
  },
  {
    question: "Is there a valid will for the estate?",
    options: ["Yes", "No", "I don't know yet"]
  },
  {
    question: "What is the approximate value of the estate?",
    options: ["Under $50,000", "$50,000 to $250,000", "Over $250,000", "I'm not certain"]
  },
  {
    question: "Does the estate include property or real estate?",
    options: ["Yes", "No", "Multiple properties"]
  },
  {
    question: "How soon do you need probate services?",
    options: ["Urgently (1-2 weeks)", "Soon (1 month)", "Planning ahead (2+ months)"]
  }
];
