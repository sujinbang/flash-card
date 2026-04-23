/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Plus, RotateCcw } from 'lucide-react';

const initialCards = [
  // [1과목] 빅데이터의 이해 및 가치
  {
    id: 1,
    title: "[1과목] DIKW 피라미드",
    content: "Q: DIKW 피라미드의 4단계 정의는?\nA: 데이터(객관적 사실), 정보(패턴/의미 부여), 지식(미래 예측), 지혜(통찰력)."
  },
  {
    id: 2,
    title: "[1과목] 빅데이터 3대 요소",
    content: "Q: 빅데이터 활용을 위한 3대 요소(인자기)는?\nA: 인력, 자원(데이터), 기술."
  },
  {
    id: 3,
    title: "[1과목] 빅데이터 5V",
    content: "Q: 빅데이터의 5V 특징은?\nA: 규모(Volume), 다양성(Variety), 속도(Velocity), 가치(Value), 신뢰성(Veracity)."
  },
  {
    id: 4,
    title: "[1과목] 지식의 상호작용",
    content: "Q: 지식의 상호작용 단계(공표연내)란?\nA: 공통화(암묵지 공유), 표출화(문서 전환), 연결화(체계적 연결), 내면화(개인 지식 습득)."
  },
  {
    id: 5,
    title: "[1과목] 빅데이터의 변화",
    content: "Q: 빅데이터가 가져온 변화(전후양상)는?\nA: 전수조사, 사후처리, 양 위주, 상관관계 중심으로의 변화."
  },
  {
    id: 6,
    title: "[1과목] 데이터 사이언스 구성",
    content: "Q: 데이터 사이언스의 핵심 구성요소(AI비)는?\nA: Analytics(이론), IT(프로그래밍), 비즈니스 분석(비즈니스 능력)."
  },
  {
    id: 7,
    title: "[1과목] 가치 패러다임 변화",
    content: "Q: 빅데이터 가치 패러다임의 변화 단계(DigitalCA메라)는?\nA: Digitalization(디지털화) → Connection(연결) → Agency(관리 대행)."
  },

  // [1과목] 분석 기획 및 제도
  {
    id: 8,
    title: "[1과목] 분석 조직 구조",
    content: "Q: 분석 조직의 구조 3가지(집기분)는?\nA: 집중 구조(전담 조직), 기능 구조(현업 부서), 분산 구조(인력 배치)."
  },
  {
    id: 9,
    title: "[1과목] 우선순위 선정",
    content: "Q: 데이터 분석 프로젝트의 우선순위 선정 기준은?\nA: 시급성(Value - 비즈니스 효과), 난이도(3V - 투자비용 요소)."
  },
  {
    id: 10,
    title: "[1과목] 하향식 vs 상향식",
    content: "Q: 분석 문제 접근 방식의 차이는?\nA: 하향식(문제 정의 후 해결), 상향식(데이터에서 가치 발견/비지도 학습)."
  },
  {
    id: 11,
    title: "[1과목] 디자인 싱킹",
    content: "Q: 디자인 싱킹의 5단계 프로세스는?\nA: 공감하기 → 문제정의 → 아이디어 도출 → 프로토타입 → 테스트."
  },
  {
    id: 12,
    title: "[1과목] 개인정보 분류",
    content: "Q: 개인정보의 3가지 분류(식가익)는?\nA: 개인정보(식별 가능), 가명정보(추가 정보 필요), 익명정보(식별 불가)."
  },
  {
    id: 13,
    title: "[1과목] 비식별 조치 절차",
    content: "Q: 개인정보 비식별 조치 가이드라인 절차는?\nA: 사전검토 → 비식별조치 → 적정성평가 → 사후관리."
  },

  // [1과목] 분석 방법론 및 거버넌스
  {
    id: 14,
    title: "[1과목] CRISP-DM 단계",
    content: "Q: CRISP-DM 6단계(업데데이트모델평가전)는?\nA: 업무 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 전개."
  },
  {
    id: 15,
    title: "[1과목] 분석 거버넌스 구성",
    content: "Q: 분석 거버넌스 체계의 구성요소(시조프로마인드데)는?\nA: 시스템, 조직, 프로세스, 마인드(교육), 데이터."
  },
  {
    id: 16,
    title: "[1과목] 분석 성숙도 모델",
    content: "Q: 분석 성숙도 모델의 4단계(도활확최)는?\nA: 도입 → 활용 → 확산 → 최적화."
  },
  {
    id: 17,
    title: "[1과목] 데이터 거버넌스 요소",
    content: "Q: 데이터 거버넌스의 3대 요소(원조프)는?\nA: 원칙, 조직, 프로세스."
  },

  // [1과목] 데이터 수집 및 저장
  {
    id: 18,
    title: "[1과목] 데이터 수집 기술",
    content: "Q: 데이터 수집 기술의 종류는?\nA: ETL, Sqoop(RDBMS-하둡), Flume(로그 수집), 크롤링 등."
  },
  {
    id: 19,
    title: "[1과목] 데이터 척도 4단계",
    content: "Q: 데이터 척도의 4단계는?\nA: 명목(구분), 순서(서열), 등간(간격 의미), 비율(절대 0 존재, 사칙연산 가능)."
  },
  {
    id: 20,
    title: "[1과목] 데이터 품질 기준",
    content: "Q: 데이터 품질 기준 7가지는?\nA: 완전성, 정확성, 일관성, 최신성, 유효성, 접근성, 보안성."
  },
  {
    id: 21,
    title: "[1과목] DW의 특징",
    content: "Q: 데이터 웨어하우스(DW)의 4대 특징은?\nA: 주제지향성, 데이터 통합, 시계열성, 비휘발성."
  },
  {
    id: 22,
    title: "[1과목] RDBMS vs NoSQL",
    content: "Q: 관계형 DB와 NoSQL의 차이는?\nA: RDBMS(정형, 무결성), NoSQL(비정형, 확장성/가용성)."
  },
  // 2과목
  // [2과목] 데이터 전처리 및 정제
  {
    id: 23,
    title: "[2과목] 결측값의 종류",
    content: "Q: 결측값의 종류 3가지는?\nA: 완전 무작위 결측(MCRA), 무작위 결측(MAR), 비 무작위 결측(MNAR: 결과와 연관됨)."
  },
  {
    id: 24,
    title: "[2과목] 확률 대치법",
    content: "Q: 확률 대치법의 종류는?\nA: Hot-Deck(내부 유사 데이터), Cold-Deck(외부 유사 데이터), Nearest Neighbor(인접 응답)."
  },
  {
    id: 25,
    title: "[2과목] 이상값(Outlier) 기준",
    content: "Q: 이상값을 판단하는 두 가지 주요 기준은?\nA: ESD(평균 ± 3σ), 사분위수(Q1 - 1.5*IQR 미만 또는 Q3 + 1.5*IQR 초과)."
  },

  // [2과목] 분석 변수 처리 및 차원 축소
  {
    id: 26,
    title: "[2과목] 변수 선택 방법",
    content: "Q: 변수 선택 방법 3가지는?\nA: 전진선택법(추가), 후진제거법(제거), 단계별 선택법(병행)."
  },
  {
    id: 27,
    title: "[2과목] 차원 축소 기법",
    content: "Q: 선형 차원 축소 기법의 예시는?\nA: PCA(주성분), LDA(클래스 분리), ICA(독립 성분), SVD(특이값 분해)."
  },
  {
    id: 28,
    title: "[2과목] 데이터 정규화 공식",
    content: "Q: 데이터 정규화(Scaling)의 주요 공식은?\nA: Z-Score(평균 0, 표준편차 1), 최소-최대(0~1 사이 변환)."
  },
  {
    id: 29,
    title: "[2과목] 범주형 변수 변환",
    content: "Q: 범주형 변수를 수치로 변환하는 방법은?\nA: 레이블 인코딩(정수 부여), 원-핫 인코딩(0과 1의 이진 벡터화)."
  },
  {
    id: 30,
    title: "[2과목] 불균형 데이터 처리",
    content: "Q: 불균형 데이터 처리 기법은?\nA: 언더샘플링(다수 감소), 오버샘플링(소수 증가 - 예: SMOTE)."
  },

  // [2과목] 데이터 탐색(EDA) 및 상관분석
  {
    id: 31,
    title: "[2과목] EDA의 4대 주제",
    content: "Q: 탐색적 자료 분석(EDA)의 주제(저잔재현)?\nA: 저항성 강조, 잔차 계산, 자료변수의 재표현, 그래프를 통한 현시성."
  },
  {
    id: 32,
    title: "[2과목] 상관계수의 종류",
    content: "Q: 상관계수의 종류와 특징은?\nA: 피어슨(연속형, 선형성), 스피어만(순서형, 비선형적 관계)."
  },
  {
    id: 33,
    title: "[2과목] 왜도(Skewness) 특징",
    content: "Q: 왜도에 따른 자료 분포의 특징은?\nA: 왜도 > 0(오른쪽 꼬리, 최빈값<중앙값<평균), 왜도 < 0(왼쪽 꼬리, 평균<중앙값<최빈값)."
  },

  // [2과목] 통계 기법 및 확률 분포
  {
    id: 34,
    title: "[2과목] 확률적 표본 추출",
    content: "Q: 확률적 표본 추출 방법의 특징은?\nA: 계통(간격), 집락(군집 내 이질/간 동질), 층화(군집 내 동질/간 이질)."
  },
  {
    id: 35,
    title: "[2과목] 확률 분포의 예시",
    content: "Q: 이산/연속 확률 분포의 예시는?\nA: 이산(이항, 포아송), 연속(정규, t-분포, 카이제곱, F-분포)."
  },
  {
    id: 36,
    title: "[2과목] 점추정량 조건",
    content: "Q: 점추정량의 조건 4가지(불효일충)?\nA: 불편성, 효율성, 일치성, 충족성."
  },
  {
    id: 37,
    title: "[2과목] 가설검정 제1종 오류",
    content: "Q: 가설검정에서 1종 오류(α)란?\nA: 귀무가설이 참인데도 불구하고 기각(잘못된 거절)을 할 확률."
  }
];

