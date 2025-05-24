export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  helpText?: string;
}

export interface QuizOption {
  text: string;
  value: string;
  qualifyingScore: number; // 0-3 scale (0=disqualifying, 1=low, 2=medium, 3=high qualification)
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "deceased_status",
    question: "Has someone close to you recently passed away in New Zealand?",
    helpText: "We help families navigate the legal process after a death",
    options: [
      { text: "Yes, within the last 6 months", value: "recent", qualifyingScore: 3 },
      { text: "Yes, but more than 6 months ago", value: "past", qualifyingScore: 2 },
      { text: "No, but I'm planning ahead", value: "planning", qualifyingScore: 1 },
      { text: "Just researching for general information", value: "research", qualifyingScore: 0 }
    ]
  },
  {
    id: "will_status",
    question: "Did the deceased leave a valid will?",
    helpText: "This determines whether we apply for probate or letters of administration",
    options: [
      { text: "Yes, there's a valid will", value: "has_will", qualifyingScore: 3 },
      { text: "No will was left (died intestate)", value: "no_will", qualifyingScore: 3 },
      { text: "There's a will but we're unsure if it's valid", value: "uncertain_will", qualifyingScore: 2 },
      { text: "We haven't found any will yet", value: "searching", qualifyingScore: 2 }
    ]
  },
  {
    id: "estate_complexity",
    question: "Which best describes the estate?",
    helpText: "Complex estates require more specialized legal assistance",
    options: [
      { text: "Property/real estate involved", value: "has_property", qualifyingScore: 3 },
      { text: "Business interests or investments", value: "business", qualifyingScore: 3 },
      { text: "Multiple bank accounts and assets", value: "multiple_assets", qualifyingScore: 2 },
      { text: "Simple estate - mainly cash/personal items", value: "simple", qualifyingScore: 1 }
    ]
  },
  {
    id: "current_situation",
    question: "What's your current situation?",
    helpText: "This helps us understand your immediate needs",
    options: [
      { text: "I'm the named executor and need guidance", value: "executor", qualifyingScore: 3 },
      { text: "Family members disagree about the estate", value: "disputes", qualifyingScore: 3 },
      { text: "Banks/institutions are asking for probate", value: "institutions_asking", qualifyingScore: 3 },
      { text: "I'm the next of kin but unsure of my role", value: "next_of_kin", qualifyingScore: 2 }
    ]
  },

];

// Qualification logic
export interface QuizResult {
  isQualified: boolean;
  totalScore: number;
  maxScore: number;
  serviceType: 'probate' | 'administration' | 'general';
  nextAction: 'calendar' | 'home';
}

export function calculateQuizResult(answers: Record<string, string>): QuizResult {
  let totalScore = 0;
  const maxScore = quizQuestions.length * 3;

  // Calculate total qualification score
  quizQuestions.forEach(question => {
    const selectedValue = answers[question.id];
    const selectedOption = question.options.find(opt => opt.value === selectedValue);
    if (selectedOption) {
      totalScore += selectedOption.qualifyingScore;
    }
  });

  // Determine service type based on will status
  let serviceType: 'probate' | 'administration' | 'general' = 'general';
  const willStatus = answers['will_status'];
  if (willStatus === 'has_will' || willStatus === 'uncertain_will') {
    serviceType = 'probate';
  } else if (willStatus === 'no_will') {
    serviceType = 'administration';
  }

  // Qualification threshold: at least 6 out of 12 points (50%)
  const isQualified = totalScore >= 6;

  // Special disqualification rules
  const deceasedStatus = answers['deceased_status'];
  if (deceasedStatus === 'research') {
    // Just researching - send to home page
    return {
      isQualified: false,
      totalScore,
      maxScore,
      serviceType,
      nextAction: 'home'
    };
  }

  return {
    isQualified,
    totalScore,
    maxScore,
    serviceType,
    nextAction: isQualified ? 'calendar' : 'home'
  };
}

// Helper function to get personalized message based on results
export function getResultMessage(result: QuizResult, answers: Record<string, string>): string {
  if (!result.isQualified) {
    return "Thanks for your interest! Based on your responses, we recommend exploring our resources on the main website first. Feel free to return when you need direct legal assistance.";
  }

  const willStatus = answers['will_status'];
  let serviceMessage = "";

  if (willStatus === 'has_will' || willStatus === 'uncertain_will') {
    serviceMessage = "We can help you navigate the probate process for the will.";
  } else if (willStatus === 'no_will') {
    serviceMessage = "We can assist with letters of administration since there's no will.";
  } else {
    serviceMessage = "We can help determine the right legal path for your situation.";
  }

  return `${serviceMessage} Let's schedule a free consultation to discuss your specific needs.`;
}
