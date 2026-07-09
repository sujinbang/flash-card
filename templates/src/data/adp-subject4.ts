import { Question } from '../types';

export const ADP_SUBJECT4_QUESTIONS: Question[] = [
  {
    id: 'adp-4-mc-01',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 중 탐색적 데이터 분석(EDA)의 4대 주제에 해당하지 않는 것은?**`,
    options: [
      `저항성의 강조`,
      `잔차 계산`,
      `통계적 모형 구축`,
      `자료변수의 재표현`,
    ],
    answer: `2`,
    explanation: `탐색적 데이터 분석(EDA)의 4대 주요 주제는 **저항성(Resistance)의 강조, 잔차(Residual) 계산, 자료변수의 재표현(Re-expression), 그리고 그래프를 통한 시각성(Revelation/Visualization)**입니다. 통계적 모형 구축은 가설 검정 및 추론 통계 영역의 궁극적인 지향점 중 하나이나, EDA 자체의 4대 주제에는 속하지 않습니다.`
  },
  {
    id: 'adp-4-mc-02',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `데이터 마이닝의 분석 모형 평가를 위해 실제 테스트를 진행할 때, 모형 개발용 데이터에서는 매우 높은 정확도를 보이지만 실제 데이터(테스트 데이터)에서는 예측력이 급격히 떨어지는 현상을 무엇이라 하는가?**`,
    options: [
      `과대적합(Overfitting)`,
      `결측치 처리 오류`,
      `과소적합(Underfitting)`,
      `이상치 오분류`,
    ],
    answer: `0`,
    explanation: `모델이 학습용(Training) 데이터에 과도하게 맞추어져 실제 데이터나 새로운 평가용(Test) 데이터가 들어왔을 때 예측 성능이 현저히 저하되는 현상을 **과대적합(Overfitting)**이라고 합니다.`
  },
  {
    id: 'adp-4-mc-03',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 중 데이터 마이닝과 시뮬레이션의 성능 지표에 관한 설명으로 옳은 것을 고르시오.**`,
    options: [
      `데이터 마이닝에서는 처리량(Throughput)이 중요 지표이다.`,
      `시뮬레이션에서는 정확도(Accuracy)와 정밀도(Precision)가 대표적 지표이다.`,
      `시뮬레이션에서는 대기 시간(Waiting Time)과 시스템 체류 시간(Time in System) 등이 활용된다.`,
      `데이터 마이닝과 시뮬레이션의 평가 지표는 완벽히 동일하다.`,
    ],
    answer: `2`,
    explanation: `데이터 마이닝에서는 정확도, 정밀도, 민감도, F1-Score 등 예측의 오차와 관련된 지표가 중요하게 다뤄지는 반면, 시스템 시뮬레이션에서는 **처리량(Throughput), 평균 대기 시간(Average Waiting Time), 대기열 길이(Average Queue Length), 시스템 내 체류 시간(Time in System)** 등이 성능 평가 지표로 널리 사용됩니다.`
  },
  {
    id: 'adp-4-mc-04',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 중 탐색적 데이터 분석(EDA)을 진행할 때, 이상치(Outlier)를 직관적으로 식별하기에 가장 유용한 시각화 도구는 무엇인가?**`,
    options: [
      `산점도(Scatter Plot)`,
      `히스토그램(Histogram)`,
      `상자그림(Box Plot)`,
      `파이 차트(Pie Chart)`,
    ],
    answer: `2`,
    explanation: `**상자그림(Box Plot)**은 IQR(사분위간 범위)을 기준으로 \$Q_3 + 1.5 	imes IQR\$을 초과하거나 \$Q_1 - 1.5 	imes IQR\$ 미만인 데이터 포인트를 상자 바깥의 점(이상치)으로 시각화해주므로 이상치 식별에 가장 적합한 도구입니다.`
  },
  {
    id: 'adp-4-mc-05',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래의 그림은 기업의 전형적인 데이터 처리 구조를 나타낸 것이다. 다음 그림에 대한 설명으로 가장 적절하지 않은 것은?**

![데이터 처리 구조 흐름도](/images/subject4/fig_q05_flowchart.png)`,
    options: [
      `데이터를 분석에 직접 활용하기 위해 DW(Data Warehouse)와 DM(Data Mart)에서 데이터를 결합하여 가져온다.`,
      `신규 시스템이나 DW에 통합되지 않은 legacy(기존 운영시스템) 데이터를 DW와 전처리 단계 없이 직접 바로 연결하여 연동하는 것이 가장 이상적이다.`,
      `ODS(Operational Data Store)는 운영 데이터 저장소로, 기존 운영시스템의 데이터가 실시간 혹은 근실시간으로 집계 및 전처리된 데이터 환경을 뜻하므로 DW나 DM과 결합하여 유용하게 활용할 수 있다.`,
      `스테이징 영역(Staging Area)에서 가져온 원천 데이터는 아직 비정제 및 정렬되지 않은 임시 상태이므로, 전처리 과정을 수행하여 DW 및 DM에 단계적으로 결합해야 한다.`,
    ],
    answer: `1`,
    explanation: `레거시 운영시스템(Legacy)의 데이터를 아무런 전처리나 변환(ETL), 데이터 통합 과정 없이 분석 환경(DW/DM)에 직결하게 되면, 시스템에 엄청난 오버헤드를 발생시킬 뿐만 아니라 데이터 정합성 불일치 및 품질 왜곡 등의 심각한 문제를 초래하게 됩니다. 반드시 Staging Area 및 ODS 등을 통과하며 데이터 정제 및 변환 과정을 거치는 아키텍처가 필수적입니다.`
  },
  {
    id: 'adp-4-mc-06',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `R의 데이터 구조 중 2차원 목록 데이터 구조이면서, 테이블 형태를 지니며 각 열(Column)이 서로 다른 데이터 타입(수치형, 문자형 등)을 가질 수 있는 가장 핵심적인 객체는 무엇인가?**`,
    options: [
      `벡터(Vector)`,
      `데이터 프레임(Data Frame)`,
      `행렬(Matrix)`,
      `요인(Factor)`,
    ],
    answer: `1`,
    explanation: `**데이터 프레임(Data Frame)**은 R의 2차원 표 형태 데이터 구조로, 동일한 행 길이를 갖는 열들의 집합이며, 각 열마다 서로 다른 데이터 타입을 저장할 수 있어 데이터베이스 테이블과 완벽히 대응되는 가장 중요한 자료형입니다. 반면, 행렬(Matrix)은 2차원이지만 모든 원소의 데이터 타입이 균일해야만 합니다.`
  },
  {
    id: 'adp-4-mc-07',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 중 연속형 변수의 경우 4분위수, 최솟값, 최댓값, 중앙값, 평균 등을 출력하고, 범주형 변수의 경우 각 범주에 대한 빈도수를 통합 계산하여 객체의 개요를 요약하는 대표적인 R 함수는 무엇인가?**`,
    options: [
      `summary()`,
      `str()`,
      `head()`,
      `aggregate()`,
    ],
    answer: `0`,
    explanation: `**\`summary()\`** 함수는 수치형 데이터에 대해서는 최솟값, 1사분위수, 중앙값, 평균, 3사분위수, 최댓값(5수치 요약 + 평균)을 출력하고, 요인형(Factor) 범주 데이터에 대해서는 각 범주의 빈도수를 친절하게 요약해 줍니다.`
  },
  {
    id: 'adp-4-mc-08',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `R에서 결측값(Missing Value)을 가리키는 고유한 예약어로 옳은 것은?**`,
    options: [
      `NULL`,
      `NaN`,
      `NA`,
      `Inf`,
    ],
    answer: `2`,
    explanation: `*   **NA (Not Available):** R에서 공식적인 '결측치(누락 데이터)'를 뜻합니다.
    *   **NaN (Not a Number):** 수학적으로 정의되지 않는 연산 결과(예: \$0/0\$)입니다.
    *   **NULL:** 값이 존재하지 않는 텅 빈 상태를 의미합니다.
    *   **Inf:** 무한대(Infinity)를 의미합니다.`
  },
  {
    id: 'adp-4-mc-09',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래 R 코드를 수행한 결과로 적절한 것은?**
\`\`\`R
> "+" (2, 3)
\`\`\``,
    options: [
      `에러 메시지가 출력된다.`,
      `경고 메시지가 출력된다.`,
      `숫자 5가 출력된다.`,
      `두 개의 원소로 이루어진 벡터가 출력된다.`,
    ],
    answer: `2`,
    explanation: `R에서 연산 기호(예: \`+\`, \`-\`, \`*\` 등)는 내부적으로 모두 함수로 정의되어 있습니다. 따라서 따옴표로 감싸진 연산자 이름 뒤에 괄호를 붙이고 인자를 전달하는 구조인 \`"+"(2, 3)\`은 \`2 + 3\`과 완벽히 동일하게 작동하여 **5**를 정상 출력합니다.`
  },
  {
    id: 'adp-4-mc-10',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `R에서 \`y = c(1, 2, 3, NA)\`일 때, \`3 * y\`를 실행한 결과로 옳은 것은?**`,
    options: [
      `에러가 발생하고 연산이 중단된다.`,
      `3, 6, 9가 차례로 출력되고 경고가 뜬다.`,
      `3, 6, 9, NA 가 출력된다.`,
      `3, 6, 9, 0 이 출력된다.`,
    ],
    answer: `2`,
    explanation: `결측치 \`NA\`가 포함된 벡터에 산술 연산을 수행하면, 수치 데이터 원소는 연산이 정상 수행되며 **\`NA\` 원소는 어떤 값을 연산하더라도 여전히 \`NA\`로 유지**됩니다. 따라서 결과 벡터는 \`[1] 3 6 9 NA\`가 됩니다.`
  },
  {
    id: 'adp-4-mc-11',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 R의 문자열 추출 함수 중, 주어진 문자열 벡터에서 특정 위치 범위의 글자들을 발췌해내는 함수로 올바른 것은 무엇인가?**`,
    options: [
      `paste()`,
      `substr()`,
      `nchar()`,
      `strsplit()`,
    ],
    answer: `1`,
    explanation: `**\`substr(x, start, stop)\`** 함수는 대상 문자열 \`x\`로부터 \`start\` 위치부터 \`stop\` 위치까지의 부분 문자열을 정밀하게 추출해 줍니다.
    *   \`nchar()\`는 문자열 길이(글자수) 계산
    *   \`paste()\`는 문자열 결합
    *   \`grep()\`은 패턴 매칭을 수행합니다.`
  },
  {
    id: 'adp-4-mc-12',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래 그림과 같이 두 개의 데이터 프레임 dfm1, dfm2를 T_name이라는 변수로 수평 결합하고자 할 때, 사용하는 R 함수로 올바른 것은?**

![테이블 결합](/images/subject4/df_merge.png)`,
    options: [
      `\`cbind(dfm1, dfm2, by="T_name")\``,
      `\`rbind(dfm1, dfm2, by="T_name")\``,
      `\`merge(dfm1, dfm2, by="T_name")\``,
      `\`subset(dfm1, dfm2, by="T_name")\``,
    ],
    answer: `2`,
    explanation: `R에서 기준이 되는 주요 Key 열(여기서는 \`T_name\`)을 중심으로 두 데이터 프레임을 병합(Inner/Outer Join)하는 대표적인 기본 함수는 **\`merge()\`**입니다. \`cbind\`는 공통 변수 기준 결합이 아닌 단순 열 붙이기(Row 수 일치 필요)이며, \`rbind\`는 행을 이어 붙이는 함수입니다.`
  },
  {
    id: 'adp-4-mc-13',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래 표는 데이터의 변경을 통해 새로운 구조의 데이터셋을 구성하고자 할 때 사용하는 R 프로그램 중 melt 함수와 cast 함수의 예시이다. 데이터셋 MD를 새로운 데이터 형태로 변경하기 위한 cast 함수를 활용한 R 프로그램 중 옳은 것은?**

![Melt와 Cast 구조 변환](/images/subject4/melt_cast.png)`,
    options: [
      `\`cast(md, id ~ variable + time)\``,
      `\`cast(md, id + variable ~ time)\``,
      `\`cast(md, id + time ~ variable)\``,
      `\`cast(md, id ~ variable, mean)\``,
    ],
    answer: `1`,
    explanation: `원본 녹인(Melted) 데이터 \`md\`에서 타깃 변수 포맷을 보면, 행에는 \`ID\`와 \`Variable\`이 그대로 조합되어 나열되어 있고, 열 방향으로는 기존 \`Time\` 열의 고유값(\`1\`, \`2\`)이 컬럼 지표(\`Time1\`, \`Time2\`)로 전개되었습니다. 따라서 행을 구성할 차원은 \`id + variable\`, 열로 펼칠 차원은 \`time\`이 되므로 **\`cast(md, id + variable ~ time)\`**이 정답이 됩니다.`
  },
  {
    id: 'adp-4-mc-14',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 중 결측치 처리 방법인 다중 대치법(Multiple Imputation)의 3단계 순서가 올바르게 나열된 것은?**`,
    options: [
      `대치(Imputation) \$
ightarrow\$ 분석(Analysis) \$
ightarrow\$ 결합(Combination)`,
      `분석(Analysis) \$
ightarrow\$ 대치(Imputation) \$
ightarrow\$ 결합(Combination)`,
      `결합(Combination) \$
ightarrow\$ 대치(Imputation) \$
ightarrow\$ 분석(Analysis)`,
      `대치(Imputation) \$`,
    ],
    answer: `0`,
    explanation: `다중 대치법은 **1단계: 대치(Imputation Step)**를 통해 m개의 가상 완전 자료를 생성하고, **2단계: 분석(Analysis Step)**을 통해 각각의 자료를 분석하여 모수 추정치 및 표준오차를 구한 뒤, **3단계: 결합(Combination Step)**을 통해 분석된 여러 결과를 최종 하나로 통합 결합하는 프로세스로 진행됩니다.`
  },
  {
    id: 'adp-4-mc-15',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `귀무가설이 사실임에도 불구하고 판단 착오로 인해 귀무가설을 기각하고 대립가설을 채택하게 되는 통계학적 가설검정 오류를 무엇이라 하는가?**`,
    options: [
      `제1종 오류(Type I Error)`,
      `제2종 오류(Type II Error)`,
      `표본 추출 오류`,
      `비표본 오류`,
    ],
    answer: `0`,
    explanation: `*   **제1종 오류 (\$lpha\$ 오류):** 실제 귀무가설(\$H_0\$)이 참인데 검정 결과 이를 잘못 기각하는 오류입니다.
    *   **제2종 오류 (\$eta\$ 오류):** 실제 귀무가설이 거짓이고 대립가설(\$H_1\$)이 참인데 검정 결과 귀무가설을 채택해버리는 오류입니다.`
  },
  {
    id: 'adp-4-mc-16',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 중 단순 선형 회귀 모형의 기본 가정으로 가장 적절하지 않은 것은 무엇인가?**`,
    options: [
      `선형성: 종속변수와 독립변수 간의 관계가 선형적이어야 한다.`,
      `오차의 독립성: 오차항끼리 서로 상관관계를 가지지 않아야 한다.`,
      `오차의 등분산성: 독립변수의 모든 값에 대해 오차의 분산이 일정해야 한다.`,
      `오차의 이분산성: 오차들의 퍼짐 정도가 X값 변화에 따라 지속적으로 변해야 한다.`,
    ],
    answer: `3`,
    explanation: `선형회귀분석의 오차항 기본 가정은 **선형성(Linearity), 독립성(Independence), 등분산성(Homoscedasticity), 정규성(Normality)**입니다. 오차가 퍼져 있는 양상이 변수값에 따라 달라지는 이분산성(Heteroscedasticity)은 오히려 회귀분석 가정을 위배하는 심각한 왜곡 요인입니다.`
  },
  {
    id: 'adp-4-mc-17',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래의 잔차 산점도는 회귀분석을 진행한 뒤 적합값(Fitted) 대비 잔차(Residual)의 양상을 도식화한 것이다. 다음 그림을 통해 명백히 위배되었다고 볼 수 있는 회귀 가설은 무엇인가?**

![회귀 잔차 분석](/images/subject4/residuals_vs_fitted.png)`,
    options: [
      `독립성`,
      `선형성`,
      `정규성`,
      `등분산성`,
    ],
    answer: `1`,
    explanation: `잔차 산점도에서 잔차들이 특정 2차 곡선 형태나 포물선(U자형/역U자형)의 뚜렷한 패턴을 나타내고 있습니다. 이는 독립변수와 종속변수 간의 관계가 현재의 1차 직선(선형) 모형으로 완전히 설명되지 않았으며, 2차항이나 곡선 관계가 누락되었음을 의미하므로 **선형성(Linearity)** 가정이 심각하게 위배된 증거입니다. (패턴이 점차 넓어지는 깔대기 형태일 경우는 등분산성 위배입니다.)`
  },
  {
    id: 'adp-4-mc-18',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다중선형회귀분석에서 독립변수들 사이에 강한 상관관계가 존재하여, 회귀계수의 분산이 불필요하게 커지고 모형 추정치의 신뢰성이 극도로 저하되는 치명적인 문제를 무엇이라 하는가?**`,
    options: [
      `다중공선성(Multicollinearity)`,
      `자기상관(Autocorrelation)`,
      `과대적합(Overfitting)`,
      `차원의 저주(Curse of Dimensionality)`,
    ],
    answer: `0`,
    explanation: `다중공선성은 회귀분석 시 일부 독립변수가 다른 독립변수들과 지나치게 높은 상관관계(\$R^2 > 0.9\$ 등)를 가져, 통계적 추정의 왜곡이 발생하고 회귀계수 부호가 상식과 다르게 뒤집히는 등의 오류를 유발하는 대표적인 문제입니다. VIF(분산팽창지수)가 10 이상일 때 일반적으로 다중공선성이 존재한다고 판단합니다.`
  },
  {
    id: 'adp-4-mc-19',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `다음 다차원척도법(MDS, Multidimensional Scaling)의 스트레스(Stress) 값에 따른 적합도 평가 기준 중, 모형이 '완벽히 적합하다(Perfect)'라고 판단할 수 있는 수치 범주로 가장 올바른 것은?**`,
    options: [
      `\$0.15 \sim 0.20\$`,
      `\$0.05 \sim 0.10\$`,
      `\$0.00 \sim 0.05\$ (또는 \$0.025\$ 이하)`,
      `\$0.20\$ 이상`,
    ],
    answer: `2`,
    explanation: `다차원척도법에서 저차원 투영 공간에 배치된 개체 간 거리와 실제 거리 간의 불일치를 측정하는 스트레스 값은 **0에 가까울수록 적합도가 뛰어남**을 의미합니다. 통상적으로 스트레스 수치가`
  },
  {
    id: 'adp-4-mc-20',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래 그림은 '학생 여부(Student)'와 '카드대금 연체 여부(Default)' 데이터에 대해 상호 관계를 넓이와 영역의 크기로 도식화한 모자이크 플롯(Mosaic Plot)이다. 다음 보기 중 시각 자료 해석으로 가장 올바르지 않은 것은?**

![Default vs Student Mosaic Plot](/images/subject4/default_mosaic_plot.png)`,
    options: [
      `학생이 아닌 고객(Student: No)의 전체 수수가 학생인 고객(Student: Yes) 수보다 더 많다.`,
      `연체를 한 연체 고객(Default: Yes)의 크기는 연체를 하지 않은 정상 고객(Default: No) 크기에 비해 현저히 적다.`,
      `연체하지 않은 정상 고객 중, 학생 수의 비율이 연체 고객 중 학생 수의 비율보다 확연하게 크다.`,
      `학생 여부(Student)와 카드 연체 여부(Default) 변수는 상호 간에 완전히 독립적이라고 해석할 수 있다.`,
    ],
    answer: `3`,
    explanation: `학생인 그룹과 학생이 아닌 그룹 간의 연체자 발생 면적 비율(폭과 높이)이 비대칭적인 차이를 드러내고 있습니다. 이는 두 범주형 변수가 통계적으로 독립적이지 않고 유의미한 연관성(혹은 조건부 확률의 편차)을 지니고 있음을 명백하게 시각적으로 방증합니다.`
  },
  {
    id: 'adp-4-mc-21',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `의사결정나무(Decision Tree) 분석에서 새로운 노드가 하위 노드로 분할될 때 사용되는 불순도(Impurity) 측정 지표가 아닌 것은 무엇인가?**`,
    options: [
      `지니 지수(Gini Index)`,
      `엔트로피 지수(Entropy Index)`,
      `카이제곱 통계량 p-value`,
      `결정계수(\$R^2\$)`,
    ],
    answer: `3`,
    explanation: `의사결정나무의 분할 기준 선정 시 분류형 변수 기준으로는 지니 지수, 엔트로피, 카이제곱 통계량 등이 주로 사용되며, 수치형 목표변수(회귀나무)인 경우에는 ANOVA F-통계량 혹은 분산의 감소량 등이 분할 지표로 사용됩니다. 결정계수(\$R^2\$)는 선형 회귀 분석 모형의 설명력을 측정하는 성능 지표입니다.`
  },
  {
    id: 'adp-4-mc-22',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래 그림은 의사결정나무에서 하위 마디로 자라나며 생성되는 분할 성장 과정의 예시이다. 상위 노드 A에서 자식 노드 B와 C로 최종 스플릿이 일어났을 때, 자식 노드 B의 지니 지수(Gini Index)를 계산한 결과로 가장 적절한 것은?**

![Decision Tree Split](/images/subject4/decision_tree_split.png)`,
    options: [
      `0.50`,
      `0.48`,
      `0.32`,
      `0.38`,
    ],
    answer: `2`,
    explanation: `노드 B의 전체 샘플 수는 \$10 + 40 = 50\$개입니다. 그 중 Good 비율 \$P(G) = 10/50 = 0.2\$, Bad 비율 \$P(B) = 40/50 = 0.8\$입니다.
    *   지니 지수 공식: \$Gini(B) = 1 - \sum P_i^2 = 1 - (0.2^2 + 0.8^2)\$
    *   \$1 - (0.04 + 0.64) = 1 - 0.68 = 0.32\$
    따라서 완벽한 수학적 계산을 통해 도출되는 노드 B의 지니 지수는 정확히`
  },
  {
    id: 'adp-4-mc-23',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래의 그림은 64개 암세포주 유전자 마이크로어레이 데이터를 기반으로 평균 연결법(Average Linkage) 계층적 군집화를 구현한 덴드로그램(Dendrogram) 결과이다. 분석가가 Height = 1.5 선에서 가로 축을 절단하여 군집을 정의하려고 할 때, 올바른 하위 군집 목록 개수와 구성원으로 가장 적절한 것은?**

![Cluster Dendrogram](/images/subject4/cluster_dendrogram.png)`,
    options: [
      `{h, a, f}, {b, d, e, j, l}, {c, g, i}`,
      `{h, a, f}, {b, d, e, j, l}, {c, g}, {i}`,
      `{h, a, f}, {b, d, e}, {j, l}, {c, g, i}`,
      `{h, a}, {f, b, d, e, j, l}, {c, g, i}`,
    ],
    answer: `0`,
    explanation: `덴드로그램의 세로축(Height) 1.5 선에서 수평선을 그었을 때, 상위 가지에서 분할되어 내려오는 주요 기둥(Cluster)은 정확히 3개입니다. 왼쪽부터 각각 \`{h, a, f}\` 군집, 중간의 \`{b, d, e, j, l}\` 군집, 그리고 우측의 \`{c, g, i}\` 군집으로 구성된 3개의 독립적인 계층 군집이 완벽히 정의됩니다.`
  },
  {
    id: 'adp-4-mc-24',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `인공신경망의 다층 퍼셉트론(MLP) 모형에서 여러 개의 은닉층(Hidden Layer)과 노드를 거쳐 갈 때, 미분 기반 역전파(Backpropagation) 과정에서 경사도가 점차 0으로 사라져 가중치 학습이 더이상 진행되지 않는 심각한 오작동 문제를 무엇이라 하는가?**`,
    options: [
      `기울기 소실(Gradient Vanishing)`,
      `다중공선성 현상`,
      `지역 최소값(Local Minima) 함정`,
      `가중치 감쇠(Weight Decay)`,
    ],
    answer: `0`,
    explanation: `활성화 함수로 시그모이드(Sigmoid)나 하이퍼볼릭 탄젠트(Tanh)를 과도하게 깊은 은닉층 레이어에 연속 사용할 경우, 미분값이 누적 곱해지며 입력층 방향으로 갈수록 오차가 전혀 전달되지 않는 **기울기 소실(Gradient Vanishing)**이 일어납니다. 이를 극복하기 위해 ReLU(Rectified Linear Unit) 등의 대체 활성화 함수를 주로 채택합니다.`
  },
  {
    id: 'adp-4-mc-25',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `아래 그래프와 같이 중심 노드 '4번'이 여러 주변 노드들과 성상 구조(Star)를 형성하고 있을 때, 4번 노드의 연결정도 중심성(Degree Centrality) 값은 얼마인가?**

![Network Centrality](/images/subject4/network_centrality_q58.png)`,
    options: [
      `3`,
      `4`,
      `5`,
      `6`,
    ],
    answer: `1`,
    explanation: `연결정도 중심성(Degree Centrality)은 특정 노드가 가지고 있는 **직접적인 연결 선(Edge)의 수**를 뜻합니다. 그림에서 빨간색 중심인 **4번 노드**에 직접 연결된 이웃 노드는 **1, 2, 3, 5번** 노드로 총 **4개**이므로, 4번 노드의 연결정도 중심성은 정확히 **4**입니다.`
  },
  {
    id: 'adp-4-mc-26',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'multiple',
    question: `텍스트 마이닝 전처리 과정에서 영어 문장 내 단어의 원형 또는 어간(Stem)을 찾기 위해 접사(Affix) 등을 분석적으로 분리·제거하는 연산을 무엇이라 하는가?**`,
    options: [
      `말뭉치 구축(Corpus Collection)`,
      `형태소 분석`,
      `스태밍(Stemming, 어간 추출)`,
      `단어 사전 매핑`,
    ],
    answer: `2`,
    explanation: `**스태밍(Stemming)**은 변화형태를 가지는 단어들에서 공통 어간을 추출하여 동일 단어로 매칭시키는 기법입니다. (예: \`learning\`, \`learned\` \$
ightarrow\$ \`learn\`)`
  },
  {
    id: 'adp-4-subj-27',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'subjective',
    question: `R에서 데이터 프레임과 구조가 동일하게 표 형태를 띠지만 계산 병목이 심한 기존 처리 속도를 보완하기 위해 C언어로 최적화되었으며, 전사 대용량 대규모 요약 연산(Grouping, Ordering)을 매우 효율적으로 지원하는 대표적인 외장 라이브러리 패키지는 무엇인가?**`,
    answer: `\`data.table\` (데이터 테이블)`,
    explanation: `\`data.table\` 패키지는 대용량 데이터 전처리와 가공에 강점을 가지며, \`data.frame\`에 비해 압도적으로 빠른 속도를 보장합니다.`
  },
  {
    id: 'adp-4-subj-28',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'subjective',
    question: `연속형 데이터 값을 몇 개의 구간(Bin)으로 정렬·분류하여 범주형 요인 변수로 변환하는 데이터 가공 및 마트 생성 기법을 무엇이라 하는가?**`,
    answer: `비닝 (Binning)`,
    explanation: `데이터의 범주화 과정을 통해 이상치나 불필요한 분포의 복잡성을 줄이기 위해 데이터 구간을 설정하는 기법을 **Binning** 혹은 **구간화**라고 부릅니다.`
  },
  {
    id: 'adp-4-subj-29',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'subjective',
    question: `인공신경망의 출력층에서 여러 개의 범주(다중 분류, Multi-class Classification)를 예측할 때, 출력층 원소들의 값의 합이 정확히 1이 되도록 조정하여 각각의 결과가 사후 확률(Posterior Probability)로 고르게 해석될 수 있도록 가공하는 활성화 함수는 무엇인가?**`,
    answer: `소프트맥스 (Softmax) 함수`,
    explanation: `다중 분류 모델의 마지막 출력 노드들에서 결과값을 정규화하여 확률값으로 매핑하기 위한 대표 활성화 함수가 바로 **소프트맥스(Softmax)**입니다.`
  },
  {
    id: 'adp-4-subj-30',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'subjective',
    question: `계층적 군집분석(Hierarchical Clustering)에서 군집 간의 거리를 측정하는 기법 중 하나로, 모든 연결쌍 간의 산술 평균을 취하는 방식을 무엇이라 하는가?**`,
    answer: `평균 연결법 (Average Linkage)`,
    explanation: `두 군집 내 개체 쌍들의 거리 전체 평균을 군집 간 거리로 삼는 가장 합리적인 계층 군집화 연결 방식입니다.`
  },
  {
    id: 'adp-4-subj-31',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'subjective',
    question: `텍스트 마이닝 패키지인 \`tm\`에서, 분석 대상이 되는 문서 수집 및 구조화된 비정형 데이터 정제 목적의 '문서 집합(말뭉치)'을 의미하는 핵심 R 내장 라이브러리 자료형은 무엇인가?**`,
    answer: `코퍼스 (Corpus / 말뭉치)`,
    explanation: `R의 텍스트 마이닝 패키지 \`tm\`에서 대량의 가공 전 텍스트 문서 집합을 통합 관리하기 위해 추상화한 핵심 클래스 포맷이 **Corpus**입니다.`
  },
  {
    id: 'adp-4-subj-32',
    subject: 14,
    subjectTitle: '데이터 분석',
    type: 'subjective',
    question: `아래 그림은 기계학습 모델의 최적화를 위한 인공신경망 다층 퍼셉트론(MLP)의 연결 매커니즘이다. 그림에서 주어진 가설에 따라 입력변수 \$X_1, X_2, X_3\$이 은닉노드 \$a_1, a_2\$를 거쳐 출력 클래스인 세가지 품종 \$y_1(setosa), y_2(versicolor), y_3(virginica)\$로 순방향 전개될 때, 입력 노드와 은닉 노드, 출력 노드를 잇는 연산 전반을 표현하는 이 네트워크 구조 모형의 정식 한글 명칭을 적으시오.**

![MLP Neural Network](/images/subject4/mlp_network_diagram.png)`,
    answer: `다층 퍼셉트론 (Multilayer Perceptron / MLP)`,
    explanation: `입력층과 출력층 사이에 하나 이상의 은닉층(Hidden Layer)을 두어 비선형 분리가 불가능한 퍼셉트론의 단점(XOR 문제 등)을 완벽히 해결하는 대표적인 전방향(Feed-forward) 인공신경망 구조입니다.`
  }
];
