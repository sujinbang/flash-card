import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  RotateCcw, 
  Trash2,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  FileText,
  Sun,
  Moon,
  Menu,
  X,
  Check,
  AlertCircle,
  BookOpen,
  Database,
  Terminal,
  Layers,
  Home,
  Shield,
  Lock
} from 'lucide-react';
import { Question, QuizProgress, SubSubject } from './types';
import { PRESEEDED_QUESTIONS } from './data/questions';
import ThemeBackground from './components/ThemeBackground';
import QuizCard from './components/QuizCard';
import AddQuestionModal from './components/AddQuestionModal';

export default function App() {
  // All questions (default + custom)
  const [questions, setQuestions] = useState<Question[]>([]);
  // Left Sidebar state
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState<boolean>(false);
  // Current category / subject (0 = 전체, 1 = 1과목, 2 = 2과목, 3 = 3과목, 4 = 4과목)
  const [selectedSubject, setSelectedSubject] = useState<number>(0);
  // Active index inside the filtered question list
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // Slide transition direction
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  // Modal visibility
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Sub-subjects (Categories like 1과목, 2과목, etc.)
  const [subSubjects, setSubSubjects] = useState<SubSubject[]>(() => {
    const cached = localStorage.getItem('custom_sub_subjects_v4');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        // Fallback
      }
    }
    return [
      { id: 1, parentSubjectId: 0, label: '1과목', title: '소프트웨어 설계' },
      { id: 2, parentSubjectId: 0, label: '2과목', title: '소프트웨어 개발' },
      { id: 3, parentSubjectId: 0, label: '3과목', title: '데이터베이스 구축' },
      { id: 4, parentSubjectId: 0, label: '4과목', title: '프로그래밍 언어 활용' },
      { id: 11, parentSubjectId: 10, label: '1과목', title: '데이터의 이해' },
      { id: 12, parentSubjectId: 10, label: '2과목', title: '데이터 처리 기술 이해' },
      { id: 13, parentSubjectId: 10, label: '3과목', title: '데이터 분석 기획' },
      { id: 14, parentSubjectId: 10, label: '4과목', title: '데이터 분석' },
      { id: 15, parentSubjectId: 10, label: '5과목', title: '데이터 시각화' }
    ];
  });

  const [subjectsList, setSubjectsList] = useState<any[]>(() => {
    const cached = localStorage.getItem('custom_quiz_subjects_v4');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        // Fallback
      }
    }
    return [
      {
        id: 0,
        label: '빅데이터 분석기사',
        desc: '1과목부터 4과목까지 전체 기출 핵심 이론과 엄선된 문제를 한 번에 통합 학습합니다.',
        iconName: 'BookOpen',
        badge: '기출 전체',
      },
      {
        id: 5,
        label: '정보보안기사',
        desc: '정보보안 및 네트워크, 시스템, 애플리케이션 보안 핵심 이론 및 기출 문제를 집중 학습합니다.',
        iconName: 'Shield',
        badge: '필수 과목',
        isCustom: true
      },
      {
        id: 10,
        label: 'ADP (데이터분석 전문가)',
        desc: '데이터 이해부터 분석, 시각화까지 5과목 전체와 모의고사, 기출문제를 완벽하게 대비합니다.',
        iconName: 'Database',
        badge: '전문가',
      }
    ];
  });

  const getActiveMainExam = () => {
    const foundMain = subjectsList.find(s => s.id === selectedSubject);
    if (foundMain) return foundMain;
    
    const foundSub = subSubjects.find(s => s.id === selectedSubject);
    if (foundSub) {
      const parent = subjectsList.find(s => s.id === foundSub.parentSubjectId);
      if (parent) return parent;
    }
    
    return subjectsList[0] || { id: 0, label: '빅데이터 분석기사' };
  };

  const isQuestionInSubject = (question: Question, subjectId: number) => {
    const isMainExam = subjectsList.some(s => s.id === subjectId);
    if (isMainExam) {
      const subs = subSubjects.filter(s => s.parentSubjectId === subjectId);
      const subIds = subs.map(s => s.id);
      return question.subject === subjectId || subIds.includes(question.subject);
    }
    return question.subject === subjectId;
  };

  // Category addition modal visibility & fields
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState<boolean>(false);
  const [newCategoryLabel, setNewCategoryLabel] = useState<string>('');
  const [newCategoryTitle, setNewCategoryTitle] = useState<string>('');

  // Global score/stats from local storage
  const [progress, setProgress] = useState<QuizProgress>({});

  // Type filter: 'all' | 'multiple' | 'subjective'
  const [typeFilter, setTypeFilter] = useState<'all' | 'multiple' | 'subjective'>('all');

  // Sidebar states
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [sidebarActiveTab, setSidebarActiveTab] = useState<'incorrect' | 'correct'>('incorrect');
  const [rightSidebarSubjectFilter, setRightSidebarSubjectFilter] = useState<number | 'all'>('all');

  // Custom confirmation modal state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  // 'dark' | 'light' theme state, persisting to localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const cached = localStorage.getItem('app_theme');
    return (cached === 'light') ? 'light' : 'dark';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('app_theme', nextTheme);
  };

  // Load from local storage on mount
  useEffect(() => {
    const cachedCustom = localStorage.getItem('custom_quiz_questions');
    const customQuestions: Question[] = cachedCustom ? JSON.parse(cachedCustom) : [];
    setQuestions([...PRESEEDED_QUESTIONS, ...customQuestions]);

    const cachedProgress = localStorage.getItem('quiz_progress_stats');
    if (cachedProgress) {
      setProgress(JSON.parse(cachedProgress));
    }
  }, []);

  // Filtered questions based on Category AND Type (Multiple choice vs Subjective)
  const filteredQuestions = questions.filter(q => {
    const categoryMatches = isQuestionInSubject(q, selectedSubject);
    const typeMatches = typeFilter === 'all' ? true : q.type === typeFilter;
    return categoryMatches && typeMatches;
  });

  // Active question details
  const activeQuestion = filteredQuestions[activeIndex];

  // Safely adjust index if out of bounds (e.g. after category/type filters change)
  useEffect(() => {
    if (activeIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setActiveIndex(0);
    }
  }, [filteredQuestions, activeIndex]);

  // Handle category tab change
  const handleSelectSubject = (subject: number) => {
    setSelectedSubject(subject);
    setActiveIndex(0);
  };

  // Handle Type filter change
  const handleSelectTypeFilter = (type: 'all' | 'multiple' | 'subjective') => {
    setTypeFilter(type);
    setActiveIndex(0);
  };

  // Navigations
  const handlePrev = () => {
    if (filteredQuestions.length === 0) return;
    setSlideDirection('left');
    setActiveIndex((prev) => (prev === 0 ? filteredQuestions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (filteredQuestions.length === 0) return;
    setSlideDirection('right');
    setActiveIndex((prev) => (prev === filteredQuestions.length - 1 ? 0 : prev + 1));
  };

  // Direct dot click navigation
  const handleDotClick = (index: number) => {
    setSlideDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };

  // Hook from QuizCard when status changes
  const handleSetStatus = (status: 'correct' | 'incorrect') => {
    if (!activeQuestion) return;
    const qId = activeQuestion.id;
    
    const currentStats = progress[qId] || { correctCount: 0, incorrectCount: 0, lastStatus: 'unseen' };
    const updatedStats = {
      ...currentStats,
      lastStatus: status,
      correctCount: status === 'correct' ? currentStats.correctCount + 1 : currentStats.correctCount,
      incorrectCount: status === 'incorrect' ? currentStats.incorrectCount + 1 : currentStats.incorrectCount,
    };

    const newProgress = {
      ...progress,
      [qId]: updatedStats
    };

    setProgress(newProgress);
    localStorage.setItem('quiz_progress_stats', JSON.stringify(newProgress));

  };

  // Add custom question
  const handleAddQuestion = (newQ: Omit<Question, 'id'>) => {
    const cachedCustom = localStorage.getItem('custom_quiz_questions');
    const customQuestions: Question[] = cachedCustom ? JSON.parse(cachedCustom) : [];
    
    const fullNewQ: Question = {
      ...newQ,
      id: `custom-${Date.now()}`
    };

    const updatedCustom = [...customQuestions, fullNewQ];
    localStorage.setItem('custom_quiz_questions', JSON.stringify(updatedCustom));
    
    setQuestions([...PRESEEDED_QUESTIONS, ...updatedCustom]);
    
    // Switch filter category to the added question's subject and type
    setSelectedSubject(newQ.subject);
    setTypeFilter(newQ.type);
    setActiveIndex(0);
  };

  // Jump to specific question and adjust filters
  const handleJumpToQuestion = (q: Question) => {
    // 1. Set subject filter
    setSelectedSubject(q.subject);
    // 2. Set type filter
    setTypeFilter(q.type);
    
    // 3. Compute what the filtered questions list will be with these filters
    const newFiltered = questions.filter(item => {
      const categoryMatches = item.subject === q.subject;
      const typeMatches = item.type === q.type;
      return categoryMatches && typeMatches;
    });

    // 4. Find the correct index in that list
    const targetIdx = newFiltered.findIndex(item => item.id === q.id);
    if (targetIdx !== -1) {
      setActiveIndex(targetIdx);
    }
    
    // Close sidebar
    setIsSidebarOpen(false);
  };

  // Reset Progress Statistics
  const handleResetProgress = () => {
    setConfirmModal({
      isOpen: true,
      title: '기록 초기화',
      message: '모든 정답 및 오답 기록을 초기화하시겠습니까?',
      onConfirm: () => {
        setProgress({});
        localStorage.removeItem('quiz_progress_stats');
        setConfirmModal(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  // Delete all Custom added questions
  const handleClearCustomQuestions = () => {
    setConfirmModal({
      isOpen: true,
      title: '추가 문제 삭제',
      message: '사용자가 직접 추가한 모든 문제를 삭제하시겠습니까?',
      onConfirm: () => {
        localStorage.removeItem('custom_quiz_questions');
        setQuestions(PRESEEDED_QUESTIONS);
        setSelectedSubject(0);
        setTypeFilter('all');
        setActiveIndex(0);
        setConfirmModal(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  const IconMap: { [key: string]: any } = {
    BookOpen,
    Database,
    Terminal,
    Layers,
    Shield,
    Lock,
    Sparkles,
    HelpCircle,
    FileText,
  };


  const [isAddingSubject, setIsAddingSubject] = useState<boolean>(false);
  const [newSubjectName, setNewSubjectName] = useState<string>('');
  const [newSubjectDesc, setNewSubjectDesc] = useState<string>('');
  const [selectedIcon, setSelectedIcon] = useState<string>('Shield');

  const getIconColor = (iconName: string) => {
    if (theme === 'dark') {
      if (iconName === 'Shield' || iconName === 'Lock') return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    } else {
      return 'text-[#8D7B68] bg-[#BCA38A]/10 border-[#BCA38A]/20';
    }
  };

  const getSubjectLabel = (subjectId: number) => {
    const foundSub = subSubjects.find(s => s.id === subjectId);
    if (foundSub) {
      return foundSub.title ? `${foundSub.label}: ${foundSub.title}` : foundSub.label;
    }
    const found = subjectsList.find(s => s.id === subjectId);
    if (found) return found.label;
    return '기타 과목';
  };

  const handleAddCategory = () => {
    if (!newCategoryLabel.trim() || !newCategoryTitle.trim()) return;
    const newId = Date.now();
    const activeExam = getActiveMainExam();
    const newSub: SubSubject = {
      id: newId,
      parentSubjectId: activeExam.id,
      label: newCategoryLabel.trim(),
      title: newCategoryTitle.trim()
    };
    const updated = [...subSubjects, newSub];
    setSubSubjects(updated);
    localStorage.setItem('custom_sub_subjects_v4', JSON.stringify(updated));
    setSelectedSubject(newId);
    setActiveIndex(0);
    setIsAddCategoryModalOpen(false);
    setNewCategoryLabel('');
    setNewCategoryTitle('');
  };

  const handleAddSubject = () => {
    if (!newSubjectName.trim()) return;
    const newId = Date.now();
    const newSub = {
      id: newId,
      label: newSubjectName.trim(),
      desc: newSubjectDesc.trim() || '핵심 이론과 엄선된 기출 변형 문제를 함께 제공합니다.',
      iconName: selectedIcon,
      badge: '신규 과목',
      isCustom: true
    };
    const updated = [...subjectsList, newSub];
    setSubjectsList(updated);
    localStorage.setItem('custom_quiz_subjects_v4', JSON.stringify(updated));
    
    setSelectedSubject(newId);
    setActiveIndex(0);
    setIsAddingSubject(false);
  };

  const handleDeleteSubject = (e: React.MouseEvent, subId: number, subLabel: string) => {
    e.stopPropagation();
    setConfirmModal({
      isOpen: true,
      title: '과목 삭제 확인 ⚠️',
      message: `"${subLabel}" 과목을 정말로 삭제하시겠습니까? 등록된 해당 과목의 문제들도 함께 삭제됩니다.`,
      onConfirm: () => {
        const updatedSubjects = subjectsList.filter(s => s.id !== subId);
        setSubjectsList(updatedSubjects);
        localStorage.setItem('custom_quiz_subjects_v4', JSON.stringify(updatedSubjects));

        const updatedQuestions = questions.filter(q => q.subject !== subId);
        setQuestions(updatedQuestions);
        localStorage.setItem('custom_quiz_questions', JSON.stringify(updatedQuestions.filter(q => q.isCustom)));

        if (selectedSubject === subId) {
          setSelectedSubject(0);
          setActiveIndex(0);
        }
        
        setConfirmModal(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  // Global stats for Dashboard
  const totalCount = questions.length;
  const correctCount = questions.filter(q => progress[q.id]?.lastStatus === 'correct').length;
  const incorrectCount = questions.filter(q => progress[q.id]?.lastStatus === 'incorrect').length;
  const solvedCount = correctCount + incorrectCount;
  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  const incorrectQuestions = questions.filter(q => progress[q.id]?.lastStatus === 'incorrect');
  const correctQuestions = questions.filter(q => progress[q.id]?.lastStatus === 'correct');

  const filteredIncorrectQuestions = incorrectQuestions.filter(q => {
    if (rightSidebarSubjectFilter === 'all') return true;
    return isQuestionInSubject(q, rightSidebarSubjectFilter);
  });

  const filteredCorrectQuestions = correctQuestions.filter(q => {
    if (rightSidebarSubjectFilter === 'all') return true;
    return isQuestionInSubject(q, rightSidebarSubjectFilter);
  });

  return (
    <div className={`relative min-h-screen flex flex-col justify-between font-sans pb-10 select-none overflow-x-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
    }`}>
      {/* Decorative Ambient Canvas */}
      <ThemeBackground theme={theme} />

      {/* Header Container */}
      <header className={`w-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex flex-row items-center justify-between border-b z-10 transition-colors duration-500 ${
        theme === 'dark' ? 'border-slate-900/40' : 'border-amber-200/40'
      }`} id="app-header">
        <div 
          onClick={() => setIsLeftSidebarOpen(true)}
          className="flex items-center gap-2 text-left cursor-pointer group"
          title="과목 사이드바 열기"
        >
          <div className={`p-1.5 rounded-lg border transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-blue-600/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-600/20' 
              : 'bg-[#BCA38A]/10 border-[#BCA38A]/20 text-[#8D7B68] group-hover:bg-[#BCA38A]/20'
          }`}>
            <Menu className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
          </div>
          <div>
            <h1 className={`text-xs md:text-lg font-bold tracking-tight bg-clip-text text-transparent font-sans transition-all duration-300 bg-gradient-to-r ${
              theme === 'dark' ? 'from-blue-100 to-indigo-100' : 'from-[#5C4D3C] to-[#8D7B68]'
            }`}>
              문제풀이 카드
            </h1>
            <p className={`text-[8px] md:text-xs font-medium font-sans transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'
            }`}>핵심 이론 및 퀴즈 완벽 대비</p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-1.5">
          {/* Add Question Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className={`flex items-center justify-center gap-0.5 px-2.5 py-1.5 rounded-lg text-[10px] md:text-sm font-semibold transition cursor-pointer ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-500 text-slate-100 shadow-[0_0_15px_rgba(37,99,235,0.25)]'
                : 'bg-[#BCA38A] hover:bg-[#AD937A] text-[#FAF8F5] shadow-[0_0_12px_rgba(188,163,138,0.2)]'
            }`}
            id="btn-add-question-trigger"
          >
            <Plus className="w-3 h-3" />
            추가
          </button>

          {/* Utility buttons */}
          <div className="flex gap-1">
            {/* Theme Toggle Button next to Refresh */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? '화이트모드 전환' : '다크모드 전환'}
              className={`p-1.5 rounded-lg border transition cursor-pointer flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  : 'bg-white/80 border-amber-200/60 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300 shadow-sm'
              }`}
              id="btn-toggle-theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-3 h-3 text-amber-400 animate-[spin_10s_linear_infinite]" />
              ) : (
                <Moon className="w-3 h-3 text-[#8D7B68]" />
              )}
            </button>

            <button
              onClick={() => setIsSidebarOpen(true)}
              title="풀이 기록 및 학습 현황"
              className={`p-1.5 rounded-lg border transition cursor-pointer flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  : 'bg-white/80 border-amber-200/60 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300 shadow-sm'
              }`}
              id="btn-open-sidebar"
            >
              <BookmarkCheck className="w-3.5 h-3.5" />
            </button>
            
            {questions.some(q => q.isCustom) && (
              <button
                onClick={handleClearCustomQuestions}
                title="커스텀 문제 삭제"
                className={`p-1.5 rounded-lg border transition cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-rose-950/10 border-rose-900/30 text-rose-400/80 hover:text-rose-300 hover:border-rose-800'
                    : 'bg-rose-50 border-rose-200/60 text-rose-600 hover:text-rose-800 hover:border-rose-300 shadow-sm'
                }`}
                id="btn-clear-custom"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Arena */}
      <main className="flex-grow flex flex-col justify-start max-w-4xl w-full mx-auto px-4 mt-4 md:mt-6 space-y-6 z-10" id="main-stage">
        
        {/* ACTIVE QUIZ SESSION VIEW */}
        <div className="space-y-5 md:space-y-6 w-full animate-fadeIn" id="quiz-session-view">
          
          {/* Header containing the selected subject info */}
          <div className="flex items-center justify-between gap-2 border-b pb-2 border-slate-500/10">
            <button
              onClick={() => {
                const activeExam = getActiveMainExam();
                // Pre-fill next sub-subject label for convenience
                const currentCount = subSubjects.filter(s => s.parentSubjectId === activeExam.id).length;
                setNewCategoryLabel(`${currentCount + 1}과목`);
                setIsAddCategoryModalOpen(true);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold transition cursor-pointer border ${
                theme === 'dark'
                  ? 'bg-blue-600/10 border-blue-500/30 text-blue-400 hover:bg-blue-600/20'
                  : 'bg-[#BCA38A]/10 border-amber-300/40 text-[#8D7B68] hover:bg-[#BCA38A]/20 shadow-sm'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              과목 추가
            </button>
            
            <span className={`text-[11px] md:text-xs font-mono font-bold ${
              theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'
            }`}>
              {(() => {
                const activeExam = getActiveMainExam();
                return selectedSubject === activeExam.id 
                  ? `${activeExam.label} 통합 학습`
                  : `${activeExam.label} [${getSubjectLabel(selectedSubject)}]`;
              })()}
            </span>
          </div>

          {/* Category Tabs (Dynamic Sub-subject Filter) */}
          {(() => {
            const activeExam = getActiveMainExam();
            const activeExamSubSubjects = subSubjects.filter(sub => sub.parentSubjectId === activeExam.id);
            return (
              <div className="flex justify-start md:justify-center items-center gap-2 overflow-x-auto pb-1 px-1 no-scrollbar scroll-smooth" id="category-tabs-container">
                {/* '전체' (All) Tab */}
                <button
                  onClick={() => handleSelectSubject(activeExam.id)}
                  className={`flex-shrink-0 px-3.5 py-1.5 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-sm font-semibold tracking-wide transition duration-200 cursor-pointer border ${
                    selectedSubject === activeExam.id
                      ? theme === 'dark'
                        ? 'bg-blue-600 border-blue-400 text-slate-100 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                        : 'bg-[#BCA38A] border-[#9E8471] text-white shadow-[0_0_12px_rgba(188,163,138,0.3)]'
                      : theme === 'dark'
                      ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-white/80 border-amber-200/50 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300'
                  }`}
                  id="tab-category-all"
                >
                  전체
                </button>

                {/* Dynamic Sub-subject Category Tabs */}
                {activeExamSubSubjects.map((tab) => {
                  const isActive = selectedSubject === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelectSubject(tab.id)}
                      className={`flex-shrink-0 px-3.5 py-1.5 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-sm font-semibold tracking-wide transition duration-200 cursor-pointer border ${
                        isActive
                          ? theme === 'dark'
                            ? 'bg-blue-600 border-blue-400 text-slate-100 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                            : 'bg-[#BCA38A] border-[#9E8471] text-white shadow-[0_0_12px_rgba(188,163,138,0.3)]'
                          : theme === 'dark'
                          ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                          : 'bg-white/80 border-amber-200/50 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300'
                      }`}
                      id={`tab-category-${tab.id}`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            );
          })()}

            {/* Question Type Filter Tabs (Multiple choice / Subjective) */}
            <div className={`flex justify-center items-center gap-1 p-0.5 rounded-xl w-full max-w-sm mx-auto border transition-all duration-300 ${
              theme === 'dark' ? 'bg-slate-900/50 border-slate-800/80' : 'bg-[#F3EDE2]/60 border-amber-200/60'
            }`} id="type-tabs-container">
              {[
                { type: 'all', label: '전체 형태', icon: null },
                { type: 'multiple', label: '객관식', icon: <HelpCircle className="w-3 h-3" /> },
                { type: 'subjective', label: '주관식', icon: <FileText className="w-3 h-3" /> }
              ].map((btn) => {
                const isActive = typeFilter === btn.type;
                return (
                  <button
                    key={btn.type}
                    onClick={() => handleSelectTypeFilter(btn.type as any)}
                    className={`w-full py-1.5 rounded-lg text-[10px] md:text-sm font-bold flex items-center justify-center gap-1 transition cursor-pointer ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-blue-600/25 border border-blue-500/30 text-blue-300'
                          : 'bg-[#BCA38A]/20 border border-[#BCA38A]/40 text-[#8D7B68]'
                        : theme === 'dark'
                        ? 'text-slate-400 hover:text-slate-200 border border-transparent'
                        : 'text-[#9E8B75] hover:text-[#5C4D3C] border border-transparent'
                    }`}
                  >
                    {btn.icon}
                    {btn.label}
                  </button>
                );
              })}
            </div>

            {/* Interactive Quiz Stage */}
            <div className="relative">
              {filteredQuestions.length > 0 && activeQuestion ? (
                <QuizCard
                  question={activeQuestion}
                  onSetStatus={handleSetStatus}
                  status={progress[activeQuestion.id]?.lastStatus || 'unseen'}
                  slideDirection={slideDirection}
                  theme={theme}
                />
              ) : (
                <div className={`w-full text-center py-10 md:py-16 border rounded-3xl transition-all duration-300 ${
                  theme === 'dark' ? 'bg-[#0b1329]/40 border-slate-800/40' : 'bg-white/80 border-amber-200/50'
                }`} id="empty-state">
                  <p className={`text-xs md:text-base font-medium font-sans px-4 ${theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'}`}>
                    선택한 과목 및 유형에 등록된 문제가 없습니다.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`mt-3 px-3 py-1.5 rounded-xl border text-[10px] md:text-sm font-semibold transition cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-blue-600/10 hover:bg-blue-600/20 border-blue-500/20 text-blue-400'
                        : 'bg-[#BCA38A]/10 hover:bg-[#BCA38A]/20 border-amber-300/40 text-[#8D7B68]'
                    }`}
                  >
                    새 문제 추가하기
                  </button>
                </div>
              )}
            </div>

            {/* Dot Matrix & Horizontal Navigation (Optimized for Mobile) */}
            {filteredQuestions.length > 0 && (
              <div className="flex flex-col gap-4 pt-1" id="navigation-controls">
                
                {/* Matrix Dot Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-1.5 max-w-full mx-auto py-1.5" id="pagination-dots">
                  {filteredQuestions.map((q, idx) => {
                    const isActive = idx === activeIndex;
                    const lastStatus = progress[q.id]?.lastStatus;
                    
                    return (
                      <button
                        key={q.id}
                        onClick={() => handleDotClick(idx)}
                        className={`transition-all duration-250 cursor-pointer ${
                          isActive 
                            ? theme === 'dark'
                              ? 'w-6 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]' 
                              : 'w-6 h-1.5 rounded-full bg-[#BCA38A] shadow-[0_0_8px_rgba(188,163,138,0.8)]'
                            : lastStatus === 'correct'
                            ? 'w-1.5 h-1.5 rounded-full bg-emerald-500'
                            : lastStatus === 'incorrect'
                            ? 'w-1.5 h-1.5 rounded-full bg-rose-500'
                            : theme === 'dark'
                            ? 'w-1.5 h-1.5 rounded-full bg-slate-700/60 hover:bg-slate-500'
                            : 'w-1.5 h-1.5 rounded-full bg-amber-200/60 hover:bg-[#BCA38A]/50'
                        }`}
                        title={`${idx + 1}번 퀴즈 카드`}
                        id={`dot-${idx}`}
                      />
                    );
                  })}
                </div>

                {/* Bottom Nav Action Buttons (Side by Side layout optimized for mobile thumbs) */}
                <div className="grid grid-cols-2 gap-3" id="navigation-btn-grid">
                  <button
                    onClick={handlePrev}
                    className={`px-3.5 py-2.5 rounded-xl md:rounded-2xl border font-semibold tracking-wide transition flex items-center justify-center gap-1 cursor-pointer text-[11px] md:text-sm ${
                      theme === 'dark'
                        ? 'bg-[#0b1329]/60 hover:bg-[#0b1329] border-slate-800/60 hover:border-slate-700 text-slate-300'
                        : 'bg-white/80 hover:bg-white border-amber-200/50 hover:border-amber-300 text-[#5C4D3C] shadow-sm'
                    }`}
                    id="btn-prev-question"
                  >
                    <ChevronLeft className={`w-3.5 h-3.5 flex-shrink-0 ${theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'}`} />
                    이전
                  </button>

                  <button
                    onClick={handleNext}
                    className={`px-3.5 py-2.5 rounded-xl md:rounded-2xl border font-semibold tracking-wide transition flex items-center justify-center gap-1 cursor-pointer text-[11px] md:text-sm ${
                      theme === 'dark'
                        ? 'bg-[#0b1329]/60 hover:bg-[#0b1329] border-slate-800/60 hover:border-slate-700 text-slate-300'
                        : 'bg-white/80 hover:bg-white border-amber-200/50 hover:border-amber-300 text-[#5C4D3C] shadow-sm'
                    }`}
                    id="btn-next-question"
                  >
                    다음
                    <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 ${theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'}`} />
                  </button>
                </div>
              </div>
            )}
          </div>
      </main>

      {/* Humble Footer Branding */}
      <footer className={`w-full text-center mt-8 py-2 border-t text-[10px] font-mono select-none z-10 transition-colors duration-300 ${
        theme === 'dark' ? 'border-slate-900/10 text-slate-500' : 'border-amber-200/10 text-[#8D7B68]/60'
      }`} id="app-footer">
        © 2026 문제풀이 카드 • ALL TOPICS LOADED
      </footer>

      {/* Custom Addition Modal */}
      <AddQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddQuestion={handleAddQuestion}
        theme={theme}
        subjectsList={subjectsList}
        subSubjects={subSubjects}
        defaultSubjectId={selectedSubject}
      />

      {/* Quiz History Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40"
              id="sidebar-backdrop"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className={`fixed right-0 top-0 bottom-0 w-80 md:w-96 z-50 shadow-2xl p-5 md:p-6 flex flex-col h-full border-l transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-[#080d1a] border-slate-800/80 text-slate-100 shadow-[0_0_50px_rgba(30,41,59,0.5)]' 
                  : 'bg-[#FAF8F5] border-amber-200 text-[#5C4D3C] shadow-[0_10px_40px_rgba(188,163,138,0.15)]'
              }`}
              id="sidebar-drawer"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-dashed border-slate-700/20 mb-4 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg border ${
                    theme === 'dark' ? 'bg-blue-600/10 border-blue-500/20 text-blue-400' : 'bg-[#BCA38A]/10 border-[#BCA38A]/20 text-[#8D7B68]'
                  }`}>
                    <BookmarkCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm md:text-base font-bold">풀이 기록 및 현황</h2>
                </div>
                
                <div className="flex items-center gap-1">
                  {/* Reset button in Sidebar */}
                  <button
                    onClick={handleResetProgress}
                    title="기록 초기화"
                    className={`p-1.5 rounded-lg border transition cursor-pointer flex items-center justify-center ${
                      theme === 'dark'
                        ? 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        : 'bg-white/80 border-amber-200/60 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300 shadow-sm'
                    }`}
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className={`p-1.5 rounded-lg border transition cursor-pointer flex items-center justify-center ${
                      theme === 'dark'
                        ? 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        : 'bg-white/80 border-amber-200/60 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300 shadow-sm'
                    }`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sidebar Tabs (Incorrect vs Correct list) */}
              <div className={`grid grid-cols-2 gap-1 p-0.5 rounded-xl border mb-3 flex-shrink-0 ${
                theme === 'dark' ? 'bg-slate-900/40 border-slate-800/80' : 'bg-[#F3EDE2]/60 border-amber-200/60'
              }`}>
                <button
                  onClick={() => setSidebarActiveTab('incorrect')}
                  className={`py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer border ${
                    sidebarActiveTab === 'incorrect'
                      ? theme === 'dark'
                        ? 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                        : 'bg-rose-50 border-rose-200 text-rose-700'
                      : 'text-slate-400 border-transparent hover:text-rose-400'
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  더 공부 ({incorrectQuestions.length})
                </button>
                
                <button
                  onClick={() => setSidebarActiveTab('correct')}
                  className={`py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer border ${
                    sidebarActiveTab === 'correct'
                      ? theme === 'dark'
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'text-slate-400 border-transparent hover:text-emerald-400'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 flex-shrink-0" />
                  알고 있음 ({correctQuestions.length})
                </button>
              </div>

              {/* Subject Filter Pills for Right Sidebar */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar scroll-smooth flex-shrink-0 border-b border-dashed border-slate-700/10" id="sidebar-subject-filters">
                <button
                  onClick={() => setRightSidebarSubjectFilter('all')}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold whitespace-nowrap border transition cursor-pointer ${
                    rightSidebarSubjectFilter === 'all'
                      ? theme === 'dark'
                        ? 'bg-blue-600 border-blue-500 text-slate-100 shadow-[0_0_10px_rgba(37,99,235,0.25)]'
                        : 'bg-[#BCA38A] border-[#9E8471] text-white shadow-sm'
                      : theme === 'dark'
                      ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-white border-amber-200/50 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300'
                  }`}
                >
                  전체 ({sidebarActiveTab === 'incorrect' ? incorrectQuestions.length : correctQuestions.length})
                </button>
                {subjectsList.map((sub) => {
                  const isActive = rightSidebarSubjectFilter === sub.id;
                  const count = (sidebarActiveTab === 'incorrect' ? incorrectQuestions : correctQuestions).filter(q => 
                    isQuestionInSubject(q, sub.id)
                  ).length;

                  return (
                    <button
                      key={sub.id}
                      onClick={() => setRightSidebarSubjectFilter(sub.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold whitespace-nowrap border transition cursor-pointer flex items-center gap-1 ${
                        isActive
                          ? theme === 'dark'
                            ? 'bg-blue-600 border-blue-500 text-slate-100 shadow-[0_0_10px_rgba(37,99,235,0.25)]'
                            : 'bg-[#BCA38A] border-[#9E8471] text-white shadow-sm'
                          : theme === 'dark'
                          ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                          : 'bg-white border-amber-200/50 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300'
                      }`}
                    >
                      {sub.label}
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? theme === 'dark' ? 'bg-blue-700 text-blue-100' : 'bg-[#9E8471] text-amber-50'
                          : theme === 'dark' ? 'bg-slate-950/60 text-slate-500' : 'bg-amber-100/60 text-[#8D7B68]/70'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Scrollable List container */}
              <div className="flex-grow overflow-y-auto no-scrollbar space-y-2 pb-4">
                {sidebarActiveTab === 'incorrect' ? (
                  incorrectQuestions.length > 0 ? (
                    filteredIncorrectQuestions.length > 0 ? (
                      filteredIncorrectQuestions.map((q) => (
                        <button
                          key={q.id}
                          onClick={() => handleJumpToQuestion(q)}
                          className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                            theme === 'dark'
                              ? 'bg-slate-900/20 border-slate-800/50 hover:bg-slate-900/60 hover:border-rose-500/30 text-slate-200'
                              : 'bg-white border-amber-200/40 hover:bg-[#FAF6F0] hover:border-[#BCA38A] text-[#5C4D3C] shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className={`text-[9px] md:text-[10px] font-bold ${
                              theme === 'dark' ? 'text-rose-400/80' : 'text-rose-600/80'
                            }`}>
                              [{q.subject <= 4 ? `${q.subject}과목` : getSubjectLabel(q.subject)}] {q.subjectTitle}
                            </span>
                            <span className={`text-[8px] md:text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                              theme === 'dark' ? 'bg-rose-500/10 text-rose-300' : 'bg-rose-50 text-rose-700'
                            }`}>
                              {q.type === 'multiple' ? '객관식' : '주관식'}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm font-medium leading-relaxed line-clamp-2">
                            {q.question}
                          </p>
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-10 px-4 space-y-2">
                        <p className="text-lg">🔍</p>
                        <p className={`text-xs font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'}`}>
                          선택한 과목 분류에 해당하는 오답이 없습니다.
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-10 px-4 space-y-2">
                      <p className="text-lg">✨</p>
                      <p className={`text-xs font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'}`}>
                        틀린 문제가 없습니다! 아주 잘하고 계시네요.
                      </p>
                    </div>
                  )
                ) : (
                  correctQuestions.length > 0 ? (
                    filteredCorrectQuestions.length > 0 ? (
                      filteredCorrectQuestions.map((q) => (
                        <button
                          key={q.id}
                          onClick={() => handleJumpToQuestion(q)}
                          className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                            theme === 'dark'
                              ? 'bg-slate-900/20 border-slate-800/50 hover:bg-slate-900/60 hover:border-emerald-500/30 text-slate-200'
                              : 'bg-white border-amber-200/40 hover:bg-[#FAF6F0] hover:border-[#BCA38A] text-[#5C4D3C] shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className={`text-[9px] md:text-[10px] font-bold ${
                              theme === 'dark' ? 'text-emerald-400/80' : 'text-emerald-600/80'
                            }`}>
                              [{q.subject <= 4 ? `${q.subject}과목` : getSubjectLabel(q.subject)}] {q.subjectTitle}
                            </span>
                            <span className={`text-[8px] md:text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                              theme === 'dark' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
                            }`}>
                              {q.type === 'multiple' ? '객관식' : '주관식'}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm font-medium leading-relaxed line-clamp-2">
                            {q.question}
                          </p>
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-10 px-4 space-y-2">
                        <p className="text-lg">🔍</p>
                        <p className={`text-xs font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'}`}>
                          선택한 과목 분류에 해당하는 완료된 문제가 없습니다.
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-10 px-4 space-y-1">
                      <p className="text-lg">📖</p>
                      <p className={`text-xs font-sans ${theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'}`}>
                        아직 알고 있음으로 분류된 문제가 없습니다. 문제를 풀고 정답 상태를 표시해 보세요!
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Subject & Courses Left Sidebar Drawer */}
      <AnimatePresence>
        {isLeftSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLeftSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40"
              id="left-sidebar-backdrop"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className={`fixed left-0 top-0 bottom-0 w-80 md:w-96 z-50 shadow-2xl p-5 md:p-6 flex flex-col h-full border-r transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-[#080d1a] border-slate-800/80 text-slate-100 shadow-[0_0_50px_rgba(30,41,59,0.5)]' 
                  : 'bg-[#FAF8F5] border-amber-200 text-[#5C4D3C] shadow-[0_10px_40px_rgba(188,163,138,0.15)]'
              }`}
              id="left-sidebar-drawer"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-dashed border-slate-700/20 mb-4 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg border ${
                    theme === 'dark' ? 'bg-blue-600/10 border-blue-500/20 text-blue-400' : 'bg-[#BCA38A]/10 border-[#BCA38A]/20 text-[#8D7B68]'
                  }`}>
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm md:text-base font-bold">학습 분류 목록</h2>
                </div>
                
                <button
                  onClick={() => setIsLeftSidebarOpen(false)}
                  className={`p-1.5 rounded-lg border transition cursor-pointer flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-white/80 border-amber-200/60 text-[#8D7B68] hover:text-[#5C4D3C] hover:border-amber-300 shadow-sm'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Sidebar Subject Items */}
              <div className="flex-grow overflow-y-auto no-scrollbar space-y-4 py-2">
                {subjectsList.map((sub) => {
                  const subQuestions = questions.filter(q => isQuestionInSubject(q, sub.id));
                  const subTotal = subQuestions.length;
                  const subCorrect = subQuestions.filter(q => progress[q.id]?.lastStatus === 'correct').length;
                  const subIncorrect = subQuestions.filter(q => progress[q.id]?.lastStatus === 'incorrect').length;
                  const subUnseen = subTotal - subCorrect - subIncorrect;

                  const percentCorrect = subTotal > 0 ? (subCorrect / subTotal) * 100 : 0;
                  const percentIncorrect = subTotal > 0 ? (subIncorrect / subTotal) * 100 : 0;
                  const percentUnseen = subTotal > 0 ? (subUnseen / subTotal) * 100 : 0;

                  const IconComponent = IconMap[sub.iconName] || BookOpen;
                  const iconColor = getIconColor(sub.iconName);
                  const isSelected = selectedSubject === sub.id;

                  return (
                    <motion.div
                      key={sub.id}
                      onClick={() => {
                        setSelectedSubject(sub.id);
                        setActiveIndex(0);
                        setIsLeftSidebarOpen(false);
                      }}
                      whileHover={{ scale: 1.01 }}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group/item ${
                        isSelected
                          ? theme === 'dark'
                            ? 'bg-[#122244] border-blue-500 text-slate-100 shadow-lg'
                            : 'bg-[#FAF6F0] border-[#BCA38A] text-[#5C4D3C] shadow-sm'
                          : theme === 'dark'
                          ? 'bg-[#0b1329]/30 border-slate-800/50 hover:bg-[#0b1329]/60 hover:border-slate-700 text-slate-300'
                          : 'bg-white border-amber-200/30 hover:bg-[#FAF6F0] hover:border-[#BCA38A]/50 text-[#8D7B68]'
                      }`}
                    >
                      <div className="space-y-2">
                        {/* Title Row */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg border ${iconColor}`}>
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-extrabold tracking-tight">
                              {sub.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-slate-400">
                              {subTotal}문제
                            </span>
                            {sub.isCustom && (
                              <button
                                onClick={(e) => handleDeleteSubject(e, sub.id, sub.label)}
                                className={`p-1 rounded-md opacity-0 group-hover/item:opacity-100 hover:scale-105 transition duration-200 ${
                                  theme === 'dark' ? 'text-rose-400 hover:bg-rose-500/10' : 'text-rose-600 hover:bg-rose-50'
                                }`}
                                title="분류 삭제"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-[10px] md:text-xs leading-relaxed font-sans ${
                          theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'
                        }`}>
                          {sub.desc}
                        </p>
                      </div>

                      {/* Stacked Progress bar */}
                      <div className="mt-3 space-y-1.5">
                        <div className={`h-1.5 rounded-full overflow-hidden flex ${
                          theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
                        }`}>
                          <div style={{ width: `${percentCorrect}%` }} className="bg-emerald-500 transition-all duration-300" />
                          <div style={{ width: `${percentIncorrect}%` }} className="bg-rose-500 transition-all duration-300" />
                          <div style={{ width: `${percentUnseen}%` }} className="bg-slate-400/30 transition-all duration-300" />
                        </div>
                        
                        <div className="flex justify-between items-center text-[8px] font-semibold text-slate-500">
                          <span className="flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" />
                            알고있음 {subCorrect}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-rose-500 inline-block" />
                            더공부 {subIncorrect}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-slate-400/40 inline-block" />
                            미완료 {subUnseen}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Add Subject Section at the bottom */}
              <div className="pt-4 border-t border-dashed border-slate-700/20 mt-2 flex-shrink-0">
                {!isAddingSubject ? (
                  <button
                    onClick={() => setIsAddingSubject(true)}
                    className={`w-full py-2.5 rounded-xl border font-semibold text-xs tracking-wide transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-blue-600/10 hover:bg-blue-600/25 border-blue-500/20 text-blue-400'
                        : 'bg-[#BCA38A]/10 hover:bg-[#BCA38A]/20 border-amber-300/40 text-[#8D7B68]'
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    새로운 학습 분류 추가
                  </button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3.5 rounded-xl border space-y-3 ${
                      theme === 'dark' ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-amber-200/60 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold font-sans">새 학습 분류 정의</h4>
                      <button 
                        onClick={() => setIsAddingSubject(false)}
                        className="text-slate-400 hover:text-slate-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-medium font-sans text-slate-400">분류 이름 (ex: 정보보안기사)</label>
                      <input
                        type="text"
                        placeholder="분류 명칭을 입력하세요"
                        value={newSubjectName}
                        onChange={(e) => setNewSubjectName(e.target.value)}
                        autoFocus
                        className={`w-full px-3 py-1.5 rounded-lg border text-xs focus:outline-none font-sans ${
                          theme === 'dark'
                            ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                            : 'bg-white border-amber-200 text-slate-800 focus:border-[#BCA38A]'
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-medium font-sans text-slate-400">간단한 설명 (선택)</label>
                      <input
                        type="text"
                        placeholder="설명을 입력하세요"
                        value={newSubjectDesc}
                        onChange={(e) => setNewSubjectDesc(e.target.value)}
                        className={`w-full px-3 py-1.5 rounded-lg border text-xs focus:outline-none font-sans ${
                          theme === 'dark'
                            ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                            : 'bg-white border-amber-200 text-slate-800 focus:border-[#BCA38A]'
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-medium font-sans text-slate-400">아이콘 선택</label>
                      <div className="flex gap-2 justify-start py-0.5">
                        {['Shield', 'Lock', 'BookOpen', 'Terminal'].map((ico) => {
                          const IconComp = IconMap[ico];
                          return (
                            <button
                              type="button"
                              key={ico}
                              onClick={() => setSelectedIcon(ico)}
                              className={`p-1.5 rounded-lg border transition ${
                                selectedIcon === ico
                                  ? theme === 'dark'
                                    ? 'bg-blue-600/30 border-blue-500 text-blue-300'
                                    : 'bg-[#BCA38A]/20 border-[#BCA38A] text-[#8D7B68]'
                                  : theme === 'dark'
                                  ? 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                                  : 'bg-white border-amber-200 text-slate-400 hover:text-[#5C4D3C]'
                              }`}
                            >
                              <IconComp className="w-3.5 h-3.5" />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      onClick={handleAddSubject}
                      disabled={!newSubjectName.trim()}
                      className={`w-full py-1.5 rounded-lg font-bold text-xs tracking-wide transition cursor-pointer flex items-center justify-center ${
                        newSubjectName.trim()
                          ? theme === 'dark'
                            ? 'bg-blue-600 hover:bg-blue-500 text-white'
                            : 'bg-[#BCA38A] hover:bg-[#AD937A] text-white shadow-sm'
                          : 'opacity-50 cursor-not-allowed bg-slate-800/40 text-slate-500'
                      }`}
                    >
                      과목 등록 완료
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Category Addition Modal */}
      <AnimatePresence>
        {isAddCategoryModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddCategoryModalOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50"
              id="category-modal-backdrop"
            />

            {/* Modal Box */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className={`w-full max-w-sm pointer-events-auto rounded-2xl border p-5 md:p-6 shadow-2xl transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#0b1329] border-slate-800 text-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.8)]'
                    : 'bg-white border-amber-200 text-[#5C4D3C] shadow-[0_15px_50px_rgba(188,163,138,0.25)]'
                }`}
                id="category-modal-box"
              >
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/10 mb-4">
                  <div className="space-y-0.5">
                    <h3 className="text-sm md:text-base font-bold tracking-tight">세부 과목(카테고리) 추가</h3>
                    <p className="text-[10px] text-slate-400">선택된 시험: {getActiveMainExam().label}</p>
                  </div>
                  <button 
                    onClick={() => setIsAddCategoryModalOpen(false)}
                    className="text-slate-400 hover:text-slate-200 p-1 rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] md:text-xs font-medium text-slate-400">과목 분류 명칭 (예: 5과목, 추가과목)</label>
                    <input
                      type="text"
                      placeholder="예: 5과목"
                      value={newCategoryLabel}
                      onChange={(e) => setNewCategoryLabel(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl border text-xs md:text-sm focus:outline-none ${
                        theme === 'dark'
                          ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                          : 'bg-white border-amber-200 text-slate-800 focus:border-[#BCA38A]'
                      }`}
                      autoFocus
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] md:text-xs font-medium text-slate-400">세부 과목 설명/제목 (예: 인공지능 기출)</label>
                    <input
                      type="text"
                      placeholder="예: 인공지능 및 딥러닝"
                      value={newCategoryTitle}
                      onChange={(e) => setNewCategoryTitle(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl border text-xs md:text-sm focus:outline-none ${
                        theme === 'dark'
                          ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-blue-500'
                          : 'bg-white border-amber-200 text-slate-800 focus:border-[#BCA38A]'
                      }`}
                    />
                  </div>

                  <button
                    onClick={handleAddCategory}
                    disabled={!newCategoryLabel.trim() || !newCategoryTitle.trim()}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition cursor-pointer flex items-center justify-center ${
                      newCategoryLabel.trim() && newCategoryTitle.trim()
                        ? theme === 'dark'
                          ? 'bg-blue-600 hover:bg-blue-500 text-white'
                          : 'bg-[#BCA38A] hover:bg-[#AD937A] text-white shadow-sm'
                        : 'opacity-50 cursor-not-allowed bg-slate-800/40 text-slate-500'
                    }`}
                  >
                    과목 등록 완료
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Reusable Custom Confirmation Dialog */}
      <AnimatePresence>
        {confirmModal.isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50"
              id="confirm-backdrop"
            />

            {/* Modal Box */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className={`w-full max-w-sm pointer-events-auto rounded-2xl border p-5 md:p-6 shadow-2xl transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#0b1329] border-slate-800 text-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.8)]'
                    : 'bg-white border-amber-200 text-[#5C4D3C] shadow-[0_15px_50px_rgba(188,163,138,0.25)]'
                }`}
                id="confirm-modal-box"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-xl flex-shrink-0 ${
                    theme === 'dark' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold tracking-tight">
                      {confirmModal.title}
                    </h3>
                    <p className={`text-xs md:text-sm font-sans leading-relaxed ${
                      theme === 'dark' ? 'text-slate-400' : 'text-[#8D7B68]'
                    }`}>
                      {confirmModal.message}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 mt-5">
                  <button
                    onClick={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                    className={`px-3 md:px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                        : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
                    }`}
                  >
                    취소
                  </button>
                  <button
                    onClick={confirmModal.onConfirm}
                    className={`px-3 md:px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer text-white shadow-md shadow-rose-500/10 ${
                      theme === 'dark'
                        ? 'bg-rose-600 hover:bg-rose-500 hover:shadow-rose-600/20'
                        : 'bg-rose-500 hover:bg-rose-600 hover:shadow-rose-500/20'
                    }`}
                  >
                    확인
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
