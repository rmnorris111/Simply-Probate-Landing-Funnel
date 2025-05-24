export interface QuizQuestion {
  question: string;
  options: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Has a loved one passed away and left assets in New Zealand?",
    options: ["Yes", "No", "I'm not sure"]
  },
  {
    question: "Did the deceased leave a valid will?",
    options: ["Yes", "No", "I don't know"]
  },
  {
    question: "What is the approximate value of the estate?",
    options: ["Less than $15,000", "Between $15,000 and $100,000", "More than $100,000", "I'm not certain"]
  },
  {
    question: "Are there any properties (real estate) involved in the estate?",
    options: ["Yes", "No", "I don't know"]
  },
  {
    question: "What is your relationship to the deceased?",
    options: ["Executor named in the will", "Spouse or partner", "Child or other family member", "Friend or other"]
  }
];
