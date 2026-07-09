import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, HelpCircle, FileText } from 'lucide-react';
import { Question } from '../types';

interface AddQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddQuestion: (newQuestion: Omit<Question, 'id'>) => void;
  theme?: 'dark' | 'light';
  subjectsList: { id: number; label: string; desc: string; }[];
  subSubjects: { id: number; parentSubjectId: number; label: string; title: string; }[];
  defaultSubjectId: number;
}

export default function AddQuestionModal({ 
  isOpen, 
  onClose, 
  onAddQuestion, 
  theme = 'dark',
  subjectsList,
  subSubjects,
  defaultSubjectId
}: AddQuestionModalProps) {
  const isDark = theme === 'dark';
  const [subject, setSubject] = useState<number>(0);
  const [subSubject, setSubSubject] = useState<number>(1);

  // Get matching sub-subjects for the selected exam
  const matchedSubSubjects = subSubjects.filter(sub => sub.parentSubjectId === subject);

  useEffect(() => {
    if (isOpen) {
      const foundSub = subSubjects.find(s => s.id === defaultSubjectId);
      if (foundSub) {
        setSubject(foundSub.parentSubjectId);
        setSubSubject(defaultSubjectId);
      } else {
        const foundMain = subjectsList.find(s => s.id === defaultSubjectId);
        if (foundMain) {
          setSubject(defaultSubjectId);
          const matched = subSubjects.filter(s => s.parentSubjectId === defaultSubjectId);
          if (matched.length > 0) {
            setSubSubject(matched[0].id);
          }
        } else {
          setSubject(0);
          setSubSubject(1);
        }
      }
    }
  }, [isOpen, defaultSubjectId, subSubjects, subjectsList]);

  // Handle auto-reset when subject changes
  useEffect(() => {
    if (matchedSubSubjects.length > 0) {
      if (!matchedSubSubjects.some(s => s.id === subSubject)) {
        setSubSubject(matchedSubSubjects[0].id);
      }
    }
  }, [subject, subSubjects]);
  const [subjectTitle, setSubjectTitle] = useState('');
  const [type, setType] = useState<'multiple' | 'subjective'>('multiple');
  const [question, setQuestion] = useState('');
  
  // Multiple Choice Specific State
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctOptionIdx, setCorrectOptionIdx] = useState<number>(0);

  // Subjective Specific State
  const [subjectiveAnswer, setSubjectiveAnswer] = useState('');

  const [error, setError] = useState('');

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subjectTitle.trim()) {
      setError('과목 소제목을 입력해 주세요.');
      return;
    }
    if (!question.trim()) {
      setError('문제를 입력해 주세요.');
      return;
    }

    let finalAnswer = '';
    let finalOptions: string[] | undefined = undefined;

    if (type === 'multiple') {
      // Validate all options are filled
      if (options.some(opt => !opt.trim())) {
        setError('객관식의 4개 보기를 모두 입력해 주세요.');
        return;
      }
      finalAnswer = String(correctOptionIdx);
      finalOptions = options.map(opt => opt.trim());
    } else {
      if (!subjectiveAnswer.trim()) {
        setError('주관식 정답을 입력해 주세요.');
        return;
      }
      finalAnswer = subjectiveAnswer.trim();
    }

    // Map subject numerical ID to Subject Title if pre-seeded matching is available
    let autoSubjectTitle = subjectTitle.trim();

    const matchedSubs = subSubjects.filter(s => s.parentSubjectId === subject);
    const hasMatchedSubs = matchedSubs.length > 0;

    onAddQuestion({
      subject: hasMatchedSubs ? subSubject : subject,
      subjectTitle: autoSubjectTitle,
      type,
      question: question.trim(),
      answer: finalAnswer,
      options: finalOptions,
      isCustom: true
    });

    // Reset local states
    const foundSub = subSubjects.find(s => s.id === defaultSubjectId);
    if (foundSub) {
      setSubject(foundSub.parentSubjectId);
      setSubSubject(defaultSubjectId);
    } else {
      setSubject(defaultSubjectId);
      const matched = subSubjects.filter(s => s.parentSubjectId === defaultSubjectId);
      if (matched.length > 0) {
        setSubSubject(matched[0].id);
      } else {
        setSubSubject(1);
      }
    }
    setSubjectTitle('');
    setType('multiple');
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectOptionIdx(0);
    setSubjectiveAnswer('');
    setError('');
    onClose();
  };

  // Styling helpers
  const modalContainerClass = isDark
    ? 'bg-[#0b1329] border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]'
    : 'bg-[#FAF8F5] border border-amber-200 shadow-[0_10px_40px_rgba(188,163,138,0.25)]';

  const titleClass = isDark ? 'text-slate-100' : 'text-[#5C4D3C]';
  const labelClass = isDark ? 'text-slate-400' : 'text-[#8D7B68]';
  const closeButtonClass = isDark ? 'text-slate-400 hover:text-slate-100' : 'text-[#9E8B75] hover:text-[#5C4D3C]';
  
  const iconBgClass = isDark 
    ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' 
    : 'bg-[#BCA38A]/10 border border-[#BCA38A]/30 text-[#8D7B68]';

  const errorClass = isDark
    ? 'text-rose-400 bg-rose-500/10 border border-rose-500/20'
    : 'text-rose-700 bg-rose-50 border border-rose-200';

  const activeBtnClass = isDark
    ? 'bg-blue-600/20 border-blue-500 text-blue-300'
    : 'bg-[#BCA38A]/20 border-[#BCA38A] text-[#8D7B68]';

  const inactiveBtnClass = isDark
    ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
    : 'bg-white border-amber-100 text-[#9E8B75] hover:border-amber-300';

  const inputClass = isDark
    ? 'bg-slate-900/60 border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100'
    : 'bg-white border-amber-200 focus:border-[#BCA38A] focus:ring-1 focus:ring-[#BCA38A] text-[#5C4D3C]';

  const submitBtnClass = isDark
    ? 'bg-blue-600 hover:bg-blue-500 text-slate-100 shadow-[0_0_15px_rgba(37,99,235,0.3)]'
    : 'bg-[#BCA38A] hover:bg-[#AD937A] text-white shadow-[0_0_12px_rgba(188,163,138,0.25)]';

  const badgeSelectedClass = isDark
    ? 'bg-blue-600 border-blue-400 text-slate-100 shadow-[0_0_8px_rgba(37,99,235,0.4)]'
    : 'bg-[#BCA38A] border-[#9E8471] text-white shadow-[0_0_8px_rgba(188,163,138,0.4)]';

  const badgeUnselectedClass = isDark
    ? 'border-slate-800 text-slate-500 hover:text-slate-300'
    : 'border-amber-200 text-[#9E8B75] hover:text-[#5C4D3C]';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className={`relative w-full max-w-lg rounded-3xl p-5 md:p-7 z-10 max-h-[90vh] overflow-y-auto no-scrollbar transition-all duration-300 ${modalContainerClass}`}
            id="add-question-modal-content"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-5 right-5 transition cursor-pointer p-1 ${closeButtonClass}`}
              id="btn-close-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-1.5 rounded-lg ${iconBgClass}`}>
                <Plus className="w-4 h-4" />
              </div>
              <h2 className={`text-base md:text-xl font-bold font-sans ${titleClass}`}>문제 추가</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {error && (
                <div className={`p-3 text-xs md:text-sm rounded-xl font-sans ${errorClass}`}>
                  {error}
                </div>
              )}

              {/* Question Type Selection */}
              <div className="space-y-1.5">
                <label className={`text-xs font-medium font-sans ${labelClass}`}>문제 유형</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setType('multiple');
                      setError('');
                    }}
                    className={`py-2 rounded-xl text-xs md:text-sm font-semibold border transition cursor-pointer font-sans flex items-center justify-center gap-1.5 ${
                      type === 'multiple' ? activeBtnClass : inactiveBtnClass
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                    객관식 (선택형)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setType('subjective');
                      setError('');
                    }}
                    className={`py-2 rounded-xl text-xs md:text-sm font-semibold border transition cursor-pointer font-sans flex items-center justify-center gap-1.5 ${
                      type === 'subjective' ? activeBtnClass : inactiveBtnClass
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    주관식 (단답형)
                  </button>
                </div>
              </div>

              {/* Subject Selection */}
              <div className="space-y-1.5">
                <label className={`text-xs font-medium font-sans ${labelClass}`}>과목 구분 (시험 분류)</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {subjectsList.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setSubject(sub.id)}
                      className={`py-1.5 px-2 rounded-xl text-xs font-semibold border transition cursor-pointer font-sans text-center truncate ${
                        subject === sub.id ? activeBtnClass : inactiveBtnClass
                      }`}
                      title={sub.label}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sub-subject Selection (Only shown when active exam has sub-subjects) */}
              {matchedSubSubjects.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-1.5 border-t border-dashed pt-2.5 pb-0.5 border-slate-700/10"
                >
                  <label className={`text-xs font-medium font-sans ${labelClass}`}>세부 과목 구분 (과목 선택)</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {matchedSubSubjects.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSubSubject(sub.id)}
                        className={`py-1.5 px-2 rounded-xl text-[11px] font-semibold border transition cursor-pointer font-sans text-left truncate ${
                          subSubject === sub.id ? activeBtnClass : inactiveBtnClass
                        }`}
                        title={sub.title ? `${sub.label}: ${sub.title}` : sub.label}
                      >
                        {sub.label}{sub.title ? `: ${sub.title}` : ''}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Subject Title */}
              <div className="space-y-1">
                <label htmlFor="subject-title" className={`text-xs font-medium font-sans ${labelClass}`}>상세 과목/소제목</label>
                <input
                  id="subject-title"
                  type="text"
                  placeholder="예: 디자인 싱킹, SQL 응용, 네트워크 계층"
                  value={subjectTitle}
                  onChange={(e) => setSubjectTitle(e.target.value)}
                  className={`w-full rounded-xl px-3 py-2 text-xs md:text-sm outline-none transition ${inputClass}`}
                  maxLength={30}
                />
              </div>

              {/* Question */}
              <div className="space-y-1">
                <label htmlFor="question-input" className={`text-xs font-medium font-sans ${labelClass}`}>문제 질문 (Question)</label>
                <textarea
                  id="question-input"
                  rows={2}
                  placeholder="질문 내용을 입력하세요."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className={`w-full rounded-xl px-3 py-2 text-xs md:text-sm outline-none transition resize-none ${inputClass}`}
                />
              </div>

              {/* Dynamic Answer Fields */}
              {type === 'multiple' ? (
                <div className={`space-y-2 border-t pt-3 ${isDark ? 'border-slate-800/60' : 'border-amber-100'}`}>
                  <label className={`text-xs font-medium block font-sans ${labelClass}`}>보기 및 정답 선택 (4지 선다)</label>
                  <div className="space-y-2">
                    {options.map((opt, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setCorrectOptionIdx(idx)}
                          className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs flex-shrink-0 cursor-pointer transition ${
                            correctOptionIdx === idx ? badgeSelectedClass : badgeUnselectedClass
                          }`}
                        >
                          {idx + 1}
                        </button>
                        <input
                          type="text"
                          placeholder={`보기 ${idx + 1}번 내용을 입력하세요.`}
                          value={opt}
                          onChange={(e) => handleOptionChange(idx, e.target.value)}
                          className={`w-full rounded-xl px-3 py-1.5 text-xs md:text-sm outline-none transition ${
                            correctOptionIdx === idx 
                              ? (isDark ? 'border-blue-500/50 bg-blue-950/10' : 'border-[#BCA38A] bg-[#FAF6F0]') 
                              : (isDark ? 'border-slate-800 focus:border-blue-500/50' : 'border-amber-200 focus:border-[#BCA38A]')
                          } ${isDark ? 'bg-slate-900/60 text-slate-100' : 'bg-white text-[#5C4D3C]'}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`space-y-1 border-t pt-3 ${isDark ? 'border-slate-800/60' : 'border-amber-100'}`}>
                  <label htmlFor="answer-input" className={`text-xs font-medium font-sans ${labelClass}`}>주관식 정답 및 설명 (Answer)</label>
                  <textarea
                    id="answer-input"
                    rows={2}
                    placeholder="정답 및 해설을 입력하세요."
                    value={subjectiveAnswer}
                    onChange={(e) => setSubjectiveAnswer(e.target.value)}
                    className={`w-full rounded-xl px-3 py-2 text-xs md:text-sm outline-none transition resize-none ${inputClass}`}
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full font-semibold py-2 rounded-xl transition mt-2 cursor-pointer font-sans text-xs md:text-sm ${submitBtnClass}`}
                id="btn-submit-question"
              >
                추가하기
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
