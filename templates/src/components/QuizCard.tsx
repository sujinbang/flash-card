import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, AlertCircle, Sparkles, Eye, HelpCircle, FileText, BookOpen } from 'lucide-react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  onSetStatus: (status: 'correct' | 'incorrect') => void;
  status?: 'correct' | 'incorrect' | 'unseen';
  slideDirection: 'left' | 'right';
  theme?: 'dark' | 'light';
}

export default function QuizCard({
  question,
  onSetStatus,
  status = 'unseen',
  slideDirection,
  theme = 'dark'
}: QuizCardProps) {
  const isDark = theme === 'dark';
  // Local state to track selected answer for multiple-choice questions
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  
  // Local state to show/hide answer for subjective questions
  const [showSubjectiveAnswer, setShowSubjectiveAnswer] = useState<boolean>(false);

  // Reset local interactive states when question changes
  useEffect(() => {
    setSelectedIdx(null);
    setShowSubjectiveAnswer(false);
  }, [question.id]);

  const handleSelectOption = (idx: number) => {
    if (selectedIdx !== null) return; // Already answered this question card
    setSelectedIdx(idx);
    
    const correctIdx = parseInt(question.answer, 10);
    if (idx === correctIdx) {
      onSetStatus('correct');
    } else {
      onSetStatus('incorrect');
    }
  };

  const isMultiple = question.type === 'multiple';
  const correctIdx = isMultiple ? parseInt(question.answer, 10) : -1;

  const renderTextWithImages = (text: string) => {
    // First split by code blocks: ```language ... ``` or ``` ... ```
    const codeParts = text.split(/(```[\s\S]*?```)/g);
    
    return codeParts.map((codePart, codeIndex) => {
      const codeMatch = codePart.match(/```(\w*)\n?([\s\S]*?)```/);
      if (codeMatch) {
        // Render code block
        const lang = codeMatch[1];
        const codeContent = codeMatch[2];
        return (
          <div key={codeIndex} className={`my-4 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre ${isDark ? 'bg-[#1e293b] text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-800 border border-slate-200'}`}>
            <code>{codeContent.replace(/\\n/g, '\n')}</code>
          </div>
        );
      }
      
      // If not a code block, split by images
      const parts = codePart.split(/(!\[.*?\]\(.*?\))/g);
      return parts.map((part, index) => {
        const match = part.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <span key={`${codeIndex}-${index}`} className="block w-full my-4 flex justify-center">
              <img src={match[2]} alt={match[1]} className={`max-w-full md:max-w-2xl h-auto rounded-lg shadow-sm border ${isDark ? 'border-slate-700' : 'border-slate-200'}`} />
            </span>
          );
        }
        return <React.Fragment key={`${codeIndex}-${index}`}>{part.replace(/\\n/g, '\n')}</React.Fragment>;
      });
    });
  };

  // Animation variants for card slide transition
  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'tween', ease: 'easeOut', duration: 0.25 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'tween', ease: 'easeIn', duration: 0.2 },
        opacity: { duration: 0.15 },
        scale: { duration: 0.15 },
      }
    })
  };

  // Styling calculations based on theme mode
  const cardBgClass = isDark 
    ? 'bg-[#0b1329]/80 backdrop-blur-xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.12)]' 
    : 'bg-white backdrop-blur-xl border border-amber-200/50 shadow-[0_4px_24px_rgba(188,163,138,0.1)]';
  
  const cardGlowBorderClass = isDark ? 'border-blue-400/5' : 'border-[#BCA38A]/10';
  const subjectTextClass = isDark ? 'text-blue-400' : 'text-[#8D7B68]';
  const sparklesClass = isDark ? 'text-blue-400' : 'text-[#BCA38A]';
  
  const typeBadgeClass = isDark 
    ? (isMultiple ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20')
    : (isMultiple ? 'bg-[#EADBC8]/30 text-[#8D7B68] border-amber-200/40' : 'bg-amber-100/40 text-amber-800 border-amber-200/40');
    
  const typeIconColorClass = isDark 
    ? (isMultiple ? 'text-blue-400' : 'text-indigo-400')
    : (isMultiple ? 'text-[#8D7B68]' : 'text-amber-700');

  const correctBadgeClass = isDark 
    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
    : 'bg-emerald-50 text-emerald-600 border border-emerald-200/50';

  const incorrectBadgeClass = isDark 
    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
    : 'bg-rose-50 text-rose-600 border border-rose-200/50';

  const questionTextClass = isDark ? 'text-slate-100' : 'text-slate-800';
  const questionPrefixClass = isDark ? 'text-blue-400' : 'text-[#BCA38A]';

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 md:px-0" id="quiz-card-container">
      <div
        className={`relative w-full rounded-3xl p-4 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${cardBgClass}`}
        id="static-quiz-card-frame"
      >
          {/* Subtle Ambient Accent Border Glow */}
          <div className={`absolute inset-0 border rounded-3xl pointer-events-none ${cardGlowBorderClass}`} />

          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={question.id}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col justify-between"
            >
              {/* Header Metadata (Vibe & Badge) */}
              <div className="flex items-center justify-between gap-2 mb-4 md:mb-5">
                <span className={`text-[10px] md:text-sm font-semibold tracking-wide flex items-center gap-1.5 font-sans ${subjectTextClass}`}>
                  <Sparkles className={`w-3 h-3 md:w-3.5 md:h-3.5 animate-pulse flex-shrink-0 ${sparklesClass}`} />
                  {`[${question.subject}과목] ${question.subjectTitle}`}
                </span>
                
                {/* Status indicators */}
                <div className="flex gap-1 flex-shrink-0">
                  <span className={`flex items-center gap-1 px-2 py-0.5 text-[8px] md:text-xs font-semibold rounded-full border font-sans ${typeBadgeClass}`}>
                    {isMultiple ? (
                      <>
                        <HelpCircle className={`w-2.5 h-2.5 md:w-3 md:h-3 ${typeIconColorClass}`} /> 객관식
                      </>
                    ) : (
                      <>
                        <FileText className={`w-2.5 h-2.5 md:w-3 md:h-3 ${typeIconColorClass}`} /> 주관식
                      </>
                    )}
                  </span>

                  {status === 'correct' && (
                    <span className={`flex items-center gap-1 px-2 py-0.5 text-[8px] md:text-xs font-semibold rounded-full font-sans ${correctBadgeClass}`}>
                      <Check className="w-2.5 h-2.5 md:w-3 md:h-3" /> 맞춤
                    </span>
                  )}
                  {status === 'incorrect' && (
                    <span className={`flex items-center gap-1 px-2 py-0.5 text-[8px] md:text-xs font-semibold rounded-full font-sans ${incorrectBadgeClass}`}>
                      <AlertCircle className="w-2.5 h-2.5 md:w-3 md:h-3" /> 더 공부
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-4 md:space-y-5">
                <h3 className={`text-sm md:text-xl font-medium tracking-tight leading-relaxed flex items-start gap-2 ${questionTextClass}`}>
                  <span className={`font-mono text-base md:text-2xl font-bold flex-shrink-0 ${questionPrefixClass}`}>Q:</span>
                  <span className="pt-0.5 whitespace-pre-wrap w-full">{renderTextWithImages(question.question)}</span>
                </h3>

                {/* Dynamic Rendering depending on 객관식 vs 주관식 */}
                {isMultiple ? (
                  /* --- 객관식 (Multiple Choice) --- */
                  <div className="space-y-2 md:space-y-2.5" id="multiple-choice-options">
                    {question.options?.map((option, idx) => {
                      const isSelected = selectedIdx === idx;
                      const isCorrectAnswer = idx === correctIdx;
                      
                      // Style configurations based on selected status and theme
                      let buttonStyle = isDark 
                        ? 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-900/80 hover:border-slate-700'
                        : 'bg-white border-amber-100 text-slate-700 hover:bg-[#FAF6F0] hover:border-[#BCA38A]/40 shadow-sm';
                      let badgeStyle = isDark 
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-[#FAF6F0] text-[#8D7B68]';

                      if (selectedIdx !== null) {
                        if (isCorrectAnswer) {
                          buttonStyle = isDark 
                            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                            : 'bg-emerald-50 border-emerald-300 text-emerald-800 shadow-sm';
                          badgeStyle = 'bg-emerald-500 text-white';
                        } else if (isSelected) {
                          buttonStyle = isDark 
                            ? 'bg-rose-500/10 border-rose-500 text-rose-200 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                            : 'bg-rose-50 border-rose-300 text-rose-800 shadow-sm';
                          badgeStyle = 'bg-rose-500 text-white';
                        } else {
                          buttonStyle = isDark 
                            ? 'bg-slate-950/20 border-slate-900/60 text-slate-500 opacity-60'
                            : 'bg-slate-50 border-slate-100 text-slate-400 opacity-60';
                          badgeStyle = isDark 
                            ? 'bg-slate-900 text-slate-600'
                            : 'bg-slate-100 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          disabled={selectedIdx !== null}
                          className={`w-full text-left p-2.5 md:p-4 rounded-xl md:rounded-2xl border text-xs md:text-base font-medium transition-all duration-250 flex items-center gap-2 md:gap-3.5 cursor-pointer ${buttonStyle}`}
                          id={`option-btn-${idx}`}
                        >
                          <span className={`w-5 h-5 md:w-7 md:h-7 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-[10px] md:text-sm flex-shrink-0 transition-all duration-200 ${badgeStyle}`}>
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{option}</span>
                        </button>
                      );
                    })}

                    {/* Feedback Toast embedded in Card */}
                    {selectedIdx !== null && (
                      <div className="space-y-2 mt-3 md:mt-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-3 md:p-4 rounded-xl md:rounded-2xl border text-[10px] md:text-sm font-sans flex items-center gap-2 ${
                            selectedIdx === correctIdx
                              ? (isDark ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700')
                              : (isDark ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'bg-rose-50 border-rose-200 text-rose-700')
                          }`}
                        >
                          {selectedIdx === correctIdx ? (
                            <>
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                              <span>정답입니다! <strong>{correctIdx + 1}번</strong>이 맞습니다.</span>
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-rose-400 flex-shrink-0" />
                              <span>틀렸습니다. 정답은 <strong>{correctIdx + 1}번</strong>입니다.</span>
                            </>
                          )}
                        </motion.div>
                        {question.explanation && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-3 md:p-4 rounded-xl md:rounded-2xl border text-[10px] md:text-sm font-sans ${
                              isDark ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-amber-50 border-amber-200 text-slate-700'
                            }`}
                          >
                            <div className="font-bold mb-1 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> 해설</div>
                            <div className="whitespace-pre-wrap leading-relaxed">{renderTextWithImages(question.explanation)}</div>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  /* --- 주관식 (Short Answer / Subjective) --- */
                  <div className="space-y-4" id="subjective-choice-answers">
                    <AnimatePresence>
                      {showSubjectiveAnswer ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`space-y-3 border-t pt-4 ${isDark ? 'border-slate-800/80' : 'border-amber-200/50'}`}
                        >
                          <div className={`leading-relaxed text-xs md:text-base flex items-start gap-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                            <span className={`font-mono text-base md:text-xl font-extrabold flex-shrink-0 ${isDark ? 'text-indigo-400' : 'text-[#BCA38A]'}`}>A:</span>
                            <span className="whitespace-pre-wrap pt-0.5 font-sans">
                              {question.answer.replace(/\\n/g, '\n')}
                            </span>
                          </div>
                          {question.explanation && (
                            <div className={`mt-3 p-3 rounded-xl border text-[10px] md:text-sm font-sans ${
                              isDark ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-amber-50 border-amber-200 text-slate-700'
                            }`}>
                              <div className="font-bold mb-1 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> 해설</div>
                              <div className="whitespace-pre-wrap leading-relaxed">{renderTextWithImages(question.explanation)}</div>
                            </div>
                          )}
                        </motion.div>
                      ) : (
                        <div className={`flex flex-col items-center justify-center py-4 md:py-6 border-t mt-4 space-y-2 text-center ${isDark ? 'border-slate-800/60' : 'border-amber-100'}`}>
                          <p className={`text-[10px] md:text-xs font-sans px-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>머릿속으로 정답을 유추해보고 아래 버튼을 누르세요.</p>
                          <button
                            onClick={() => setShowSubjectiveAnswer(true)}
                            className={`flex items-center gap-1.5 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-sm font-semibold tracking-wide transition cursor-pointer border ${
                              isDark 
                                ? 'bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/30 text-indigo-300'
                                : 'bg-[#BCA38A]/10 hover:bg-[#BCA38A]/20 border-[#BCA38A]/30 text-[#8D7B68]'
                            }`}
                            id="btn-show-subjective-answer"
                          >
                            <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            정답 및 해설 보기
                          </button>
                        </div>
                      )}
                    </AnimatePresence>

                    {/* Self evaluation triggers */}
                    {showSubjectiveAnswer && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`pt-4 border-t flex flex-col sm:flex-row justify-end gap-2 ${isDark ? 'border-slate-800/40' : 'border-amber-100'}`}
                        id="self-assessment-actions"
                      >
                        <button
                          onClick={() => onSetStatus('incorrect')}
                          className={`w-full sm:w-auto flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl text-[10px] md:text-sm font-bold border transition cursor-pointer ${
                            status === 'incorrect'
                              ? 'bg-rose-500/25 border-rose-500 text-rose-300 shadow-[0_0_12px_rgba(239,68,68,0.2)]'
                              : isDark
                              ? 'bg-[#150f1f]/60 border-slate-800 text-slate-400 hover:text-rose-300 hover:border-rose-500/30'
                              : 'bg-white border-amber-200 text-[#8D7B68] hover:text-rose-600 hover:border-rose-300 shadow-sm'
                          }`}
                          id="btn-self-incorrect"
                        >
                          <AlertCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" />
                          더 공부해야 함 👎
                        </button>
                        <button
                          onClick={() => onSetStatus('correct')}
                          className={`w-full sm:w-auto flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl text-[10px] md:text-sm font-bold border transition cursor-pointer ${
                            status === 'correct'
                              ? 'bg-emerald-500/25 border-emerald-500 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                              : isDark
                              ? 'bg-[#0f1f1a]/60 border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/30'
                              : 'bg-white border-amber-200 text-[#8D7B68] hover:text-emerald-600 hover:border-[#BCA38A] shadow-sm'
                          }`}
                          id="btn-self-correct"
                        >
                          <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" />
                          알고 있음 👍
                        </button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
      </div>
    </div>
  );
}
