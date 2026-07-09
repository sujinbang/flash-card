export interface Question {
  id: string;
  subject: number; // 1, 2, 3, 4
  subjectTitle: string; // e.g., "디자인 싱킹", "데이터 입출력"
  question: string;
  answer: string; // For 'multiple', this will be the index (e.g. '0', '1', '2', '3') or exact text. Let's make it the text or option index. Using string allows both.
  type: 'multiple' | 'subjective';
  options?: string[]; // 4 options for multiple choice
  explanation?: string; // Optional explanation
  isCustom?: boolean;
}

export interface QuizProgress {
  [questionId: string]: {
    correctCount: number;
    incorrectCount: number;
    lastStatus: 'correct' | 'incorrect' | 'unseen';
  };
}

export interface SubSubject {
  id: number;
  parentSubjectId: number;
  label: string;
  title: string;
}