const TABS = [
  { id: "전체", label: "전체" },
  { id: "1과목", label: "1과목" },
  { id: "2과목", label: "2과목" },
  { id: "3과목", label: "3과목" },
  { id: "4과목", label: "4과목" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("전체");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCards = activeTab === "전체"
    ? initialCards
    : initialCards.filter(card => card.title.includes(`[${activeTab}]`));

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentIndex(0);
  };

  const nextCard = () => {
    if (filteredCards.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const prevCard = () => {
    if (filteredCards.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  return (
    <div className="min-h-screen bg-[#050608] text-slate-200 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="w-full max-w-3xl relative z-10">
        {/* Navbar */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Card Area */}
        <div className="relative group">
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[40px] blur opacity-20 transition-opacity duration-500 group-hover:opacity-30"></div>

          <div className="relative min-h-[250px] sm:min-h-[200px] flex items-center bg-[#0d1117] border border-slate-800 rounded-[32px] shadow-2xl p-8 sm:p-12 overflow-hidden overflow-x-hidden text-center">
            <AnimatePresence mode="wait">
              {filteredCards.length > 0 ? (
                <motion.div
                  key={filteredCards[currentIndex]?.id || currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 tracking-tight drop-shadow-sm break-keep">
                    {filteredCards[currentIndex]?.title}
                  </h2>
                  <p className="whitespace-pre-wrap text-slate-400 text-lg sm:text-xl leading-relaxed font-light break-keep">
                    {filteredCards[currentIndex]?.content}
                  </p>
                </motion.div>
              ) : (
                <div className="w-full text-slate-500">카드가 없습니다.</div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls (Mobile optimized too) */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={prevCard}
            className="flex items-center gap-2 h-14 px-4 sm:px-6 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors active:scale-95 focus:outline-none"
          >
            <ChevronLeft size={24} />
            <span className="hidden sm:inline font-medium">이전 부분</span>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 flex-wrap max-w-[150px] sm:max-w-none justify-center">
            {filteredCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${idx === currentIndex ? 'w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-2 bg-slate-800 hover:bg-slate-600'
                  }`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextCard}
            className="flex items-center gap-2 h-14 px-4 sm:px-6 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors active:scale-95 focus:outline-none"
          >
            <span className="hidden sm:inline font-medium">다음 포인트</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
