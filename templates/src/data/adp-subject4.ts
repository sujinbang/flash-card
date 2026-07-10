import { Question } from '../types';

export const ADP_SUBJECT4_QUESTIONS: Question[] = [
  {
    "id": "adp-s4-c1-mcq-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "데이터가 가지고 있는 특성을 파악하기 위해 해당 변수의 분포 등을 시각화하여 분석하는 분석 방식은 무엇인가?",
    "answer": "1",
    "explanation": "EDA(탐색적 자료 분석)는 다양한 차원과 값을 조합해가며 특이한 점이나 의미있는 사실을 도출하고 분석의 최종목적을 달성해가는 과정이다.",
    "options": [
      "전처리분석",
      "탐색적 자료 분석(EDA)",
      "공간분석",
      "다변량분석"
    ]
  },
  {
    "id": "adp-s4-c1-mcq-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "데이터 마이닝의 모델링에 대한 설명이다. 설명이 가장 잘못된 것은?",
    "answer": "1",
    "explanation": "반드시 다양한 옵션을 모두 시도해야 하는 것은 아니며, 충분한 시간이 있을 경우 다양한 옵션을 실험해볼 수 있다. 일정 수준 이상의 성과가 도출되면, 해석 및 활용 단계로 넘어갈지 여부를 판단하여 의사결정을 내리는 것이 중요하다.",
    "options": [
      "데이터 마이닝 모델링은 통계적 모델링이 아니므로 지나치게 통계적 가설이나 유의성에 집착하지 말아야 한다.",
      "모델링에는 다양한 방법이 존재하므로, 최고의 성과를 얻기 위해 반드시 여러 옵션을 고려하여 모델링을 수행하는 것이 바람직하다.",
      "모델링에는 다양한 방법이 존재하므로, 최고의 성과를 얻기 위해 반드시 여러 옵션을 고려하여 모델링을 수행하는 것이 바람직하다. (※ 원본 교재 동일 표기)",
      "성능에 집착하면 분석 모델링의 주목적인 실무 적용에 관하여 시간을 낭비할 수 있으므로 훈련 및 테스트 성능에 큰 편차가 없고 예상 성능을 만족하면 중단한다."
    ]
  },
  {
    "id": "adp-s4-c1-mcq-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "모델링 성능을 평가함에 있어, 데이터 마이닝에서 활용하는 평가 기준이 아닌 것은?",
    "answer": "3",
    "explanation": "데이터 마이닝에서는 정확도, 정밀도, 디텍트 레이트, 리프트 등의 값으로 판단하고 시뮬레이션에서는 Throughput, Average Waiting Time, Average Queue Length, Time in System 등의 지표가 활용된다.",
    "options": [
      "정확도(Accuracy)",
      "리프트(Lift)",
      "디텍트 레이트(Detect Rate)",
      "Throughput"
    ]
  },
  {
    "id": "adp-s4-c1-mcq-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "탐색적 데이터 분석의 목적은 데이터를 이해하는 것이다. 다음 중 이에 대한 설명으로 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "상자그림(Box Plot) 등을 그리면 이상치를 식별하기 쉽다.",
    "options": [
      "데이터에 대한 전반적인 이해를 통해 분석 가능한 데이터인지 확인하는 단계이다.",
      "탐색적 데이터 분석 과정은 데이터에 포함된 변수의 유형이 어떻게 되는지를 찾아가는 과정이다.",
      "데이터를 시각화하는 것만으로는 이상점(Outlier) 식별이 잘 되지 않는다.",
      "알고리즘이 학습을 얼마나 잘 하느냐 하는 것은 전적으로 데이터의 품질과 데이터에 담긴 정보량에 달려 있다."
    ]
  },
  {
    "id": "adp-s4-c1-mcq-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래의 그림은 데이터 처리 구조를 나타내고 있다. 그림에 대한 설명으로 잘못된 것은?\n```\n[ legacy ] -> [ staging (DB/File) -> ODS (DB/File) ] -> [ D.W (DB) / Data Mart (DB) ] -> [ R, SAS ]\n```",
    "answer": "1",
    "explanation": "신규 시스템이나 스테이징 영역의 데이터는 정제되지 않았기 때문에 정제하고 DW나 DM과 결합해야 한다.",
    "options": [
      "데이터를 분석에 활용하기 위해 데이터 웨어하우스와 데이터 마트에서 데이터를 가져온다.",
      "신규 시스템이나 DW에 포함되지 않은 데이터는 기존 운영시스템(legacy)에서 직접 데이터를 DW와 전처리 없이 바로 결합하면 된다.",
      "ODS는 운영데이터저장소로 기존 운영시스템의 데이터가 정제된 데이터이므로 DW나 DM과 결합하여 분석에 활용할 수 있다.",
      "스테이지 영역에서 가져온 데이터는 정제되어 있지 않기 때문에 데이터의 전처리를 해서 DW나 DM과 결합하여 사용한다."
    ]
  },
  {
    "id": "adp-s4-c1-mcq-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "최근 시각화 기법의 활용이 높아지면서 데이터의 특성을 파악하는데 많은 기여를 하고 있다. 다음 중 최근의 시각화의 발전된 형태가 아닌 것은?",
    "answer": "2",
    "explanation": "엑셀의 그래프는 최근 시각화 기술의 발전된 형태가 아니라 기존에 기술이다.",
    "options": [
      "텍스트 마이닝에서의 워드 클라우드를 통한 그래프화",
      "SNA(Social Network Analysis)에서 집단의 특성과 관계를 그래프화",
      "통계 소프트웨어의 기초통계정보를 엑셀에서 그래프화",
      "Polygon, Heatmap, Mosaic Graph 등의 그래프 작업"
    ]
  },
  {
    "id": "adp-s4-c1-mcq-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "대표적인 고급분석으로 데이터에 있는 패턴을 파악해 예측하는 분석으로 데이터가 크고 정보가 다양할수록 보다 활용하기 유리한 분석은 무엇인가?",
    "answer": "2",
    "explanation": "대용량 데이터에서 패턴을 파악해서 예측하는 분석 방법은 데이터 마이닝 방법이다.",
    "options": [
      "시뮬레이션",
      "통계분석",
      "데이터 마이닝",
      "시각화"
    ]
  },
  {
    "id": "adp-s4-c1-mcq-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "모집단으로부터 추출된 표본의 표본통계량으로부터 모집단의 특성인 모수에 관해 통계적으로 추론하는 통계를 무엇이라고 하는가?",
    "answer": "3",
    "explanation": "추론(추측)통계는 모집단으로부터 추출된 표본의 표본통계량으로부터 모집단의 특성인 모수에 관한 통계적으로 추론하는 절차이다.",
    "options": [
      "가공 통계",
      "기술 통계",
      "통계분석",
      "추론 통계"
    ]
  },
  {
    "id": "adp-s4-c1-mcq-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "EDA의 4가지 주제 중 틀린 것은?",
    "answer": "0",
    "explanation": "EDA의 4가지 주제는 저항성의 강조, 잔차 계산, 자료변수의 재표현, 그래프를 통한 현시성이다.",
    "options": [
      "종속변수 계산",
      "저항성의 강조",
      "자료변수의 재표현",
      "그래프를 통한 현시성"
    ]
  },
  {
    "id": "adp-s4-c1-short-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "공간적 차원과 관련된 속성들을 시각화에 추가하여 지도 위에 관련 속성들을 생성하고 크기, 모양, 선 굵기 등으로 구분하여 인사이트를 얻는 분석방법은 무엇인가?\n---",
    "answer": "공간분석(Spatial analysis)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c2-mcq-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 R의 데이터 구조 중 벡터에 대한 설명으로 적절한 것은?",
    "answer": "1",
    "explanation": "벡터는 하나의 스칼라 값 또는 하나 이상의 스칼라 원소들을 갖는 단순한 형태의 집합으로 R의 가장 기본적인 데이터 구조이다. 행렬은 2차원 목록 데이터 구조이고, 벡터는 1차원 구조이다.",
    "options": [
      "벡터는 행과 열을 갖는 m × n 형태의 직사각형에 데이터를 나열한 데이터 구조이다.",
      "벡터는 하나의 스칼라 값 또는 하나 이상의 스칼라 원소들을 갖는 단순한 형태의 집합이다.",
      "벡터는 행렬과 유사한 2차원 목록 데이터 구조이다.",
      "벡터는 숫자로만 구성되어야 한다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R의 장점으로 옳지 않은 것을 고르시오.",
    "answer": "1",
    "explanation": "R은 오픈소스이므로 사용자가 많지만, 상용 소프트웨어(SAS, SPSS 등)에 비해 공식적인 유지보수 서비스가 즉각적으로 제공되지 않으며, 사용자 커뮤니티나 패키지 개발자의 자발적인 기여에 의존하므로 신속한 공식 기술 지원은 어려울 수 있다.",
    "options": [
      "오픈소스이므로 사용자들이 만든 다양한 패키지들을 공유하여 사용 가능하므로 최신 알고리즘을 패키지를 통해 활용하기 쉽다.",
      "R은 사용자들이 많기 때문에 문제가 발생할 경우, 다양한 사용자들을 통해 문제를 해결하므로 다른 통계패키지에 비해 유지보수가 신속하게 이루어진다.",
      "함수형 언어이기 때문에 다양한 프로그램을 통해 자동화 할 수 있다.",
      "무료로 이용할 수 있다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 연속형 변수의 경우 4분위수, 최솟값, 최댓값, 중앙값, 평균 등을 출력하고 범주형 변수의 경우 각 범주에 대한 빈도수를 출력하여 데이터의 분포를 파악할 수 있게 하는 함수로 적절한 것은?",
    "answer": "0",
    "explanation": "R에서의 `summary` 함수는 수치형 변수의 경우 최솟값, 1사분위수, 중앙값(2사분위수), 평균, 3사분위수, 최댓값을 출력하며, 범주형(요인형) 변수의 경우 각 범주별 빈도수를 출력한다.",
    "options": [
      "summary 함수",
      "ddply 함수",
      "cast 함수",
      "aggregate 함수"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 나머지 세 개의 명령과 결과가 다른 것은?",
    "answer": "2",
    "explanation": "R에서 결측치(`NA`)와의 비교 연산(`==`)은 무조건 `NA`를 반환하므로, ③의 결과는 `NA NA NA NA`가 된다. ①, ②, ④의 결과는 `FALSE FALSE FALSE TRUE`이다.",
    "options": [
      "",
      "",
      "",
      ""
    ]
  },
  {
    "id": "adp-s4-c2-mcq-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래의 R 프로그래밍을 통해 객체 a에 할당되는 모드가 다른 것을 고르시오.",
    "answer": "2",
    "explanation": "R의 벡터는 단일 데이터 타입만 저장할 수 있으므로, 문자와 숫자가 섞이면 문자형(character)으로 자동 형변환된다. ①, ②, ④의 결과는 모두 문자형이지만, ③은 문자형 원소가 없으므로 수치형(numeric/double) 벡터가 된다. (논리형 `TRUE`는 숫자로 변환될 때 `1`이 됨)",
    "options": [
      "`a<-c(\"Tom\", \"Yoon\", \"Kim\")`",
      "`a<-c(pi, \"pi\", 3.14)`",
      "`a<-c(3.14, pi, TRUE)`",
      "`a<-c(\"A\", \"B\", \"A\", \"A\", \"B\")`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 결과가 다른 R코드는?",
    "answer": "1",
    "explanation": "①, ③, ④는 모두 1부터 10까지 10개의 원소를 갖는 벡터를 생성하지만, ②는 `1`과 `10` 두 개의 원소만을 갖는 벡터를 생성한다.",
    "options": [
      "`a<-seq(1,10,1)`",
      "`b<-c(1,10)`",
      "`c<-1:10`",
      "`d<-seq(10,100,10)/10`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래의 R코드를 수행한 결과에 대한 설명으로 옳은 것은?\n```R\n> c(2, 4, 6, 8) + c(1, 3, 5, 7, 9)\n```",
    "answer": "0",
    "explanation": "두 벡터의 길이가 다르고, 긴 벡터의 길이가 짧은 벡터 길이의 정수 배가 아니기 때문에 원소 순환 법칙(Recycling Rule)이 적용되면서 \"두 객체의 길이가 서로 배수 관계에 있지 않습니다\"라는 경고 메시지가 출력되고 연산 결과는 출력된다.",
    "options": [
      "경고 메시지와 함께 결과가 출력된다.",
      "4개의 숫자로 이루어진 벡터가 출력된다.",
      "9개의 숫자로 이루어진 벡터가 출력된다.",
      "에러 메시지가 출력되고, 명령 수행이 중단된다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R의 데이터 구조와 저장형식에 관한 설명으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "행렬을 `as.vector` 함수에 입력하면 행 방향이 아니라 열 방향(Column-major order)으로 원소를 나열하는 벡터가 생성된다.",
    "options": [
      "`as.numeric` 함수에 논리형 벡터를 입력하면 `TRUE`에 대응하는 원소는 1, `FALSE`에 대응하는 원소는 0인 숫자형 벡터로 변형된다.",
      "숫자형 행렬에서 원소 중 하나를 문자형으로 변경하게 되면 해당 행렬의 모든 원소가 문자형으로 변경된다.",
      "데이터 프레임은 각 열 별로 서로 다른 데이터 타입을 가질 수 있다.",
      "행렬을 `as.vector` 함수에 입력하면 행 방향으로 1행부터 차례로 원소를 나열하는 벡터가 생성된다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R의 데이터 구조 중 2차원 목록 데이터 구조이면서 각 열이 서로 다른 데이터 타입을 가질 수 있는 데이터 구조로 적절한 것은?",
    "answer": "3",
    "explanation": "데이터 프레임은 표(Table) 형태의 2차원 목록 데이터 구조로, 각 열은 서로 다른 데이터 타입을 가질 수 있는 R의 가장 범용적인 데이터 구조이다.",
    "options": [
      "벡터",
      "행렬",
      "배열",
      "데이터 프레임"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래의 R코드가 의미하는 것은?\n```R\n> mean(x, na.rm=T)\n```",
    "answer": "1",
    "explanation": "R 코드 중 `na.rm` 옵션은 결측치(`NA`)를 연산에서 제외할 것인지 여부를 나타내며, `T`(`TRUE`)로 설정 시 결측치를 제외하고 평균을 계산한다.",
    "options": [
      "이상값을 제외한 X의 평균",
      "결측값을 제외한 X의 평균",
      "이상값을 포함한 X의 평균",
      "결측값을 포함한 X의 평균"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R에서 제공하는 데이터 가공, 처리를 위한 패키지의 설명으로 가장 부적절한 것은?",
    "answer": "0",
    "explanation": "`data.table` 패키지는 대용량 데이터의 빠른 가공, 검색, 정렬 등을 위한 패키지이다. `ddply` 함수는 `plyr` 패키지에서 제공한다.",
    "options": [
      "`data.table` 패키지는 데이터 프레임 처리함수인 `ddply` 함수를 제공한다.",
      "`reshape` 패키지는 `melt`와 `cast`를 이용하여 데이터를 재구성할 수 있다.",
      "`sqldf` 패키지는 R에서 표준 SQL 명령을 실행하고 결과를 가져올 수 있다.",
      "`plyr` 패키지는 데이터의 분리, 결합 등 필수적인 데이터 처리 기능을 제공한다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 R코드를 수행한 결과로 적절한 것은?\n```R\n> \"+\"(2,3)\n```",
    "answer": "2",
    "explanation": "R에서 함수형 연산자 `\"+\"`를 전위 표기법 형태로 사용하여 `\"+\"(2, 3)`을 실행하면 `2 + 3`과 동일하게 작동하여 숫자 5가 출력된다.",
    "options": [
      "에러 메시지가 출력된다.",
      "경고 메시지가 출력된다.",
      "숫자 5가 출력된다.",
      "두 개의 원소로 이루어진 벡터가 출력된다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R에서 `y=c(1,2,3,NA)`일 때 `3*y`의 실행 결과는?",
    "answer": "3",
    "explanation": "결측치(`NA`)가 포함된 연산은 결과도 `NA`가 된다. 따라서 `3 * c(1, 2, 3, NA)`의 결과는 `3 6 9 NA`이다.",
    "options": [
      "에러가 발생하고 결과가 출력되지 않는다.",
      "`3 6 9 0`",
      "`3 6 9 3`",
      "`3 6 9 NA`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R에서 결측값을 가르키는 것으로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "R에서 결측치(Missing Value)를 나타내는 기호는 `NA`이다. `Inf`는 무한대, `NaN`은 숫자가 아님(Not a Number)을 뜻한다.",
    "options": [
      "`Inf`",
      "`NaN`",
      "`NA`",
      "`dim`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Carseats 데이터 프레임은 400개 상점에서 판매 중인 유아용 카시트의 자료이고, Sales 변수는 해당 상점에서 판매된 카시트의 수를 나타낸다. 다음 중 R 패키지에서 Sales 변수의 표준편차를 계산하기 위한 식으로 가장 부적절한 것은?",
    "answer": "0",
    "explanation": "R에서 표준편차를 구하는 함수는 `sd`이다. `stdev`라는 함수는 존재하지 않는다.",
    "options": [
      "`stdev(Carseats$Sales)`",
      "`sd(Carseats$Sales)`",
      "`sqrt(var(Carseats$Sales))`",
      "`var(Carseats$Sales)^(1/2)`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래 R 코드의 결과로 적절한 것은?\n```R\n> s<-c(\"Monday\", \"Tuesday\", \"Wednesday\")\n> substr(s,1,2)\n```",
    "answer": "0",
    "explanation": "`substr(s, 1, 2)`는 벡터 `s`에 포함된 각 문자열의 첫 번째 글자부터 두 번째 글자까지를 추출하므로, `\"Mo\" \"Tu\" \"We\"`가 출력된다.",
    "options": [
      "`\"Mo\"`, `\"Tu\"`, `\"We\"`",
      "`\"Monday\" \"Tuesday\"`",
      "`\"Mo\" \"Tu\"`",
      "`\"Monday\"`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 그림과 같이 두개의 데이터 프레임 dfm1, dfm2를 T_name이라는 변수로 결합하고자 할 때, 사용되는 함수는 어느 것인가?\n```\n[ dfm1 ]\nT_name | x | y\n+\n[ dfm2 ]\nT_name | z\n=\n[ 결과 ]\nT_name | x | y | z\n```",
    "answer": "2",
    "explanation": "공통 열(T_name)을 기준으로 두 데이터 프레임을 병합할 때 사용하는 함수는 `merge`이다. `by` 옵션을 통해 결합 기준 변수를 지정한다.",
    "options": [
      "`cbind(dfm1, dfm2, by=\"T_name\")`",
      "`rbind(dfm1, dfm2, by=\"T_name\")`",
      "`merge(dfm1, dfm2, by=\"T_name\")`",
      "`subset(dfm1, dfm2, by=\"T_name\")`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 프로그램의 실행 결과로 다음 중 적절한 것은 무엇인가?\n```R\ncalculate<-function(a) {\ny<-1\nfor(i in 1:a) {\ny<-y*i\n}\nprint(y)\n}\ncalculate(4)\n```",
    "answer": "0",
    "explanation": "`calculate(4)`를 실행하면 `for` 루프를 통해 1부터 4까지 곱해지는 팩토리얼($4! = 24$) 연산이 수행되므로 `24`가 출력된다.",
    "options": [
      "24",
      "20",
      "12",
      "6"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 프로그램을 통해 생성된 xy에 대한 설명으로 부적절한 것은?\n```R\n> x<-c(1:5)\n> y<-seq(10,50,10)\n> xy<-rbind(x,y)\n```",
    "answer": "2",
    "explanation": "`rbind` 함수는 행 결합을 수행한다. `xy`는 행 이름이 `x`, `y`이고 5개의 열을 가진 2×5 행렬이다. `xy[, 1]`은 1번째 열의 원소인 `c(1, 10)`을 의미하므로 `y` 벡터(`10 20 30 40 50`)와 다르다.",
    "options": [
      "2×5 행렬이다.",
      "`xy[1,]`은 x와 동일하다.",
      "`xy[,1]`은 y와 동일하다.",
      "Matrix 타입의 객체이다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-20",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래와 같은 행렬이 있을 때, 모든 행의 합을 구하기 위한 R 프로그램 중 적절한 것은?\n```R\n> dim(m1)<-c(4,5)\n> m1\n[,1] [,2] [,3] [,4] [,5]\n[1,] 82.5 79.2 89.5 85.6 80.9\n[2,] 89.9 88.2 81.5 91.5 87.2\n[3,] 81.9 70.3 89.2 83.2 78.9\n[4,] 88.2 83.5 79.8 87.5 82.5\n```",
    "answer": "0",
    "explanation": "`apply` 함수에서 두 번째 인자가 1이면 행(Row) 방향, 2이면 열(Column) 방향으로 함수를 적용한다. 행의 합을 구하려면 `apply(m1, 1, sum)`을 사용해야 한다.",
    "options": [
      "`apply(m1, 1, sum)`",
      "`apply(m1, 2, sum)`",
      "`lapply(m1, sum)`",
      "`sapply(m2, sum)`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-21",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Cars93이라는 데이터 프레임에 `MPG.city`(도심에서의 연비)라는 변수와 `Origin`(생산지)이라는 변수가 있다고 할 때, 생산지별로 `MPG.city`의 평균을 구하고자 한다. R 프로그램으로 적절한 것은?",
    "answer": "3",
    "explanation": "`tapply` 함수는 집단(그룹)별로 특정 함수를 적용하는 함수로, `tapply(수치변수, 그룹변수, 적용함수)` 형태로 사용한다.",
    "options": [
      "`apply(Cars93$MPG.city, Cars93$Origin, mean)`",
      "`lapply(Cars93, Cars93$Origin, mean)`",
      "`sapply(Cars93, Cars93$Origin, mean)`",
      "`tapply(Cars93$MPG.city, Cars93$Origin, mean)`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-22",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "단어나 문장에 포함되어 있는 문자열의 길이를 구하고자 할 때, R 프로그램으로 적절한 것은?",
    "answer": "0",
    "explanation": "R에서 문자열의 길이를 구하는 함수는 `nchar`이다. `length` 함수는 벡터의 원소 개수(여기서는 단일 문자열이므로 1)를 반환한다.",
    "options": [
      "`nchar(\"statistics\")`",
      "`length(\"statistics\")`",
      "`substr(\"statistics\")`",
      "`paste(\"statistics\")`"
    ]
  },
  {
    "id": "adp-s4-c2-mcq-23",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 R의 내장 데이터인 cars에 대한 각 변수별 기술통계량을 도출한 것이다. 아래 설명 중 가장 부적절한 것은?\n```R\n> summary(cars)\nspeed           dist\nMin.   : 4.0   Min.   :  2.00\n1st Qu.:12.0   1st Qu.: 26.00\nMedian :15.0   Median : 36.00\nMean   :15.4   Mean   : 42.98\n3rd Qu.:19.0   3rd Qu.: 56.00\nMax.   :25.0   Max.   :120.00\n```",
    "answer": "3",
    "explanation": "`summary` 출력 결과에서 `3rd Qu.: 19.0`은 상위 25% 점, 즉 75% 백분위수가 `19.0`임을 나타내므로 이 요약통계량 자료에서 알 수 있다.",
    "options": [
      "cars 자료는 두 개의 숫자형 변수로 구성되어 있다.",
      "speed 변수의 평균은 중앙값보다 크다.",
      "cars 자료는 결측값이 포함되지 않은 자료이다.",
      "speed 변수의 75% 백분위수는 이 자료에서 알 수 없다."
    ]
  },
  {
    "id": "adp-s4-c2-mcq-24",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R에서 새로운 패키지를 설치 및 사용하고자 할 때 명령어와 순서로 적절한 것은?",
    "answer": "0",
    "explanation": "R에서 패키지를 설치할 때는 패키지명에 반드시 따옴표를 붙여 `install.packages(\"패키지명\")`으로 실행해야 하고, 로드할 때는 따옴표가 없어도 무방한 `library(패키지명)`을 순서대로 수행한다.",
    "options": [
      "`install.packages(\"패키지명\") -> library(패키지명)`",
      "`install.packages(패키지명) -> library(\"패키지명\")`",
      "`library(\"패키지명\") -> install.packages(\"패키지명\")`",
      "`library(패키지명) -> install.packages(\"패키지명\")`"
    ]
  },
  {
    "id": "adp-s4-c2-short-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래 R 코드의 출력 결과는?\n```R\n> f <- function(x, a) return((x-a)^2)\n> f(1:2, 3)\n```",
    "answer": "`4 1` (또는 `4, 1`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c2-short-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "R에서 다음의 명령을 수행했을 때 출력되는 결과는?\n```R\nx <- c(1, 2, 3, NA)\nmean(x)\n```",
    "answer": "`NA`",
    "explanation": ""
  },
  {
    "id": "adp-s4-c2-short-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "R에서 다음의 명령을 수행했을 때 출력되는 결과는?\n```R\nx <- 1:100\nsum(x > 50)\n```",
    "answer": "`50`",
    "explanation": ""
  },
  {
    "id": "adp-s4-c2-short-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "A반과 B반 학생들이 동일한 과목을 들었다고 하자. A반과 B반 모두를 대상으로 과목별 성적의 평균을 구하려고 할 때, A반 학생 데이터와 B반 학생 데이터를 `class`라는 변수를 기준으로 합치려고 한다. R로 프로그래밍 하시오.",
    "answer": "`merge(A, B, by=\"class\")`",
    "explanation": ""
  },
  {
    "id": "adp-s4-c2-short-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 표와 같이 여러 학과 학생들의 과목별 성적을 데이터 프레임으로 구성하였다. 데이터 프레임명은 `Test`라고 할 때, 경영학과 학생들의 데이터만 조회하고자 한다. R로 프로그래밍 하시오.\n```\n학과 | 학년 | 성별 | 이름 | 실용컴퓨터 | 영어회화 | 한문 | 총점\n경영학과 | 1 | 여 | 김자영 | 85 | 75 | 86 | 246\n경영학과 | 1 | 여 | 이소연 | 75 | 65 | 78 | 218\n경영학과 | 1 | 남 | 이진혁 | 96 | 77 | 67 | 240\n...\n```",
    "answer": "`subset(Test, 학과==\"경영학과\")`",
    "explanation": ""
  },
  {
    "id": "adp-s4-c2-short-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "SQL을 활용하거나 SAS에서 proc sql로 작업하던 사용자들에게 R 프로그램에서 지원해 주는 패키지는 무엇인가?\n---",
    "answer": "`sqldf` (또는 `sqldf()`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c3-mcq-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "데이터 웨어하우스와 사용자의 중간층에 위치한 것으로, 하나의 주제 또는 하나의 부서 중심의 데이터 웨어하우스라고 할 수 있는 데이터베이스는 무엇인가?",
    "answer": "0",
    "explanation": "데이터 웨어하우스와 사용자 집단 사이의 중간층에 위치한 데이터 마트는 특정 주제나 특정 부서 중심의 소규모 데이터 웨어하우스이다. (자체적으로 수집되기도 함)",
    "options": [
      "데이터마트",
      "모델링",
      "관계형 데이터베이스",
      "빅데이터"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "변수를 조합해 변수명을 만들고 변수들을 시간, 상품 등의 차원에 결합해 다양한 요약 변수와 파생변수를 쉽게 생성하여 데이터 마트를 구성할 수 있는 패키지는 무엇인가?",
    "answer": "1",
    "explanation": "`reshape` 패키지는 데이터를 행과 열로 유연하게 재구성할 수 있도록 `melt` 함수와 `cast` 함수를 제공하여 파생변수나 요약변수 생성을 용이하게 돕는다.",
    "options": [
      "ETL",
      "reshape",
      "OLAP",
      "rattle"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "파생변수는 사용자가 특정 조건을 만족하거나 특정 함수에 의해 값을 만들어 의미를 부여한 변수이다. 다음 중 파생변수의 설명으로 적절한 것은?",
    "answer": "0",
    "explanation": "파생변수는 주관적인 판단에 기반하여 특정 조건을 지정해 만드는 경우가 많기 때문에, 논리적 타당성을 확보해야 하며 그렇지 못할 경우 모델의 신뢰성이 저하될 수 있다.",
    "options": [
      "파생변수는 매우 주관적인 변수일 수 있으므로 논리적 타당성을 갖춰야 한다.",
      "파생변수는 많은 모델에서 공통적으로 많이 사용될 수 있다.",
      "파생변수는 재활용성이 높다.",
      "파생변수는 다양한 모델을 개발해야 하는 경우, 효율적으로 사용할 수 있다."
    ]
  },
  {
    "id": "adp-s4-c3-mcq-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "많은 기업에서 평균거래주기를 3~4배 이상 초과하거나 다음 달에 거래가 없을 것으로 예상되는 고객을 ( ㉠ )으로 정의하고 있다. 다음 중 ( ㉠ )에 가장 적절한 것은?",
    "answer": "3",
    "explanation": "평균거래주기의 3~4배 이상 거래가 없거나 일정 기간 거래 실적이 없는 고객을 '휴면고객'이라고 칭한다.",
    "options": [
      "신규고객",
      "우량고객",
      "가망고객",
      "휴면고객"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 표는 데이터의 변경을 통해 새로운 구조의 데이터셋을 구성하고자 할 때 사용하는 R 프로그램 중 melt 함수와 cast 함수의 예시이다. 데이터셋 MD를 새로운 데이터 형태로 변경하기 위한 cast 함수를 활용한 R 프로그램 중 옳은 것은?\n```\n[ DATA 명 : MD ]\nID | Time | Variable | Value\n1  |  1   |    X1    |   5\n1  |  2   |    X1    |   3\n2  |  1   |    X1    |   6\n2  |  2   |    X1    |   2\n1  |  1   |    X2    |   6\n1  |  2   |    X2    |   5\n2  |  1   |    X2    |   1\n2  |  2   |    X2    |   4\n[ 새로운 데이터 ]\nID | Variable | Time1 | Time2\n1  |    X1    |   5   |   3\n1  |    X2    |   6   |   5\n2  |    X1    |   6   |   2\n2  |    X2    |   1   |   4\n```",
    "answer": "1",
    "explanation": "데이터셋을 재구성할 때 `cast` 함수를 통해 가로 형태로 펼친다. 변수 구성 상 `ID`와 `Variable`은 고정 행(`ID + Variable`)으로 가고, `Time`이 열 이름으로 나열되므로 `cast(md, id + variable ~ time)`이 적절하다.",
    "options": [
      "`cast(md, id ~ variable + time)`",
      "`cast(md, id + variable ~ time)`",
      "`cast(md, id + time ~ variable)`",
      "`cast(md, id ~ variable, mean)`"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래의 정의가 가리키는 데이터 마트의 구성요소로 가장 적절한 것은?\n> 특정한 의미를 갖는 작위적 정의에 의한 변수로, 사용자가 특정 조건을 만족하거나 특정 함수에 의해 값을 만들어 의미를 부여한 변수",
    "answer": "1",
    "explanation": "사용자가 특정 의미를 부여하기 위해 주관적으로 가공/정의한 변수는 '파생변수'이다.",
    "options": [
      "반응변수",
      "파생변수",
      "설명변수",
      "요약변수"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래의 왼쪽 자료를 오른쪽의 형태로 변환하기 위한 명령어로 적절한 것은?\n```\n[ 왼쪽 자료 (airquality 일부) ]\nOzone | Solar.R | Wind | Temp | Month | Day\n41  |   190   |  7.4 |  67  |   5   |  1\n36  |   118   |  8.0 |  72  |   5   |  2\n12  |   149   | 12.6 |  74  |   5   |  3\n18  |   313   | 11.5 |  62  |   5   |  4\nNA  |    NA   | 14.3 |  56  |   5   |  5\n[ 오른쪽 자료 ]\nMonth | Day | variable | value\n5   |  1  |   Ozone  |  41\n5   |  2  |   Ozone  |  36\n5   |  3  |   Ozone  |  12\n5   |  4  |   Ozone  |  18\n5   |  6  |   Ozone  |  28\n...\n```",
    "answer": "0",
    "explanation": "`airquality` 데이터에서 `Month`와 `Day`를 고정 식별자(`id`)로 잡고 나머지 변수들을 값의 형태로 녹여내는(melt) 형태이다. 결측치(`NA`)는 제거되었으므로 `na.rm=TRUE` 옵션이 들어간 ①이 적절하다.",
    "options": [
      "`aqm <- melt(airquality, id=c(\"Month\", \"Day\"), na.rm=TRUE)`",
      "`aqm <- melt(airquality, id=c(\"Month\", \"Day\"))`",
      "`aqm <- melt(airquality, id=c(\"Ozone\", \"Solar.R\", \"Wind\", \"Temp\"), na.rm=TRUE)`",
      "`aqm <- melt(airquality, id=c(\"Ozone\", \"Solar.R\", \"Wind\", \"Temp\"))`"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "\"iris\"라는 데이터셋에서 데이터의 내용을 조회할 때, R 프로그램으로 적절한 것은?",
    "answer": "3",
    "explanation": "R에서 표준 SQL을 사용하여 데이터를 쿼리할 수 있도록 지원하는 패키지는 `sqldf`이다.",
    "options": [
      "`plyr(\"select * from iris\")`",
      "`sql(\"select * from iris\")`",
      "`mysql(\"select * from iris\")`",
      "`sqldf(\"select * from iris\")`"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "chickwts 데이터 프레임은 여섯가지 종류의 닭 사료 첨가물(feed)과 각 사료를 먹인 닭의 무게(weight)를 변수로 가진다. 아래의 (1)의 기초통계량과 각 feed별 weight의 평균을 계산하여, 아래 (2)와 같은 결과물을 만들기 위한 코드로 다음 중 가장 적절한 것은?\n```\n[ (1) chickwts 일부 구조 ]\n> head(chickwts)\nweight      feed\n1    179 horsebean\n2    160 horsebean\n...\n[ (2) 결과물 ]\nfeed groupmean\n1    casein  323.5833\n2 horsebean  160.2000\n3   linseed  218.7500\n4  meatmeal  276.9091\n5   soybean  246.4286\n6 sunflower  328.9167\n```",
    "answer": "2",
    "explanation": "`plyr` 패키지의 `ddply` 함수를 사용하여 그룹별 통계량을 계산한다. `ddply(데이터, .(그룹변수), 함수형태, 새변수=연산)` 구조로 써야 하므로, `summarize` 함수를 적용하고 `groupmean=mean(weight)`로 지정한 ③이 옳다.",
    "options": [
      "`ddply(chickwts, ~feed, groupmean=mean(weight))`",
      "`ddply(chickwts, weight~feed, summarize, groupmean=mean(weight))`",
      "`ddply(chickwts, ~feed, summarize, groupmean=mean(weight))`",
      "`ddply(chickwts, weight~feed, groupmean=mean(weight))`"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 결측치에 대한 설명으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "결측치의 비율이 높다고 해서(예: 20% 이상) 해당 변수를 항상 기계적으로 삭제해야 하는 것은 아니다. 해당 변수가 비즈니스상 또는 모델 구축상 매우 중요한 변수라면, 다양한 대치법을 활용하여 대치한 후 활용해야 한다.",
    "options": [
      "해당 칸이 비어있는 경우 결측치 여부는 알기 쉽다.",
      "관측치가 있지만 실상은 default 값이 기록된 경우에도 결측치로 처리해야 하는 것이 바람직하다.",
      "결측치가 있는 경우 다양한 대치(Imputation)방법을 사용하여 완전한 자료로 만든 후 분석을 진행할 수 있다.",
      "결측치가 20% 이상인 경우에는 해당 변수를 제거하고 분석해야 한다."
    ]
  },
  {
    "id": "adp-s4-c3-mcq-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음은 결측값을 확인하고 결측값을 대치하는데 활용되는 R 함수들이다. 설명이 잘못된 것을 고르시오.",
    "answer": "0",
    "explanation": "`complete.cases()` 함수는 데이터의 각 행에 결측치(`NA`)가 없으면 `TRUE`, 단 하나라도 결측치가 존재하면 `FALSE`를 반환하는 함수이다.",
    "options": [
      "`complete.cases()` : 데이터 내 레코드에 결측값이 있으면 TRUE, 없으면 FALSE를 반환하는 함수",
      "`is.na()` : 결측값이 NA인지 여부를 판단하여 반환하는 함수",
      "`knnImputation()` : NA 값을 k 최근 이웃 분류 알고리즘을 사용하여 대치하는 함수로 k개 주변 이웃들의 거리를 고려하여 가중 평균한 값을 대치해 주는 함수",
      "`rfImpute()` : 랜덤포레스트 모형의 경우, 결측값이 있으면 에러를 발생하기 때문에 랜덤포레스트 패키지에서 NA 결측값을 대치하도록 하는 함수"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "결측값은 관측되어 얻어지는 실험 자료에서 종종 나타나는 현상이다. 결측값을 분석할 수 있는 통계분석 방법론으로 대치법이 있다. 다음 중 결측값을 처리하는 방법에 대한 설명 중 부적절한 것은?",
    "answer": "3",
    "explanation": "다중 대치법(Multiple Imputation)의 3단계 순서는 1단계 대치(Imputation) -> 2단계 분석(Analysis) -> 3단계 결합(Combination)이다. 설명에서는 결합과 분석의 순서가 바뀌어 잘못 기술되었다.",
    "options": [
      "complete Analysis는 불완전 자료를 모두 삭제하고 완전한 관측치만으로 자료를 분석하는 방법이다. 그러나 부분적 관측자료를 사용하므로 통계적 추론의 타당성 문제가 있다.",
      "평균 대치법은 자료의 평균값으로 결측값을 대치하여 불완전한 자료를 완전한 자료로 만들어 분석하는 방법이다.",
      "단순확률 대치법은 평균 대치법에서 추정량 표준오차의 과소 추정문제를 보완하고자 고안된 방법이다.",
      "다중 대치법은 단순 대치법을 한번하지 않고 m번 대치를 통해 m개의 가상적 완전 자료를 만들어서 분석하는 방법으로 순서는 1단계인 대치(imputation step), 2단계인 결합(combination step), 3단계인 분석(Analysis step)이다."
    ]
  },
  {
    "id": "adp-s4-c3-mcq-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "이상치를 찾는 것은 데이터 분석에서 데이터 전처리를 어떻게 할지 검정할 때 사용할 수 있다. 다음 중 상자그림을 이용하여 이상치를 판정하는 방법에 대한 설명으로 가장 부적절한 것은?",
    "answer": "1",
    "explanation": "평균으로부터 3 * 표준편차(3-Sigma)를 벗어나는 값을 이상치로 규정하는 것은 상자그림(Box Plot) 방법이 아니라 표준편차(Z-score) 방법이다. 상자그림은 사분위수 범위인 $IQR$의 1.5배 기준을 사용한다.",
    "options": [
      "IQR = Q3 - Q1이라고 할 때, Q1 - 1.5 * IQR < x < Q3 + 1.5 * IQR를 벗어나는 x를 이상치라고 규정한다.",
      "평균으로부터 3 * 표준편차 벗어나는 것들을 비정상이라 규정하고 제거한다.",
      "이상치는 변수의 분포에서 벗어난 값으로 상자 그림을 통해 확인할 수 있다.",
      "이상치는 분포를 왜곡할 수 있으나 실제 오류인자에 대해서는 통계적으로 실행하지 못하기 때문에 제거여부는 실무자들을 통해서 결정하는 것이 바람직하다."
    ]
  },
  {
    "id": "adp-s4-c3-mcq-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 이상값 검색을 활용한 응용시스템으로 가장 적절한 것은?",
    "answer": "3",
    "explanation": "이상값 검색(Anomalies/Outlier Detection)은 정상 범위를 심각하게 벗어나는 예외 상황을 찾는 것으로, 카드 부정 사용 등을 잡는 부정사용방지 시스템(FDS, Fraud Detection System)에 널리 활용된다.",
    "options": [
      "장바구니분석 시스템",
      "데이터 마트",
      "교차판매 시스템",
      "부정사용방지 시스템 (FDS)"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "이상치에 대한 설명으로 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "독립변수(설명변수)에 비해 종속변수 값이 과도하게 벗어나는 것은 이상치보다는 회귀분석에서의 '영향치' 또는 '레버리지' 개념에 더 부합한다.",
    "options": [
      "군집분석을 이용하여 다른 데이터들과 거리상 멀리 떨어진 데이터를 이상치로 판정한다.",
      "데이터를 측정과정이나 입력하는 과정에서 잘못 포함된 이상치는 삭제한 후 분석한다.",
      "설명변수의 관측차에 비해 종속변수의 값이 상이한 값을 이상치라 한다.",
      "통상 평균으로부터 표준편차의 3배가 되는 점을 기준으로 이상치를 정의한다."
    ]
  },
  {
    "id": "adp-s4-c3-mcq-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음은 이상값(outlier)에 대한 설명이다. 잘못 설명한 내용을 고르시오.",
    "answer": "2",
    "explanation": "이상값 처리 중 '조정 방법(Capping/Winsorizing)'은 극단값을 상한/하한값으로 대체하여 전체 데이터를 보존하는 방법이므로, 제거(Deletion) 방법에 비해 데이터 손실률이 낮아지며 분석의 유효성(설명력)을 유지하기 좋다.",
    "options": [
      "부정사용방지 시스템이나 부도예측 시스템에서는 이상값이라도 의미가 있으므로 제거하지 않는다.",
      "이상값 인식에 있어서 가장 많이 활용하는 방법은 ESD(Extreme Studentized Deviation)으로 평균에서 3표준편차를 벗어나는 경우 이상값으로 인식하는 방법이다.",
      "이상값의 처리에 있어서 극단값 절단 방법과 조정 방법이 있으며 조정 방법의 경우, 제거 방법에 비해 데이터 손실율이 높아 설명력이 낮아지는 단점이 있다.",
      "의도하지 않게 잘못 입력된 데이터인 경우 bad data에 해당되며 이러한 경우, 데이터를 제거하여 분석한다."
    ]
  },
  {
    "id": "adp-s4-c3-mcq-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "결측치(Missing data) 핸들링은 데이터분석을 위한 전처리 작업에서 가장 중요한 단계 중에 하나이다. R 프로그램에서 결측치의 표현으로 맞는 것은?",
    "answer": "3",
    "explanation": "R에서 결측치는 `NA`(Not Available)로 표현한다.",
    "options": [
      "Missing",
      "999999999",
      "NaN(Not a Number)",
      "NA(Not Available)"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "데이터 전처리 단계에서 데이터의 이상치(Outlier)에 대한 설명으로 틀린 것은?\n> 이상치(Outlier) 탐지의 목적은 대부분의 객체들과 다른 객체들을 찾는 것이다. 이상치 탐지는 속성값들의 일반적인 값들과 상당히 편차가 큰 값을 가지므로 편차 탐제(deviation detection)라고도 한다. 그러나 이상치는 반드시 비정상적인 객체를 의미하지는 않는다.",
    "answer": "0",
    "explanation": "단순히 데이터셋의 최댓값과 최솟값이 존재한다고 해서 그것이 바로 이상치는 아니다. 이상치는 일반적인 데이터의 분포 범위를 벗어난 특이값을 말한다.",
    "options": [
      "최댓값과 최솟값",
      "데이터 입력 시 오타로 인해 잘못 입력된 경우",
      "분석 목적에 부합되지 않아 제거해야 하는 경우",
      "부정사용방지 시스템에서의 의도된 이상값"
    ]
  },
  {
    "id": "adp-s4-c3-mcq-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 이상치(Outlier) 탐지에 대한 설명이다. 다음 중 이상치를 유용하게 사용하는 분야의 예로 부적절한 것은?",
    "answer": "1",
    "explanation": "자연재해(홍수, 가뭄 등)는 환경 데이터 상 매우 예외적인 이상값(Anomaly)으로 감지되어야 분석 가치를 지닌다. 이를 정상적인 환경에서 일어나는 사건으로 해석하여 일상 분석으로 취급해버리면 재해 분석 측면에서 부적합하다.",
    "options": [
      "사기탐지 - 도난당한 신용카드의 구매 행위는 원 소유자의 행위와 다를 수 있다. 평상시의 행위와 다른 구매패턴을 조사하여 사기를 탐지할 수 있다.",
      "환경파괴 - 자연 세계에서는 환경에 중요한 영향을 줄 수 있는 홍수, 가뭄 같은 사건들이 있다. 그러나 이러한 사건은 정상적인 환경에서 발생하는 사건으로 해석할 수 있다.",
      "의료 - 특정 환자에게 보이는 예외적인 증세나 검사 결과는 잠재적인 건강 문제를 나타낸다.",
      "침입탐지 - 컴퓨터 네트워크에 대한 공격은 보편화되었다. 침입의 다수는 네트워크에 대한 예외적인 행위를 감시하는 경우에 탐지할 수 있다."
    ]
  },
  {
    "id": "adp-s4-c3-short-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "R에서 데이터 프레임과 유사하지만 보다 빠른 grouping과 ordering, 그리고 짧은 문장을 지원하여 데이터 프레임보다 효율적인 데이터 구조는?",
    "answer": "데이터 테이블(data.table)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c3-short-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> 연속형 변수를 범주형 변수로 구간화하는데 자주 활용하는 방법으로 양통(Bin)에 나누어 담고 양통의 병합해가며 구간화하는 방법",
    "answer": "비닝(Binning)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c3-short-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "( 가 ) 안에 들어갈 용어는 무엇인가?\n> ( 가 )는 특정한 의미를 갖는 작위적 정의에 의한 변수로, 사용자가 특정 조건을 만족하거나 특정 함수에 의해 값을 만들어 의미를 부여한 변수이다.",
    "answer": "파생변수",
    "explanation": ""
  },
  {
    "id": "adp-s4-c3-short-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "데이터의 한 부분으로 특정 사용자가 관심을 갖고 있는 데이터를 담은 비교적 작은 규모의 데이터 웨어하우스는 무엇인가?\n---",
    "answer": "데이터 마트",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-mcq-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 근로자의 임금(wage)과 교육수준(1. <HS Grad, 2. HS Grad, 3. Some College, 4. College Grad, 5. Advanced Degree)의 관계를 나타낸 그래프이다. 다음 중 아래에 대한 설명으로 부적절한 것은?\n*(참고: 교육수준별 wage의 히스토그램이 나열되어 있음. y축은 도수(count), x축은 임금(wage))*",
    "answer": "",
    "explanation": "",
    "options": [
      "각 학력 수준에 따라 임금의 분포를 나타낸다.",
      "학력 수준이 높아질수록 임금은 높아지는 경향이 있다.",
      "각 막대의 높이는 임금 수준을 나타낸다.",
      "5. Advanced Degree 그룹의 임금 분포는 쌍봉이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 모집단에서 표본을 추출하는 방법이 아닌 것은 무엇인가?",
    "answer": "",
    "explanation": "",
    "options": [
      "단순랜덤추출법",
      "계통추출법",
      "층화추출법",
      "집스추출법 (※ 원본 교재 오타 동일 표기)"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "확률이란 \"특정사건이 일어날 가능성의 척도\"라고 정의할 수 있다. 통계적 실험을 실시할 때 나타날 수 있는 모든 결과들의 집합을 표본공간이라고 하고, 사건이란 표본공간의 부분집합을 말한다. 다음 중 확률 및 확률분포에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "모든 사건의 확률값은 0과 1 사이에 있다.",
      "서로 배반인 사건들의 합집합의 확률은 각 사건들의 확률의 합이다.",
      "두 사건 A, B가 독립이라면 사건 B의 확률은 A가 일어난다는 가정에서의 B의 조건부확률과 동일하다.",
      "확률변수 X가 구간 또는 구간들의 모임인 숫자 값을 갖는 확률분포함수를 이산형확률밀도함수라 한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "자료의 정보를 이용해 집단에 관한 추측, 결론을 이끌어내는 과정인 통계적 추론에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "전수조사가 불가능하면 모집단에서 표본을 추출하고 표본을 근거로 확률론을 활용하여 모집단의 모수들에 대해 추론하는 것을 추정이라 한다.",
      "점 추정은 표본의 정보로부터 모집단의 모수를 하나의 값으로 추정하는 것이다.",
      "통계적 추론은 제한된 표본을 바탕으로 모집단에 대한 일반적인 결론을 유도하려는 시도이므로 본질적으로 불확실성을 수반한다.",
      "구간추정은 모수의 참값이 포함되어 있다고 추정되는 구간을 결정하는 것이며, 실제 모집단의 모수는 신뢰구간에 포함되어야 한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "모집단 내에서 모집단의 특성을 잘 나타낼 수 있는 일부를 추출하여 이들로부터 자료를 수집하고 수집된 자료를 토대로 모집단의 특성을 추정하게 된다. 이 때 조사하는 모집단의 일부분을 표본(sample)이라 한다. 다음 중 표본조사에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "표본오차(sampling error)는 모집단을 대표할 수 있는 표본 단위들이 조사대상으로 추출되지 못함으로서 발생하는 오차를 말한다.",
      "표본편의(sampling bias)는 모수를 작게 또는 크게 할 때 추정하는 것과 같이 표본추출법에서 기인하는 오차를 의미한다.",
      "표본편의는 확률화(randomization)에 의해 최소화하거나 없앨 수 있다.",
      "비표본오차(non-sampling error)는 표본오차를 제외한 모든 오차로 조사 과정에서 발생하는 모든 부주의나 실수, 알 수 없는 원인 등 모든 오차를 의미하며 조사대상이 증가한다고 해서 오차가 커지지는 않는다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "표본공간은 어떤 실험이나 시도의 결과로 나올 수 있는 모든 가능한 결과의 집합이다. 사건이란 표본공간의 부분집합을 말한다. 다음 중 확률 및 확률분포에 관한 설명으로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "(사건 A가 일어나는 경우의 수)/(일어날 수 있는 모든 경우의 수)를 P(A)라 할 때 이를 A의 수학적 확률이라 한다.",
      "한 사건 A가 일어날 확률을 P(A)라 할 때 n번의 반복시행에서 사건 A가 일어난 횟수를 r이라 하면, 상대도수는 r/n은 n이 커짐에 따라 확률 P(A)에 가까워짐을 알 수 있다. P(A)를 사건 A의 통계적 확률이라 한다.",
      "두 사건 A, B가 독립일 때, 사건 B의 확률은 A가 일어났다는 가정 하에서의 B의 조건부확률과는 다르다.",
      "표본공간에서 임의의 사건 A가 일어날 확률 P(A)는 항상 0과 1 사이에 있다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 표본조사의 유의점에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "표본편의는 표본추출 과정에서 특정 대상이 다른 대상에 비해 우선적으로 추출될 때 생기는 오차를 의미한다.",
      "표본편의(sampling bias)는 모형 추론 방법으로 최소화하거나 없앨 수 있다.",
      "표본값으로 모집단의 모수를 추정할 때 표본오차와 비표본오차가 발생할 수 있다.",
      "응답오차, 유도질문 등은 표본조사에서 유의할 점이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "표본조사나 실험을 실시하는 과정에서 추출된 원소나 관측 자료를 얻는 것을 측정(measurement)이라고 한다. 자료의 측정수준에 따라 통계에 이용해야 할 통계량이나 검정법이 다르다. 자료는 분류자료와 수량자료로 나눌 수 있는데 다음 중 자료의 측정 수준에 대한 설명으로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "명목척도(nominal scale)는 단순한 번호로 차례의 의미는 없다.",
      "순서척도(ordinal scale)는 순서가 의미를 가지는 번호이다.",
      "구간척도(interval scale)는 순서뿐만 아니라 그 간격도 의미가 있으며 0이 절대적인 의미를 가진다.",
      "비율척도(ratio scale)는 0을 기준으로 하는 절대적 척도를 가지며 간격뿐만 아니라 비율에도 의미가 있다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "귀무가설이 사실인데도 불구하고 사실이 아니라고 판정할 때(귀무가설을 기각하는 오류) 이를 제1종 오류라고 한다. 이때 우리가 내린 판정이 잘못되었을 실제 확률은 무엇으로 나타낼 수 있는가?",
    "answer": "",
    "explanation": "",
    "options": [
      "$\u0007lpha$ (알파)",
      "p-value",
      "검정통계량",
      "$1-\u0007lpha$"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "확률변수 X가 확률질량함수 f(x)를 갖는 이산형 확률변수인 경우 그 기댓값으로 옳은 식은?",
    "answer": "",
    "explanation": "",
    "options": [
      "$E(X) = \\sum x f(x)$",
      "$E(X) = \\int x f(x) dx$",
      "$E(X) = \\sum x^2 f(x)$",
      "$E(X) = \\int x^2 f(x) dx$"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 조건부 확률에서 사건 A가 일어났다는 가정하의 사건 B의 확률을 조건부 확률이라고 하고 아래의 식으로 표현한다. 다음 중 의 계산식을 표현하기 위해 (가)에 들어갈 식으로 적절한 것은?\n$$P(B|A) = \frac{(가)}{P(A)}$$",
    "answer": "",
    "explanation": "",
    "options": [
      "$P(A \\cap B)$",
      "$P(A)$",
      "$P(B)$",
      "$P(A \\cup B)$"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 모분산의 추론에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "모집단의 변동성 또는 퍼짐의 정도에 관심이 있는 경우, 모분산이 추론의 대상이 된다.",
      "정규모집단으로부터 n개를 단순임의 추출한 표본의 분산은 자유도가 n-1인 t 분포를 따른다.",
      "모집단이 정규분포를 따르지 않더라도 중심기하정리를 통해 정규모집단으로부터의 모분산에 대한 검정을 유사하게 시행할 수 있다.",
      "이 표본에 의한 분산비 검정은 두 표본의 분산이 동일한지를 비교하는 검정으로 검정통계량은 F 분포를 따른다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "통계적 추론이란 자료의 정보를 이용하여 모집단에 관한 추측이나 결론을 이끌어 내는 과정이다. 이 과정은 추정과 가설검정을 통하여 이루어진다. 다음 중 추정과 가설검정에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "가장 참값이라고 여겨지는 하나의 모수 값을 택하는 것을 점추정이라고 한다. 즉, 점추정은 모수가 특정한 값일 것이라고 추정하는 것이다.",
      "구간추정이란 일정한 크기의 신뢰구간으로 모수가 특정한 구간에 있을 것이라고 선언 하는 것으로 구해진 구간을 신뢰구간이라고 한다.",
      "귀무가설이 사실일 때, 관측된 검정통계량의 값보다 귀무가설을 지지하는 방향으로 검정통계량이 나올 확률을 p값이라고 한다.",
      "기각역이란 대립가설이 맞을 때 그것을 받아들이는 확률을 의미한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래의 표가 나타내는 확률질량함수를 가진 확률변수 x의 기댓값 E(x)로 가장 적절한 것은?\n```\nx  |  1  |  2  |  3  |   4\nf(x) | 0.2 | 0.3 | 0.2 | 0.075  (※ 원본 오타 또는 미완성 확률분포, 합이 0.775인 상태)\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "1",
      "1.7",
      "2.5",
      "10"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 연속형 확률분포가 아닌 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "이항분포(Binomial distribution)",
      "정규분포(Normal distribution)",
      "t-분포(t-distribution)",
      "카이제곱 분포($\\chi^2$-distribution)"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "표본조사나 실험을 실시하는 과정에서 추출된 원소들이나 실험 단위로부터 주어진 목적에 적합하도록 관측해 자료를 얻는 것을 측정(measurement)이라 한다. 다음 중 자료의 종류에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "명목척도 - 측정 대상이 어느 집단에 속하는지 분류할 때 사용",
      "순서척도 - 측정 대상의 특성이 가지는 서열관계를 관측하는 척도",
      "구간척도 - 측정 대상이 갖는 속성의 양을 측정하는 것으로 구간이나 구간 사이의 간격이 의미가 있는 자료",
      "비율척도 - 절대적 기준인 원점이 존재하지 않으며 모든 사칙연산이 가능한 척도"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "히스토그램은 표로 되어 있는 도수분포표를 그래프로 나타낸 것이다. 다음 중 히스토그램에 대한 설명으로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "히스토그램에서는 가로축이 계급, 세로축이 도수를 나타낸다. 계급은 보통 변수의 구간이며, 서로 겹치지 않는다.",
      "히스토그램은 표본의 크기가 작아도 각 막대의 높이가 데이터 분포의 형상을 잘 표현해준다.",
      "그래프의 모양이 치우쳐있거나 봉우리가 여러개 있는 그래프는 비정규 데이터일 수 있다.",
      "봉우리가 여러개 있는 데이터는 일반적으로 2개 이상의 공정이나 조건에서 데이터가 수집되는 경우 발생한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Wage 데이터셋에 대한 아래 요약통계량에 대한 설명으로 가장 부적절한 것은 무엇인가?\n```\n> summary(Wage[,c(\"wage\",\"education\")])\nwage                         education\nMin.   : 20.09   1. < HS Grad      :268\n1st Qu.: 85.38   2. HS Grad        :971\nMedian :104.92   3. Some College   :650\nMean   :111.70   4. College Grad   :685\n3rd Qu.:128.68   5. Advanced Degree:426\nMax.   :318.34\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "wage의 최소값은 20.09이다.",
      "교육수준의 5개의 그룹으로 구분된다.",
      "wage는 범주형 변수이다.",
      "education은 순서형 변수이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 chickwts 데이터 프레임을 분석한 것이다. 다음 중 결과에 대한 해석이 잘못된 것은?\n```\n> t.test(chickwts$weight)\nOne Sample t-test\ndata:  chickwts$weight\nt = 28.202, df = 70, p-value < 2.2e-16\nalternative hypothesis: true mean is not equal to 0\n95 percent confidence interval:\n242.8301 279.7896\nsample estimates:\nmean of x\n261.3099\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "전체 관측치 수는 70개 이다. (※ df = 70이므로 n = 71)",
      "99% 신뢰구간을 구하기 위해서는 `\"conf.level=0.99\"`라는 옵션을 사용할 수 있다.",
      "닭 무게의 점 추정량은 261.3 이며, 95% 신뢰구간은 242.8에서 279.8이다.",
      "닭 무게에 대한 p-value는 p-value < 2.2e-16이므로 귀무가설이 기각된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-20",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 제1종 오류에 대한 설명 중 올바른 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "$H_0$가 사실일 때, $H_0$가 사실이라고 판정",
      "$H_0$가 사실이 아닐 때, $H_0$가 사실이라고 판정",
      "$H_0$가 사실일 때, $H_0$가 사실이 아니라고 판정",
      "$H_0$가 사실이 아닐 때, $H_0$가 사실이 아니라고 판정"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-21",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "통계적 추론에서 모집단의 모수를 검증하기 위해 사용하는 모수적 방법과 비교하여 비모수적 방법의 특징으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "비모수적 검정은 모집단의 분포에 대해 아무런 제약을 가하지 않는다.",
      "관측된 자료가 특정 분포를 따른다고 가정할 수 없는 경우에 이용된다.",
      "분포의 모수에 대한 가설을 설정하지 않고 분포의 형태에 대해 가설을 설정한다.",
      "비모수 검정에서는 관측값의 절대적 크기에 의존하여 평균, 분산 등을 이용해 검정을 실시한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-22",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 표본을 도표화함으로써 모집단 분포의 개형을 파악하는 방법에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "히스토그램은 도수분포표를 이용하여 표본자료의 분포를 나타낸 그래프이다. 수평축 위에 계급구간을 표시하고 그 위로 각 계급의 상대도수에 비례하는 넓이의 직사각형을 그린 것이다.",
      "줄기잎그림은 각 데이터의 점들을 구간단위로 요약하는 방법으로써 계산량이 많다.",
      "산점도는 두 특성의 값이 연속적인 수인 경우, 표본자료를 그래프로 나타내는 방법으로써 각 이차원 자료에 대하여 좌표가 (특성 1의 값, 특성 2의 값)인 점을 좌표평면 위에 찍은 것이다.",
      "파레토그림(pareto diagram)은 명목형 자료에서 \"중요한 소수\"를 찾는데 유용한 방법이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-23",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Wage 데이터셋에서 wage에 대한 t-test를 실시하였다. 다음 설명 중 부적절한 것은?\n```\n> t.test(Wage$wage,mu=100)\nOne Sample t-test\ndata:  Wage$wage\nt = 15.362, df = 2999, p-value < 2.2e-16\nalternative hypothesis: true mean is not equal to 100\n95 percent confidence interval:\n110.2098 113.1974\nsample estimates:\nmean of x\n111.7036\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "한 집단의 평균에 대한 t-test(one sample t-test) 결과이다.",
      "양측검정 결과를 보여주고 있다.",
      "t-test의 자유도는 2999이다.",
      "평균에 대한 95% 신뢰구간은 귀무가설에서 설정한 평균의 참값을 포함한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-24",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "여섯 가지 종류의 닭 사료 첨가물의 효과를 비교하기 위한 데이터와 그래프이다. 아래의 설명으로 다음 중 적절하지 않은 것은 무엇인가?\n*(참고: 사료 종류별 chickwts의 weight 상자그림이 그려져 있음)*",
    "answer": "",
    "explanation": "",
    "options": [
      "Weight의 중앙값은 horsebean 그룹이 가장 작다.",
      "이상값이 존재하지 않는다.",
      "Meatmeal 그룹과 Linseed 그룹의 Weight의 평균이 유의한 차이가 있는지 알 수 없다.",
      "Horsebean 그룹에서 Weight가 150보다 작은 개체가 약 50% 가량 된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-25",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Carseats 데이터 프레임은 400개 상점에서 판매 중인 유아용 카시트에 대한 자료이다. 다음 중 아래의 결과물에 대한 설명으로 가장 부적절한 것은?\n*(참고: summary(Carseats)의 결과가 나타남. ShelveLoc은 Bad : 96, Good : 85, Medium: 219 이며, US는 No:142, Yes:258 임)*",
    "answer": "",
    "explanation": "",
    "options": [
      "ShelveLoc은 명목척도에 해당된다.",
      "ShelveLoc은 Good인 카시트의 비율은 0.21이다. (※ 85 / 400 = 0.2125)",
      "US 변수는 구간척도에도 해당된다.",
      "US가 No인 카시트가 Yes인 카시트보다 적다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-26",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Chickwts는 71마리의 병아리들에게 서로 다른 모이(feed)를 6주간 먹인 후 무게(weight)를 측정한 자료이다. 아래는 첨가물 그룹 간 평균 무게에 차이가 있는지 검정하기 위해 분산분석을 한 결과이다. 설명이 가장 부적절한 것은?\n```\n> summary(aov(weight~feed, chickwts))\nDf  Sum Sq Mean Sq F value   Pr(>F)\nfeed         5  231129   46226   15.37 5.94e-10 ***\nResiduals   65  195556    3009\n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "귀무가설은 \"첨가물 그룹 간의 평균이 모두 동일하다\"이다.",
      "첨가물의 개수는 5개다.",
      "유의수준 0.05하에서 첨가물 그룹 간의 무게 평균이 동일하지 않다는 통계적으로 유의한 증거가 있다.",
      "위의 가설검정은 F 통계량을 기반으로 한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-27",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 데이터는 두 종류의 수면 유도제(group)를 무작위로 선정된 20명의 환자를 대상으로 수면 시간 증감(extra)을 측정한 자료이다. 아래 결과에 대한 설명으로 잘못된 것은?\n```\n> head(sleep)\nextra group ID\n1   0.7     1  1\n2  -1.6     1  2\n...\n> t.test(extra~group, sleep)\nWelch Two Sample t-test\ndata:  extra by group\nt = -1.8608, df = 17.776, p-value = 0.07939\nalternative hypothesis: true difference in means is not equal to 0\n95 percent confidence interval:\n-3.3654832  0.2054832\nsample estimates:\nmean in group 1 mean in group 2\n0.75            2.33\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "유의수준 1%하에서 수면유도제 2가 수면유도제 1보다 통계적으로 유의하게 평균 수면시간을 증가시킨다고 결론지을 수 있다. 즉, 수면유도제 2가 수면유도제 1보다 더 효과적이다.",
      "수면유도제 1에 의해 평균적으로 0.75시간의 수면시간이 증가하였다.",
      "수면유도제 2에 의해 평균적으로 2.33시간의 수면시간이 증가하였다.",
      "두 수면유도제에 의해 증가된 평균 수면시간의 차이는 -3.37시간에서 0.21시간 사이에 있다고 95% 확신할 수 있다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-28",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Default 데이터셋은 10000명의 신용카드 고객에 대한 카드대금 연체여부(default=Yes/No), 학생여부(student=Yes/No)를 포함한다. 아래는 default와 student 간의 관계를 나타내는 그림(모자이크 플롯)이다. 보기의 설명 중 옳지 않은 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "학생인 고객이 학생이 아닌 고객보다 많다.",
      "연체 고객이 연체하지 않은 고객에 비해 적다.",
      "연체하지 않은 고객 중 학생의 수가 연체한 고객 중 학생의 수보다 크다.",
      "학생 여부와 연체 여부는 서로 독립이 아닐 것으로 추측된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-29",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 스피어만 상관계수에 대한 설명으로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "비선형적인 상관관계는 나타내지 못한다.",
      "서열척도로 측정된 변수간 관계를 측정한다.",
      "-1과 1사이의 값을 가진다.",
      "0은 상관관계가 없음을 의미한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-30",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 회귀분석의 가정으로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "독립성",
      "선형성",
      "정규성",
      "이분산성"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-31",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 상관계수에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "피어슨 상관계수는 두 변수 간의 선형관계의 크기를 측정한다.",
      "스피어만 상관계수는 두 변수 간의 비선형적인 관계도 측정 가능하다.",
      "피어슨 상관계수와 스피어만 상관계수는 -1과 1사이의 값을 가진다.",
      "피어슨 상관계수는 두 변수를 순위로 변환시킨 후 두 순위 사이의 스피어만 상관계수로 정의된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-32",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "상관분석에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "등간 척도 및 비율척도로 측정된 변수들 간의 상관계수를 측정하는데 피어슨 상관계수를 이용한다.",
      "서열 척도로 측정된 변수들 간의 상관계수를 측정하는데 스피어만 상관계수를 이용한다.",
      "상관분석은 변수들 간의 연관성을 파악하기 위해 사용하는 분석 기법 중 하나로 변수 간의 선형 관계 정도를 분석하는 통계기법이다.",
      "상관분석은 종속변수에 미치는 영향력의 크기를 파악하여 독립변수의 특정한 값에 대응하는 종속 변수값을 예측하는 선형모형을 산출하는 방법이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-33",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 추정된 다중회귀모형이 통계적으로 유의한지 확인하는 방법으로 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "F 통계량을 확인한다.",
      "결정계수를 확인한다.",
      "t 통계량을 확인한다.",
      "잔차를 그래프로 그리고 회귀진단을 한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-34",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "데이터 프레임 attitude에 대해 아래와 같이 R 명령을 적용하고 결과를 얻었다. 다음 설명 중 가장 부적절한 것은?\n```\n> cor(attitude)\nrating complaints privileges learning  raises critical advance\nrating     1.0000     0.8254     0.4261   0.6237  0.5901   0.1564  0.1550\ncomplaints 0.8254     1.0000     0.5582   0.5967  0.6691   0.1877  0.2245\n...\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "모든 변수들 사이에 양(+)의 상관관계가 존재한다.",
      "rating과 complaints 사이에 가장 강한 상관관계가 존재한다.",
      "critical과 learning 사이의 상관관계가 가장 약하다. (※ 0.11596으로 가장 작음)",
      "모든 변수의 분산이 1이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-35",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "변수 X와 Y의 피어슨 상관계수는 0.27이고 변수 X와 Z의 피어슨 상관계수는 -0.78이다. 다음 중 X, Y, Z 간 피어슨 상관계수에 대한 설명으로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "두 상관계수의 유의성은 판단할 수 없다.",
      "X와 Y는 선형관계를 가진다.",
      "X와 Y는 음의 상관관계를 가진다.",
      "X와 Y의 선형관계보다 X와 Z의 선형관계가 강하다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-36",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 200개의 특정 제품의 sales(단위:1천개)와 TV, Radio, Newspaper 광고예산(단위:1천달러) 간의 pearson 상관계수 행렬이다. 설명이 가장 부적절한 것은?\n```\nTV     Radio  Newspaper  Sales\nTV       1.000   0.054    0.057    0.793\nRadio    0.054   1.000    0.333    0.543\nNewspaper0.057   0.333    1.000    0.222\nSales    0.793   0.543    0.222    1.000\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "3가지 매체의 광고예산은 Sales와 양의 상관관계를 가지고 있다.",
      "Sales와 가장 상관관계가 높은 변수는 TV이다.",
      "Radio 광고예산이 증가할 때 Newspaper 광고 예산이 증가하는 경향이 있다.",
      "TV 광고 예산을 늘릴 경우 Sales가 증가하는 인과관계를 가진다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-37",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Carseats 데이터 프레임은 400개 상점에서 판매 중인 유아용 카시트에 대한 자료이다. 이 데이터의 일부 변수들의 상관분석 결과로 가장 부적절한 것은?\n```\n> rcorr(as.matrix(Carseats[,c(1:6,8)]),type=\"pearson\")\nSales CompPrice Income Advertising Population Price   Age\nSales      1.00      0.06   0.15        0.27       0.05 -0.44 -0.23\n...\nP\nSales CompPrice Income Advertising Population Price   Age\nSales              0.2009 0.0023      0.0000     0.3140  0.0000 0.0000\n...\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "Sales와 CompPrice 간의 상관계수는 유의하지 않다. (※ P-value가 0.2009로 0.05보다 큼)",
      "Sales와 가장 강한 상관관계를 보이는 변수는 Price이다.",
      "Price가 올라갈수록 Sales는 낮아지는 경향이 있다.",
      "Sales와 Price는 양의 선형관계를 가진다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-38",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 단순회귀분석의 결과이다 다음 설명 중 부적절한 것은?\n```\nCall:\nlm(formula = Height ~ Bodyweight)\nResiduals:\nMin      1Q  Median      3Q     Max\n-3.5693 -0.9634 -0.0921  1.0425  5.1238\nCoefficients:\nEstimate Std. Error t value Pr(>|t|)\n(Intercept)      0.5          1    -0.5    0.610\nBodyweight       3.2        0.2      16  <2e-16 ***\n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\nResidual standard error: 1.452 on 142 degrees of freedom\nMultiple R-squared:  0.6466,\tAdjusted R-squared:  0.6441\nF-statistic: 259.8 on 1 and 142 DF,  p-value: < 2.2e-16\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "종속변수는 Height이다.",
      "독립변수는 Bodyweight이다.",
      "모형의 설명력은 약 64.66%이다.",
      "모형의 적합도는 통계적으로 유의하지 않다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-39",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다중 회귀분석에서 가장 적합한 회귀모형을 찾기 위한 과정의 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "독립변수의 수가 많아지면 모델의 설명력이 증가하지만 모형이 복잡해지고, 독립변수들 간에 서로 영향을 미치는 다중공선성의 문제가 발생하므로 상대적인 조정이 필요하다.",
      "회귀식에 대한 검정은 독립변수의 기울기(회귀계수)가 0이 아니라는 가정을 귀무가설, 기울기가 0인 것을 대립가설로 놓는다.",
      "잔차의 독립성, 등분산성 그리고 정규성을 만족하는지 확인해야 한다.",
      "회귀분석의 가설검정에서 p값이 0.05보다 작은 값이 나와야 통계적으로 유의한 결과로 받아들일 수 있다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-40",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 결과를 생성한 잔차이다. 다음 중 어떤 회귀분석의 가정이 위배되었다고 판단할 수 있을지 고르시오.\n*(참고: 잔차 산점도 그래프가 x값 증가에 따라 상하 폭이 넓어지는 나팔 모양 형태를 보임)*",
    "answer": "",
    "explanation": "",
    "options": [
      "선형성",
      "독립성",
      "등분산성",
      "비상관성"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-41",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Default 데이터셋은 10,000명의 신용카드 고객에 대한 연체여부(default: 1-default, 0-not default), 카드대금 납입 후 남은 평균 카드잔고(balance), 연봉(income)을 포함하고 있다. 아래는 연체 가능성을 95% 신뢰수준으로 모형화한 결과이다. 다음 설명이 부적절한 것은 무엇인가?\n```\n> model<-glm(default~balance+income, data=Default, family=\"binomial\")\n> summary(model)\n...\nCoefficients:\nEstimate Std. Error z value Pr(>|z|)\n(Intercept) -1.154e+01  4.348e-01 -26.545  < 2e-16 ***\nbalance      5.647e-03  2.274e-04  24.836  < 2e-16 ***\nincome       2.081e-05  4.985e-06   4.174 2.99e-05 ***\n...\n```",
    "answer": "3",
    "explanation": "`income`의 회귀계수(`Estimate`)는 `2.081e-05`로 양수(+)이다. 로지스틱 회귀에서 회귀계수가 양수이면 해당 변수가 증가할 때 연체 발생 확률(default=1)이 증가함을 의미하므로, 연체 가능성이 높아진다.",
    "options": [
      "로지스틱 회귀모형의 적합 결과이다.",
      "balance는 default를 설명하는데 통계적으로 유의하다.",
      "balance가 높을수록 default 가능성이 높다.",
      "income이 높을수록 default 가능성이 낮다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-42",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "회귀분석에서 결정계수($R^2$)에 한 설명으로 부적절한 것은?",
    "answer": "0",
    "explanation": "결정계수($R^2$)는 총 변동 중에서 회귀모형에 의해 설명되는 변동이 차지하는 비율이다. 설명되지 않는 변동이 차지하는 비율은 $1 - R^2$이다.",
    "options": [
      "총 변동 중에서 설명이 되지 않는 오차에 의한 변동이 차지하는 비율이다.",
      "회귀모형에서 입력 변수가 증가하면 결정계수도 증가한다.",
      "다중 회귀분석에서는 최적 모형의 선정기준으로 결정계수보다는 수정된 결정계수 값을 사용하는 것이 적절하다.",
      "수정된 결정계수는 유의하지 않은 독립변수들이 회귀식에 포함되었을 때 그 값이 감소한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-43",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 회귀분석의 결과 출력되는 output의 일부이다. 다음 중 Outstate의 t값을 구하는 계산식으로 적절한 것은?\n```\nCoefficients:\nEstimate   Std.Error\n(Intercept) 3.145e-01  2.456e+00\nPrivateYes  3.556e+00  1.055e+00\nTop10perc   7.853e-01  6.537e+00\nOutstate    1.579e-01  1.775e-02\n```",
    "answer": "0",
    "explanation": "회귀계수의 유의성 검정을 위한 t 통계량은 $\text{t값} = \text{회귀계수 추정치(Estimate)} / \text{표준오차(Std.Error)}$로 계산된다. 따라서 `Outstate` 변수의 t값 식은 `0.1579 / 0.01775`이다.",
    "options": [
      "`0.1579/0.01775`",
      "`1.579/1.775`",
      "`15.79/177.5`",
      "`1.579/0.1775`"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-44",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 데이터의 정규성을 확인하기 위한 방법으로 부적절한 것은?",
    "answer": "3",
    "explanation": "데이터의 정규성을 확인하는 통계적 방법에는 샤피로-윌크 검정(Shapiro-Wilk test), 시각적 방법에는 히스토그램, Q-Q Plot이 있다. 더빈-왓슨 검정(Durbin-Watson test)은 잔차의 자기상관성(독립성)을 검정하는 기법이다.",
    "options": [
      "히스토그램",
      "Q-Q plot",
      "Shapiro-Wilks test",
      "Durbin Watson test"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-45",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 최적회귀방정식을 선택하기 위한 방법에 대한 설명으로 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "단계적 방법(Stepwise Method)은 전진 선택법과 후진 제거법을 보완하여 결합한 방법이지만, 세 가지 방법이 항상 동일한 최적 모형을 선택하는 것은 아니다.",
    "options": [
      "가능한 범위 내에서 적은 수의 설명변수를 포함시킨다.",
      "AIC나 BIC의 값이 가장 작은 모형을 선택하는 방법으로 모든 가능한 조합의 회귀분석을 실시한다.",
      "전진 선택법이나 후진제거법과 동일한 최적 모형을 선택하는 것이 단계적 방법이다.",
      "전진 선택법은 설명변수를 추가했을 때 제곱합의 기준으로 가장 설명을 잘하는 변수를 고려하여 그 변수가 유의하면 추가한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-46",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "College 데이터 프레임은 777개의 미국 소재 대학의 각종 통계치를 포함하고 있다. 각 대학에 재학하는데 필요한 비용이 졸업률(Grad.Rate)에 미치는 영향을 알아보기 위해 등록금(Outstate), 기숙사비(Room.Board), 교재구입비(Books), 그 외 개인지출비용(Personal)을 활용하기로 했다. 다음 중 아래의 결과물에 대한 설명으로 가장 부적절한 것은?\n```\n> summary(lm(Grad.Rate~Outstate+Room.Board+Books+Personal,data=College))\n...\nCoefficients:\nEstimate Std. Error t value Pr(>|t|)\n(Intercept) 42.0238625  2.7721270  15.159  < 2e-16 ***\nOutstate     0.0020530  0.0001693  12.124  < 2e-16 ***\nRoom.Board   0.0014194  0.0006108   2.324 0.020396 *\nBooks       -0.0010694  0.0031341  -0.341 0.733032\nPersonal    -0.0026798  0.0007929  -3.380 0.000762 ***\n...\nResidual standard error: 13.97 on 772 degrees of freedom\nMultiple R-squared:  0.3416,\tAdjusted R-squared:  0.3382\nF-statistic: 100.1 on 4 and 772 DF,  p-value: < 2.2e-16\n```",
    "answer": "0",
    "explanation": "`Books` 변수의 p-value가 `0.733032`로 유의수준 0.05보다 훨씬 크기 때문에 통계적으로 유의하지 않다. 따라서 모든 설명변수의 회귀계수가 유의한 것은 아니다.",
    "options": [
      "모든 설명변수에 대한 회귀계수가 같이 유의하다.",
      "위의 회귀모형은 대학의 졸업률을 설명하는데 유의하다.",
      "위의 회귀모형은 대학의 졸업률의 변동성은 약 34.16%를 설명한다.",
      "회귀모형의 가정을 만족하는지는 판단할 수 없다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-47",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 시간의 흐름에 따라 관측된 데이터에 관한 것으로 적절한 것은?",
    "answer": "1",
    "explanation": "일정한 시간 간격에 따라 순차적으로 관측되어 얻어진 데이터는 시계열(Time series) 자료이다.",
    "options": [
      "질적자료",
      "시계열자료",
      "양적자료",
      "횡단면 자료"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-48",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 시계열분석에서 정상성의 특징이 아닌 것은?",
    "answer": "2",
    "explanation": "정상 시계열의 특성은 시점에 상관없이 평균과 분산이 일정하고, 공분산은 시차에만 의존하는 것이다. 자기회귀식의 오차항(잔차)이 백색잡음인 것이지, 자기회귀식 자체에 백색잡음이 없는 것은 아니다.",
    "options": [
      "평균이 일정하다. 즉, 모든 시점에 대해 일정한 평균을 가진다.",
      "분산도 시점에 의존하지 않는다.",
      "자기회귀식에는 백색잡음이 없다.",
      "공분산은 단지 시차에만 의존하고 실제 어느 시점 t, s에는 의존하지 않는다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-49",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "주성분 분석은 p개의 변수들을 중요한 m(p)개의 주성분으로 표현하여 전체 변동을 설명하는 방법을 사용한다. 다음 중 주성분 개수(m)를 선택하는 방법에 대한 설명으로 가장 부적절한 것은?",
    "answer": "1",
    "explanation": "평균 고유값(Average Eigenvalue) 방법은 고유값들의 평균을 구한 후, 고유값이 평균값 이상(상관행렬의 경우 고유값 1 이상)인 주성분을 선택(설정)하는 방법이지 제거하는 방법이 아니다.",
    "options": [
      "전체 변이 공헌도(percentage of total variance) 방법은 전체 변이의 70~90% 정도가 되도록 주성분의 수를 결정한다.",
      "평균 고유값(average eigenvalue) 방법은 고유값들의 평균을 구한 후 고유값이 평균값 이상이 되는 주성분을 제거하는 방법이다.",
      "Scree graph를 이용하는 방법은 고유값의 크기순으로 산점도를 그린 그래프에서 감소하는 추세가 완만해지는 지점에서 1을 뺀 개수를 주성분의 개수로 선택한다.",
      "주성분은 주성분을 구성하는 변수들의 계수 구조를 파악하여 적절하게 해석되어야 하며, 명확하게 정의된 해석 방법이 있는 것은 아니다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-50",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "시계열을 구성하는 4가지 요소에 해당되지 않는 것은?",
    "answer": "1",
    "explanation": "시계열의 4가지 주요 변동 요인은 추세 변동(Trend), 계절 변동(Seasonal), 순환 변동(Cyclical), 불규칙 변동(Irregular)이다. 교호요인은 실험계획법이나 분산분석에서의 개념이다.",
    "options": [
      "계절요인",
      "교호요인",
      "순환요인",
      "추세요인"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-51",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Hitters 데이터셋은 메이저리그의 선수 322명에 대한 타자 기록으로 20여개의 변수를 포함하고 있다. 아래 회귀모형에서 변수선택을 하기 위한 결과물의 일부이다. 다음 중 결과물에 대한 설명으로 부적절한 것은?\n```\n> model<-lm(Salary~., data=Hitters)\n> step(model, direction=\"backward\")\nStart:  AIC=3046.02\nSalary ~ AtBat + Hits + HmRun + Runs + RBI + Walks + Years + ...\n```",
    "answer": "0",
    "explanation": "`step` 함수 호출 시 `direction=\"backward\"` 옵션을 주었으므로 후진제거법(Backward Elimination)을 수행하고 있다.",
    "options": [
      "전진 선택법을 통한 변수선택을 하고 있다.",
      "모든 설명변수가 포함된 모형에서 시작한다.",
      "매 단계에서 가장 설명력이 낮은 변수를 제거한다.",
      "한번 제거된 변수는 다시 모형에 포함될 수 없다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-52",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 주성분 분석의 결과에 대한 다음 설명 중 가장 부적절한 것은?\n*(참고: 고유값 분산의 크기를 나타내는 스크리 그림(scree plot)이 수평으로 완만해지는 형태를 보임)*",
    "answer": "2",
    "explanation": "주성분의 분산 감소 폭이 급격하게 줄어들어 그래프가 완만해지기(수평을 유지하기) 바로 전 단계의 주성분 수를 선택한다. 감소가 완만해진다는 것은 추가적인 주성분이 주는 정보량이 매우 적음을 의미한다.",
    "options": [
      "주성분의 분산의 크기를 보여주는 스크리 그림(scree plot)이다.",
      "주성분의 개수를 선택하기 위해 총 분산의 비율이 70~90% 사이가 되는 지점을 찾는데 사용되는 그래프이다.",
      "주성분의 분산의 감소가 급격하게 줄어들어 주성분의 개수를 늘릴 때 얻게 되는 정보의 양이 상대적으로 급격한 지점에서 주성분의 개수를 선택한다.",
      "몇 개의 주성분을 사용하여 차원 축소를 진행할지 결정하기 위해 사용된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-53",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Data는 메이저리그에서 활약하는 263명의 선수에 대한 타자 기록으로 연봉(Salary)을 비롯한 17개의 변수를 포함하고 있다. 아래는 17개의 변수들을 사용하여 주성분 분석을 시행한 결과이다. 다음 설명 중 잘못된 것은?\n```\n> pca-princomp(data,cor=TRUE)\n> summary(pca)\nImportance of components:\nComp.1    Comp.2    Comp.3\nStandard deviation     2.7733967 2.0302601 1.1148557\nProportion of Variance 0.4524547 0.2424680 0.1016960\nCumulative Proportion  0.4524547 0.6949227 0.7966185\n...\n```",
    "answer": "2",
    "explanation": "`princomp` 함수에서 `cor=TRUE` 옵션을 주었으므로, 공분산행렬이 아닌 상관행렬(Correlation matrix)을 바탕으로 주성분 분석을 시행한 것이다.",
    "options": [
      "최소 80% 이상의 분산설명력을 갖기 위해서는 4개 이상의 주성분을 사용해야 한다.",
      "가장 큰 분산설명력을 가지는 주성분은 전체 분산의 45.25%를 설명한다.",
      "공분산행렬을 사용하여 주성분 분석을 시행한 것이다.",
      "17차원을 2차원으로 축소한다면 잃게 되는 정보량은 약 30.5%이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-54",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 시계열 데이터를 분석하기 위한 절차들이다. 다음 중 시계열 데이터의 분석 절차 분석으로 가장 적절한 것은?\n> ㉠ 시간 그래프 그리기\n> ㉡ 추세와 계절성을 제거하기\n> ㉢ 잔차를 예측하기\n> ㉣ 잔차에 대한 모델 적합하기\n> ㉤ 예측된 잔차에 추세와 계절성을 더하여 미래를 예측하기",
    "answer": "3",
    "explanation": "시계열 분석의 일반적인 절차는 ㉠ 시간 그래프를 그려서 데이터의 전반적 특징 파악 -> ㉡ 추세와 계절성을 분석/제거 -> ㉣ 잔차에 대한 모델을 적합 -> ㉢ 적합된 모델을 통해 잔차를 예측 -> ㉤ 예측된 잔차에 제거했던 추세와 계절성을 다시 더하여 최종 미래 시계열을 예측하는 순이다.",
    "options": [
      "㉠-㉡-㉢-㉣-㉤",
      "㉠-㉡-㉣-㉢-㉤",
      "㉠-㉣-㉡-㉢-㉤",
      "㉠-㉣-㉢-㉡-㉤"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-55",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 lasso 회귀모형에 대한 설명으로 부적절한 것은?",
    "answer": "3",
    "explanation": "Lasso 회귀모형은 회귀계수의 절대값 합에 가중치를 주는 L1 규제(L1 Penalty)를 사용한다. L2 규제는 Ridge 회귀이다.",
    "options": [
      "모형에 포함된 회귀계수들의 절대값의 크기가 클수록 penalty를 부여하는 방식이다.",
      "자동적으로 변수선택을 하는 효과가 있다.",
      "Lambda 값으로 penalty의 정도를 조정한다.",
      "L2 penalty를 사용한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-56",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "교차분석은 2개 이상의 변수를 결합하여 자료의 빈도를 살펴보는 기법이다. 다음 중 교차분석에 대한 설명으로 부적절한 것은 무엇인가?",
    "answer": "1",
    "explanation": "교차분석은 두 변수가 모두 범주형(명목/순서척도) 변수일 때 범주 간의 빈도 분석과 독립성 검정에 사용하는 기법이다.",
    "options": [
      "범수의 관찰도수에 비교될 수 있는 기대도수를 계산한다.",
      "교차분석은 두 문항 모두 범주형 변수가 아니어도 사용할 수 있으며, 두 변수 간 관계를 보기 위해 실시한다.",
      "교차분석은 교차표를 작성하여 교차빈도를 집계할 뿐 아니라 두 변수들 간의 독립성 검정을 할 수 있다.",
      "기대빈도가 5 미만인 셀의 비율이 20%를 넘으면 카이제곱 분포에 근사하지 않으며, 이런 경우 표본의 크기를 늘리거나 변수의 수준을 합쳐 셀의 수를 줄이는 방법 등을 사용한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-57",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 시계열 데이터에 대한 설명으로 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "시계열 자료에서 불규칙 변동인 잡음(noise)은 무작위적인 변동으로 일반적으로 그 구체적인 원인이 알려져 있지 않다.",
    "options": [
      "시계열 데이터의 모델링은 다른 분석모형과 같이 탐색 목적과 예측 목적으로 나눌 수 있다.",
      "짧은 기간 동안의 주기적인 패턴을 계절변동이라 한다.",
      "잡음(noise)은 무작위적인 변동이지만 일반적으로 원인은 알려져 있다.",
      "시계열분석의 주목적은 외부인자와 관련해 계절적인 패턴, 추세와 같은 요소를 설명할 수 있는 모델을 결정하는 것이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-58",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음은 다차원 척도법(MDS)에 대한 설명이다. 설명이 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "계량적 다차원 척도법(Metric MDS/Classical MDS)은 구간척도나 비율척도와 같은 수치 데이터 개체들 간의 유클리드 거리를 바탕으로 공간상에 표현하는 방법이다. 순서척도 데이터는 비계량적 다차원 척도법(Non-metric MDS)을 사용한다.",
    "options": [
      "다차원 척도법은 여러 대상들 간의 관계를 개체들 사이의 유사성/비유사성을 상대적 거리로 측정하여 개체들을 2차원 또는 3차원 공간상에 점으로 표현하는 분석 방법이다.",
      "다차원 척도법의 목적은 데이터 속에 잠재한 패턴을 찾기 위해 복잡한 구조를 소수 차원의 공간에 기하학적으로 표현하는 것이다.",
      "일반적인 다차원 척도법(classical MDS)은 계량적 다차원 척도법(metric MDS)이라고도 부르며 순서척도의 데이터로 이루어진 개체들의 거리를 계산한다.",
      "스트레스 값이 0.05 이하이면 적합도가 아주 좋은 것으로 해석하고 반복 분석과정을 중단해도 된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-59",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "시계열의 요소분해법은 시계열 자료가 몇 가지 변동들의 결합으로 이루어져 있다고 보고 변동요소별로 분해하여 쉽게 분석하기 위한 것이다. 다음 중 분해 요소에 대한 설명이 부적절한 것은?",
    "answer": "2",
    "explanation": "순환변동(Cyclical variation)은 경제적 변동이나 경기 부침 등 알려진 주기가 기후 등 계절적 주기와 달리 수년 단위로 나타나는 비교적 긴 변동을 말한다. 주기를 완전히 모르는 무작위 변동은 불규칙 변동이다.",
    "options": [
      "추세분석은 장기적으로 변해가는 큰 흐름을 나타내는 것으로 자료가 장기적으로 커지거나 작아지는 변화를 나타내는 요소이다.",
      "계절변동은 일정한 주기를 가지고 반복적으로 같은 패턴을 보이는 변화를 나타내는 요소이다.",
      "순환변동은 경제적이나 자연적인 이유 없이 알려지지 않은 주기를 가지고 변화하는 자료를 의미한다.",
      "불규칙변동은 불규칙하게 변동하는 급격한 환경변화, 천재지변 같은 것으로 발생하는 변동을 말한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-60",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래의 주성분 분석을 시행한 결과에 대한 설명으로 가장 부적절한 것은?\n```\n> college_sc<-scale(college)\n> summary(college_s)\n...\n> fit<-princomp(college_s)\n> fit$loadings\nLoadings:\nComp.1 Comp.2 Comp.3 Comp.4 Comp.5\nOutstate    0.507         0.155  0.142  0.779\nRoom.Board  0.531  0.230  0.155  0.574 -0.557\n...\n```",
    "answer": "3",
    "explanation": "`scale` 함수로 데이터를 정규화한 후 공분산행렬로 주성분 분석을 수행한 결과는, 정규화하지 않은 데이터에 대해 상관행렬(`cor=T`)을 사용하여 분석한 결과와 수학적으로 동일하다.",
    "options": [
      "두 번째 주성분은 `0.230*Room.Board + 0.812*Books + 0.532*Personal`로 계산된다.",
      "첫 번째 주성분에 가장 큰 영향을 미치는 원변수는 `Books`이다.",
      "`Personal` 값이 클수록 첫 번째 주성분은 작아진다.",
      "`fit <- princomp(college, cor=T)`의 결과는 위의 결과와 다르다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-61",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음은 4개의 변수를 가진 데이터 프레임 USArrests에 주성분 분석을 적용해서 얻은 결과이다. 변수들의 전체 변동의 80% 이상을 설명하기 위해 필요한 최소 주성분의 숫자는 몇 개인가?\n```\n> summary(prcomp(USArrests, scale=TRUE))\nImportance of components:\nPC1    PC2     PC3     PC4\nStandard deviation     1.5749 0.9949 0.59713 0.41645\nProportion of Variance 0.6201 0.2474 0.08914 0.04336\nCumulative Proportion  0.6201 0.8675 0.95664 1.00000\n```",
    "answer": "1",
    "explanation": "누적기여율(Cumulative Proportion)을 확인했을 때, PC2까지의 누적 기여율이 `0.8675`(86.75%)로 80%를 넘으므로, 80% 이상의 변동을 설명하기 위한 최소 주성분 개수는 2개(PC1, PC2)이다.",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ]
  },
  {
    "id": "adp-s4-c4-short-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "실험 결과가 단지 성공과 실패만 있다고 가정하자. 성공일 경우 확률변수는 1의 값을 가지며, 실패일 경우 확률변수는 0의 값을 가진다. 이때 성공일 확률은 0.3이다. 이 경우 기댓값은 얼마인가?",
    "answer": "`0.3`",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 College 데이터의 `Grad.Rate` 변수의 기초통계량을 계산한 결과이다. College 데이터의 `Grad.Rate` 변수의 몇 %가 78보다 큰 값을 가지는가?\n```\n> summary(College$Grad.Rate)\nMin. 1st Qu.  Median    Mean 3rd Qu.    Max.\n10.00   53.00   65.00   65.46   78.00  118.00\n```",
    "answer": "`25%` (또는 `25`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래 주성분 분석의 결과에서 두 개의 주성분을 사용할 때 설명 가능한 전체 분산의 비율은?\n```\n> model<-princomp(Car)\n> summary(model)\nImportance of components:\nComp.1 Comp.2 Comp.3 Comp.4 Comp.5\nStandard deviation         1.503  1.075  0.840  0.752  0.555\nProportion of Variance     0.453  0.231  0.141  0.113  0.061\nCumulative Proportion      0.453  0.684  0.825  0.938  1.000\n```",
    "answer": "`68.4%` (또는 `68.4`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래 회귀분석 모형의 추정에 대한 설명에서 ( ㉠ )은 무엇인가?\n> 단순회귀분석 모형을 $y_i = \beta_0 + \beta_1 x_i + e_i$로 표현할 수 있다. 주어진 자료를 가장 잘 설명하는 회귀계수의 추정치는 보통 제곱오차 $\\sum_{i=1}^n (y_i - (\beta_0 + \beta_1 x_i))^2$를 최소로 하는 값을 구한다. 이와 같이 구해진 회귀계수 추정량을 ( ㉠ )이라고 한다.",
    "answer": "최소제곱법 (또는 최소자승법, 최소제곱추정량)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 표본추출방법은 무엇인가?\n> 번호를 부여한 샘플을 나열하여 k개씩 n개의 구간을 나누고 첫 구간에서 하나를 임의로 선택한 후에 k개의 띄어서 표본을 선택하고 매번 k번째 항목을 추출하는 표본 추출 방법",
    "answer": "계통추출법 (또는 Systematic sampling)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명은 어떤 오류에 관한 설명인가?\n> 귀무가설($H_0$)이 옳은데 귀무가설을 받아들이지 않고 기각하게 되는 오류",
    "answer": "제1종 오류",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 단순 로지스틱 회귀모형이다. \"exp($\beta_1$)의 의미는 $x_{1}, x_{2}, \\dots, x_{k}$가 주어질 때 $x_1$이 한 단위 증가할 때마다 성공($y=1$)의 ( 가 )이/가 몇 배 증가하는지를 나타내는 값이다.\" (가)는 무엇인가?\n$$\\log\\left(\frac{\\Pi(x)}{1-\\Pi(x)}\night) = \beta_0 + \beta_1 x_1 + \\dots + \beta_k x_k$$",
    "answer": "오즈 (또는 Odds, 승산)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "시점에 상관없이 시계열의 특성이 일정하다는 것을 의미하는 용어를 무엇이라고 하는가?",
    "answer": "정상성 (또는 정상 시계열)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "시계열 모형의 여러 종류 중 아래에서 설명하는 것은 무엇인가?\n> 가) 시계열 모델 중 자기 자신의 과거 값을 사용하여 설명하는 모형임\n> 나) 백색 잡음의 현재값과 자기 자신의 과거값의 선형 가중합으로 이루어진 정상 확률 모형\n> 다) 모형에 사용하는 시계열 자료의 시점에 따라 1차, 2차, ..., p차 등을 사용하나 정상시계열 모형에서는 주로 1, 2차를 사용함",
    "answer": "자기회귀 모형 (또는 AR 모형, AutoRegressive model)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "정상 시계열에 영향을 주는 일반적인 요인을 시계열에서 분리해 분석하는 방법은 무엇인가?",
    "answer": "분해시계열 (또는 분해법)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 스위스의 47개 프랑스어 사용지역의 출산율(Fertility)과 교육수준(Education)과의 관계를 회귀모형으로 추정한 것이다. 아래의 결과를 사용하여 결정계수($R^2$)를 계산하시오.\n```\n> out<-lm(Fertility~Education,data=swiss)\n> anova(out)\nAnalysis of Variance Table\nResponse: Fertility\nDf  Sum Sq Mean Sq F value    Pr(>F)\nEducation  1  3162.7  3162.7  35.446 3.659e-07 ***\nResiduals 45  4015.2    89.2\n```",
    "answer": "`0.441` (※ $3162.7 / (3162.7 + 4015.2) = 0.4406$)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "최적회귀방정식을 선택하기 위한 방법 중 모든 독립변수 후보를 포함한 모형에서 시작하여 가장 적은 영향을 주는 변수부터 하나씩 제거하면서 더 이상 유의하지 않은 변수가 없을 때까지 설명변수를 제거하는 방법은?",
    "answer": "후진제거법 (또는 Backward Elimination)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "data는 메이저리그에서 활약하는 263명의 선수에 대한 타자 기록으로 연봉(salary)을 비롯한 17개의 변수를 포함하고 있다. 아래는 17개의 변수들을 사용하여 주성분 분석을 시행한 결과이다. 아래 결과를 사용하여 17차원을 3차원으로 축소할 경우 잃게 되는 정보량을 백분율(%)로 표현하시오. (소수 둘째자리에서 반올림)\n*(참고: 53번 문항의 summary(pca)와 동일한 결과표. Comp.3까지의 Cumulative Proportion은 0.7966임)*",
    "answer": "`20.3%` (또는 `20.3`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명이 나타내는 척도는 무엇인가?\n> 자료의 위치를 나타내는 척도의 하나로 관측치를 크기순으로 배열하였을 때 전체의 중앙에 위치한 수치이다. 평균에 비해 이상치에 의한 영향이 적기 때문에 자료의 분포가 심하게 비대칭인 경우 중심을 파악할 때 합리적인 방법이다.",
    "answer": "중앙값 (또는 중위수)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "P(A)=0.3, P(B)=0.4이다. 두 사건 A와 B가 독립일 경우 P(B|A)는 얼마인가?",
    "answer": "`0.4`",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "다음은 4개의 데이터 변수를 가진 데이터 프레임 USArrests에 주성분 분석을 적용해서 얻은 결과이다. 제1주성분의 식은? (소수점 셋째 자리에서 반올림하시오.)\n```\nLoadings:\nComp.1 Comp.2 Comp.3 Comp.4\nMurder    0.536  0.418  0.341  0.649\nAssault   0.583  0.188  0.268 -0.743\nUrbanPop  0.278 -0.873  0.378  0.134\nRape      0.543 -0.167 -0.818\n```",
    "answer": "`0.54 * Murder + 0.58 * Assault + 0.28 * UrbanPop + 0.54 * Rape`",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "우연히 정확한 예측을 할 확률을 나타내며, 이 값은 모델의 예측 값과 실제 값이 정확히 일치하는 최대값인 1에서 0까지의 값을 가지며, 1보다 작은 값은 불일치를 의미한다. 아래와 같은 계산공식으로 표현되는 통계량은 무엇인가?\n$$K = \frac{P_o - P_e}{1 - P_e}$$",
    "answer": "카파 통계량 (또는 Cohen's Kappa, 카파 계수)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "이산형 확률분포 중 주어진 시간 또는 영역에서 어떤 사건의 발생 횟수를 나타내는 확률 분포는 무엇인가?",
    "answer": "포아송 분포 (또는 Poisson distribution)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c4-short-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "상관분석은 두 변수 간의 상관관계를 알아보기 위해 상관계수를 이용하여 분석을 수행한다. 상관계수 중 서열척도인 변수간의 상관관계를 측정하는데 사용하는 상관계수는?\n---",
    "answer": "스피어만 상관계수 (Spearman correlation coefficient)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-mcq-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 대용량 데이터 속에서 숨겨진 지식 또는 새로운 규칙을 추출해 내는 과정을 일컫는 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "지식경영",
      "의사결정지원시스템",
      "데이터 웨어하우징",
      "데이터 마이닝"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 반응 변수가 범주형인 경우 예측모형의 주목적으로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "연관 분석",
      "분류",
      "시뮬레이션",
      "최적화"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 데이터 마이닝의 대표적인 기능 중 이질적인 모집단을 세분화하는 기능으로 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "분류분석",
      "모수추정",
      "군집분석",
      "연관분석"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "한 보험회사에서는 자사 고객의 보험갱신 여부를 고객의 인구통계학적 특성, 보험가입 채널, 상품 종류 등의 정보를 사용하여 예측하려고 한다. 다음 중 가장 적절한 분석 기법은 무엇인가?",
    "answer": "",
    "explanation": "",
    "options": [
      "시계열분석",
      "랜덤포레스트",
      "k-means 군집분석",
      "주성분 분석"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "데이터 마이닝 단계 중 모델링 목적에 따라 목적변수를 정리하고 필요한 데이터를 데이터 마이닝 소프트웨어에 적용할 수 있도록 준비하는 단계는?",
    "answer": "2",
    "explanation": "데이터 가공 단계는 모델링 목적에 따라 목적변수를 정의하고 필요한 데이터를 데이터 마이닝 소프트웨어에 적용할 수 있도록 변환/준비하는 단계이다.",
    "options": [
      "데이터 마이닝 기법의 적용",
      "목적 정의",
      "데이터 가공",
      "데이터 준비"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 기법의 활용 분야가 나머지와 다른 하나를 고르시오.",
    "answer": "3",
    "explanation": "SOM(Self-Organizing Map)은 비지도 학습(Unsupervised Learning)에 해당하지만, 로지스틱 회귀분석, 인공신경망, 의사결정나무는 대표적인 지도 학습(Supervised Learning) 기법이다.",
    "options": [
      "로지스틱 회귀 분석",
      "인공신경망",
      "의사결정나무",
      "SOM"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "과대적합(overfitting)은 통계나 기계학습에서 모델에서 변수가 너무 많아 모델이 복잡하고 과대하게 학습될 때 주로 발생한다. 다음 중 과대 적합에 대한 설명으로 가장 부적절한 것은?",
    "answer": "0",
    "explanation": "과대적합은 훈련 데이터에 너무 완벽하게 적합되어 실제 데이터(테스트 데이터)의 아주 작은 변화나 노이즈에도 민감하게 반응하여 모델의 예측 오차가 커지는 현상을 의미한다.",
    "options": [
      "생성된 모델이 훈련 데이터에 너무 최적화되어 학습하여 테스트 데이터의 작은 변화에 민감하게 반응하는 경우는 발생하지 않는다.",
      "학습데이터가 모집단의 특성을 충분히 설명하지 못할 때 자주 발생한다.",
      "변수가 너무 많아 모형이 복잡할 때 생긴다.",
      "과대적합이 발생할 것으로 예상되면 학습을 종료하고 업데이트 하는 과정을 반복해 과대적합을 방지할 수 있다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "모형의 평가를 위해 관측치를 한번 이상 훈련용 자료로 사용하는 복원 추출법(sampling with replacement)에 기반하는 붓스트랩(bootstrap) 기법에서 일반적으로 훈련용 자료의 선정율을 d번 반복할 때 하나의 관측치가 선정되지 않을 확률은 $(1 - 1/d)^d$ 이다. d가 충분히 크다고 가정할 때 훈련용 집합으로 선정되지 않아 검증용 자료로 사용되는 관측치의 비율은?",
    "answer": "3",
    "explanation": "관측치가 붓스트랩 표본에 포함되지 않을 확률은 $1/e \\approx 36.8\\%$ 이며, 이 데이터들을 Out-of-Bag(OOB) 데이터라 부르며 모형 검정용으로 활용한다.",
    "options": [
      "20.5%",
      "28.8%",
      "34.2%",
      "36.8%"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Hitters 데이터셋은 메이저리그에서 활약하는 322명의 선수에 대한 타자 기록으로 연봉을 비롯한 20개의 변수를 포함하고 있다. 아래는 모형적합에 앞서 데이터를 train set과 test set으로 분할하는 과정이다. 다음 중 아래에 대한 설명으로 가장 부적절한 것은?\n```R\nset.seed(1112)\ntrain<-sample(1:nrow(Hitters), nrow(Hitters)/2)\nYtrain<-subset(Hitters[train,], select=Salary)\nXtrain<-subset(Hitters[train,], select=-Salary)\nYtest<-subset(Hitters[-train,], select=Salary)\nXtest<-subset(Hitters[-train,], select=-Salary)\n```",
    "answer": "3",
    "explanation": "학습에 직접 쓰인 train set에 대한 평가(설명력)가 학습에 사용되지 않은 독립적인 test set에 대한 평가보다 더 낙관적이고 좋게 나타나는 것이 일반적이다.",
    "options": [
      "50:50으로 데이터를 분할하고 있다.",
      "50%의 데이터(train set)를 사용하여 모형을 학습하고 나머지 50%의 데이터(test set)로 모형을 평가하기 위한 사전작업이다.",
      "모형 학습과 평가를 동일한 데이터셋에 진행하면 모형이 과적합 될 수 있다.",
      "일반적으로 test set에 대한 모형평가 결과가 train set에 대한 모형평가 결과보다 좋다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 기업이 보유하고 있는 거래데이터, 고객 데이터 등과 기타 외부 데이터를 포함하는 모든 데이터를 기반으로 새로운 규칙 등을 발견하고 이를 실제 비즈니스 의사결정 등에 유용한 정보로 활용하고자 하는 일련의 작업을 무엇이라고 하는가?",
    "answer": "",
    "explanation": "",
    "options": [
      "회귀분석",
      "데이터 마이닝",
      "데이터 웨어하우징",
      "의사결정지원시스템"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "귀납적 추론을 기반으로 하는 의사결정나무모형은 실무적으로 가장 많이 사용되는 모델 중 하나이다. 다음 중 의사결정나무모형에 대한 설명으로 부적절한 것은?",
    "answer": "1",
    "explanation": "의사결정나무모형은 상향식이 아니라 하향식(Top-down) 의사결정 흐름을 가지며, 휴리스틱 탐색(Heuristic Search) 등의 방식으로 각 마디를 분할해 간다.",
    "options": [
      "대표적인 적용 사례는 대출신용평가, 환자 증상 유추, 채무 불이행 가능성 예측 등이 있다.",
      "의사결정나무모형은 ID3, C4.5, CART 등 여러 가지 알고리즘이 있는데 핵심적인 공통 개념은 상향식 의사결정 흐름과 해석 탐색(Hash Search) 기반의 구조를 가지고 있다는 것이다.",
      "과적합(overfitting)의 문제를 해결하기 위해 가지치기 방법을 이용하여 트리를 조정하는 방법을 사용한다.",
      "불순도 측도인 엔트로피 개념은 정보이론의 개념을 기반으로 하며, 그 의미는 여러 가지 임의의 사건이 모여있는 집합의 순수성(purity) 또는 단일성(homogeneity) 관점의 특성을 정량화해서 표현한 것이다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 의사결정나무모형에서 과대적합되어 현실 문제에 적용할 수 있는 적절한 규칙이 나오지 않는 현상을 방지하기 위해 사용되는 방법으로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "가지치기(Pruning)",
      "스테밍(Stemming)",
      "정지규칙(Stopping rule)",
      "랜덤포레스트(Random forest)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 데이터를 무작위로 두 집단으로 분리하여 실험데이터와 평가데이터로 설정하고 검정을 실시하는 모형 평가방법으로 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "k-fold 교차 검정",
      "ROC 그래프",
      "홀드아웃 방법",
      "이익도표"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "소매점에서 물건을 배열하거나 카탈로그 및 교차판매 등에 적용하기 적합한 데이터 마이닝 기법은 무엇인가?",
    "answer": "",
    "explanation": "",
    "options": [
      "분류(classification)",
      "예측(prediction)",
      "연관분석(association analysis)",
      "군집(clustering)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 kyphosis라는 자료를 이용하여 의사결정나무 분석을 수행한 결과이다. 결과에 대한 해석으로 부적절한 것은?\n```\n> ac-rpart(Kyphosis~Age +Number+Start, data=kyphosis)\n...\nnode), split, n, loss, yval, (yprob)\n* denotes terminal node\n1) root 81 17 absent (0.79012346 0.20987654)\n2) Start>=8.5 62  6 absent (0.90322581 0.09677419)\n4) Start>=14.5 29  0 absent (1.00000000 0.00000000) *\n...\n```",
    "answer": "0",
    "explanation": "뿌리마디에서 자식마디로 분할이 진행될수록 각 마디의 데이터는 더 동질적인(순수한) 것들끼리 묶이게 되므로, 순도(Purity)는 증가하고 불순도(Impurity)는 감소한다.",
    "options": [
      "뿌리마디에서 아래로 내려갈수록 각 마디에서의 불순도는 점차 증가한다.",
      "뿌리마디의 자료는 Start 변수를 이용하여 분리했을 때 present와 absent를 가장 잘 분리시킬 수 있다.",
      "위 결과의 단계에서 멈추지 않고 추가로 가지를 생성한다면, 새로운 자료에 대한 예측력은 떨어질 수도 있다.",
      "이 자료에서 Start 변수의 값이 14.5이상인 관측치는 Kyphosis 변수의 값이 모두 absent였을 것이다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 의사결정나무모형의 학습방법에 대한 설명으로 부족한 것은 무엇인가?",
    "answer": "1",
    "explanation": "의사결정나무의 분할은 순차적(sequential)으로 진행되며, 현재 단계의 분할은 이전 단계에서 결정된 마디 분할 결과의 제약 하에서(영향을 받으며) 최적의 분할을 찾는다.",
    "options": [
      "이익도표 또는 검정용 자료에 의한 교차타당성 등을 이용해 의사결정나무를 평가한다.",
      "분리 변수의 P차원 공간에 대한 현재 분할은 이전 분할에 영향을 받지 않고 이루어지며, 공간을 분할하는 모든 직사각형들이 가능한 순수하게 되도록 만든다.",
      "각 마디에서의 최적 분리규칙은 분리변수의 선택과 분리기준에 의해 결정된다.",
      "가지치기는 분류 오류를 크게 할 위험이 높거나 부적절한 규칙을 가지고 있는 가지를 제거하는 작업이다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래 의사결정나무에서 B의 지니지수를 계산한 결과로 적절한 것은?\n```\n[ A ]\ngood:50 / bad:50\n/         \\\n[ B ]       [ C ]\ngood:10/bad:40  good:40/bad:10\n```",
    "answer": "3",
    "explanation": "지니지수 $I(G) = 1 - \\sum (p_i)^2$ 이다. B 마디의 데이터 good:10, bad:40 이므로, $I(G)_B = 1 - (10/50)^2 - (40/50)^2 = 1 - 0.04 - 0.64 = 0.32$ 이다.",
    "options": [
      "0.5",
      "0.48",
      "0.38",
      "0.32"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "이익도표(Lift)를 작성함에 있어 평가도구 중 %Captured Response를 표현한 계산식으로 바른 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "해당집단에서 목표변수의 특정범주 빈도 / 전체 목표변수의 특정범주 빈도 × 100",
      "해당집단에서 목표변수의 특정범주 빈도 / 해당집단에서 전체 빈도 × 100",
      "전체에서 목표변수의 특정범주 빈도 / 전체 빈도 × 100",
      "해당집단의 %Response / BASE line Lift × 100"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 배깅(Bagging)에 대한 설명으로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "배깅은 데이터 간의 거리를 측정하여 군집화한다.",
      "배깅은 트랜잭션 사이에 빈번하게 발생하는 규칙을 찾아낸다.",
      "배깅은 고차원의 데이터를 이해하기 쉬운 저차원의 뉴런으로 정렬하여 지도의 형태로 형상화한다.",
      "배깅은 반복추출 방법을 사용하기 때문에 같은 데이터가 한 표본에 여러 번 추출될 수 있고, 어떤 데이터는 추출되지 않을 수도 있다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-20",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 앙상블 기법이라고 할 수 없는 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "시그모이드",
      "부스팅",
      "배깅",
      "랜덤포레스트"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-21",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "앙상블(Ensemble)모형이란 주어진 자료로부터 여러 개의 예측모형을 만든 후 이러한 예측모형들을 결합하여 하나의 최종 예측모형을 만드는 방법을 말한다. 다음 중 앙상블모형에 대한 설명으로 적절하지 않은 것은?",
    "answer": "1",
    "explanation": "부스팅(Boosting)은 순차적인 재표본 과정을 거치는데, 이전 단계 모델이 잘못 예측한(오차가 큰) 데이터 가중치를 높여서 다음 붓스트랩 표본을 추출하므로 동일한 확률을 부여하는 배깅과 차이가 있다.",
    "options": [
      "배깅은 주어진 자료에서 여러 개의 붓스트랩(Bootstrap) 자료를 생성하고 각 붓스트랩 자료에 예측모형을 만든 후 결합하여 최종 모형을 만드는 방법이다.",
      "부스팅은 배깅의 과정과 유사하여 재표본 과정에서 각 자료에 동일한 확률을 부여하여 여러 모형을 만들어 결합하는 방법이다.",
      "랜덤포레스트(Random Forest)는 의사결정나무모형의 특징인 분산이 크다는 점을 고려하여 배깅보다 더 많은 무작위성을 추가한 방법으로 약한 학습기들을 생성하고 이를 선형 결합해 최종 학습기를 만드는 방법이다.",
      "앙상블모형은 훈련을 한 뒤 예측을 하는데 사용하므로 교사학습법(Supervised Learning)이다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-22",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "오분류표 중 실제 값이 True인 관측치 중에 예측치가 맞는 정도를 나타내어 모형의 완전성(completeness)을 평가하는 지표를 무엇이라고 하는가?",
    "answer": "",
    "explanation": "",
    "options": [
      "재현율",
      "오분류율",
      "정확도",
      "특이도"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-23",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "오분류표를 사용한 평가 지표 중 아래 설명이 나타내는 지표는 무엇인가?\n> 정확도(precision)와 재현율(recall)은 한 지표의 값이 높아지면 다른 지표의 값이 낮아질 가능성이 높은 관계를 지니고 있어 이러한 효과를 보정하여 하나의 지표로 만들어 낸 지표",
    "answer": "",
    "explanation": "",
    "options": [
      "F1",
      "민감도",
      "특이도",
      "오즈비"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-24",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "오분류표(confusion matrix)를 사용하여 계산할 수 있는 평가 지표 중 민감도와 동일하며 모형의 완전성(completeness)을 평가하는 지표는?",
    "answer": "",
    "explanation": "",
    "options": [
      "F1 지표",
      "정확도(precision)",
      "특이도(specificity)",
      "재현율(recall)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-25",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래 오분류표를 이용하여 구한 F1 값은 얼마인가?\n```\n[ 예측치 ]\nTrue | False | 합계\n실제값 True | 40  |  60   |  100\nFalse | 60  |  40   |  100\n합계  | 100 |  100  |  200\n```",
    "answer": "2",
    "explanation": "오분류표를 기준으로 Recall(재현율) = 40/100 = 0.4, Precision(정밀도) = 40/100 = 0.4 이다. $F1 = 2 \\times (0.4 \\times 0.4) / (0.4 + 0.4) = 0.4$ 이다.",
    "options": [
      "0.15",
      "0.3",
      "0.4",
      "0.55"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-26",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "분류모형의 성과 분석 중 ROC Curve는 x축에 FP Ratio, y축에는 민감도를 나타낸다. 아래와 같은 오분류표가 있을 때 민감도를 계산하는 방식으로 가장 적절한 것은?\n```\n[ 예측치 ]\nTrue | False | 합계\n실제값 True |  TP  |  FN   |   P\nFalse |  FP  |  TN   |   N\n합계  |  P'  |  N'   |  P+N\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "`(TP+TN)/(P+N)`",
      "`TN/N`",
      "`TP/(TP+FP)`",
      "`TP/P`"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-27",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "ROC 커브는 민감도와 1-특이도로 그려지는 커브이다. 아래 오분류표에서 민감도와 특이도는?\n```\n[ 확진결과 ]\n질병 유 | 질병 무\n검사결과  양성 |   30   |   20\n음성 |   40   |   10\n```",
    "answer": "0",
    "explanation": "민감도 = 실제 질병 유 중 양성 판정 = 30/(30+40) = 30/70 = 3/7. 특이도 = 실제 질병 무 중 음성 판정 = 10/(20+10) = 10/30 = 1/3 이다.",
    "options": [
      "민감도 = 3/7, 특이도 = 1/3",
      "민감도 = 1/3, 특이도 = 1/3",
      "민감도 = 2/3, 특이도 = 2/3",
      "민감도 = 4/5, 특이도 = 4/5"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-28",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "R에서 인공신경망의 학습 및 추론을 위해 대표적으로 사용되는 함수는 neuralnet()이다. 다음 중 neuralnet 함수의 실행 결과로 도출되는 일반화 가중치(generalized weight)에 대한 설명으로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "각 자료점의 분산이 로그-오즈(log-odds)에 미치는 기여도를 나타낸다.",
      "로지스틱 회귀모형에서의 회귀계수와 유사하게 해석된다.",
      "로지스틱 회귀와 달리 일반화 가중치는 전역적인 기여도를 나타낸다.",
      "모든 자료에 대한 일반화 가중치의 분포는 가중치(weight)에 대한 신뢰구간을 나타낸다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-29",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "단층신경망인 퍼셉트론(perceptron)에서 최종 목표값(Target value)은 활성함수에 의해 결정되는데 다양한 활성함수 중 출력값이 여러 개로 주어지고, 목표치가 다범주인 경우 각 범주에 속할 사후확률을 제공하는 함수는 무엇인가?",
    "answer": "",
    "explanation": "",
    "options": [
      "Tanh 함수",
      "Gauss 함수",
      "Sigmoid 함수",
      "Softmax 함수"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-30",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "신경망 모형은 자신이 가진 데이터로부터 반복적인 학습과정을 거쳐 패턴을 찾아내고 이를 일반화하는 예측방법이다. 다음 중 신경망 모형에 대한 설명을 부적절한 것은 무엇인가?",
    "answer": "",
    "explanation": "",
    "options": [
      "피드포워드 신경망은 정보가 전방으로 전달되는 것으로 생물학적 신경계에서 나타나는 형태이며 딥러닝에서 가장 핵심적인 구조 개념이다.",
      "은닉층의 뉴런 수와 개수는 신경망 모형에서 자동으로 설정된다.",
      "일반적으로 인공신경망은 다층퍼셉트론을 의미한다. 다층 퍼셉트론에서 정보의 흐름은 입력층에서 시작하여 은닉층을 거쳐 출력층으로 진행된다.",
      "역전파 알고리즘은 연결강도를 갱신하기 위해 예측된 결과와 실제값의 차이인 에러의 역전파를 통해 가중치를 구하는데서 시작되었다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-31",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "신경망 모형은 동물의 뇌신경계를 모방하여 분류를 위해 만들어진 모형이다. 신경망의 학습 및 기억 특성들은 인간의 학습과 기억 특성을 닮았고 특정 사건으로부터 일반화하는 능력도 갖고 있다. 다음 중 신경망 모형에 대한 설명으로 부적절한 것은?",
    "answer": "3",
    "explanation": "인공신경망 모형은 비선형 및 복잡한 관계 모델링에 매우 유용하며, 잡음이나 유실 데이터에 대해서도 비교적 강건(robust)하다는 특징을 가진다.",
    "options": [
      "은닉층(hidden layer)의 뉴런 수와 개수를 정하는 것은 신경망을 설계하는 사람의 직관과 경험에 의존한다. 뉴런수가 너무 많으면 과적합(overfitting)이 발생하고 뉴런 수가 너무 적으면 입력 데이터를 충분히 표현하지 못하는 경우가 발생한다.",
      "신경망 모형에서 뉴런의 주요 기능은 입력과 입력 강도의 가중합을 구한 다음 활성화 함수에 의해 출력을 내보내는 것이다. 따라서 입력 변수의 속성에 따라 활성화 함수를 선택하는 방법이 달라지게 된다.",
      "역전파(back propagation) 알고리즘은 신경망 모형의 목적함수를 최적화하기 위해 사용된다. 연결강도를 갱신하기 위해서 예측된 결과와 실제값의 차이인 에러(error)를 통해 가중치를 조정하는 방법이다.",
      "신경망 모형은 변수의 수가 많거나 입출력 변수 간에 복잡한 비선형관계가 존재할 때 유용하며, 잡음에 대해서도 민감하게 반응한다는 단점을 가지고 있다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-32",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 로지스틱 회귀모형에서 설명변수가 한 개인 경우 해당 회귀 계수의 부호가 0보다 작을 때 표현되는 그래프의 형태로 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "S자 그래프",
      "양의 선형 그래프",
      "역 S자 그래프",
      "음의 선형 그래프"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-33",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "로지스틱 회귀모형은 독립변수(x)와 종속변수(y) 사이의 관계를 설명하는 모형으로서 종속변수가 범주형(y=0 또는 y=1)값을 갖는 경우에 사용하는 방법이다. 다음 중 로지스틱 회귀모형에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "이러한 데이터에 대해 선형회귀모형을 적용하는 것이 기술적으로 가능하지만, 선형회귀의 문제점은 0 이하의 값이나 1 이상의 값을 예측값으로 줄 수 있다는 것이며 따라서 이를 확률값으로 직접 해석할 수 없다.",
      "로지스틱 회귀모형은 클래스가 알려진 데이터에서 설명변수들의 관점에서 각 클래스내의 관측치들에 대한 유사성을 찾는데 사용할 수 있다.",
      "종속변수 y 대신 로짓(logit)이라 불리는 상수를 사용하여 로짓을 설명변수들의 선형함수로 모형화하기 때문에 이 모형을 로지스틱 회귀모형이라고 한다.",
      "Odds(오즈)란 클래스 0에 속할 확률(1-p)에 이 클래스 1에 속할 확률 p의 비로 나타낸다. 즉, Odds = p/(1-p)로 나타낸다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-34",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "College 데이터는 777개의 미국 대학의 각종 통계치를 포함한다. 각 대학에 재학하는 비용이 졸업률(grade Rate)에 미치는 영향을 알아보기 위해 사립학교 여부(Private), 고교성적 상위 10% 학생비율(Top10perc), 등록금(Outstate), 기타지출(Expend)을 활용하기로 했다. 다음 중 아래의 결과물에 대한 설명으로 적절하지 않은 것은 무엇인가?\n```\n> summary(lm(Grad.Rate~., data=College))\n...\nCoefficients:\nEstimate Std. Error t value Pr(>|t|)\n(Intercept) 39.4138270  1.3579828  29.023  < 2e-16 ***\nPrivateYes   2.9131163  1.3431005   2.169  0.030391 *\nTop10perc    0.3209807  0.0379053   8.468  < 2e-16 ***\nOutstate     0.0018820  0.0001988   9.467  < 2e-16 ***\nExpend      -0.0004723  0.0001423  -3.320  0.000943 ***\n...\n```",
    "answer": "2",
    "explanation": "`PrivateYes`의 회귀계수(Estimate)는 `2.9131`로 양수(+)이다. 이는 다른 조건이 동일할 때 사립학교일 경우가 공립학교인 경우에 비해 졸업률이 통계적으로 유의하게 약 2.91% 높음을 뜻한다.",
    "options": [
      "Outstates 변수는 졸업률에 유의한 영향을 미치는 변수이다.",
      "고교성적 상위 10% 학생의 비율이 높을수록 졸업률이 높다.",
      "사립학교(Private Yes)의 경우 공립학교(Private No)에 비해 졸업률이 낮다.",
      "위의 모형은 유의수준 5% 하에서 유의하다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-35",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Default 데이터셋은 10000명의 신용카드 고객에 대한 연체여부(default=Yes/No), 카드대금납입 후 남은 평균 카드잔고(Balance), 연봉(Income), 학생여부(student=Yes/No)를 포함한다. 아래는 연체 가능성을 모형화하기 위한 로지스틱 회귀분석 결과이다. 다음 중 유의수준 0.05하에서 아래에 대한 설명으로 가장 부적절한 것은?\n```\n> summary(model)\n...\nCoefficients:\nEstimate Std. Error z value Pr(>|z|)\n(Intercept) -1.087e+01  4.923e-01 -22.000  < 2e-16 ***\nstudentYes  -6.468e-01  2.363e-01  -2.738  0.00619 **\nbalance      5.737e-03  2.319e-04  24.738  < 2e-16 ***\nincome       3.033e-06  8.203e-06   0.370  0.71152\n...\n```",
    "answer": "1",
    "explanation": "`income` 변수의 p-value가 `0.71152`로 유의수준 0.05보다 훨씬 크므로 연체 여부(default)를 설명하는데 통계적으로 유의하지 않다.",
    "options": [
      "balance는 default를 설명하는데 통계적으로 유의하다.",
      "income은 default를 설명하는데 통계적으로 유의하다.",
      "student는 default를 설명하는데 통계적으로 유의하다.",
      "balance는 income이 동일할 때 학생일수록 default 가능성이 낮다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-36",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "계층적 군집분석을 위해 거리 계산을 수행할 때 사용하는 dist 함수에서 지원하는 거리 측도로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "minkowski",
      "cosine",
      "binary",
      "canberra"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-37",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "계층적 군집 방법은 n개의 군집으로 시작해 점차 군집의 개수를 줄여나가는 방법이다. 다음 중 계층적 군집 분석 결과를 나타내는 도표로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "향상도 곡선",
      "ROC 그래프",
      "덴드로그램",
      "산점도"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-38",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "150개의 식물 개체를 4개의 변수(꽃받침 길이, 꽃받침 폭, 꽃잎 길이, 꽃잎 폭)로 측정한 데이터를 사용하여 3개의 식물 군으로 구분하려 한다. 이 때 사용 가능한 분석 방법으로 적절한 것은 무엇인가?",
    "answer": "",
    "explanation": "",
    "options": [
      "회귀분석(Regression)",
      "시계열분석(Time series Analysis)",
      "군집분석(Cluster Analysis)",
      "연관분석(Association Analysis)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-39",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "계층적 군집분석 수행 시 두 군집을 병합하는 방법 가운데 병합된 군집의 오차제곱합이 병합 이전 군집의 오차제곱합의 합에 비해 증가한 정도가 작아지는 방향으로 군집을 형성하는 방법은?",
    "answer": "",
    "explanation": "",
    "options": [
      "단일연결법",
      "중심연결법",
      "와드연결법",
      "완전연결법"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-40",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 데이터 셋에서 A, B의 유클리드 거리(Euclidean distance)를 계산하시오.\n```\n|  A  |  B\n키   | 185 | 180\n몸무게 |  70 |  75\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "0",
      "$\\sqrt{10}$",
      "$\\sqrt{25}$",
      "$\\sqrt{50}$"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-41",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 학생들의 키와 몸무게를 정규화한 데이터이다. 최단연결법을 통해 학생들을 3개의 군집으로 나누고자 한다.(유클리디안 거리 사용) 다음 중 가장 적절한 것은?\n```\n사람 | (키, 몸무게)\nA   |   (1, 5)\nB   |   (2, 4)\nC   |   (4, 6)\nD   |   (4, 3)\nE   |   (5, 3)\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "(A,C), (B), (D,E)",
      "(A,D), (B), (C,E)",
      "(A,E), (C), (B,D)",
      "(A,B), (C), (D,E)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-42",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 그림은 평균연결법을 통한 계층적 군집화 예제이다. 데이터 분석 목적 상 Height값을 1.5를 기준으로 하위 군집을 구성할 때 다음 중 생성된 하위 군집을 가장 잘 나타낸 것은?\n*(참고: 덴드로그램에서 Height 1.5 아래로 나누어지는 군집들이 보임)*",
    "answer": "1",
    "explanation": "Height=1.5 선에서 자르면 {h,a,f}, {b,d,l,e,j}, {c}, {g,i} 총 4개의 군집이 나타난다. (문제 오타로 인해 실제 보기 구성과 해설 내용이 다소 불일치할 수 있으나 본 도표에서는 덴드로그램 구조상 4개 군집 분할이 정확함)",
    "options": [
      "{h,a,f}, {b,d,l,e,j}, {c, k}, {g,i}",
      "{h,a,f}, {b,d,l,e,j}, {c}, {g,i}  (※ 실제 정답에 가깝게 해설되어 있음)",
      "{h,a,f}, {b,d,e,j}, {c,g,i}",
      "{h,a,f}, {b,d,e,j}, {c, l}, {g,i}"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-43",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "계층적 군집방법은 두 개체(또는 군집) 간의 거리(또는 비유사성)에 기반하여 군집을 형성해 나가므로 거리에 대한 정의가 필요한데, 다음 중 변수의 표준화와 변수 간의 상관성을 동시에 고려한 통계적 거리로 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "표준화 거리(Standardized distance)",
      "민코우스키 거리(Minkowski distance)",
      "마할라노비스 거리(Mahalanobis distance)",
      "자카드 계수(Jaccard coefficient)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-44",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 k-means 군집의 단점으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "k-평균(k-means) 군집은 반복적 개선 알고리즘으로, 매 단계마다 객체들이 더 가까운 seed 군집으로 자유롭게 이동할 수 있다. 한번 군집에 할당된다고 해서 고정되는 것이 아니다.",
    "options": [
      "볼록한 형태가 아닌 군집이 존재하면 성능이 떨어진다.",
      "사전에 주어진 목적이 없으므로 결과 해석이 어렵다.",
      "잡음이나 이상값에 영향을 많이 받는다.",
      "한번 군집이 형성되면 군집내 객체들은 다른 군집으로 이동 할 수 없다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-45",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "거리를 이용하여 데이터 간 유사도를 측정할 수 있는 척도는 데이터의 속성과 구조에 따라 적합한 것을 사용해야 한다. 다음 중 유사도 측도에 대한 설명으로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "유클리드 거리는 두 점을 잇는 가장 짧은 직선거리이다. 공통으로 점수를 매긴 항목의 거리를 통해 판단하는 측도이다.",
      "맨하탄 거리는 각 방향 직각의 이동 거리 합으로 계산된다.",
      "표준화 거리는 각 변수를 해당 변수의 표준편차로 변환한 후 유클리드 거리를 계산한 거리이다. 표준화를 하게 되면 척도의 차이, 분산의 차이로 인해 왜곡을 피할 수 있다.",
      "마할라노비스 거리는 변수의 표준편차를 고려한 거리 속도이나 변수 간에 상관성이 있는 경우에는 표준화 거리 사용을 검토해야 한다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-46",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "군집분석은 비지도학습 기법 중 하나로 사전 정보 없이 자료를 유사한 대상끼리 묶는 방법이다. 다음 중 군집분석에 대한 설명으로 부적절한 것은?",
    "answer": "0",
    "explanation": "군집분석은 어떤 사전 정보 없이 개체 간 거리만을 활용해 유사한 개체들을 그룹화(자발적인 군집화)하는 비지도학습 기법이다.",
    "options": [
      "군집분석에서는 군집의 개수나 구조에 대한 가정없이 다변량 데이터로부터 거리 기준에 의한 자발적인 군집화를 유도하지 않는다.",
      "군집 결과에 대한 안정성을 검토하는 방법은 교차타당성을 이용하는 방법을 생각할 수 있다. 데이터를 두 집단으로 나누어 각 집단에서 군집분석을 한 후 합쳐서 군집분석한 결과와 비교하여 비슷하면 결과에 대한 안전성이 있다고 할 수 있다.",
      "군집의 분리가 논리적인가를 살펴보기 위해서는 군집 간 변동의 크기 차이를 검토한다.",
      "개체를 분류하기 위한 명확한 기준이 존재하지 않거나 기준이 밝혀지지 않은 상태에서 유용하게 이용할 수 있다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-47",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "K-means 군집분석에 대한 설명으로 틀린 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "K-means 군집분석은 원하는 군집의 개수를 초기에 정하고 seed 중심으로 군집을 형성한다.",
      "K-means 군집분석은 각 개체를 가장 가까운 seed가 있는 군집으로 분류한다.",
      "군집으로 분류된 개체들의 정보를 활용하여 새로운 seed를 계산하면서 개체의 적용에 따른 seed의 변화를 관찰한다.",
      "95% 이상의 객체가 seed에 할당 되면 seed의 조정을 멈춘다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-48",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 고차원의 데이터를 이해하기 쉬운 저차원의 뉴런으로 정렬화하여 지도의 형태로 형성하는 클러스터링 방법으로 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "의사결정나무(Decision Tree)",
      "연관규칙(Association Rule)",
      "랜덤포레스트(Random Forest)",
      "자기조직화지도(self-organizing Map)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-49",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "군집분석에서는 관측값들이 얼마나 유사한지 또는 유사하지 않은지를 측정할 수 있는 측도가 필요하다. 다음 중 유사도 측도에 대한 설명으로 가장 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "유클리드 거리는 공통으로 점수를 매긴 항목의 크기를 통해 판단하는 측도이다.",
      "코사인 거리는 두 단위 벡터의 내적을 이용하여, 단위 벡터의 내각의 크기로 유사도를 측정한다.",
      "자카드는 Boolean 속성으로 이루어진 두 객체 간의 유사도 측정에 사용된다.",
      "피어슨 상관계수는 각 객체의 데이터 집합이 직선으로 표현되는 정도를 측정한다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-50",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "SOM은 비지도 신경망으로 고차원의 데이터를 이해하기 쉬운 저차원의 뉴런으로 정렬하여 지도 형태로 형상화하는 방법이다. 다음 중 SOM 방법에 대한 설명으로 부적절한 것은?",
    "answer": "1",
    "explanation": "SOM(자기조직화지도)은 전방 패스(Feed-forward flow)를 사용해 가중치를 경쟁적으로 조절하며 학습하는 비지도 신경망 모델로, 역전파(Backpropagation) 알고리즘을 사용하지 않는다.",
    "options": [
      "SOM은 입력변수의 위치 관계를 그대로 보존한다는 특징이 있다. 이러한 SOM의 특징으로 인해 입력 변수의 정보와 그들의 관계가 지도상에 그대로 나타난다.",
      "SOM 알고리즘은 고차원의 데이터를 저차원의 지도 형태로 형상화하기 때문에 시각적으로 이해하기 쉬울 뿐 아니라 변수의 위치 관계를 그대로 보존하기 때문에 실제 데이터가 유사하면 지도상 가깝게 표현된다.",
      "SOM 알고리즘은 고차원의 데이터를 저차원의 지도 형태로 형상화하기 때문에 시각적으로 이해하기 쉬울 뿐 아니라 변수의 위치 관계를 그대로 보존하기 때문에 실제 데이터가 유사하면 지도상 가깝게 표현된다. (※ 원본 교재 동일 표기)",
      "SOM은 경쟁 학습으로 각각의 뉴런이 입력 벡터와 얼마나 가까운가를 계산하여 연결강도를 반복적으로 재조정하여 학습한다. 이와 같은 과정을 거치면서 연결강도는 입력 패턴과 가장 유사한 경쟁층 뉴런이 승자가 된다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-51",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "비계층적 군집 방법의 기법인 k-means Clustering의 경우 이상값(Outlier)에 민감하여 군집 경계의 설정이 어렵다는 단점이 존재한다. 이러한 단점을 극복하기 위해 등장한 비계층적 군집 방법으로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "PAM(Partitioning Around Medoids)",
      "혼합 분포 군집(mixture distribution clustering)",
      "Density based Clustering",
      "Fuzzy Clustering"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-52",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 22개의 미국 전투기에 대한 4개의 변수 값을 사용한 군집분석의 결과이다. 이에 대한 설명 중 부적절한 것은?\n```\n> kmeans(jet[,2:5],3)\nK-means clustering with 3 clusters of sizes 7, 6, 9\n...\n```",
    "answer": "",
    "explanation": "",
    "options": [
      "비계층적 군집분석의 결과이다.",
      "위의 방법을 사용할 때 군집 개수를 사전에 결정해야 한다.",
      "각 군집은 7개, 9개, 6개의 전투기를 포함한다.",
      "각 군집의 중심에 대한 정보는 포함되어 있지 않다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-53",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "k-평균 군집으로 대표되는 비계층적 군집 방법에서는 군집의 개수인 k를 미리 정해주어야 한다. 다음 중 군집수를 정하는 데 활용할 수 있는 그래프로 가장 적절한 것은 무엇인가?",
    "answer": "",
    "explanation": "",
    "options": [
      "ROC 그래프",
      "집단 내 제곱합 그래프",
      "덴드로그램",
      "향상도 곡선"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-54",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 k평균군집에 대한 설명으로 부적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "한번 군집이 형성되면 군집에 속하는 개체들은 다른 군집으로 이동할 수 없다.",
      "초기 군집의 중심을 임의로 선택해야 한다.",
      "군집의 개수를 미리 선택해야 한다.",
      "이상점에 영향을 많이 받는다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-55",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 군집화 방법 중 DBSCAN, DENCLUE 기법 등 임의적인(arbitrarity) 모양의 군집 탐색에 가장 효과적인 방법은?",
    "answer": "",
    "explanation": "",
    "options": [
      "밀도기반 군집",
      "모형기반 군집",
      "격자기반 군집",
      "커널기반 군집"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-56",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "SOM(Self Organizing Maps) 알고리즘은 고차원의 데이터를 이해하기 쉬운 저차원의 뉴런(Neuron)으로 정렬하여 지도(Map)의 형태로 형상화하는 방법이다. 다음 중 SOM 방법의 설명으로 적절하지 않은 것은 무엇인가?",
    "answer": "3",
    "explanation": "50번 해설과 마찬가지로 SOM은 비지도학습 신경망으로 지도학습 방식의 역전파 알고리즘을 사용하지 않는다.",
    "options": [
      "입력 벡터와 가장 비슷한 연결강도 벡터를 가진 경쟁층의 뉴런이 승자이며, 승자와 그 주변의 경쟁층 뉴런에 대해서만 연결강도를 수행하는 학습 방법이다.",
      "고차원의 표현을 1차원으로 표현할 수 있는 장점이 있다.",
      "지도 형태의 형상화는 입력변수의 위치 관계를 그대로 보존한다는 특징이 있다.",
      "자율적인(Unsupervised) 신경망 모델로서 역전파(Back Propagation) 알고리즘처럼 여러 단계의 피드백을 처리하면서 전방 패스(Feed-Forward Flow)를 사용하는 방법이다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-57",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "nci.data는 64개 암세포에 대한 6830개 유전자 microarray 데이터이다. 아래는 이 자료를 이용한 군집분석 결과이다. 다음 중 아래 결과에 대한 설명으로 가장 부적절한 것은?\n*(참고: single linkage 방식의 덴드로그램이 그려져 있음)*",
    "answer": "",
    "explanation": "",
    "options": [
      "최단 연결법을 사용한 계층적 군집분석 방법이다.",
      "두 군집 사이의 거리를 각 군집에서 하나의 관측값을 뽑았을 때 나타날 수 있는 거리의 최소 값으로 측정한다.",
      "사슬모양의 군집이 생길 수 있다.",
      "평균연결법에 비해 계산량이 많다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-58",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 연관성 분석에 대한 설명으로 부적절한 것은?",
    "answer": "3",
    "explanation": "시간적 선후 관계(순서)가 포함된 연관 규칙을 찾는 기법은 '시차 연관분석(또는 순차 패턴 분석)'이지만 연관 분석 자체는 동시 구매 등의 관계만을 보며 인과관계나 순서를 보지 않는다.",
    "options": [
      "Apriori 알고리즘은 최소 지지도보다 큰 빈발항목집합에서 높은 측도(신뢰도, 향상도) 값을 갖는 연관규칙을 구하는 방법이다.",
      "연관성 분석은 하나 이상의 제품이나 서비스를 포함하는 거래 내역을 이용하여 동시에 구매되는 제품별 거래 빈도표를 통해 규칙을 찾는데서 시작했다.",
      "품목 A와 품목 B의 구매가 상호 관련이 없다면 향상도는 1이 된다.",
      "사건들이 어떤 순서로 일어나고 이 사건들 사이에 연관성을 알아내는 것이 시차 연관분석이지만 원인과 결과의 형태로 해석되지는 않는다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-59",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 이상값 자료에 민감한 k평균 군집의 단점을 보완하기 위해 평균 대신 사용되는 것으로 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "중앙값",
      "최대값",
      "조화평균",
      "가중평균"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-60",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 R에서 연관성 분석을 위해 apriori 함수를 활용하여 연관 규칙을 생성하였다. 다음 중 생성된 연관 규칙을 보기 위해 사용되는 함수로 가장 적절한 것은?",
    "answer": "",
    "explanation": "",
    "options": [
      "`sort()`",
      "`arule()`",
      "`inspect()`",
      "`apriori()`"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-61",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래 거래 전표에서 연관 규칙 \"빵 -> 우유\"의 향상도를 구한 것으로 알맞은 것은?\n```\n품목 | 거래건수\n빵 | 100\n우유 | 100\n맥주 | 100\n빵, 우유, 맥주 | 50\n우유, 맥주 | 200\n빵, 우유 | 250\n빵, 맥주 | 200\n*(단, 전체 거래 건수는 1000건임)*\n```",
    "answer": "2",
    "explanation": "빵과 우유의 동시 거래수 = 빵,우유(250) + 빵,우유,맥주(50) = 300건. 전체 거래수 = 1000건.\n빵 거래수 = 빵(100) + 빵,우유,맥주(50) + 빵,우유(250) + 빵,맥주(200) = 600건.\n우유 거래수 = 우유(100) + 빵,우유,맥주(50) + 우유,맥주(200) + 빵,우유(250) = 600건.\n$P(빵 \\cap 우유) = 300/1000 = 0.3$.\n$P(빵) = 600/1000 = 0.6$, $P(우유) = 600/1000 = 0.6$.\n$\\text{향상도(Lift)} = P(빵 \\cap 우유) / (P(빵) \\times P(우유)) = 0.3 / (0.6 \\times 0.6) = 0.833$ ($83\\%$).",
    "options": [
      "30%",
      "50%",
      "83%",
      "100%"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-62",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 거래 전표에서 연관 규칙 \"A -> B\"의 향상도는 얼마인가? (소수점 첫째자리에서 반올림)\n```\n물품 | 거래건수\n{A} | 100\n{B, C} | 100\n{C} | 100\n{A, B, C, D} | 50\n{B, C} | 200\n{A, B, D} | 250\n{A, C} | 200\n*(단, 전체 거래 건수는 1000건임)*\n```",
    "answer": "1",
    "explanation": "A를 포함한 거래수 = {A}(100) + {A,B,C,D}(50) + {A,B,D}(250) + {A,C}(200) = 600건.\nB를 포함한 거래수 = {B,C}(100) + {A,B,C,D}(50) + {B,C}(200) + {A,B,D}(250) = 600건.\nA와 B를 동시 포함한 거래수 = {A,B,C,D}(50) + {A,B,D}(250) = 300건.\n$\\text{향상도(Lift)} = 0.3 / (0.6 \\times 0.6) = 0.833$이나, 문제 보기 구성 및 출제 오류 여지에 따라 교재 채점 상 ②(50%)를 정답으로 간주하는 오류 표기가 있음.",
    "options": [
      "30%",
      "50%",
      "83%",
      "100%"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-63",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 쇼핑몰의 거래 내역이다. 다음 중 규칙 \"사과 -> 딸기\"에 대한 향상도(lift)는 얼마인가?\n```\n항목 | 거래수\n사과 | 40\n딸기 | 20\n포도 | 30\n사과, 딸기 | 20\n사과, 포도 | 40\n딸기, 포도 | 10\n사과, 딸기, 포도 | 40\n전체거래 수 | 200\n```",
    "answer": "2",
    "explanation": "사과와 딸기 동시 거래 = {사과,딸기}(20) + {사과,딸기,포도}(40) = 60건.\n사과 포함 거래 = 사과(40) + {사과,딸기}(20) + {사과,포도}(40) + {사과,딸기,포도}(40) = 140건.\n딸기 포함 거래 = 딸기(20) + {사과,딸기}(20) + {딸기,포도}(10) + {사과,딸기,포도}(40) = 90건.\n$\\text{지지도(사과 \\cap 딸기)} = 60/200 = 0.3$.\n$P(사과) = 140/200 = 0.7$, $P(딸기) = 90/200 = 0.45$.\n$\\text{향상도(Lift)} = 0.3 / (0.7 \\times 0.45)$ 이다.",
    "options": [
      "`0.3/(0.6 × 0.45)`",
      "`0.4/(0.7 × 0.45)`",
      "`0.3/(0.7 × 0.45)`",
      "`0.4/(0.6 × 0.45)`"
    ]
  },
  {
    "id": "adp-s4-c5-short-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "데이터 마이닝을 적용한 후 그 결과의 신빙성을 검증하기 위해 데이터를 분할하는데 구축된 모델의 과잉 또는 과소 맞춤 등에 대한 미세조정 절차를 위해 사용되는 데이터는?",
    "answer": "검증용 데이터(Validation Data)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "오분류표(Confusion Matrix)를 활용하여 모형을 평가하는 지표 중 범주 불균형(Class Imbalance Problem)을 가지고 있는 데이터에 대한 중요한 범주만을 다루기 위해 사용되는 지표로 실제값이 False 인 관측치 중 예측치가 적중한 정도를 나타내는 지표는 무엇인가?",
    "answer": "특이도(Specificity)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "베이즈 정리(Bayes' Theory)와 특징에 대한 조건부 독립을 가설로 하는 알고리즘으로 클래스에 대한 사전 정보와 데이터로부터 추출된 정보를 결합하고 베이즈 정리를 이용하여 어떤 데이터가 특정 클래스에 속하는지를 분류하는 알고리즘은 무엇인가?",
    "answer": "나이브 베이지안 분류(Naive Bayes Classification)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "신경망 모형에서 아래의 식으로 계산되는 함수로서 표준화 지수 함수로 불리며, 출력값 z가 여러 개로 주어지고, 목표치가 다범주인 경우 각 범주에 속할 사후 확률을 제공하여 출력노드에 주로 사용되는 함수는?\n$$y_i = \\frac{\\exp(z_j)}{\\sum_{i=1}^L \\exp(z_i)}, \\quad j = 1, \\dots, L$$",
    "answer": "소프트맥스 함수(Softmax Function)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "두 개체 간의 거리에 기반하여 군집을 형성해가는 계층적 군집방법에서 사용되는 측도 중 두 개체의 벡터 내적을 기반하여 아래의 공식으로 계산할 수 있는 유사성 측도는 무엇인가?\n$$\\text{similarity}(A,B) = \\frac{A \\cdot B}{\\|A\\| \\|B\\|}$$",
    "answer": "코사인 유사도(Cosine Similarity)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 오분류표를 나타낸 것이다. F1 값을 구하시오.\n```\n[ 예측값 ]\nTrue | False | 합계\n실제값 True |  30 |  70   |  100\nFalse | 170 |  40   |  210\n합계  | 200 | 110   |  310\n```",
    "answer": "`0.2` (※ Precision = 30/200 = 0.15, Recall = 30/100 = 0.3. $F1 = 2 \\times (0.15 \\times 0.3)/(0.15 + 0.3) = 0.2$)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "혼합분포군집(Mixture Distribution Clustering)은 모형 기반의 군집 방법으로서 데이터가 k개의 모수적 모형의 가중합으로 표현되는 모집단 모형으로부터 나왔다는 가정 하에서 분석을 하는 방법이다. k개의 각 모형은 군집을 의미하며 이 혼합모형의 모수와 가중치의 최대가능도(Maximum Likelihood)추정에 사용되는 알고리즘은 무엇인가?",
    "answer": "EM 알고리즘 (또는 Expectation-Maximization)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "군집분석의 품질을 정량적으로 평가하는 대표적인 지표로 군집 내의 데이터 응집도(cohesion)와 군집간 분리도(separation)를 계산하여 군집 내의 데이터의 거리가 짧을수록, 군집 간 거리가 멀수록 값이 커지며 완벽한 분릴일 경우 1의 값을 가지는 지표는?",
    "answer": "실루엣(Silhouette)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "SOM(Self-Organizing Maps)에서는 각 학습 단계마다 입력층의 데이터 집합으로부터 하나의 표본 벡터를 임의로 선택하고 경쟁층의 프로토타입 벡터와의 거리를 계산하고 가장 가까운 프로토타입 벡터를 선택하는데 이 때 선택된 프로토타입 벡터를 나타내는 용어는 무엇인가?",
    "answer": "BMU(Best Matching Unit)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 미국 50개 주의 범죄 유형으로 군집분석을 한 결과이다. height=150에서 아래의 덴드로그램을 통해 군집 결과를 도출하면 총 군집의 수는 몇 개인가?\n*(참고: 높이 150 선을 가로로 그었을 때 만나는 세로 선의 개수가 3개임)*",
    "answer": "`3개` (또는 `3`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "랜덤 모델과 비교하여 해당 모델의 성과가 얼마나 좋아졌는지를 각 등급별로 파악하는 그래프로 상위등급에서 매우 크고 하위 등급으로 갈수록 감소하게 되면 일반적으로 모형의 예측력이 적절하다고 판단하게 된다. 모형 평가에 사용되는 이 그래프는 무엇인가?",
    "answer": "향상도 곡선 (또는 Lift Chart)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 학생들의 키와 몸무게를 정규화한 데이터이다. 맨하탄 거리를 이용하여 군집분석을 하고자 한다. 맨하탄 거리를 이용하여 A와 B의 거리를 구하시오.\n```\n사람 | (키, 몸무게)\nA   |   (1, 5)\nB   |   (2, 4)\n```",
    "answer": "`2` (※ $|1-2| + |5-4| = 2$)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> 분류할 데이터와 주어진 데이터의 모든 거리를 계산하여 가까운 거리의 데이터를 k개 만큼 찾은 후, 그 중에서 가장 빈도수가 높은 클래스로 분류해주는 기법",
    "answer": "k-최근접 이웃 알고리즘 (또는 k-NN, k-Nearest Neighbor)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "앙상블 기법 중 붓스트랩 표본을 구성하는 재표본 과정에서 분류가 잘못된 데이터에 더 큰 가중치를 주어 표본을 추출하는 기법은?",
    "answer": "부스팅(Boosting)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아이템에 대한 설명과 사용자 선호를 기반으로 하여 과거에 사용자가 좋아했던 것과 비슷한 아이템을 추천하는 알고리즘은 무엇인가?",
    "answer": "내용 기반 필터링(Content-based filtering)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> 의사결정나무모형에서 끝마디가 너무 많이 나오면 모형이 과대 적합된 상태로 현실문제에 적용할 수 있는 규칙이 나오지 않게 된다. 이를 해결하기 위해 분류된 관측치의 비율이나 MSE(Mean Squared Error) 등을 고려하여 과적합 문제를 해결한다.",
    "answer": "가지치기(Pruning)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "신경망의 모형에는 Visible Layer와 Hidden Layer로 구성되어 Hidden Layer가 많은 다층 퍼셉트론에서 Hidden Layer를 많이 거칠수록 전달되는 오차가 크게 줄어들어 학습이 되지 않는 현상이 발생하는데, 이를 무엇이라고 하는가?",
    "answer": "기울기 소실 (또는 Gradient Vanishing)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 트랜잭션에서 추출된 연관규칙 중 하나인 \"B -> C\"의 신뢰도는?\n```\nTransaction #1 {A, B, C}\nTransaction #2 {A, B, D}\nTransaction #3 {A, B}\nTransaction #4 {B, C}\nTransaction #5 {A, B, C, D}\nTransaction #6 {E}\n```",
    "answer": "`3/5` (또는 `60%`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "어떤 항목집합이 빈발하다면, 그 항목집합의 모든 부분집합도 빈발하다는 원리로 연관 규칙 알고리즘 중에서 가장 먼저, 많이 사용되고 있는 알고리즘은?",
    "answer": "아프리오리 알고리즘 (또는 Apriori)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c5-short-20",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> Dying ReLU 현상을 보완하기 위한 활성화 함수로 입력값이 음수일 때 출력값을 0이 아닌 0.001과 같은 매우 작은 값을 출력하도록 하는 활성화 함수이다.\n---",
    "answer": "Leaky ReLU",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-mcq-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "웹 콘텐츠나 PDF, 마이크로소프트 오피스 파일, XML, 텍스트 파일 등 다양한 포맷의 문서로부터 텍스트를 추출해 고품질의 정보를 도출하는 과정을 무엇이라고 하는가?",
    "answer": "0",
    "explanation": "비정형 텍스트 문서들로부터 데이터 마이닝 기법을 적용하여 유용한 정보를 도출해내는 과정은 '텍스트 마이닝'이다.",
    "options": [
      "텍스트 마이닝",
      "로지스틱 회귀분석",
      "시뮬레이션",
      "사회연결망 분석"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "텍스트 마이닝의 특징에 대해 설명한 것 중 맞는 것은?",
    "answer": "2",
    "explanation": "자연어 처리 및 정보 검색 분야에서 모델의 분류 성과를 측정하기 위해 가장 대표적으로 정확도(Precision)와 재현율(Recall)을 평가 척도로 사용한다.",
    "options": [
      "텍스트를 어근과 어미로 구분해서 하나의 feature로 만들어내는 단계가 중요하므로 언어에 대한 이해는 중요하지만 문화와 관습까지 이해할 필요는 없다.",
      "영어는 세계 공용어로써 많은 나라에서 활용하고 있기 때문에 국가별로 텍스트 마이닝 할 필요는 없다.",
      "자연어 처리 분야에서 분석 결과를 평가하기 위해 사용하는 방법론 가운데 대표적인 것은 정확도(precision)와 재현율(recall)이다.",
      "corpus는 데이터 마이닝의 절차 중 데이터 마트를 생성하는 단계이다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "텍스트 마이닝의 분석 결과를 평가하기 위해 사용되는 방법론 중 재현율에 관한 설명으로 맞는 것은?\n*(참고: 분석모델 긍정/부정, 실적 긍정/부정 교차표. 실제긍정 중 예측긍정=a, 실제부정 중 예측긍정=b, 실제긍정 중 예측부정=c, 실제부정 중 예측부정=d)*",
    "answer": "1",
    "explanation": "재현율(Recall)은 실제 긍정인 관측치($a+c$) 중에서 모델이 긍정으로 올바르게 분류한 관측치($a$)의 비율이므로 $a/(a+c)$ 가 된다.",
    "options": [
      "분석 모델이 긍정으로 분류한 데이터(a+b) 중 실제 긍정 데이터는 a이므로 재현율은 a/(a+b)이다.",
      "실제 존재하는 모든 긍정 메시지(a+c) 중 분석 결과 나온 개수가 a이므로 재현율은 a/(a+c)이다.",
      "전체 메시지(a+b+c+d) 중 분석 결과 나온 개수가 a이므로 재현율은 a/(a+b+c+d)이다.",
      "전체 메시지(a+b+c+d) 중 분석 결과 나온 개수가 a+b이므로 재현율은 (a+b)/(a+b+c+d)이다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "데이터 마이닝 절차 중 데이터의 정제, 통합, 선택, 변환의 과정을 거친 구조화된 단계로서 더 이상 추가적인 절차 없이 데이터 마이닝 알고리즘에서 활용될 수 있는 상태를 무엇이라고 하는가?",
    "answer": "1",
    "explanation": "데이터 마이닝을 수행하기 위해 텍스트 파일들을 정제하고 구조화하여 가공해 놓은 단어 말뭉치를 'Corpus'라고 한다.",
    "options": [
      "Feature",
      "Corpus",
      "Factor Source",
      "Term"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "텍스트 마이닝 패키지인 TM에서 문서를 관리하는 기본 구조를 Corpus라고 부르는데, 이는 텍스트 문서들의 집합을 의미한다. 메모리에서만 텍스트 문서를 유지하고 관리하는 것은 무엇인가?",
    "answer": "0",
    "explanation": "`tm` 패키지에서 제공하는 코퍼스 중 `VCorpus`(Volatile Corpus)는 텍스트 문서들을 메모리 상에서만 일시적으로 유지하고 관리하는 기본 구조이다. 디스크에 저장하여 보관하는 것은 `PCorpus`이다.",
    "options": [
      "VCorpus",
      "PCorpus",
      "MCorpus",
      "DataFrame Source"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "텍스트 마이닝 패키지인 TM에서 영어 문서 A에 포함된 대소문자를 모두 소문자로 바꾸기 위해 사용하는 R 프로그래밍으로 적합한 것은 무엇인가?",
    "answer": "3",
    "explanation": "텍스트 내 영문 대소문자를 소문자로 변환하는 대표적인 명령어는 `tolower`이다. `tm_map(A, content_transformer(tolower))`의 형태로 사용한다.",
    "options": [
      "`A <- tm_map(A, as.PlainTextDocument)`",
      "`A <- tm_map(A, removeWords, stopwords(\"english\"))`",
      "`A <- tm_map(A, stripWhitespace)`",
      "`A <- tm_map(A, tolower)` (또는 `content_transformer(tolower)`)"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "텍스트 마이닝 패키지인 TM에서 dtm이라는 문서에 포함된 단어 중 10회 이상 사용된 단어를 찾는 방법을 R로 프로그래밍한 것으로 옳은 것은?",
    "answer": "0",
    "explanation": "특정 문서-단어 행렬(`dtm`)에서 10회 이상 사용된 단어들만을 추출하는 함수는 `findFreqTerms(dtm, 10)`이다.",
    "options": [
      "`findFreqTerms(dtm, 10)`",
      "`findAssocs(dtm, 10, 10)`",
      "`tm_map(dtm, 10, findFreq)`",
      "`Corpus(findFreqTerms(dtm, 10))`"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "문장에서 사용된 단어의 긍정과 부정여부에 따라 얼마나 긍정적인 단어가 많은지 여부로 소스를 부여해 긍정 문장인지를 평가하기 위한 분석으로 트위터의 트윗을 통해 자사의 브랜드의 긍정/부정 여부를 판단하는데 활용되는 분석은 무엇인가?",
    "answer": "0",
    "explanation": "텍스트에 나타난 단어들의 긍정/부정 감성 수치를 기반으로 글쓴이의 주관적인 의견이나 태도(긍정/부정 선호도)를 분류하는 기법은 '감성 분석'이다.",
    "options": [
      "감성분석(Sentiment Analysis)",
      "분류분석(Classification Analysis)",
      "소셜네트워크분석(Social Network Analysis)",
      "트윗분석(Twit Analysis)"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "사회연결망 분석(social network analysis)에 대한 설명으로 부적절한 것은 어느 것인가?",
    "answer": "3",
    "explanation": "최근 사회연결망 분석은 네트워크 전체 구조의 연결 형태나 독립적인 소집단 네트워크 간의 관계(Inter-network 관계) 연구가 활발히 이뤄지고 있으며, 단순히 고립된 그룹이나 개인 연구에만 국한되지 않는다.",
    "options": [
      "개인과 집단들 간의 관계를 노드와 링크로 모델링해 그것의 위상 구조와 확산 및 진화과정을 계량적으로 분석한 방법론이다.",
      "최근 인터넷과 소셜네트워크의 발달로 발생하는 대용량 데이터를 활용해 개인과 개인, 개인과 집단 간의 네트워크를 분석하는 방법론이다.",
      "제이콥 모레노(Jacob Moreno)가 처음 \"sociometry\"에 발표했지만 사회연결망이라는 용어는 Barnes(1954)가 처음으로 내놓았다.",
      "최근에는 주로 그룹간 또는 그룹 안의 개인에 집중한 연구가 진행되고 있다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음은 사회연결망 분석방법에 대한 설명이다. 이 중 잘못 나열한 것은 어느 것인가?",
    "answer": "1",
    "explanation": "사회연결망 분석 방법에는 수학적 집합론을 이용한 방법, 시각화에 용이한 그래프 이론을 이용한 방법, 연산에 용이한 행렬을 이용한 방법이 존재한다. 계층적 군집분석 방식은 그래프 분석 방법의 기본 체계로 분류하기 어렵다.",
    "options": [
      "집합론적인 방법 - 각 개체들 간의 관계를 쌍으로 표현한 것",
      "계층적 그래프를 이용한 방법 - 계층적 군집분석의 방식으로 각 객체를 표현한 것",
      "그래프 이론을 이용한 방법 - 두 객체 간의 연결망은 두 점(노드)을 연결하는 선으로 표현한 것",
      "행렬을 이용한 방법 - 각 개체를 행렬의 행과 열에 대칭적으로 배치하고 행렬로 표현한 것"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "사회연결망 분석(social network analysis)의 네트워크 구조를 파악하는 기법 중 하나로 위세가 높은 사람들과 관계가 많을수록 자신의 위세 또한 높아지는 것을 특징으로 하며, 영향력이 높은 사람에 대한 단 하나의 연결이 그렇지 않은 다른 여러 사람들과 관계를 맺는 경우보다 자신의 영향력을 키우는 기법은 무엇인가?",
    "answer": "3",
    "explanation": "자신과 연결된 다른 노드들의 중심성이 높을수록 자신의 중심성(영향력)도 높게 평가받는 방식은 '위세 중심성(Eigenvector centrality)'이다.",
    "options": [
      "연결정도 중심성(Degree centrality)",
      "근접 중심성(Closeness centrality)",
      "매개 중심성(Betweenness centrality)",
      "위세 중심성(Eigenvector centrality)"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "사회연결망 분석(social network analysis)에서 아래 그림과 같은 결과를 얻었다. 내용에 대한 설명 중 적절하지 않은 것은?\n```\n> friend_comm_eb = edge.betweenness.community(m182_friend_no_iso)\n...\nModularity (best split): 0.2797619 Membership vector:\n1 2 3 5 6 7 8 9 10 11 12 13 14 15\n1 2 3 3 3 2 2 1  1  3  1  2  2  1\n> plot(as.dendrogram(friend_comm_eb))\n```\n*(참고: 덴드로그램에 노드들이 군집으로 묶여있는 형태가 표시됨)*",
    "answer": "1",
    "explanation": "제공된 membership vector 또는 덴드로그램 결과에서, 3번 노드는 군집 3에 속해 있고 15번 노드는 군집 1에 속해 있으므로 서로 다른 군집에 할당되었음을 알 수 있다.",
    "options": [
      "3개의 군집(cluster)으로 군집화하는 것이 최선인 것으로 결과가 나왔다.",
      "군집화의 결과, 3번 노드와 15번 노드는 같은 군집에 포함된 것을 알 수 있다.",
      "3개의 군집으로 나누었을 때 최고의 모듈성은 28%임을 알 수 있다.",
      "community detection을 위해 edge betweenness 알고리즘을 활용하여 커뮤니티를 발견한다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "텍스트 데이터를 전처리하여 각 문서와 단어 간의 사용 여부를 이용해 만들어진 matrix를 무엇이라고 하는가?",
    "answer": "0",
    "explanation": "단어들을 행(Row), 문서들을 열(Column)로 배열하고 단어의 출현 빈도를 나타낸 행렬은 `TDM`(Term-Document Matrix)이다.",
    "options": [
      "TDM(Term-Document Matrix)",
      "워드 스테밍(Word Stemming)",
      "웹 크롤링(Web Crawling)",
      "제외어 처리(Stop Word)"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 텍스트 마이닝의 기능 중 부적절한 것은?",
    "answer": "2",
    "explanation": "텍스트 마이닝의 핵심 기능은 정보 추출, 특성 추출, 자동 요약, 문서 분류 및 군집 등이며, 직접적인 '문서 제작'은 분석 기능에 포함되지 않는다.",
    "options": [
      "문서 요약(summarization)",
      "문서 분류(classification)",
      "문서 제작(production)",
      "특성 추출(feature extraction)"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "tm 패키지의 데이터들의 변형을 위한 tm_map( )이라는 함수를 통해 사용할 수 있는 명령어로 틀린 것은?",
    "answer": "1",
    "explanation": "`tm` 패키지의 전처리 가공 함수인 `tm_map` 내에서 사용되는 어간 추출 명령어는 `stemDocument`이다. `stemMing`이라는 내장 명령어는 없다.",
    "options": [
      "`removeWords`",
      "`stemMing`",
      "`stripWhitespace`",
      "`removeNumbers`"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래 Term-Document Matrix에서 sparsity(희소성)의 값으로 적절한 것은?\n```\nDocument\nTerm  | 1 | 2 | 3 | 4 | 5\n돈까스 | 1 | 0 | 0 | 1 | 0\n떡볶이 | 0 | 0 | 0 | 0 | 1\n순대  | 0 | 1 | 0 | 1 | 0\n라면  | 1 | 0 | 1 | 0 | 0\n김밥  | 0 | 1 | 0 | 0 | 1\n```",
    "answer": "2",
    "explanation": "희소성(Sparsity)은 전체 원소 중 0이 차지하는 비율이다. 전체 25개 원소 중 0의 개수가 16개이므로, 희소성은 $16/25 = 0.64$ ($64\\%$) 이다.",
    "options": [
      "2%",
      "44%",
      "64%",
      "98%"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래의 그림에 대한 설명으로 부적절한 것은?\n*(참고: \"BIG DATA\", \"ANALYTICS\" 등이 크게 표현된 워드클라우드 그림)*",
    "answer": "2",
    "explanation": "워드 클라우드에서 단어의 크기는 해당 단어가 문서 내에서 나타난 출현 빈도(Frequency)에 의해서 결정되는 것이지 다른 문서와의 연결성과 직접적인 관련은 없다.",
    "options": [
      "문서 내에서 가장 빈번하게 나타나는 단어는 크게 표시되어 있다.",
      "위의 그림을 만들려면 텍스트 데이터가 필요하다.",
      "작은 글자는 다른 문서와 연결성이 낮아서 작게 표현했다.",
      "워드 클라우드의 글자 수를 지정할 수 있다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 사회연결망 분석에서 행과 열에 같은 개체가 배열되어 있는 매트릭스로 적절한 것은?",
    "answer": "3",
    "explanation": "소셜네트워크 행렬 구조 중 행과 열의 개체가 동일한(예: 사람 × 사람) 행렬을 '1원모드(1-mode) 매트릭스'라고 한다.",
    "options": [
      "준 연결 매트릭스",
      "2원모드 매트릭스",
      "상관 매트릭스",
      "1원모드 매트릭스"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 사회연결망 분석을 R 프로그램으로 실행할 때, 사용하는 함수가 아닌 것은?",
    "answer": "3",
    "explanation": "`V()`는 노드(Vertex) 추출, `E()`는 링크(Edge) 추출, `simplify()`는 루프나 중복 링크 제거 등에 사용되는 igraph 패키지 함수들이다. `inspect()`는 tm 패키지나 연관규칙에서 주로 쓰이는 내용 확인용 함수이다.",
    "options": [
      "`V()`",
      "`E()`",
      "`simplify()`",
      "`inspect()`"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-20",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 사회연결망 분석의 중심성을 측정하는 방법으로 틀린 것은?",
    "answer": "3",
    "explanation": "사회연결망 분석에서 노드의 개별 위치를 기반으로 중요도를 평가하는 중심성(Centrality) 지표에는 연결정도 중심성, 위세 중심성, 근접 중심성, 매개 중심성이 있다. 밀도(Density)는 네트워크 전체의 연결 수준을 보여주는 지표이다.",
    "options": [
      "연결정도 중심성",
      "위세 중심성",
      "근접 중심성",
      "밀도 중심성"
    ]
  },
  {
    "id": "adp-s4-c6-short-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "텍스트 마이닝에서 문서 내에 포함된 단어들을 어간과 어미로 분리 하여 각 문서마다 사용된 단어의 어간들의 빈도를 표현하는 행렬을 만들 수 있다. R 프로그램을 통해 이러한 행렬을 만들고자 할 때 활용하는 함수는 무엇인가?",
    "answer": "`DocumentTermMatrix()` (또는 `TermDocumentMatrix()`)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "개인과 집단들 간의 관계를 노드와 링크로서 모델링해 그것의 위상구조와 확산 및 진화과정을 계량적으로 분석하는 방법은?",
    "answer": "소셜네트워크분석 (또는 사회연결망분석, SNA, Social Network Analysis)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "텍스트 마이닝의 전처리(preprocessing) 과정 중에서 변형된 단어형태에서 접사(affix) 등을 제거하고 그 단어 외 원형 또는 어간(어형변화의 기초가 되는 부분)을 찾아내는 것을 지칭하는 용어는 무엇인가??",
    "answer": "스테밍 (또는 어간 추출, Stemming)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> - 연결된 노드의 중요성에 가중치를 둬 노드의 중심성을 측정하는 방법\n> - 보나시치(Bonacich) 권력지수라고 불림",
    "answer": "위세 중심성 (또는 Eigenvector Centrality)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "데이터의 정제·통합·선택·변환의 과정을 거친 후 구조화된 텍스트 데이터로 R의 텍스트 마이닝 패키지인 'tm'에서 문서 관리 기본 구조인 이것은 무엇인가?",
    "answer": "코퍼스 (또는 말뭉치, Corpus)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래와 같이 문서에 포함된 단어의 사용 빈도에 따라 크기 및 배치를 달리하여 중요 단어들을 파악하도록 하는 텍스트 마이닝 시각화 방법은?\n*(참고: 사람 얼굴 모양이나 구름 모양 등으로 시각화한 워드클라우드 그림)*",
    "answer": "워드클라우드 (또는 Word Cloud)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래 (가), (나)에 들어갈 적절한 말을 적으시오.\n> 소셜네트워크 분석에서 행렬을 이용하면 각 객체를 행렬의 행과 열에 대칭적으로 배치하고 (번째 객체와 (번째 객체간의 관계가 연결이 존재하면 1, 관계가 존재하지 않으면 0을 넣는다. ( 가 )는 행과 열에 같은 개체가 배열되는 것이며, ( 나 )는 행과 열에 다른 개체가 배열된다.",
    "answer": "(가): 1원 자료 (또는 1-mode) / (나): 2원 자료 (또는 2-mode)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "제품을 구매한 사람들 사이에 직접적인 상호작용의 관계가 존재하지 않더라도, 관계를 인위적으로 설정해 고객과 고객 또는 제품과 제품 사이의 관계를 나타내는 네트워크는?",
    "answer": "준 연결망 (또는 Quasi Network)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> - 데이터에서 유의미한 단어 토큰만을 선별하기 위해서 쓸모없는 단어를 제거",
    "answer": "불용어 처리 (또는 Stopword Removal)",
    "explanation": ""
  },
  {
    "id": "adp-s4-c6-short-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> - 의미를 담아 단어를 벡터로 바꿔주는 모델\n> - 원-핫 인코딩과 달리 한 단어가 미리 정의된 차원(보통 20~200)에서 연속형의 값을 갖는 벡터로 표현\n---",
    "answer": "워드 임베딩 (또는 Word Embedding)",
    "explanation": ""
  }
];