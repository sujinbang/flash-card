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
      "z=c(1:3, NA)\nis.na(z)",
      "z<-c(1:3, NA)\nis.na(z)",
      "z=c(1:3, NA)\nz==NA",
      "c(1,1,1,2)==2"
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
    "explanation": "'이상치'라고 규정한 자료는 분석에서 제외할 수 있지만 무조건적으로 제거할 수 는 없다.",
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
    "question": "아래는 근로자의 임금(wage)과 교육수준(1. <HS Grad, 2. HS Grad, 3. Some College, 4. College Grad, 5. Advanced Degree)의 관계를 나타낸 그래프이다. 다음 중 아래에 대한 설명으로 부적절한 것은?",
    "answer": "2",
    "explanation": "히스토그램의 각 막대의 높이는 빈도를 나타냅니다. 임금 수준은 x축을 통해서 확인할 수 있습니다. (정답: ③)",
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
    "answer": "3",
    "explanation": "표본추출방법은 단순랜덤추출법, 계통추출법, 집락추출법, 층화추출법입니다. 깁스추출법은 표본 추출 방법이 아닙니다. (정답: ④)",
    "options": [
      "단순랜덤추출법",
      "계통추출법",
      "층화추출법",
      "깁스추출법"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "확률이란 '특정사건이 일어날 가능성의 척도'라고 정의할 수 있다. 통계적 실험을 실시할 때 나타날 수 있는 모든 결과들의 집합을 표본공간이라고 하고, 사건이란 표본공간의 부분집합을 말한다. 다음 중 확률 및 확률분포에 대한 설명으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "연속형 확률변수는 가능한 값이 실수의 특정구간 전체에 해당하는 확률변수이며 연속형 확률밀도함수를 가집니다. 확률변수 X가 구간 또는 구간들의 모임인 숫자 값을 갖는 확률분포함수는 연속형 확률밀도함수입니다. (정답: ④)",
    "options": [
      "모든 사건의 확률값은 0과 1 사이에 있다.",
      "서로 배반인 사건들의 합집합의 확률은 각 사건들의 확률의 합이다.",
      "두 사건 A, B가 독립이라면 사건 B의 확률은 A가 일어난다는 가정하에서의 B의 조건부확률과 동일하다.",
      "확률변수 X가 구간 또는 구간들의 모임인 숫자 값을 갖는 확률분포함수를 이산형확률질량함수라 한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "자료의 정보를 이용해 집단에 관한 추측, 결론을 이끌어내는 과정인 통계적 추론에 대한 설명으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "구간추정은 모수의 참값이 포함되어 있다고 추정되는 구간을 결정하는 것이지만, 실제 모집단의 모수가 신뢰구간에 반드시 포함되어야 하는 것은 아닙니다. 신뢰수준(예: 95%)에 따라 포함되지 않을 확률도 존재합니다. (정답: ④)",
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
    "answer": "3",
    "explanation": "비표본오차(non-sampling error)는 표본오차를 제외한 모든 오차로서 조사 과정에서 발생하는 모든 부주의나 실수, 알 수 없는 원인 등 모든 오차를 의미하며, 조사대상이 증가할수록 오차가 커집니다. (정답: ④)",
    "options": [
      "표본오차(sampling error)는 모집단을 대표할 수 있는 표본 단위들이 조사대상으로 추출되지 못함으로서 발생하는 오차를 말한다.",
      "표본편의(sampling bias)는 모수를 작게 또는 크게 할 때 추정하는 것과 같이 표본추출방법에서 기인하는 오차를 의미한다.",
      "표본편의는 확률화(randomization)에 의해 최소화하거나 없앨 수 있다. 확률화란 모집단으로부터 편의되지 않은 표본을 추출하는 절차를 의미하며 확률화 절차에 의해 추출된 표본을 확률표본(random sample)이라 한다.",
      "비표본오차(non-sampling error)는 표본오차를 제외한 모든 오차로 조사 과정에서 발생하는 모든 부주의나 실수, 알 수 없는 원인 등 모든 오차를 의미하며 조사대상이 증가한다고 해서 오차가 커지지는 않는다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "표본공간은 어떤 실험이나 시도의 결과로 나올 수 있는 모든 가능한 결과의 집합이다. 사건이랑 표본공간의 부분집합을 말한다. 다음 중 확률 및 확률분포에 관한 설명으로 부적절한 것은?",
    "answer": "2",
    "explanation": "두 사건 A, B가 독립일 때, 사건 B의 확률은 사건 A가 일어났다는 가정 하에서의 B의 조건부확률과 동일합니다. 즉, P(B|A) = P(B)가 성립합니다. (정답: ③)",
    "options": [
      "(사건 A가 일어나는 경우의 수)/(일어날 수 있는 모든 경우의 수)를 P(A)라 할 때 이를 A의 수학적 확률이라 한다.",
      "한 사건 A가 일어날 확률을 P(A)라 할 때 n번의 반복시행에서 사건 A가 일어난 횟수를 r라 하면, 상대도수는 r/n는 n이 커짐에 따라 확률 P(A)에 가까워짐을 알 수 있다. P(A)를 사건 A의 통계적 확률이라 한다.",
      "두 사건 A, B가 독립일 때, 사건 B의 확률은 사건 A가 일어났다는 가정 하에서의 B의 조건부확률과 다르다.",
      "표본공간에서 임의의 사건 A가 일어날 확률 P(A)는 항상 0과 1 사이에 있다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 표본조사의 유의점에 대한 설명으로 가장 부적절한 것은?",
    "answer": "1",
    "explanation": "표본편의(sampling bias)는 확률화(randomization)에 의해 최소화하거나 없앨 수 있습니다. 모형 추론 방법이 아닙니다. (정답: ②)",
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
    "question": "표본조사나 실험을 하는 과정에서 추출된 원소나 관측 자료를 얻는 것을 측정이라고 한다. 자료의 측정수준에 따라 통계에 이용해야 할 통계량이나 검정법이 다르다. 자료는 분류자료와 수량자료로 나눌 수 있는데 다음 중 자료의 측정 수준에 대한 설명으로 부적절한 것은?",
    "answer": "2",
    "explanation": "구간척도(interval scale, 등간척도)는 측정 대상이 갖고 있는 속성의 양을 측정하는 것으로 구간이나 구간 사이의 간격이 의미가 있는 자료이지만, 절대영점(0)이 존재하지 않아 비율 계산은 불가능합니다. 절대영점이 존재하는 것은 비율척도입니다. (정답: ③)",
    "options": [
      "명목척도(nominal scale)는 단순한 번호로 차례의 의미는 없다.",
      "순서척도(ordinal scale)는 순서가 의미를 가지는 번호이다.",
      "구간척도(interval scale)는 순서뿐만 아니라 그 간격도 의미가 있으며 0이 절대적인 의미를 가진다.",
      "비율척도(ratio scale)는 0을 기준으로 하는 절대적 척도를 간격뿐만 아니라 비율에도 의미가 있다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "귀무가설이 사실인데도 불구하고 사실이 아니라고 판정할 때(귀무가설을 기각하는 오류) 이를 제1종 오류라고 한다. 이때 우리가 내린 판정이 잘못되었을 실제 확률은 무엇으로 나타낼 수 있는가?",
    "answer": "1",
    "explanation": "p-value(유의확률)는 귀무가설이 사실일 때 대립가설을 지지하는 방향으로 실제 관측된 검정통계량만큼 혹은 그보다 더 극단적인 값이 나타날 확률로, 우리가 내린 제1종 오류 판정이 잘못되었을 실제 확률을 나타냅니다. (정답: ②)",
    "options": [
      "α (알파)",
      "p-value",
      "검정통계량",
      "1-α"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "확률변수 X가 확률질량함수 f(x)를 갖는 이산형 확률변수인 경우 그 기댓값으로 옳은 식은?",
    "answer": "0",
    "explanation": "이산형 확률변수의 기댓값은 각 값과 그 값이 발생할 확률의 곱의 합인 E(X) = Σ x f(x) 입니다. (정답: ①)",
    "options": [
      "E(X) = Σ x f(x)",
      "E(X) = ∫ x f(x) dx",
      "E(X) = Σ x^2 f(x)",
      "E(X) = ∫ x^2 f(x) dx"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래 조건부 확률에서 사건 A가 일어났다는 가정하의 사건 B의 확률을 조건부 확률이라고 하고 아래의 식으로 표현한다. 다음 중 의 계산식을 표현하기 위해 (가)에 들어갈 식으로 적절한 것은?\nP(B|A) = (가) / P(A)",
    "answer": "0",
    "explanation": "조건부 확률 공식은 P(B|A) = P(A∩B) / P(A) 입니다. 따라서 (가)에 들어갈 식은 P(A∩B) 입니다. (정답: ①)",
    "options": [
      "P(A∩B)",
      "P(A)",
      "P(B)",
      "P(A∪B)"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 모분산의 추론에 대한 설명으로 가장 부적절한 것은?",
    "answer": "1",
    "explanation": "정규모집단으로부터 n개를 단순임의 추출한 표본의 분산은 카이제곱(χ²) 분포를 따릅니다. t 분포가 아닙니다. (정답: ②)",
    "options": [
      "모집단의 변동성 또는 퍼짐의 정도에 관심이 있는 경우, 모분산이 추론의 대상이 된다.",
      "정규모집단으로부터 n개를 단순임의 추출한 표본의 분산은 자유도가 n-1인 t 분포를 따른다.",
      "모집단이 정규분포를 따르지 않더라도 중심극한정리를 통해 정규모집단으로부터의 모분산에 대한 검정을 유사하게 시행할 수 있다.",
      "이 표본에 의한 분산비 검정은 두 표본의 분산이 동일한지를 비교하는 검정으로 검정통계량은 F 분포를 따른다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "통계적 추론이란 자료의 정보를 이용하여 모집단에 관한 추측이나 결론을 이끌어 내는 과정이다. 이 과정은 추정과 가설검정을 통하여 이루어진다. 다음 중 추정과 가설검정에 대한 설명으로 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "p값(p-value)은 귀무가설이 옳다는 가정하에서 실제 관측된 값보다 대립가설을 지지하는 방향으로 검정통계량이 치우쳐 나타날 확률입니다. 귀무가설을 지지하는 방향이 아닙니다. (정답: ③)",
    "options": [
      "가장 참값이라고 여겨지는 하나의 모수 값을 택하는 것을 점추정이라고 한다. 즉, 점추정은 모수가 특정할 값일 것이라고 추정하는 것이다.",
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
    "question": "다음 중 아래의 표가 나타내는 확률질량함수를 가진 확률변수 x의 기댓값 E(x)로 가장 적절한 것은?\n\n| x | 1 | 2 | 3 | 4 |\n| f(x) | 0.2 | 0.3 | 0.2 | 0.075 |",
    "answer": "1",
    "explanation": "기댓값 E(x)는 1 × 0.2 + 2 × 0.3 + 3 × 0.2 + 4 × 0.075 = 0.2 + 0.6 + 0.6 + 0.3 = 1.7 입니다. (정답: ②)",
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
    "answer": "0",
    "explanation": "이항분포(Binomial distribution)는 이산형 확률분포입니다. 정규분포, t-분포, 카이제곱 분포는 모두 연속형 확률분포에 속합니다. (정답: ①)",
    "options": [
      "이항분포(Binomial distribution)",
      "정규분포(Normal distribution)",
      "t-분포(t-distribution)",
      "카이제곱 분포(χ²-distribution)"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "표본조사나 실험을 실시하는 과정에서 추출된 원소들이나 실험 단위로부터 주어진 목적에 적합하도록 관측해 자료를 얻는 것을 측정(measurement)이라 한다. 다음 중 자료의 종류에 대한 설명으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "비율척도는 절대적인 기준인 원점(0)이 존재하고 사칙연산(덧셈, 뺄셈, 곱셈, 나눗셈)이 모두 가능한 척도입니다. 원점이 존재하지 않는다는 설명은 잘못되었습니다. (정답: ④)",
    "options": [
      "명목척도 - 측정 대상이 어느 집단에 속하는지 분류할 때 사용",
      "순서척도 - 측정 대상의 특성이 가지는 서열관계를 관측하는 척도",
      "구간척도 - 측정 대상이 갖는 속성의 양을 측정하는 것으로 구간이나 구간사이의 간격이 의미가 있는 자료",
      "비율척도 - 절대적 기준인 원점이 존재하지 않으며 모든 사칙연산이 가능한 척도"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "히스토그램은 표로 되어 있는 도수분포표를 그래프로 나타낸 것이다. 다음 중 히스토그램에 대한 설명으로 부적절한 것은?",
    "answer": "1",
    "explanation": "히스토그램은 표본의 크기가 충분히 커야 데이터 분포의 형상을 잘 표현해내며, 표본의 크기가 작으면 형상을 잘 표현하지 못합니다. (정답: ②)",
    "options": [
      "히스토그램에서는 가로축이 계급, 세로축이 도수를 나타낸다. 계급은 보통 변수의 구간이며, 서로 겹치지 않는다.",
      "히스토그램은 표본의 크기가 작아도 각 막대의 높이가 데이터 분포의 형상을 잘 표현해낸다.",
      "그래프의 모양이 치우쳐있거나 봉우리가 여러개 있는 그래프는 비정규 데이터일 수 있다.",
      "봉우리가 여러개 있는 데이터는 일반적으로 2개 이상의 공정이나 조건에서 데이터가 수집되는 경우 발생한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Wage 데이터셋에 대한 아래 요약통계량에 대한 설명으로 가장 부적절한 것은 무엇인가?\n\n```\n> summary(Wage[,c(\"wage\",\"education\")])\n      wage               education   \n Min.   : 20.09   1. < HS Grad  :268  \n 1st Qu.: 85.38   2. HS Grad    :971  \n Median :104.92   3. Some College:650  \n Mean   :111.70   4. College Grad:685  \n 3rd Qu.:128.68   5. Advanced Degree:426  \n Max.   :318.34                       \n```",
    "answer": "2",
    "explanation": "wage의 최솟값, 분위수, 중앙값, 평균, 최댓값이 나타나 있는 것으로 보아 wage는 수치형(연속형) 변수입니다. 범주형 변수가 아닙니다. (정답: ③)",
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
    "question": "아래는 chickwts 데이터 프레임을 분석한 것이다. 다음 중 결과에 대한 해석이 잘못된 것은?\n\n```\n> t.test(chickwts$weight)\n\n\tOne Sample t-test\n\ndata:  chickwts$weight\nt = 28.202, df = 70, p-value < 2.2e-16\nalternative hypothesis: true mean is not equal to 0\n95 percent confidence interval:\n 242.8301 279.7896\nsample estimates:\nmean of x \n 261.3099 \n```",
    "answer": "0",
    "explanation": "R 출력 결과에서 자유도(df: degree of freedom)가 70이므로, 전체 관측치 수(n)는 df + 1 = 71개입니다. (정답: ①)",
    "options": [
      "전체 관측치 수는 70개 이다.",
      "99% 신뢰구간을 구하기 위해서는 \"conf.level=0.99\"라는 옵션을 사용할 수 있다.",
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
    "answer": "2",
    "explanation": "제1종 오류(Type I error)는 귀무가설(H₀)이 참일 때, 귀무가설을 참이 아니라고 판정(기각)하는 오류입니다. (정답: ③)",
    "options": [
      "H₀가 사실일 때, H₀가 사실이라고 판정",
      "H₀가 사실이 아닐 때, H₀가 사실이라고 판정",
      "H₀가 사실일 때, H₀가 사실이 아니라고 판정",
      "H₀가 사실이 아닐 때, H₀가 사실이 아니라고 판정"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-21",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "통계적 추론에서 모집단의 모수를 검증하기 위해 사용하는 모수적 방법과 비교하여 비모수적 방법의 특징으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "비모수적 검정은 모집단의 분포에 제약을 가하지 않고 관측값의 절대적 크기에 의존하지 않으며, 관측값들의 순위(rank)나 차이의 부호 등을 이용해 검정을 실시합니다. (정답: ④)",
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
    "answer": "1",
    "explanation": "줄기잎그림은 각 데이터를 구간별로 요약하여 나타내는 방법으로, 계산량이 많지 않고 손쉽게 작성이 가능합니다. (정답: ②)",
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
    "question": "Wage 데이터에서 wage에 대한 t-test를 실시하였다. 다음 설명 중 부적절한 것은?\n\n```\n> t.test(Wage$wage,mu=100)\n\n\tOne Sample t-test\n\ndata:  Wage$wage\nt = 15.362, df = 2999, p-value < 2.2e-16\nalternative hypothesis: true mean is not equal to 100\n95 percent confidence interval:\n 110.2098 113.1974\nsample estimates:\nmean of x \n 111.7036 \n```",
    "answer": "3",
    "explanation": "귀무가설에서 설정한 모평균의 참값인 mu=100은 95% 신뢰구간인 [110.2098, 113.1974]에 포함되지 않습니다. (정답: ④)",
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
    "question": "여섯 가지 종류의 닭 사료 첨가물의 효과를 비교하기 위한 데이터와 그래프이다. 아래의 설명으로 다음 중 적절하지 않은 것은 무엇인가?\n\n```\n> summary(chickwts)\n     weight             feed    \n Min.   :108.0   casein   :12  \n 1st Qu.:204.5   horsebean:10  \n Median :258.0   linseed  :12  \n Mean   :261.3   meatmeal :11  \n 3rd Qu.:323.5   soybean  :14  \n Max.   :423.0   sunflower:12  \n```\n\n![닭 사료 첨가물 효과 그래프](/images/chickwts_plot.jpeg)",
    "answer": "1",
    "explanation": "sunflower 사료 그룹의 상자그림을 보면 아래쪽에 점으로 표시된 이상치(outlier)가 존재하는 것을 확인할 수 있습니다. (정답: ②)",
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
    "question": "Carseats 데이터 프레임은 400개 상점에서 판매 중인 유아용 카시트에 대한 자료이다. 다음 중 아래의 결과물에 대한 설명으로 가장 부적절한 것은?\n\n```\n> summary(Carseats)\n     Sales          CompPrice          Income        Advertising    \n Min.   : 0.000   Min.   : 77.0    Min.   : 21.00   Min.   : 0.000  \n 1st Qu.: 5.390   1st Qu.:115.0    1st Qu.: 42.75   1st Qu.: 0.000  \n Median : 7.490   Median :125.0    Median : 69.00   Median : 5.000  \n Mean   : 7.496   Mean   :125.0    Mean   : 68.66   Mean   : 6.635  \n 3rd Qu.: 9.320   3rd Qu.:135.0    3rd Qu.: 91.00   3rd Qu.:12.000  \n Max.   :16.270   Max.   :175.0    Max.   :120.00   Max.   :29.000  \n   Population        Price         ShelveLoc        Age       \n Min.   : 10.0   Min.   : 24.0   Bad   : 96   Min.   :25.00  \n 1st Qu.:139.0   1st Qu.:100.0   Good  : 85   1st Qu.:39.75  \n Median :272.0   Median :117.0   Medium:219   Median :54.50  \n Mean   :264.8   Mean   :115.8                Mean   :53.32  \n 3rd Qu.:398.5   3rd Qu.:131.0                3rd Qu.:66.00  \n Max.   :509.0   Max.   :191.0                Max.   :80.00  \n   Education      Urban       US     \n Min.   :10.0   No :118   No :142  \n 1st Qu.:12.0   Yes:282   Yes:258  \n Median :14.0                        \n Mean   :13.9                        \n 3rd Qu.:16.0                        \n Max.   :18.0                        \n```",
    "answer": "2",
    "explanation": "US 변수는 Yes/No로 이루어진 명목형(범주형) 변수이므로, 구간척도가 아닌 명목척도에 해당합니다. (정답: ③)",
    "options": [
      "ShelveLoc은 명목척도에 해당된다.",
      "ShelveLoc은 Good인 카시트의 비율은 0.21이다.",
      "US 변수는 구간척도에 해당된다.",
      "US가 No인 카시트가 Yes인 카시트보다 적다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-26",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Chickwts는 71마리의 병아리들에게 서로 다른 모이(feed)를 6주간 먹인 후 무게(weight)를 측정한 자료이다. 아래는 첨가물 그룹 간 평균 무게에 차이가 있는지 검정하기 위해 분산분석을 한 결과이다. 설명이 가장 부적절한 것은?\n\n```\n> summary(aov(weight~feed, chickwts))\n            Df Sum Sq Mean Sq F value   Pr(>F)    \nfeed         5 231129   46226   15.37 5.94e-10 ***\nResiduals   65 195556    3009                     \n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\n```",
    "answer": "1",
    "explanation": "feed 요인의 자유도(Df)가 5이므로, 사료(첨가물) 그룹의 개수는 자유도 + 1 = 6개입니다. (정답: ②)",
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
    "question": "아래 데이터는 두 종류의 수면 유도제(group)를 무작위로 선정된 20명의 환자를 대상으로 수면 시간 증감(extra)을 측정한 자료이다. 아래 결과에 대한 설명으로 잘못된 것은?\n\n```\n> head(sleep)\n  extra group ID\n1   0.7     1  1\n2  -1.6     1  2\n3  -0.2     1  3\n4  -1.2     1  4\n5  -0.1     1  5\n6   3.4     1  6\n> t.test(extra~group, sleep)\n\n\tWelch Two Sample t-test\n\ndata:  extra by group\nt = -1.8608, df = 17.776, p-value = 0.07939\nalternative hypothesis: true difference in means is not equal to 0\n95 percent confidence interval:\n -3.3654832  0.2054832\nsample estimates:\nmean in group 1 mean in group 2 \n           0.75            2.33 \n```",
    "answer": "0",
    "explanation": "p-value가 0.07939로 유의수준 1%(0.01) 또는 5%(0.05)보다 크기 때문에 귀무가설을 기각할 수 없습니다. 따라서 수면유도제 2가 수면유도제 1보다 유의미하게 효과적이라고 결론지을 수 없습니다. (정답: ①)",
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
    "question": "Default 데이터셋은 10000명의 신용카드 고객에 대한 카드대금 연체여부(default=Yes/No), 학생여부(student=Yes/No)를 포함한다. 아래는 default와 student 간의 관계를 나타내는 그림이다. 보기의 설명 중 옳지 않은 것은?",
    "answer": "0",
    "explanation": "모자이크 플롯에서 student 가 No인 컬럼의 가로 너비가 Yes인 컬럼에 비해 훨씬 넓습니다. 따라서 학생이 아닌 고객(student=No)이 학생인 고객(student=Yes)보다 훨씬 많습니다. (정답: ①)",
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
    "answer": "0",
    "explanation": "스피어만 상관계수는 서열 척도 변수를 사용하며 데이터의 순위를 바탕으로 상관관계를 측정하는 비모수적 방법입니다. 이는 선형관계뿐 아니라 단순 단조적인 비선형 상관관계도 포착할 수 있습니다. (정답: ①)",
    "options": [
      "비선형적인 상관관계는 나타내지 못한다.",
      "서열척도로 측정된 변수간 관계를 측정한다.",
      "-1과 1 사이의 값을 가진다.",
      "0은 상관관계가 없음을 의미한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-30",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 회귀분석의 가정으로 부적절한 것은?",
    "answer": "3",
    "explanation": "회귀분석의 오차항 기본 가정은 선형성, 독립성, 정규성, 등분산성(homoscedasticity)입니다. 이분산성은 가정을 위배한 상태입니다. (정답: ④)",
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
    "answer": "3",
    "explanation": "스피어만 상관계수는 두 변수를 각각 순위(rank)로 변환한 뒤, 그 순위 데이터에 대해 피어슨 상관계수를 계산한 것입니다. 보기 4의 설명은 주객이 전도되었습니다. (정답: ④)",
    "options": [
      "피어슨 상관계수는 두 변수 간의 선형관계의 크기를 측정한다.",
      "스피어먼 상관계수는 두 변수 간의 비선형적인 관계도 측정 가능하다.",
      "피어슨 상관계수와 스피어먼 상관계수는 -1과 1사이의 값을 가진다.",
      "피어슨 상관계수는 두 변수를 순위로 변환시킨 후 두 순위 사이의 스피어먼 상관계수로 정의된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-32",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "상관분석에 대한 설명으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "종속변수에 미치는 영향력의 크기를 파악하여 독립변수의 특정 값에 대응하는 종속변수 값을 예측하고 선형모형을 산출하는 기법은 상관분석이 아니라 회귀분석(Regression Analysis)입니다. (정답: ④)",
    "options": [
      "등간 척도 및 비율척도로 측정된 변수들 간의 상관계수를 측정하는데 피어슨 상관계수를 이용한다.",
      "서열 척도로 측정된 변수들 간의 상관계수를 측정하는데 스피어먼 상관계수를 이용한다.",
      "상관분석은 변수들 간의 연관성을 파악하기 위해 사용하는 분석 기법 중 하나로 변수 간의 선형 관계 정도를 분석하는 통계기법이다.",
      "상관분석은 종속변수에 미치는 영향력의 크기를 파악하여 독립변수의 특정한 값에 대응하는 종속 변수값을 예측하는 선형모형을 산출하는 방법이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-33",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 추정된 다중회귀모형이 통계적으로 유의미한지 확인하는 방법으로 적절한 것은?",
    "answer": "0",
    "explanation": "추정된 다중회귀모형의 적합도와 유의성을 확인하기 위해서는 분산분석표의 F 통계량과 p-value를 확인합니다. 개별 회귀계수의 유의성은 t 통계량으로 확인합니다. (정답: ①)",
    "options": [
      "F F 통계량을 확인한다.",
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
    "question": "데이터 프레임 attitude에 대해 아래와 같이 R 명령을 적용하고 결과를 얻었다. 다음 설명 중 가장 부적절한 것은?\n\n```\n> cor(attitude)\n                rating complaints privileges   learning     raises   critical    advance\nrating     1.0000000  0.8254176  0.4261169  0.6236782  0.5901390  0.1564392  0.1550863\ncomplaints 0.8254176  1.0000000  0.5582882  0.5967358  0.6691975  0.1877143  0.2245796\nprivileges 0.4261169  0.5582882  1.0000000  0.4933310  0.4454779  0.1472331  0.3432934\nlearning   0.6236782  0.5967358  0.4933310  1.0000000  0.6403144  0.1159652  0.5316198\nraises     0.5901390  0.6691975  0.4454779  0.6403144  1.0000000  0.3768830  0.5741862\ncritical   0.1564392  0.1877143  0.1472331  0.1159652  0.3768830  1.0000000  0.2833432\nadvance    0.1550863  0.2245796  0.3432934  0.5316198  0.5741862  0.2833432  1.0000000\n```",
    "answer": "3",
    "explanation": "출력된 행렬은 상관관계 행렬(Correlation Matrix)로, 각 변수 자기 자신과의 상관계수(대각선 값)는 항상 1이지만, 이 행렬만으로는 개별 변수들의 실제 분산(Variance) 값을 알 수 없습니다. (정답: ④)",
    "options": [
      "모든 변수들 사이에 양(+)의 상관관계가 존재한다.",
      "rating과 complaints 사이에 가장 강한 상관관계가 존재한다.",
      "critical과 learning 사이의 상관관계가 가장 약하다.",
      "모든 변수의 분산이 1이다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-35",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "변수 X와 Y의 피어슨 상관계수는 0.27이고 변수 X와 Z의 피어슨 상관계수는 -0.78이다. 다음 중 X, Y, Z 간 피어슨 상관계수에 대한 설명으로 가장 부적절한 것은?",
    "answer": "1",
    "explanation": "상관계수는 -1에서 1 사이의 값을 가지며, 1이나 -1에 가까울수록 선형관계가 뚜렷합니다. X와 Y의 상관계수인 0.27은 0에 가까우므로, X와 Y가 선형관계를 가진다고 확신하기는 어렵습니다. (정답: ②)",
    "options": [
      "두 상관계수의 유의성은 판단할 수 없다.",
      "X와 Y는 선형관계를 가진다.",
      "X와 Y는 양의 상관관계를 가진다.",
      "X와 Y의 선형관계보다 X와 Z의 선형관계가 강하다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-36",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 200개의 특정 제품의 sales(단위:1천개)와 TV, Radio, Newspaper 광고예산(단위:1천달러) 간의 pearson 상관계수 행렬이다. 설명이 가장 부적절한 것은?\n\n| | TV | Radio | Newspaper | Sales |\n| TV | 1.000 | 0.054 | 0.057 | 0.793 |\n| Radio | 0.054 | 1.000 | 0.333 | 0.543 |\n| Newspaper | 0.057 | 0.333 | 1.000 | 0.222 |\n| Sales | 0.793 | 0.543 | 0.222 | 1.000 |",
    "answer": "3",
    "explanation": "상관분석은 두 변수 간의 '연관성 정도'만을 확인하는 분석방법일 뿐, 인과관계(Causation)를 직접적으로 규명하거나 설명할 수는 없습니다. (정답: ④)",
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
    "question": "Carseats 데이터 프레임은 400개 상점에서 판매 중인 유아용 카시트에 대한 자료이다. 이 데이터의 일부 변수들의 상관분석 결과로 가장 부적절한 것은?\n\n```\n> rcorr(as.matrix(Carseats[,c(1:6,8)]),type=\"pearson\")\n            Sales CompPrice Income Advertising Population Price   Age\nSales        1.00      0.06   0.15        0.27       0.05 -0.44 -0.23\nCompPrice    0.06      1.00  -0.08       -0.02      -0.09  0.58 -0.10\nIncome       0.15     -0.08   1.00        0.06      -0.01  0.06  0.00\nAdvertising  0.27     -0.02   0.06        1.00       0.27  0.04  0.00\nPopulation   0.05     -0.09  -0.01        0.27       1.00 -0.01 -0.04\nPrice       -0.44      0.58   0.06        0.04      -0.01  1.00 -0.10\nAge         -0.23     -0.10   0.00        0.00      -0.04 -0.10  1.00\n```",
    "answer": "3",
    "explanation": "Sales와 Price의 피어슨 상관계수는 -0.44로 음수입니다. 이는 양의 선형관계가 아니라 음의 선형(상관)관계를 가짐을 뜻합니다. (정답: ④)",
    "options": [
      "Sales와 CompPrice 간의 상관계수는 유의하지 않다.",
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
    "question": "아래는 단순회귀분석의 결과이다. 다음 설명 중 부적절한 것은?\n\n```\nCall:\nlm(formula = Height ~ BodyWeight)\n\nResiduals:\n     Min       1Q   Median       3Q      Max \n-3.56937 -0.96341 -0.09212  1.04255  5.12382 \n\nCoefficients:\n            Estimate Std. Error t value Pr(>|t|)    \n(Intercept)    0.5        1        -0.5     0.610    \nBodyWeight     3.2        0.2       16   <2e-16 ***\n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\n\nResidual standard error: 1.452 on 142 degrees of freedom\nMultiple R-squared:  0.6466,\tAdjusted R-squared:  0.6441\nF-statistic: 259.8 on 1 and 142 DF,  p-value: <2.2e-16\n```",
    "answer": "3",
    "explanation": "모형 적합도 및 유의성을 보여주는 F 통계량의 p-value가 < 2.2e-16 로 유의수준 5%(0.05)보다 매우 작기 때문에, 이 회귀 모형은 통계적으로 극히 유의합니다. (정답: ④)",
    "options": [
      "종속변수는 Height이다.",
      "독립변수는 BodyWeight이다.",
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
    "answer": "1",
    "explanation": "회귀계수의 개별 검정(가설검정)은 독립변수의 기울기 β = 0 이라는 가정을 귀무가설, 기울기가 0이 아니다(β != 0)를 대립가설로 설정합니다. 보기 2의 설명은 반대로 되어 있습니다. (정답: ②)",
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
    "question": "아래는 결과를 생성한 잔차도이다. 다음 중 어떤 회귀분석의 가정이 위배되었다고 판단할 수 있을지 고르시오.",
    "answer": "2",
    "explanation": "주어진 잔차도 그래프를 보면, x축 값이 커짐에 따라 오차(잔차)의 흩어짐 정도가 커져 깔때기(나팔) 모양을 띱니다. 이는 잔차의 분산이 일정하지 않다는 의미로, '등분산성(homoscedasticity)' 가정을 위배한 것입니다. (정답: ③)",
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
    "question": "Default 데이터셋은 10,000명의 신용카드 고객에 대한 연체여부(default: 1-default, 0-not default), 카드대금 납입 후 남은 평균 카드잔고(balance), 연봉(income)을 포함하고 있다. 아래는 연체 가능성을 95% 신뢰수준으로 모형화한 결과이다. 다음 설명이 부적절한 것은 무엇인가?\n\n```\n> model<-glm(default~balance+income, data=Default, family=\"binomial\")\n> summary(model)\n...\nCoefficients:\n              Estimate Std. Error z value Pr(>|z|)    \n(Intercept) -1.154e+01  4.348e-01 -26.545  < 2e-16 ***\nbalance      5.647e-03  2.274e-04  24.836  < 2e-16 ***\nincome       2.081e-05  4.985e-06   4.174 2.99e-05 ***\n```",
    "answer": "3",
    "explanation": "income 변수의 회귀계수(Estimate) 추정값은 2.081e-05로 양수(+)입니다. 로지스틱 회귀모형에서 계수가 양수라는 것은 해당 변수의 값이 증가할수록 default=1(연체 가능성)이 증가한다는 뜻입니다. (정답: ④)",
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
    "question": "회귀분석에서 결정계수(R²)에 한 설명으로 부적절한 것은?",
    "answer": "0",
    "explanation": "결정계수(R²)는 총 변동(SST) 중에서 회귀식(모델)에 의해 설명되는 변동(SSR)이 차지하는 비율을 의미합니다. 설명되지 않는 변동(SSE)이 차지하는 비율이 아닙니다. (정답: ①)",
    "options": [
      "총 변동 중에서 설명이 되지 않는 오차에 의한 변동이 차지하는 비율이다.",
      "회귀모형에서 입력 변수가 증가하면 결정계수도 증가한다.",
      "다중 회귀모형에서는 최적 모형의 선정기준으로 결정계수 값보다는 수정된 결정계수 값을 사용하는 것이 적절하다.",
      "수정된 결정계수는 유의하지 않은 독립변수들이 회귀식에 포함되었을 때 그 값이 감소한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-43",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "아래는 회귀분석의 결과 출력되는 output의 일부이다. 다음 중 Outstate의 t값을 구하는 계산식으로 적절한 것은?\n\n```\nCoefficients:\n             Estimate  Std.Error\n(Intercept)  3.145e-01  2.456e+00\nPrivateYes   3.556e+00  1.855e+00\nTop10perc    7.853-01   6.537e+00\nOutstate     1.579e-01  1.775e-02\n```",
    "answer": "0",
    "explanation": "t-통계량은 계수 추정치(Estimate) / 표준오차(Std. Error) 로 계산됩니다. Outstate의 Estimate는 1.579e-01 = 0.1579 이고 Std.Error는 1.775e-02 = 0.01775 이므로 t값 계산식은 0.1579 / 0.01775 입니다. (정답: ①)",
    "options": [
      "0.1579/0.01775",
      "1.579/1.775",
      "15.79/177.5",
      "1.579/0.1775"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-44",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 데이터의 정규성을 확인하기 위한 방법으로 부적절한 것은?",
    "answer": "3",
    "explanation": "Durbin Watson 검정은 회귀분석 잔차항의 자기상관성(독립성)을 확인하기 위한 분석 기법입니다. 정규성을 검정하기 위해서는 히스토그램, Q-Q Plot, Shapiro-Wilk 검정 등을 수행합니다. (정답: ④)",
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
    "explanation": "단계적 방법(Stepwise Selection)은 예측 변수를 추가 및 제거하는 과정을 교대로 반복하여 최적의 모형을 설정하는 기법으로, 전진선택법이나 후진제거법과 반드시 동일한 최적 모형이 선택되는 것은 아닙니다. (정답: ③)",
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
    "question": "College 데이터 프레임은 777개의 미국 소재 대학의 각종 통계치를 포함하고 있다. 각 대학에 재학하는데 필요한 비용이 졸업률(Grad.Rate)에 미치는 영향을 알아보기 위해 등록금(Outstate), 기숙사비(Room.Board), 교재구입비(Books), 그 외 개인지출비용(Personal)을 활용하기로 했다. 다음 중 아래의 결과물에 대한 설명으로 가장 부적절한 것은?\n\n```\n> summary(lm(Grad.Rate~Outstate+Room.Board+Books+Personal,data=College))\n...\nCoefficients:\n              Estimate Std. Error t value Pr(>|t|)    \n(Intercept) 42.0238625  2.7721270  15.159  < 2e-16 ***\nOutstate     0.0020530  0.0001693  12.124  < 2e-16 ***\nRoom.Board   0.0014194  0.0006108   2.324 0.020396 *  \nBooks       -0.0010694  0.0031341  -0.341 0.733032    \nPersonal    -0.0026798  0.0007929  -3.380 0.000762 ***\n```",
    "answer": "0",
    "explanation": "설명변수 중 Books의 p-value(Pr(>|t|))는 0.733032로 매우 크기 때문에 통계적으로 유의하지 않습니다. 따라서 모든 설명변수가 유의하다는 보기 1의 설명은 잘못되었습니다. (정답: ①)",
    "options": [
      "모든 설명변수에 대한 회귀계수 값이 유의하다.",
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
    "explanation": "시계열 자료(Time-series data)는 시간의 흐름에 따라 순차적으로 기록된 관측값의 집합입니다. (정답: ②)",
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
    "explanation": "정상성(Stationarity)을 만족하는 시계열은 1) 평균이 시점에 상관없이 일정하고, 2) 분산도 시점에 의존하지 않으며, 3) 공분산은 시차가 같으면 시점과 관계없이 일정(단지 시차에만 의존)합니다. 백색잡음이 없다는 설명은 관계가 없습니다. (정답: ③)",
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
    "explanation": "평균 고유값(Average eigenvalue) 방법은 고유값들의 평균을 계산한 뒤, 고유값이 그 평균 이상이 되는 주성분을 제거하는 것이 아니라 '선택'하는 방법입니다. (정답: ②)",
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
    "explanation": "시계열의 4대 요소는 추세 요인(Trend), 계절 요인(Seasonal), 순환 요인(Cyclical), 불규칙 요인(Irregular)입니다. 교효 요인은 이에 해당되지 않습니다. (정답: ②)",
    "options": [
      "계절요인",
      "교효요인",
      "순환요인",
      "추세요인"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-51",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "Hitters 데이터셋은 메이저리그의 선수 322명에 대한 타자 기록으로 20여개의 변수를 포함하고 있다. 아래 회귀모형에서 변수선택을 하기 위한 결과물의 일부이다. 다음 중 결과물에 대한 설명으로 부적절한 것은?\n\n```\n> model<-lm(Salary~., data=Hitters)\n> step(model, direction=\"backward\")\nStart:  AIC=3046.02\n...\n```",
    "answer": "0",
    "explanation": "`step(model, direction=\"backward\")` 코드에서 알 수 있듯이, 이 분석은 모든 변수가 포함된 상태에서 유의하지 않은 설명변수를 하나씩 제거하는 '후진제거법(Backward Elimination)'을 사용하여 변수를 선택하고 있습니다. (정답: ①)",
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
    "question": "아래 주성분 분석의 결과에 대한 다음 설명 중 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "스크리 플롯(Scree Plot)에서 주성분의 수(m)는 고유값의 감소가 급격히 줄어들어 수평을 유지하기 시작하는 지점(Elbow point)의 전단계에서 주성분 개수를 선택합니다. 감소폭이 아주 급격한 지점은 정보량 보존율이 낮을 수 있습니다. (정답: ③)",
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
    "question": "Data는 메이저리그에서 활약하는 263명의 선수에 대한 타자 기록으로 연봉(Salary)을 비롯한 17개의 변수를 포함하고 있다. 아래는 17개의 변수들을 사용하여 주성분 분석을 시행한 결과이다. 다음 설명 중 잘못된 것은?\n\n```\n> pca<-princomp(data,cor=TRUE)\n> summary(pca)\nImportance of components:\n                          Comp.1    Comp.2    Comp.3\nStandard deviation     2.7733967 2.0302601 1.3148557\nProportion of Variance 0.4524547 0.2424680 0.1016968\nCumulative Proportion  0.4524547 0.6949227 0.7966195\n```",
    "answer": "2",
    "explanation": "`princomp(data, cor=TRUE)` 코드에서 `cor=TRUE` 옵션은 공분산행렬(Covariance matrix)이 아닌 상관행렬(Correlation matrix)을 사용하여 주성분 분석을 수행함을 뜻합니다. (정답: ③)",
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
    "question": "아래는 시계열 데이터를 분석하기 위한 절차들이다. 다음 중 시계열 데이터의 분석 절차 분석으로 가장 적절한 것은?\n\n```\n㉠ 시간 그래프 그리기\n㉡ 추세와 계절성을 제거하기\n㉢ 잔차를 예측하기\n㉣ 잔차에 대한 모델 적합하기\n㉤ 예측된 잔차에 추세와 계절성을 더하여 미래를 예측하기\n```",
    "answer": "3",
    "explanation": "시계열 분석의 절차는 ㉠ 시간 그래프 그리기 -> ㉡ 추세와 계절성을 제거하기 -> ㉣ 잔차에 대한 모델 적합하기 -> ㉤ 예측된 잔차에 추세와 계절성을 더하여 미래를 예측하기 -> ㉢ 잔차를 예측하기(혹은 예측값 평가) 순서로 진행됩니다. (정답: ④)",
    "options": [
      "㉠-㉡-㉢-㉣-㉤",
      "㉠-㉢-㉡-㉣-㉤",
      "㉠-㉡-㉣-㉢-㉤",
      "㉠-㉡-㉣-㉤-㉢"
    ]
  },
  {
    "id": "adp-s4-c4-mcq-55",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 lasso 회귀모형에 대한 설명으로 부적절한 것은?",
    "answer": "3",
    "explanation": "Lasso 회귀모형은 회귀계수들의 절대값의 합(L1 norm)을 벌점(penalty)으로 사용하는 L1 penalty 방식을 씁니다. L2 penalty를 사용하는 기법은 릿지(Ridge) 회귀모형입니다. (정답: ④)",
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
    "explanation": "교차분석(Cross-tabulation analysis)은 분석 대상이 되는 두 변수가 '모두 범주형 변수(질적 변수)'인 경우에만 사용이 가능한 분석 기법입니다. (정답: ②)",
    "options": [
      "범주의 관찰도수에 비교될 수 있는 기대도수를 계산한다.",
      "교차분석은 두 문항 모두 범주형 변수가 아니어도 사용할 수 있으며, 두 변수 간 관계를 보기 위해 실시한다.",
      "교차분석은 교차표를 작성하여 교차빈도를 집계할 뿐 아니라 두 변수 간의 독립성 검정을 할 수 있다.",
      "기대도수가 5 미만인 셀의 비율이 20%를 넘으면 카이제곱 분포에 근사하지 않으며, 이런 경우 표본의 크기를 늘리거나 변수의 수준을 합쳐 셀의 수를 줄이는 방법 등을 사용한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-57",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 시계열 데이터에 대한 설명으로 가장 부적절한 것은?",
    "answer": "2",
    "explanation": "잡음(Noise)은 시계열 데이터에서 불규칙적이고 예측할 수 없는 무작위적인 변동 요인으로, 일반적으로 그 원인이 알려져 있지 않습니다. (정답: ③)",
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
    "explanation": "일반적인 다차원 척도법(Classical MDS / Metric MDS)은 비율척도나 구간척도 데이터(수치형 데이터)로 이루어진 개체들의 거리를 계산합니다. 순서척도의 데이터에 대해서는 비계량적 다차원 척도법(Non-metric MDS)을 사용합니다. (정답: ③)",
    "options": [
      "다차원 척도법은 여러 대상들 간의 관계를 개체들 사이의 유사성/비유사성을 상대적 거리로 측정하여 개체들을 2차원 또는 3차원 공간상에 점으로 표현하는 분석 방법이다.",
      "다차원 척도법의 목적은 데이터 속에 잠재한 패턴을 찾기 위해 복잡한 구조를 소수 차원의 공간에 기하학적으로 표현하는 것이다.",
      "일반적인 다차원 척도법(classical MDS)은 계량적 다차원 척도법(metric MDS)이라고도 부르며 순서척도의 데이터로 이루어진 개체들의 거리를 계산한다.",
      "스트레스 값이 0.05 이하이면 적합정도가 아주 좋은 것으로 해석하고 반복 분석과정을 중단해도 된다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-59",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "시계열의 요소분해법은 시계열 자료가 몇 가지 변동들의 결합으로 이루어져 있다고 보고 변동요소별로 분해하여 쉽게 분석하기 위한 것이다. 다음 중 분해 요소에 대한 설명이 부적절한 것은?",
    "answer": "2",
    "explanation": "순환 변동(Cyclical variation)은 경제적, 기후적 혹은 알려지지 않은 요인에 따라 나타나는 명확한 자연적 주기성이 없는 급격한 변동 추이로, 일반적으로 알려진 일정한 주기적 패턴 없이 변하는 특징을 갖습니다. (정답: ③)",
    "options": [
      "추세분석은 장기적으로 변해가는 큰 흐름을 나타내는 것으로 자료가 장기적으로 커지거나 작아지는 변화를 나타내는 요소이다.",
      "계절변동은 일정한 주기를 가지고 반복적으로 같은 패턴을 보이는 변화를 나타내는 요소이다.",
      "순환변동은 경제 전반이나 특정 산업의 부침을 나타내 주는 것을 말한다.",
      "불규칙변동은 불규칙하게 변동하는 급격한 환경변화, 천재지변 같은 것으로 발생하는 변동을 말한다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-60",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음 중 아래의 주성분 분석을 시행한 결과에 대한 설명으로 가장 부적절한 것은?\n\n```\n> college_s<-scale(college)\n> summary(college_s)\n...\n> fit<-princomp(college_s)\n> fit$loadings\n\nLoadings:\n           Comp.1 Comp.2 Comp.3 Comp.4 Comp.5\nOutstate    0.587         0.155  0.142  0.779\nRoom.Board  0.531  0.230  0.155  0.574 -0.557\nBooks              0.812 -0.561 -0.153       \nPersonal   -0.329  0.532  0.776              \nGrad.Rate   0.514         0.187 -0.789 -0.279\n```",
    "answer": "3",
    "explanation": "scale 함수로 데이터를 표준화(scale)하고 princomp를 수행하는 것은 상관행렬을 사용하여 주성분 분석을 수행하는 `princomp(college, cor=T)`의 결과와 정확하게 동일합니다. 따라서 결과가 다르다는 설명은 거짓입니다. (정답: ④)",
    "options": [
      "두 번째 주성분은 0.230*Room.Board + 0.812*Books + 0.532*Personal로 계산된다.",
      "두 번째 주성분에 가장 큰 영향을 미치는 원변수는 Books이다.",
      "Personal 값이 클수록 첫 번째 주성분은 작아진다.",
      "fit<-princomp(college, cor=T)의 결과는 위의 결과와 다르다."
    ]
  },
  {
    "id": "adp-s4-c4-mcq-61",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "multiple",
    "question": "다음은 4개의 변수를 가진 데이터 프레임 USArrests에 주성분 분석을 적용해서 얻은 결과이다. 변수들의 전체 변동의 80% 이상을 설명하기 위해 필요한 최소 주성분의 숫자는 몇 개 인가?\n\n```\n> summary(prcomp(USArrests, scale=TRUE))\nImportance of components:\n                          PC1    PC2     PC3     PC4\nStandard deviation     1.5749 0.9949 0.59713 0.41645\nProportion of Variance 0.6201 0.2474 0.08914 0.04336\nCumulative Proportion  0.6201 0.8675 0.95664 1.00000\n```",
    "answer": "1",
    "explanation": "누적 설명 분산 비율(Cumulative Proportion)을 보면 PC1까지가 62.01%, PC2까지 누적비율이 86.75%입니다. 따라서 전체 변동의 80% 이상을 설명하기 위해 필요한 최소 주성분의 개수는 2개(PC1, PC2)입니다. (정답: ②)",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ]
  },
  {
    "id": "adp-s4-c4-sa-1",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "실험 결과가 단지 성공과 실패만 있다고 가정하자. 성공일 경우 확률변수는 1의 값을 가지며, 실패일 경우 확률변수는 0의 값을 가진다. 이때 성공일 확률은 0.3이다. 이 경우 기댓값은 얼마인가?",
    "answer": "0.3",
    "explanation": "이산형 확률변수의 기댓값은 E(X) = Σ x * f(x) 입니다. 따라서 E(X) = 1 × 0.3 + 0 × 0.7 = 0.3 입니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-2",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 College 데이터의 Grad.Rate 변수의 기초통계량을 계산한 결과이다. College 데이터의 Grad.Rate 변수의 몇 %가 78보다 큰 값을 가지는가?\n\n```\n> summary(College$Grad.Rate)\n   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. \n  10.00   53.00   65.00   65.46   78.00  118.00 \n```",
    "answer": "25%",
    "explanation": "Grad.Rate 변수의 제3사분위수(3rd Qu.)가 78.00입니다. 이는 데이터 전체 중 75%가 78 이하에 분포함을 뜻하므로, 78보다 큰 값을 가지는 데이터의 비율은 나머지인 25%입니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-3",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래 주성분 분석의 결과에서 두 개의 주성분을 사용할 때 설명 가능한 전체 분산의 비율은?\n\n```\n> model<-princomp(Car)\n> summary(model)\nImportance of components:\n                          Comp.1  Comp.2  Comp.3  Comp.4  Comp.5\nStandard deviation         1.503   1.075   0.840   0.752   0.555\nProportion of Variance     0.453   0.231   0.141   0.113   0.061\nCumulative Proportion      0.453   0.684   0.825   0.938   1.000\n```",
    "answer": "68.4%",
    "explanation": "두 개의 주성분(Comp.1, Comp.2)을 활용할 경우, 설명력을 누적한 비율인 Cumulative Proportion 값이 Comp.2 위치에서 0.684로 확인됩니다. 백분율로 환산하면 68.4%입니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-4",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래 회귀분석 모형의 추정에 대한 설명에서 ( ㉮ ) 은 무엇인가?\n\n```\n단순회귀분석 모형을 yi = β0 + β1xi + εi로 표현할 수 있다. 주어진 자료를 가장 잘 설명하는 회귀계수의 추정치는 보통 제곱오차 Σ (yi - (β0 + β1xi))^2를 최소로 하는 값을 구한다. 이와 같이 구해진 회귀계수 추정량을 ( ㉮ )이라고 한다.\n```",
    "answer": "최소제곱법",
    "explanation": "관측치와 회귀선 사이의 편차(오차) 제곱합을 최소화하는 계수를 구하여 회귀선을 도출하는 추정 방법을 '최소제곱법(OLS: Ordinary Least Squares)'이라고 합니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-5",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 표본추출방법은 무엇인가?\n\n```\n번호를 부여한 샘플을 나열하여 k개씩 n개의 구간을 나누고 첫 구간에서 하나를 임의로 선택한 후에 k개씩 띄어서 표본을 선택하고 매번 k번째 항목을 추출하는 표본 추출 방법\n```",
    "answer": "계통추출방법",
    "explanation": "모집단의 원소에 순서대로 번호를 매기고 계통적인 일정 간격(k)마다 표본을 추출하는 표본추출 기법을 '계통추출방법(Systematic sampling)'이라고 합니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-6",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명은 어떤 오류에 관한 설명인가?\n\n```\n귀무가설(H₀)이 옳은데 귀무가설을 받아들이지 않고 기각하게 되는 오류\n```",
    "answer": "제1종 오류",
    "explanation": "귀무가설(H₀)이 참임에도 불구하고, 검정 결과 귀무가설을 기각하고 대립가설을 채택함으로써 범하게 되는 오류를 '제1종 오류(Type I error)'라고 부릅니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-7",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 단순 로지스틱 회귀모형이다. \"exp(β1)의 의미는 x1, x2, ..., xk가 주어질 때 x1이 한 단위 증가할 때마다 성공(y=1)의 (  (가)  )이/가 몇 배 증가하는지를 나타내는 값이다.\" (가)는 무엇인가?\n\n```\nlog( Π(x)/(1-Π(x)) ) = β0 + β1x1 + ... + βkxk\n```",
    "answer": "오즈",
    "explanation": "로지스틱 회귀분석에서 승산(Odds, 오즈)은 실패할 확률 대비 성공할 확률의 비인 P / (1 - P) 를 의미합니다. 독립변수 x가 1단위 증가할 때, 성공 승산(Odds)이 exp(β)배 증가하게 됩니다. (정답은 '오즈' 혹은 '승산'입니다.)",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-8",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "시점에 상관없이 시계열의 특성이 일정하다는 것을 의미하는 용어를 무엇이라고 하는가?",
    "answer": "정상 시계열",
    "explanation": "시계열이 시간이 흘러도 일정한 통계적 성질(평균, 분산, 자기공분산 등)을 갖는 성질을 '정상성(Stationarity)'이라고 하며, 이를 만족하는 시계열 데이터를 '정상 시계열'이라고 합니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-9",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "시계열 모형의 여러 종류 중 아래에서 설명하는 것은 무엇인가?\n\n```\n가) 시계열 모델 중 자기 자신의 과거 값을 사용하여 설명하는 모형임\n나) 백색 잡음의 현재값과 자기 자신의 과거값의 선형 가중합으로 이루어진 정상 확률 모형\n다) 모형에 사용하는 시계열 자료의 시점에 따라 1차, 2차, ..., p차 등을 사용하나 정상시계열 모형에서는 주로 1, 2차를 사용함\n```",
    "answer": "자기회귀모형",
    "explanation": "시계열의 과거 관측값들의 선형 결합으로 현재 값을 설명하고 예측하는 정상 시계열 분석 모형을 '자기회귀모형(AR모형, AutoRegressive model)'이라고 합니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-10",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "정상 시계열에 영향을 주는 일반적인 요인을 시계열에서 분리해 분석하는 방법은 무엇인가?",
    "answer": "분해시계열",
    "explanation": "시계열 자료를 추세 요인, 계절 요인, 순환 요인, 불규칙 요인 등의 구성 요소로 나누어 분석 및 예측을 수행하는 분석 기법을 '분해시계열(Decomposition of Time Series)' 기법이라고 부릅니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-11",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래는 스위스의 47개 프랑스어 사용지역의 출산율(Fertility)과 교육수준(Education)과의 관계를 회귀모형으로 추정한 것이다. 아래의 결과를 사용하여 결정계수(R²)를 계산하시오.\n\n```\n> out=lm(Fertility~Education,data=swiss)\n> anova(out)\nAnalysis of Variance Table\n\nResponse: Fertility\n          Df Sum Sq Mean Sq F value    Pr(>F)    \nEducation  1 3162.7  3162.7  35.446 3.659e-07 ***\nResiduals 45 4015.2    89.2                      \n```",
    "answer": "0.441",
    "explanation": "결정계수 R² = SSR / SST = SSR / (SSR + SSE) 로 정의됩니다. 출력된 분산분석표(ANOVA table)에서 SSR(Education의 Sum Sq) = 3162.7 이고 SSE(Residuals의 Sum Sq) = 4015.2 입니다. 따라서 R² = 3162.7 / (3162.7 + 4015.2) = 3162.7 / 7177.9 = 0.44061... 이며, 소수 넷째자리에서 반올림하여 표기하면 0.441 입니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-12",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "최적회귀방정식을 선택하기 위한 방법 중 모든 독립변수 후보를 포함한 모형에서 시작하여 가장 적은 영향을 주는 변수부터 하나씩 제거하면서 더 이상 유의하지 않은 변수가 없을 때까지 설명변수를 제거하는 방법은?",
    "answer": "후진제거법",
    "explanation": "전체 변수를 포함한 상태에서 가장 기여도가 낮은 변수부터 순차적으로 하나씩 소거하는 변수 선택 알고리즘을 '후진제거법(Backward Elimination)'이라고 합니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-13",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "data는 메이저리그에서 활약하는 263명의 선수에 대한 타자 기록으로 연봉(salary)을 비롯한 17개의 변수를 포함하고 있다. 아래 결과를 사용하여 17차원을 3차원으로 축소할 경우 잃게 되는 정보량을 백분율(%)로 표현하시오. (소수 둘째자리에서 반올림)",
    "answer": "20.3%",
    "explanation": "3개 주성분(Comp.1 ~ Comp.3)까지의 분산 보존율인 Cumulative Proportion 값이 0.7966(79.66%)입니다. 따라서 축소 시 잃게 되는 정보량은 100% - 79.66% = 20.34% 입니다. 소수 둘째자리에서 반올림하여 표기하면 20.3%입니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-14",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "아래의 설명이 나타내는 척도는 무엇인가?\n\n```\n자료의 위치를 나타내는 척도의 하나로 관측치를 크기순으로 배열하였을 때 전체의 중앙에 위치한 수치이다. 평균에 비해 이상치에 의한 영향이 적기 때문에 자료의 분포가 심하게 비대칭인 경우 중심을 파악할 때 합리적인 방법이다.\n```",
    "answer": "중앙값",
    "explanation": "데이터 값들을 오름차순 또는 내림차순으로 정렬했을 때 가장 정중앙(가운데)에 위치하는 대표값을 '중앙값(Median, 중위수)'이라고 부릅니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-15",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "P(A)=0.3, P(B)=0.4이다. 두 사건 A와 B가 독립일 경우 P(B|A)는 얼마인가?",
    "answer": "0.4",
    "explanation": "두 사건 A와 B가 서로 독립(Independent)일 때, 사건 A의 발생 여부는 사건 B의 발생 확률에 아무런 영향을 주지 않습니다. 따라서 P(B|A) = P(B) = 0.4 입니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-16",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "다음은 4개의 데이터 변수를 가진 데이터 프레임 USArrests에 주성분 분석을 적용해서 얻은 결과이다. 제1주성분의 식은? (소수점 셋째 자리에서 반올림하시오.)\n\n```\nLoadings:\n         Comp.1 Comp.2 Comp.3 Comp.4\nMurder    0.536  0.418  0.341  0.649\nAssault   0.583  0.188  0.268 -0.743\nUrbanPop  0.278 -0.873  0.378  0.134\nRape      0.543 -0.167 -0.818       \n```",
    "answer": "0.54 * Murder + 0.58 * Assault + 0.28 * UrbanPop + 0.54 * Rape",
    "explanation": "제1주성분(Comp.1)의 로딩값(Loadings)을 구하면 다음과 같습니다: Murder=0.536(반올림하여 0.54), Assault=0.583(반올림하여 0.58), UrbanPop=0.278(반올림하여 0.28), Rape=0.543(반올림하여 0.54). 따라서 제1주성분의 선형 결합식은 0.54 * Murder + 0.58 * Assault + 0.28 * UrbanPop + 0.54 * Rape 가 됩니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-17",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "우연히 정확한 예측을 할 확률을 나타내며, 이 값은 모델의 예측 값과 실제 값이 정확히 일치하는 최대값인 1에서 0까지의 값을 가지며, 1보다 작은 값은 불일치를 의미한다. 아래와 같은 계산공식으로 표현되는 통계량은 무엇인가?\n\n```\nK = (P_o - P_c) / (1 - P_c)\n* P_c: 우연히 두 평가자에 의하여 일치된 평가를 받을 비율\n* P_o: 2명의 평가자간 일치 확률\n```",
    "answer": "카파 통계량",
    "explanation": "두 관찰자나 평가자 간의 평가 결과가 어느 정도로 일치하는지를 나타내는 일치도 평가 지표로, 우연에 의한 합의 수준을 반영하여 계산하는 이 지표를 '카파 통계량(Cohen's Kappa)'이라고 합니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-18",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "이산형 확률분포 중 주어진 시간 또는 영역에서 어떤 사건의 발생 횟수를 나타내는 확률 분포는 무엇인가?",
    "answer": "포아송분포",
    "explanation": "단위 시간 또는 단위 면적 등의 정해진 영역 내에서 임의의 사건이 몇 번 발생하는가를 모형화하는 이산형 확률분포를 '포아송분포(Poisson Distribution)'라고 부릅니다.",
    "options": []
  },
  {
    "id": "adp-s4-c4-sa-19",
    "subject": 14,
    "subjectTitle": "데이터 분석",
    "type": "subjective",
    "question": "상관분석은 두 변수 간의 상관관계를 알아보기 위해 상관계수를 이용하여 분석을 수행한다. 상관계수 중 서열척도인 변수간의 상관관계를 측정하는데 사용하는 상관계수는?",
    "answer": "스피어먼 상관계수",
    "explanation": "서열(순위) 척도 변수 간의 일관된 증가/감소(단조성) 경향을 측정하기 위해 데이터 순위 값을 활용하여 계산하는 비모수 상관계수를 '스피어먼 상관계수(Spearman Correlation Coefficient)'라고 부릅니다.",
    "options": []
  },
  {
    "id": "adp-s4-c5-mcq-1",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 대용량 데이터 속에서 숨겨진 지식 또는 새로운 규칙을 추출해 내는 과정을 일컫는 것은?",
    "answer": "3",
    "explanation": "대용량 데이터에서 의미 있는 패턴을 파악하거나 예측하여 지식 및 새로운 규칙을 발견하고 이를 의사결정에 활용하는 일련의 과정을 **데이터 마이닝(Data Mining)**이라고 합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 반응 변수가 범주형인 경우 예측모형의 주목적으로 가장 적절한 것은?",
    "answer": "1",
    "explanation": "예측모형 중 반응 변수(종속 변수)가 **범주형**인 경우의 주 목적은 **분류(Classification)** 모형입니다. 반응 변수가 연속형인 경우는 회귀(Regression) 분석입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 데이터 마이닝의 대표적인 기능 중 이질적인 모집단을 세분화하는 기능으로 적절한 것은?",
    "answer": "2",
    "explanation": "**군집분석(Cluster Analysis)**은 각 객체의 유사성을 측정하여 유사성이 높은 대상 집단을 분류하고, 군집에 속한 객체들의 유사성과 서로 다른 군집에 속한 객체 간의 상이성을 규명하여 이질적인 모집단을 세분화하는 분석 방법입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "한 보험회사에서는 자사 고객의 보험갱신 여부를 고객의 인구통계학적 특성, 보험가입 채널, 상품 종류 등의 정보를 사용하여 예측하려고 한다. 다음 중 가장 적절한 분석 기법은 무엇인가?",
    "answer": "1",
    "explanation": "데이터 마이닝 기법 중 앙상블 기법의 하나인 **랜덤포레스트(Random Forest)**는 분류분석 문제를 해결하기 위한 의사결정나무와 같은 방법론이지만, 여러 의사결정나무를 결합하여 단일 의사결정나무에서 나타나는 과대적합/과소적합의 문제를 해결할 수 있는 가장 적절한 예측모형입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "데이터 마이닝 단계 중 모델링 목적에 따라 목적변수를 정리하고 필요한 데이터를 데이터 마이닝 소프트웨어에 적용할 수 있도록 준비하는 단계는?",
    "answer": "2",
    "explanation": "**데이터 가공(Data Preparation)** 단계는 모델링 목적에 따라 목적 변수를 정의 및 정리하고, 필요한 데이터를 데이터 마이닝 소프트웨어에 적용할 수 있도록 준비(정제, 가공 등)하는 단계입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 기법의 활용 분야가 나머지 와 다른 하나를 고르시오.",
    "answer": "3",
    "explanation": "로지스틱 회귀 분석, 인공신경망, 의사결정나무는 모두 타깃 변수(목적 변수)가 존재하는 **지도학습(Supervised Learning)** 분석 기법인 반면, **SOM(Self-Organizing Map, 자기조직화지도)**은 목적 변수가 없는 **비지도학습(Unsupervised Learning)**에 해당합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "과대적합(overfitting)은 통계나 기계학습에서 모델에서 변수가 너무 많아 모델이 복잡하고 과대하게 학습될 때 주로 발생한다. 다음 중 과대 적합에 대한 설명으로 가장 적절한 것은?",
    "answer": "0",
    "explanation": "과대적합(Overfitting) 모형은 생성된 모델이 훈련용 데이터에 너무 과하게 최적화(학습)되어 실제 검증용 데이터나 테스트 데이터의 작은 변화에 아주 민감하게 반응하여 일반화 성능이 낮아지는 현상입니다. 따라서 \"테스트 데이터의 작은 변화에 민감하게 반응하는 경우는 발생하지 않는다\"는 설명은 잘못되었습니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "모형의 평가를 위해 관측치를 한번 이상 훈련용 자료로 사용하는 복원 추출법(sampling with replacement)에 기반하는 붓스트랩(bootstrap) 기법에서 일반적으로 훈련용 자료의 선정율을 d번 반복할 때 하나의 관측치가 선정되지 않을 확률은 $(1-(1/d))^d$ 이다. d가 충분히 크다고 가정할 때 훈련용 집합으로 선정되지 않아 검증용 자료로 사용되는 관측치의 비율은?",
    "answer": "3",
    "explanation": "복원 추출(Bootstrap) 시 $d$가 충분히 클 때 하나의 관측치가 한 번도 뽑히지 않을 확률은 $\\lim_{d 	o \\infty} (1 - rac{1}{d})^d = rac{1}{e} pprox 0.367879...$ 입니다. 따라서 선정되지 않아 검증용(OOB, Out-Of-Bag) 자료로 사용되는 비율은 약 **36.8%**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "Hitters 데이터셋은 메이저리그에서 활약하는 322명의 선수에 대한 타자 기록으로 연봉을 비롯한 20개의 변수를 포함하고 있다. 아래는 모형적합에 앞서 데이터를 train set과 test set으로 분할하는 과정이다. 다음 중 아래에 대한 설명으로 가장 부적절한 것은?\n\n```R\nset.seed(1112)\ntrain <- sample(1:nrow(Hitters), nrow(Hitters)/2)\nYtrain <- subset(Hitters[train,], select=Salary)\nXtrain <- subset(Hitters[train,], select=-Salary)\nYtest <- subset(Hitters[-train,], select=Salary)\nXtest <- subset(Hitters[-train,], select=-Salary)\n```",
    "answer": "3",
    "explanation": "일반적으로 평가를 위한 Test set에 대한 모형 평가는 훈련을 시킨 Train set에 대한 모형 평가 결과보다 모형의 오류나 지표가 나쁘게 나옵니다. \"Test set에 대한 모형평가 결과가 Train set에 대한 평가결과보다 좋다\"는 설명은 부적절합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 기업이 보유하고 있는 거래데이터, 고객 데이터 등과 기타 외부 데이터를 포함하는 모든 데이터를 기반으로 새로운 규칙 등을 발견하고 이를 실제 비즈니스 의사결정 등에 유용한 정보로 활용하고자 하는 일련의 작업을 무엇이라고 하는가?",
    "answer": "1",
    "explanation": "기업이 보유한 대용량의 내부 거래 및 고객 데이터, 기타 외부 데이터를 포함한 데이터에서 비즈니스 의사결정에 필요한 새로운 지식, 패턴, 규칙을 발견하고 유용한 정보로 활용하는 일련의 작업은 **데이터 마이닝**의 정의입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "귀납적 추론을 기반으로 하는 의사결정나무모형은 실무적으로 가장 많이 사용되는 모델 중 하나이다. 다음 중 의사 결정나무모형에 대한 설명으로 부적절한 것은?",
    "answer": "1",
    "explanation": "의사결정나무모형은 **하향식(Top-Down) 기법**을 사용하며, 각 진행 단계마다 주어진 데이터 집합을 가장 적합한 기준으로 분할하는 변수와 분리 기준값을 선택하여 자식 마디를 생성하는 구조를 가집니다. 따라서 \"상향식 의사결정 흐름과 해시 탐색\"이라는 설명은 부적절합니다.",
    "options": [
      "대표적인 적용 사례는 대출신용평가, 환자 증상 예측, 채무 불이행 가능성 예측 등이 있다.",
      "의사결정나무모형은 ID3, C4.5, CART 등 여러 가지 알고리즘이 있는데 핵심적인 공통 개념은 상향식 의사결정 흐름과 해시 탐색(Hash Search) 기반의 구조를 가지고 있다는 것이다.",
      "과적합(overfitting)의 문제를 해결하기 위해 가지치기 방법을 이용하여 트리를 조정하는 방법을 사용한다.",
      "불순도 측도인 엔트로피 개념은 정보이론의 개념을 기반으로 하며, 그 의미는 여러 가지 임의의 사건이 모여있는 집합의 순수성(purity) 또는 단일성(homogeneity) 관점의 특성을 정량화해서 표현한 것이다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-12",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 의사결정나무모형에서 과적합되어 현실 문제에 적용할 수 있는 적절한 규칙이 나오지 않는 현상을 방지하기 위해 사용되는 방법으로 가장 적절한 것은?",
    "answer": "0",
    "explanation": "의사결정나무모형에서 나무가 커져서 과적합되는 것을 방지하기 위해 불필요한 가지나 오류를 크게 할 위험이 높은 자식 마디를 제거하는 단계를 **가지치기(Pruning)**라고 합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 데이터를 무작위로 두 집단으로 분리하여 실험데이터와 평가데이터로 설정하고 검정을 실시하는 모형 평가방법으로 적절한 것은?",
    "answer": "2",
    "explanation": "데이터를 무작위로 두 집단으로 분리해 하나는 모델을 학습시키는 실험 데이터(Train set), 다른 하나는 모형을 평가하는 평가 데이터(Test set)로 활용하여 검정하는 모형 평가 방법을 **홀드아웃(Hold-out) 방법**이라고 합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "소매점에서 물건을 배열하거나 카탈로그 및 교차판매 등에 적용하기 적합한 데이터 마이닝 기법은 무엇인가?",
    "answer": "2",
    "explanation": "소매점에서 고객들의 구매 데이터로부터 \"어떤 물건들이 함께 잘 팔리는가\"에 대한 상호 연관 규칙을 발견하여 상품의 진열, 카탈로그 구성, 교차 판매 등에 적용하기 가장 적합한 기법은 **연관분석(Association Analysis)**이며, 이를 장바구니 분석(Market Basket Analysis)이라고도 합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래는 kyphosis라는 자료를 이용하여 의사결정나무 분석을 수행한 결과이다. 결과에 대한 해석으로 부적절한 것은?\n\n```\n> a <- rpart(Kyphosis ~ Age + Number + Start, data = kyphosis)\nn = 81\n\nnode), split, n, loss, yval, (yprob)\n      * denotes terminal node\n\n1) root 81 17 absent (0.79012346 0.20987654)\n  2) Start>=8.5 62  6 absent (0.90322581 0.09677419)\n    4) Start>=14.5 29  0 absent (1.00000000 0.00000000) *\n    5) Start< 14.5 33  6 absent (0.81818182 0.18181818)\n     10) Age< 55 12  0 absent (1.00000000 0.00000000) *\n     11) Age>=55 21  6 absent (0.71428571 0.28571429)\n       22) Age>=111 14  2 absent (0.85714286 0.14285714) *\n       23) Age< 111 7  3 present (0.42857143 0.57142857) *\n  3) Start< 8.5 19  8 present (0.42105263 0.57894737) *\n> plot(a)\n> text(a, use.n=T)\n```",
    "answer": "0",
    "explanation": "의사결정나무는 뿌리마디에서 아래 자식마디로 분할이 진행될수록 데이터가 세분화되면서 각 마디의 불순도(Impurity)는 점차 **감소(순수도는 증가)**하게 됩니다. 따라서 \"불순도는 점차 증가한다\"는 설명은 완전히 잘못되었습니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 의사결정나무모형의 학습방법에 대한 설명으로 부족한 것은 무엇인가?",
    "answer": "1",
    "explanation": "의사결정나무의 학습 과정에서 분리 변수의 P차원 공간에 대한 분할은 상위 마디에서 결정된 이전 분할에 **영향을 받으면서** 순차적으로 공간을 직사각형 형태로 나누는 탐욕적(Greedy) 방식입니다. 따라서 \"이전 분할에 영향을 받지 않고 이루어진다\"는 설명은 부족합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 아래 의사결정나무에서 B의 지니지수를 계산한 결과로 적절한 것은?\n\n```\n       [A] good: 50 | bad: 50\n         /                  \\\n   [B] good: 10 | bad: 40    [C] good: 20 | bad: 30\n```",
    "answer": "3",
    "explanation": "지니지수(Gini Index) 계산식은 $1 - \\sum (p_i)^2$ 입니다.  \n마디 B의 총 개수는 50개(good: 10, bad: 40)이므로:  \n$	ext{Gini}(B) = 1 - [(rac{10}{50})^2 + (rac{40}{50})^2] = 1 - [0.04 + 0.64] = 1 - 0.68 = 0.32$  \n따라서 정답은 **0.32**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "이익도표(Lift)를 작성함에 있어 평가도구 중 %Captured Response를 표현한 계산식으로 올바른 것은?",
    "answer": "0",
    "explanation": "**%Captured Response**는 평가 집단(향상도 구간) 내 목적 변수의 특정 범주(예: 구매) 빈도를 **전체 목적 변수의 특정 범주 총 빈도**로 나눈 값입니다. 이는 타깃팅 캠페인을 적용했을 때 전체 반응 고객 중 몇 %를 해당 집단에서 포착할 수 있는지를 나타내는 계산식입니다.",
    "options": [
      "해당집단에서 목표변수의 특정범주 빈도 / 전체 목표변수의 특정범주 빈도 * 100",
      "해당집단에서 목표변수의 특정범주 빈도 / 해당집단에서 전체 빈도 * 100",
      "전체에서 목표변수의 특정범주 빈도 / 전체 빈도 * 100",
      "해당집단의 %Response / BASE line Lift * 100"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-19",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 배깅(Bagging)에 대한 설명으로 가장 적절한 것은?",
    "answer": "3",
    "explanation": "**배깅(Bagging)**은 **복원 추출법(Bootstrap Sampling)**을 사용하기 때문에 단일 훈련 데이터셋에서 중복하여 동일한 데이터가 한 표본에 여러 번 추출될 수 있고, 약 36.8%의 데이터는 한 번도 추출되지 않을 수 있습니다(Out-of-Bag).",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 앙상블 기법이라고 할 수 없는 것은?",
    "answer": "0",
    "explanation": "**시그모이드(Sigmoid)**는 인공신경망에서 출력값을 0과 1 사이로 압축해 전달해 주는 개별 노드의 **활성화 함수(Activation Function)** 중 하나이며, 예측모형들을 결합하는 **앙상블 기법(Ensemble)**이 아닙니다. 앙상블 기법에는 배깅, 부스팅, 랜덤포레스트 등이 속합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "앙상블(Ensemble)모형이란 주어진 자료로부터 여러 개의 예측모형을 만든 후 이러한 예측모형들을 결합하여 하나의 최종 예측모형을 만드는 방법을 말한다. 다음 중 앙상블모형에 대한 설명으로 적절하지 않은 것은?",
    "answer": "1",
    "explanation": "**부스팅(Boosting)** 기법은 가중치(Weight)를 재조정하여 순차적으로 모형을 결합하는 방법입니다. 재표본 과정에서 각 자료에 동일한 가중치(확률)를 부여하는 배깅과 달리, 이전 모형에서 **분류가 잘못된(오차가 큰) 데이터에 더 큰 확률(가중치)을 부여**하여 다음 학습용 데이터를 추출합니다. 따라서 \"동일한 확률을 부여하여\"라는 설명은 부적절합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "오분류표 중 실제 값이 True인 관측치 중에 예측치가 맞는 정도를 나타내어 모형의 완전성(completeness)을 평가하는 지표를 무엇이라고 하는가?",
    "answer": "0",
    "explanation": "오분류표 지표 중 실제 값이 True인 전체 관측치 중에서 예측치 또한 맞춘(True) 비율을 나타내며, 모형의 완전성(Completeness)을 평가하는 지표는 **재현율(Recall, 또는 민감도 Sensitivity)**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "오분류표를 사용한 평가 지표 중 아래 설명이 나타내는 지표는 무엇인가?\n\n> 정확도(precision)와 재현율(recall)은 한 지표의 값이 높아지면 다른 지표의 값이 낮아질 가능성이 높은 관계를 지니고 있어 이러한 효과를 보정하여 하나의 지표로 만들어 낸 지표",
    "answer": "0",
    "explanation": "**F1 지표(F1-score)**는 정밀도(Precision)와 재현율(Recall)이 트레이드오프(Trade-off) 관계에 있어 어느 한쪽으로 치우치지 않게 균형을 이루는 모형을 평가하기 위해, 두 지표의 **조화평균(Harmonic Mean)**으로 보정한 지표입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "오분류표(confusion matrix)를 사용하여 계산할 수 있는 평가 지표 중 민감도와 동일하며 모형의 완전성(completeness)을 평가하는 지표는?",
    "answer": "3",
    "explanation": "오분류표를 통한 평가 지표에서 **민감도(Sensitivity)**와 수식 및 개념상 완벽하게 동일한 지표는 **재현율(Recall)**입니다. ($	ext{Recall} = rac{TP}{TP+FN}$)",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 아래 오분류표를 이용하여 구한 F1 값은 얼마인가?\n\n| 실제값 \\ 예측치 | True | False | 합계 |\n| :--- | :---: | :---: | :---: |\n| **True** | 40 | 60 | 100 |\n| **False** | 60 | 40 | 100 |\n| **합계** | 100 | 100 | 200 |",
    "answer": "2",
    "explanation": "* $	ext{Precision(정밀도)} = rac{TP}{TP+FP} = rac{40}{40+60} = rac{40}{100} = 0.4$  \n* $	ext{Recall(재현율)} = rac{TP}{TP+FN} = rac{40}{40+60} = rac{40}{100} = 0.4$  \n* $	ext{F1} = rac{2 	imes 	ext{Precision} 	imes 	ext{Recall}}{	ext{Precision} + 	ext{Recall}} = rac{2 	imes 0.4 	imes 0.4}{0.4 + 0.4} = rac{0.32}{0.8} = 0.4$  \n따라서 F1 값은 **0.4**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "분류모형의 성과 분석 중 ROC Curve는 x축에 FP Ratio, y축에는 민감도를 나타낸다. 아래와 같은 오분류표가 있을 때 민감도를 계산하는 방식으로 가장 적절한 것은?\n\n| 실제값 \\ 예측치 | True | False | 합계 |\n| :--- | :---: | :---: | :---: |\n| **True** | TP | FN | P |\n| **False** | FP | TN | N |\n| **합계** | P' | N' | P+N |",
    "answer": "3",
    "explanation": "민감도(Sensitivity)는 실제 값 중 True인 행 $P$($TP+FN$) 중에서 참으로 분류한 $TP$의 비율입니다. 따라서 민감도 계산식은 **$TP \\div P$**가 가장 적절합니다.",
    "options": [
      "(TP+TN) ÷ (P+N)",
      "TN ÷ N",
      "TP ÷ (TP+FP)",
      "TP ÷ P"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-27",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "ROC 커브는 민감도와 1-특이도로 그려지는 커브이다. 아래 오분류표에서 민감도와 특이도는?\n\n| 검사 \\ 확진결과 | 질병 유 | 질병 무 |\n| :--- | :---: | :---: |\n| **양성** | 30 | 20 |\n| **음성** | 40 | 10 |",
    "answer": "3",
    "explanation": "* **민감도(Sensitivity):** 실제 질병이 있는 집단('질병 유' = 30 + 40 = 70) 중 검사 결과가 양성인 비율 $	o rac{30}{70} = rac{3}{7}$  \n* **특이도(Specificity):** 실제 질병이 없는 집단('질병 무' = 20 + 10 = 30) 중 검사 결과가 음성인 비율 $	o rac{10}{30} = rac{1}{3}$  \n따라서 민감도는 $3/7$, 특이도는 $1/3$이 됩니다.",
    "options": [
      "민감도 = 1/3, 특이도 = 1/3",
      "민감도 = 1/3, 특이도 = 2/3",
      "민감도 = 2/3, 특이도 = 2/3",
      "민감도 = 3/7, 특이도 = 1/3"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-28",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "R에서 인공신경망의 학습 및 추론을 위해 대표적으로 사용되는 함수는 neuralnet()이다. 다음 중 neuralnet 함수의 실행 결과로 도출되는 일반화 가중치(generalized weight)에 대한 설명으로 가장 적절한 것은?",
    "answer": "1",
    "explanation": "R의 `neuralnet()` 함수에서 산출되는 **일반화 가중치(Generalized Weight)**는 로지스틱 회귀분석에서의 **회귀 계수(Regression Coefficient)**와 유사하게 개별 입력변수가 출력변수에 미치는 영향력을 국소적으로 해석할 수 있는 성질을 가집니다.",
    "options": [
      "각 자료점의 분산이 로그-오즈(log-odds)에 미치는 기여도를 나타낸다.",
      "로지스틱 회귀모형에서의 회귀 계수와 유사하게 해석된다.",
      "로지스틱 회귀와 달리 일반화 가중치는 전역적인 기여도를 나타낸다.",
      "모든 자료에 대한 일반화 가중치의 분포는 가중치(weight)에 대한 신뢰구간을 나타낸다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-29",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "단층신경망인 퍼셉트론(perceptron)에서 최종 목표값(Target value)은 활성함수에 의해 결정되는데 다양한 활성함수 중 출력값이 여러 개로 주어지고, 목표치가 다범주인 경우 각 범주에 속할 사후확률을 제공하는 함수는 무엇인가?",
    "answer": "3",
    "explanation": "목표 변수의 범주가 3개 이상인 다범주(Multi-class) 분류 문제에서, 각 범주에 속할 사후 확률을 출력값으로 계산하여 모델이 최종적으로 하나의 범주를 선택할 수 있게 해 주는 대표적인 활성화 함수는 **소프트맥스 함수(Softmax Function)**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "신경망 모형은 자신이 가진 데이터로부터 반복적인 학습과정을 거쳐 패턴을 찾아내고 이를 일반화하는 예측방법이다. 다음 중 신경망 모형에 대한 설명으로 부적절한 것은 무엇인가?",
    "answer": "1",
    "explanation": "인공신경망 모형의 **은닉층(Hidden Layer) 뉴런 수와 층의 개수**는 알고리즘에 의해 자동으로 설정되지 않으며, 모형 분석가가 데이터의 복잡도, 크기 등을 고려하여 직관과 경험에 기반해 **직접 지정(하이퍼파라미터 튜닝)**해 주어야 합니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "신경망 모형은 동물의 뇌신경계를 모방하여 분류를 위해 만들어진 모형이다. 신경망의 학습 및 기억 특성들은 인간의 학습과 기억 특성을 닮았고 특정 사건으로부터 일반화하는 능력도 갖고 있다. 다음 중 신경망 모형에 대한 설명으로 부적절한 것은?",
    "answer": "1",
    "explanation": "인공신경망 모형에서 각 뉴런은 입력 데이터와 가중합을 계산한 뒤 비선형 활성화 함수를 통과시켜 다음 층으로 신호를 전달합니다. 이때 입력 변수의 속성(연속형, 범주형 등)에 따라 활성화 함수를 매번 다르게 선택하는 것이 아니라, 인공신경망 전체 레이어의 구조적 목적(예: 이진분류는 시그모이드, 다범주분류는 소프트맥스 등)에 맞춰 고정적으로 선택하게 됩니다.",
    "options": [
      "은닉층(hidden layer)의 뉴런 수와 개수를 정하는 것은 인공신경망을 설계하는 사람의 직관과 경험에 의존한다. 뉴런수가 너무 많으면 과적합(overfitting)이 발생하고 뉴런 수가 너무 적으면 입력 데이터를 충분히 표현하지 못하는 경우가 발생한다.",
      "신경망 모형에서 뉴런의 주요 기능은 입력과 입력 강도의 가중합을 구한 다음 활성화 함수에 의해 출력을 내보내는 것이다. 따라서 입력 변수의 속성에 따라 활성화 함수를 선택하는 방법이 달라지게 된다.",
      "역전파(back propagation) 알고리즘은 신경망 모형의 목적함수를 최적화하기 위해 사용된다. 연결강도를 갱신하기 위해서 예측된 결과와 실제값의 차이인 에러(error)를 통해 가중치를 조정하는 방법이다.",
      "신경망 모형은 변수의 수가 많거나 입출력 변수 간에 복잡한 비선형관계가 존재할 때 유용하며, 잡음에 대해서도 민감하게 반응하지 않는다는 장점을 가지고 있다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-32",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 로지스틱 회귀모형에서 설명 변수가 한 개인 경우 해당 회귀 계수의 부호가 0보다 작을 때 표현되는 그래프의 형태로 적절한 것은?",
    "answer": "2",
    "explanation": "독립변수가 단 하나인 로지스틱 회귀모형에서 회귀 계수 $eta_1$의 부호가 0보다 작은 음수($eta_1 < 0$)인 경우, 독립변수 $x$가 증가할수록 종속변수가 1이 될 확률 $P(y=1)$은 감소하게 되므로 곡선은 우하향하는 **역 S자 그래프(Inverse S-curve)** 형태를 보입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "로지스틱 회귀모형은 독립변수(x)와 종속변수(y) 사이의 관계를 설명하는 모형으로서 종속변수가 범주형(y=0 또는 y=1)값을 갖는 경우에 사용하는 방법이다. 다음 중 로지스틱 회귀모형에 대한 설명으로 가장 부적절한 것은?",
    "answer": "1",
    "explanation": "로지스틱 회귀분석은 설명변수들을 활용하여 특정한 기준선에 따라 개체가 어느 클래스에 속하는지 분류 규칙을 찾아내는 지도학습 분류 기법입니다. \"클래스가 알려진 데이터에서 설명변수들의 관점에서 각 클래스 내 관측치들의 유사성을 찾는다\"는 설명은 비지도학습인 군집분석(Clustering)이나 차원 축소에 더 적합한 개념입니다.",
    "options": [
      "이러한 데이터에 대해 선형회귀모형을 적용하는 것이 기술적으로 가능하지만, 선형회귀의 문제점은 0 이하의 값이나 1 이상의 값을 예측값으로 줄 수 있다는 것이며 따라서 이를 확률값으로 직접 해석할 수 없다.",
      "로지스틱 회귀모형은 클래스가 알려진 데이터에서 설명변수들의 관점에서 각 클래스내의 관측치들에 대한 유사성을 찾는 데 사용할 수 있다.",
      "종속변수 y 대신 로짓(logit)이라 불리는 상수를 사용하여 로짓을 설명변수들의 선형함수로 모형화하기 때문에 이 모형을 로지스틱 회귀모형이라고 한다.",
      "Odds(오즈)란 클래스 0에 속할 확률(1-p)이 클래스 1에 속할 확률 p의 비로 나타낸다. 즉, Odds = p / (1-p)로 나타낸다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-34",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "College 데이터는 777개의 미국 대학의 각종 통계치를 포함한다. 각 대학에 재학하는 비용이 졸업률(Grad.Rate)에 미치는 영향을 알아보기 위해 사립학교 여부(Private), 고교성적 상위 10% 학생비율(Top10perc), 등록금(Outstate), 기타지출(Expend)을 활용하기로 했다. 다음 중 아래의 결과물에 대한 설명으로 적절하지 않은 것은 무엇인가?\n\n```\n> summary(College)\nPrivate      Top10perc        Outstate         Expend         Grad.Rate     \nNo :212   Min.   : 1.00    Min.   : 2340   Min.   : 3186   Min.   : 10.00  \nYes:565   1st Qu.:15.00    1st Qu.: 7320   1st Qu.: 6751   1st Qu.: 53.00  \n          Median :23.00    Median : 9990   Median : 8377   Median : 65.00  \n          Mean   :27.56    Mean   :10441   Mean   : 9660   Mean   : 65.46  \n          3rd Qu.:35.00    3rd Qu.:12925   3rd Qu.:10830   3rd Qu.: 78.00  \n          Max.   :96.00    Max.   :21700   Max.   :56233   Max.   :118.00  \n\n> summary(lm(Grad.Rate ~ ., data=College))\n\nCall: lm(formula = Grad.Rate ~ ., data = College)\nResiduals:\n    Min      1Q  Median      3Q     Max \n-47.317  -8.503  -0.245   7.741  58.760 \n\nCoefficients:\n              Estimate Std. Error t value Pr(>|t|)    \n(Intercept) 39.4130270  1.3579828  29.023  < 2e-16 ***\nPrivateYes   2.9131163  1.3431005   2.169  0.030391 *  \nTop10perc    0.3209807  0.0379053   8.468  < 2e-16 ***\nOutstate     0.0018820  0.0001988   9.467  < 2e-16 ***\nExpend      -0.0004723  0.0001423  -3.320  0.000943 ***\n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\n\nResidual standard error: 13.51 on 772 degrees of freedom\nMultiple R-squared: 0.3843, Adjusted R-squared: 0.3811\nF-statistic: 120.5 on 4 and 772 DF, p-value: < 2.2e-16\n```",
    "answer": "2",
    "explanation": "R의 선형 회귀 분석 결과에서 사립학교 여부를 나타내는 더미 변수인 `PrivateYes`의 회귀 계수(Estimate)는 **$+2.9131163$**으로 양수의 값을 보입니다. 이는 다른 설명변수의 조건이 모두 동일할 때, 사립학교(`PrivateYes`)인 대학의 졸업률(`Grad.Rate`)이 공립학교에 비해 약 2.91%p 더 높게 나타난다는 것을 뜻합니다. 따라서 \"사립학교의 경우 졸업률이 낮다\"는 설명은 잘못되었습니다.",
    "options": [
      "Outstates 변수는 졸업률에 유의한 영향을 미치는 변수이다.",
      "고교성적 상위 10% 학생의 비율이 높을수록 졸업률이 높다.",
      "다른 설명변수의 조건이 동일할 때 사립학교(Private Yes)의 경우 공립학교(Private No)에 비해 졸업률이 낮다.",
      "위의 모형은 유의수준 5% 하에서 유의하다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-35",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "Default 데이터셋은 10000명의 신용카드 고객에 대한 카드대금 연체여부(default=Yes/No), 카드 대금납입 후 남은 평균 카드잔고(Balance), 연봉(Income), 학생여부(student=Yes/No)를 포함한다. 아래는 연체 가능성을 모형화하기 위한 로지스틱 회귀분석 결과이다. 다음 중 유의수준 0.05하에서 아래에 대한 설명으로 가장 부적절한 것은?\n\n```\n> summary(Default)\n default    student       balance           income     \n No :9667   No :7856   Min.   :   0.0   Min.   :  772  \n Yes: 333   Yes:2144   1st Qu.: 481.7   1st Qu.:21340  \n                       Median : 823.6   Median :34553  \n                       Mean   : 835.4   Mean   :33517  \n                       3rd Qu.:1166.3   3rd Qu.:43808  \n                       Max.   :2654.3   Max.   :73554  \n                       \n> model <- glm(default ~ ., data=Default, family=\"binomial\")\n> summary(model)\n\nCall:\nglm(formula = default ~ ., family = \"binomial\", data = Default)\n\nDeviance Residuals:\n    Min       1Q   Median       3Q      Max  \n-2.4691  -0.1418  -0.0557  -0.0203   3.7383  \n\nCoefficients:\n              Estimate Std. Error z value Pr(>|z|)    \n(Intercept) -1.087e+01  4.923e-01 -22.080  < 2e-16 ***\nstudentYes  -6.468e-01  2.363e-01  -2.738  0.00619 ** \nbalance      5.737e-03  2.319e-04  24.738  < 2e-16 ***\nincome       3.033e-06  8.203e-06   0.370  0.71152    \n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\n\n(Dispersion parameter for binomial family taken to be 1)\n\nNull deviance: 2920.6 on 9999 degrees of freedom\nResidual deviance: 1571.5 on 9996 degrees of freedom\nAIC: 1579.5\n\nNumber of Fisher Scoring iterations: 8\n```",
    "answer": "1",
    "explanation": "로지스틱 회귀 분석의 계수 요약표에서 변수 `income`의 회귀 계수에 대한 z 통계량 검정의 p-value는 **$0.71152$**로 매우 크게 나타납니다. 이는 유의수준 $0.05$ 하에서 귀무가설을 기각하지 못하므로, `income` 변수는 고객의 연체 여부(`default`)를 설명하는 데 통계적으로 유의하지 않은 변수임을 의미합니다.",
    "options": [
      "balance는 default를 설명하는 데 통계적으로 유의하다.",
      "income은 default를 설명하는 데 통계적으로 유의하다.",
      "student는 default를 설명하는 데 통계적으로 유의하다.",
      "balance는 income이 동일할 때 학생일수록 default 가능성이 낮다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-36",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "계층적 군집분석을 위해 거리 계산을 수행할 때 사용하는 dist 함수에서 지원하는 거리 측도로 부적절한 것은?",
    "answer": "1",
    "explanation": "R의 계층적 군집분석 함수인 `dist()`에서 지원하는 거리 측도로는 유클리디안(euclidean), 맨하탄(manhattan), 민코우스키(minkowski), 바이너리(binary), 캔버라(canberra) 등이 있으나, **코사인(cosine)** 거리 측도는 `dist()` 함수가 직접 제공하지 않는 측도입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "계층적 군집 방법은 n개의 군집으로 시작해 점차 군집의 개수를 줄여나가는 방법이다. 다음 중 계층적 군집 분석 결과를 나타내는 도표로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "계층적 군집분석은 순차적으로 개별 데이터들을 거리에 기반해 병합해나가는 트리 구조의 군집화 방법으로, 병합 과정 및 개체 간의 유기적인 거리를 시각적으로 나타내는 대표적인 도표는 **덴드로그램(Dendrogram)**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "150개의 식물 개체를 4개의 변수(꽃받침 길이, 꽃받침 폭, 꽃잎 길이, 꽃잎 폭)로 측정한 데이터를 사용하여 3개의 식물 군으로 구분하려 한다. 이 때 사용 가능한 분석 방법으로 적절한 것은 무엇인가?",
    "answer": "2",
    "explanation": "150개의 꽃 개체를 사전 라벨(그룹 정보)이 없는 상태에서 여러 측정 변수(꽃받침 길이, 꽃잎 너비 등)를 기준으로 유사한 속성을 가진 3개의 그룹으로 묶어 세분화하고자 할 때 사용되는 기법은 비지도학습의 **군집분석(Cluster Analysis)**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "계층적 군집 수행 시 두 군집을 병합하는 방법 가운데 병합된 군집의 오차제곱합이 병합 이전 군집의 오차제곱합의 합에 비해 증가한 정도가 작아지는 방향으로 군집을 형성하는 방법은?",
    "answer": "2",
    "explanation": "계층적 군집화의 병합 방법 중 하나인 **와드연결법(Ward's Linkage Method)**은 두 군집을 병합할 때 군집 내의 오차제곱합(SSE) 증가량이 최소가 되는 최적의 군집 구조를 형성하는 방식으로 군집을 합쳐나갑니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래 데이터 셋에서 A, B의 유클리드 거리(Euclidean distance)를 계산하시오.\n\n| 구분 \\ 사람 | A | B |\n| :--- | :---: | :---: |\n| **키** | 185 | 180 |\n| **앉은키** | 70 | 75 |",
    "answer": "3",
    "explanation": "유클리드 거리 공식은 $d(A, B) = \\sqrt{\\sum (A_i - B_i)^2}$ 입니다.  \n$d(A, B) = \\sqrt{(185 - 180)^2 + (70 - 75)^2} = \\sqrt{(5)^2 + (-5)^2} = \\sqrt{25 + 25} = \\sqrt{50}$  \n따라서 정답은 **$\\sqrt{50}$**입니다.",
    "options": [
      "0",
      "√10",
      "√25",
      "√50"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-41",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래는 학생들의 키와 몸무게를 정규화한 데이터이다. 최단연결법을 통해 학생들을 3개의 군집으로 나누고자 한다.(유클리디안 거리 사용) 다음 중 가장 적절한 것은?\n\n| 사람 | (키, 몸무게) |\n| :---: | :---: |\n| **A** | (1, 5) |\n| **B** | (2, 4) |\n| **C** | (4, 6) |\n| **D** | (4, 3) |\n| **E** | (5, 3) |",
    "answer": "3",
    "explanation": "최단연결법(Single Linkage)은 두 군집 사이의 거리를 계산할 때 가장 가까운 관측치 간의 최단 거리를 군집 간 거리로 정의합니다. 데이터의 좌표를 기준으로 계산해 보면:  \n* A(1, 5)와 B(2, 4)의 거리는 $\\sqrt{(1-2)^2 + (5-4)^2} = \\sqrt{2} pprox 1.414$로 가장 가깝습니다. $	o$ {A, B} 군집 형성  \n* D(4, 3)와 E(5, 3)의 거리는 $\\sqrt{(4-5)^2 + (3-3)^2} = 1$로 매우 가깝습니다. $	o$ {D, E} 군집 형성  \n* C(4, 6)는 다른 데이터와 거리가 비교적 멀어 독립적인 군집으로 남습니다. $	o$ {C} 군집 형성  \n따라서 3개의 군집으로 최종 분할했을 때 가장 적절한 구성은 **(A,B), (C), (D,E)**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래 그림은 평균연결법을 통한 계층적 군집화 예제이다. 데이터 분석 목적 상 Height값을 1.5를 기준으로 하위 군집을 구성할 때 다음 중 생성된 하위 군집을 가장 잘 나타낸 것은?\n\n```\n     Cluster Dendrogram\n       \n       +---------+\n       |         |\n     +-+-+     +-+-+ (Height = 2.0)\n     |   |     |   |\n    +-+ +-+   +-+  | (Height = 1.5)\n    | | | |   | |  |\n    h a f b   d e  j  c  g  i\n```",
    "answer": "3",
    "explanation": "평균연결법을 나타낸 덴드로그램에서 Height 축의 $1.5$ 눈금 위치에 가상의 수평선을 그었을 때, 밑으로 나누어지는 독립적인 나뭇가지(군집)의 조합은 크게 네 개로 갈라집니다.  \n1. {h, a, f}  \n2. {b, d, e, j}  \n3. {c}  \n4. {g, i}  \n따라서 정답은 **④**입니다.",
    "options": [
      "{h,a,f}, {b,d}, {e,j}, {c}, {g,i}",
      "{h,a,f}, {b,d}, {e,j}, {c,g,i}",
      "{h,a,f}, {b,d,e,j}, {c,g,i}",
      "{h,a,f}, {b,d,e,j}, {c}, {g,i}"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-43",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "계층적 군집방법은 두 개체(또는 군집) 간의 거리(또는 비유사성)에 기반하여 군집을 형성해 나가므로 거리에 대한 정의가 필요한데, 다음 중 변수의 표준화와 변수 간의 상관관계를 동시에 고려한 통계적 거리로 적절한 것은?",
    "answer": "2",
    "explanation": "**마할라노비스 거리(Mahalanobis Distance)**는 데이터의 공분산 행렬을 사용하여 개별 변수의 표준편차(표준화)를 반영함과 동시에, 다차원 공간에서 각 변수 간에 존재하는 **상관관계(상관성)를 반영하여 계산하는 통계적 거리 측도**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 k-means 군집의 단점으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "**K-means 군집**과 같은 비계층적 군집 기법은 계층적 군집과 달리 알고리즘이 반복되는 매 단계마다 각 개체가 가장 가까운 군집의 중심(seed)으로 다시 할당되므로, **이전 단계에서 한 번 군집이 형성되었더라도 중심이 변경됨에 따라 다른 군집으로 유연하게 이동이 가능**합니다. 따라서 \"이동할 수 없다\"는 설명은 단점이 아닌 잘못된 설명입니다.",
    "options": [
      "볼록한 형태가 아닌 군집이 존재하면 성능이 떨어진다.",
      "사전에 주어진 목적이 없으므로 결과 해석이 어렵다.",
      "잡음이나 이상값에 영향을 많이 받는다.",
      "한번 군집이 형성되면 군집내 객체들은 다른 군집으로 이동할 수 없다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-45",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "거리를 이용하여 데이터 간 유사도를 측정할 수 있는 척도는 데이터의 속성과 구조에 따라 적합한 것을 사용해야 한다. 다음 중 유사도 측도에 대한 설명으로 부적절한 것은?",
    "answer": "3",
    "explanation": "마할라노비스 거리는 다변량 분석에서 변수의 표준편차와 변수 간 상관관계를 모두 반영하는 이상적인 거리 측도이지만, 변수 간 상관관계가 깊게 얽혀 있는 경우 공분산 행렬을 정확히 구해야 하므로 standard distance로 대체하여 단순화할 수는 없습니다. 오히려 상관관계가 존재할 때 마할라노비스 거리를 적극 도입하고, 상관관계가 아예 없는 독립인 경우에 표준화 거리를 검토하게 됩니다.",
    "options": [
      "유클리드 거리는 두 점을 잇는 가장 짧은 직선거리이다. 공통으로 점수를 매긴 항목의 거리를 통해 판단하는 측도이다.",
      "맨하튼 거리는 각 방향 직각의 이동 거리 합으로 계산된다.",
      "표준화 거리는 각 변수를 해당 변수의 표준편차로 변환한 후 유클리드 거리를 계산한 거리이다. 표준화를 하게 되면 척도의 차이, 분산의 차이로 인해 왜곡을 피할 수 있다.",
      "마할라노비스 거리는 변수의 표준편차를 고려한 거리 측도이나 변수 간에 상관관계가 있는 경우에는 표준화 거리 사용을 검토해야 한다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-46",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "군집분석은 비지도학습 기법 중 하나로 사전 정보 없이 자료를 유사한 대상끼리 묶는 방법이다. 다음 중 군집분석에 대한 설명으로 부적절한 것은?",
    "answer": "0",
    "explanation": "군집분석은 어떤 미리 규정된 클래스나 범주의 가정이 존재하지 않으며, 오직 데이터 내부의 속성과 다차원 공간상의 거리를 기준으로 **스스로 자발적인 군집화를 유도(자율학습)**하여 구조를 찾아내는 대표적인 비지도학습입니다. \"자발적인 군집화를 유도하지 않는다\"는 설명은 잘못되었습니다.",
    "options": [
      "군집분석에서는 군집의 개수나 구조에 대한 가정없이 다변량 데이터로부터 거리 기준에 의한 자발적인 군집화를 유도하지 않는다.",
      "군집 결과에 대한 안정성을 검토하는 방법은 교차타당성을 이용하는 방법을 생각할 수 있다. 데이터를 두 집단으로 나누어 각 집단에서 군집분석을 한 후 합쳐서 군집분석한 결과와 비교하여 비슷하면 결과에 대한 안전성이 있다고 할 수 있다.",
      "군집의 분리가 논리적인가를 살펴보기 위해서는 군집 간 변동의 크기 차이를 검토한다.",
      "개체를 분류하기 위한 명확한 기준이 존재하지 않거나 기준이 밝혀지지 않은 상태에서 유용하게 이용할 수 ."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-47",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "K-means 군집분석에 대한 설명으로 틀린 것은?",
    "answer": "3",
    "explanation": "K-means 군집화 알고리즘은 각 개체들이 군집 중심에 할당되고 중심이 갱신되는 과정에서, **모든 개체의 군집 할당 변화가 더 이상 일어나지 않을 때(즉, 수렴할 때)**까지 반복하여 조정을 수행합니다. 95% 할당 등의 기준에서 임의로 조정을 멈추는 것이 아닙니다.",
    "options": [
      "K-means 군집분석은 원하는 군집의 개수를 초기에 정하고 seed 중심으로 군집을 형성한다.",
      "K-means 군집분석은 각 개체를 가장 가까운 seed가 있는 군집으로 분류한다.",
      "군집으로 분류된 개체들의 정보를 활용하여 새로운 seed를 계산하면서 개체의 적용에 따른 seed의 변화를 관찰한다.",
      "95% 이상의 개체가 seed에 할당 되면 seed의 조정을 멈춘다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-48",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 고차원의 데이터를 이해하기 쉬운 저차원의 뉴런으로 정렬화하여 지도의 형태로 형성하는 클러스터링 방법으로 적절한 것은?",
    "answer": "3",
    "explanation": "고차원의 입력 변수 데이터를 이해하기 쉽고 구조화된 형태인 저차원의 뉴런으로 매핑하여 격자 모양의 지도(Map)로 시각화 및 군집화하는 인공신경망 기반의 대표적인 기법은 **자기조직화지도(SOM, Self-Organizing Map)**입니다.",
    "options": [
      "의사결정나무(Decision Tree)",
      "연관규칙(Association Rule)",
      "랜덤포레스트(Random Forest)",
      "자기조직화지도(Self-Organizing Map)"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-49",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "군집분석에서는 관측값들이 얼마나 유사한지 또는 유사하지 않은지를 측정할 수 있는 측도가 필요하다. 다음 중 유사도 측도에 대한 설명으로 가장 부적절한 것은?",
    "answer": "3",
    "explanation": "군집분석의 전형적인 개체 간 거리 측도에는 유클리디안 거리, 코사인 유사성, 민코우스키 거리, 자카드 계수 등이 사용되며, 피어슨 상관계수는 두 변수 간의 선형적 관련 속성을 측정하는 척도이지 군집분석의 직접적인 개체 간 공간적 거리 측도로는 일반적으로 단독 사용되지 않습니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "SOM은 비지도 신경망으로 고차원의 데이터를 이해하기 쉬운 저차원의 뉴런으로 정렬하여 지도 형태로 형상화하는 방법이다. 다음 중 SOM 방법에 대한 설명으로 부적절한 것은?",
    "answer": "1",
    "explanation": "SOM(자기조직화지도)은 전형적인 **비지도 학습(Unsupervised Learning) 신경망** 모형으로, 학습을 유도하는 역전파(Backpropagation) 알고리즘을 사용하지 않습니다. 대신 승자독식 구조의 경쟁 학습(Competitive Learning)을 바탕으로 하며, **오직 하나의 전방 패스(Feed-Forward Flow)만을 수행**하여 모델 연산 속도가 매우 신속하다는 장점을 가지고 있습니다.",
    "options": [
      "SOM은 입력변수의 위치 관계를 그대로 보존한다는 특징이 있다. 이러한 SOM의 특징으로 인해 입력 변수의 정보와 그들의 관계가 지도상에 그대로 나타난다.",
      "SOM을 이용한 군집분석은 인공신경망의 역전파 알고리즘을 사용함으로써 수행 속도가 빠르고 군집의 성능이 매우 우수하다.",
      "SOM 알고리즘은 고차원의 데이터를 저차원의 지도 형태로 형상화하기 때문에 시각적으로 이해하기 쉬울 뿐 아니라 변수의 위치 관계를 그대로 보존하기 때문에 실제 데이터가 유사하면 지도상 가깝게 표현된다.",
      "SOM은 경쟁 학습으로 각각의 뉴런이 입력 벡터와 얼마나 가까운가를 계산하여 연결강도를 반복적으로 재조정하여 학습한다. 이와 같은 과정을 거치면서 연결강도는 입력 패턴과 가장 유사한 경쟁층 뉴런이 승자가 된다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-51",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "비계층적 군집 방법의 기법인 k-means Clustering의 경우 이상값(Outlier)에 민감하여 군집 경계의 설정이 어렵다는 단점이 존재한다. 이러한 단점을 극복하기 위해 등장한 비계층적 군집 방법으로 가장 적절한 것은?",
    "answer": "0",
    "explanation": "K-means 군집화는 군집 내의 '평균(Mean)' 좌표를 중심값으로 갱신하므로, 이상값(Outlier)이 유입되면 중심이 크게 왜곡되는 단점이 있습니다. 이를 보완하기 위해 실제 군집 데이터 중 정가운데에 위치한 대표 개체인 **메도이드(Medoid)를 군집의 중심으로 사용하는 PAM(Partitioning Around Medoids) 알고리즘**이 활용됩니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래는 22개의 미국 전투기에 대한 4개의 변수 값을 사용한 군집분석의 결과이다. 이에 대한 설명 중 부적절한 것은?\n\n```\n> kmeans(jet[,2:5], 3)\nK-means clustering with 3 clusters of sizes 7, 6, 9\n\nCluster means:\n    SPR  RGF   PLF  SLF\n1   6.9  5.1  0.20  2.7\n2   1.6  4.6  0.16  3.1\n3   1.8  4.1  0.15  1.4\n\nClustering vector:\n  FM-1  FJ-1  F-86A F9F-2 F-94A F30-1 F-89A XF10 F9F-6 F100-A F4D-1\n     3     3      2     3     3     3     3    3     3      2      2\n F11F-1 F-101A F3H-2 F-102A  F-8A F-104B F-105B YF-107A F-106A   F-4B\n     2      1      2      2     2      3      1      1      1      1\nF-111A\n     1\n     \nWithin cluster sum of squares by cluster:\n[1] 11.1  6.4 13.9\n(between_SS / total_SS = 79.2 %)\n\nAvailable components:\n[1] \"cluster\"  \"centers\"  \"totss\"  \"withinss\"  \"tot.withinss\"  \"betweenss\"\n[7] \"size\"     \"iter\"     \"ifault\"\n```",
    "answer": "3",
    "explanation": "K-means 군집분석의 요약 정보 출력물 중 `Cluster means:` 섹션 하위에는 각 군집별 주요 변수(SPR, RGF, PLF, SLF)의 중심점(Centroid, 좌표값)에 대한 정보가 명확하게 산출되어 나타납니다. 따라서 \"중심에 대한 정보가 포함되어 있지 않다\"는 설명은 거짓입니다.",
    "options": [
      "비계층적 군집분석의 결과이다.",
      "위의 방법을 사용할 때 군집 개수를 사전에 결정해야 한다.",
      "각 군집은 7개, 9개, 6개의 전투기를 포함한다.",
      "각 군집의 중심에 대한 정보가 포함되어 있지 않다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-53",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "k-평균 군집으로 대표되는 비계층적 군집 방법에서는 군집의 개수인 k를 미리 정해주어야 한다. 다음 중 군집수를 정하는 데 활용할 수 있는 그래프로 가장 적절한 것은 무엇인가?",
    "answer": "1",
    "explanation": "비계층적 군집인 K-means 군집화에서는 사전에 군집 수 $k$를 결정해야 합니다. 이때 적절한 $k$를 판단하기 위해 군집 수 $k$의 변화에 따른 **'집단 내 제곱합(Within-Cluster Sum of Squares, WSS)의 감소 속도(Elbow Method)'를 그래프로 그려 시각적으로 확인**할 수 있습니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 k평균군집에 대한 설명으로 부적절한 것은?",
    "answer": "0",
    "explanation": "K-means 군집은 각 데이터 개체가 매 반복 학습 단계마다 실시간으로 갱신되는 가장 가까운 새로운 중심점으로 소속을 유연하게 계속 변경할 수 있는 알고리즘 구조입니다. 따라서 \"한번 군집이 형성되면 다른 군집으로 이동할 수 없다\"는 설명은 잘못되었습니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 군집화 방법 중 DBSCAN, DENCLUE 기법 등 임의적인(arbitrarity) 모양의 군집 탐색에 가장 효과적인 방법은?",
    "answer": "0",
    "explanation": "기하학적으로 구형(볼록한 형태)이 아니거나 특이한 임의의 모양(원형, 초승달형 등)을 가진 비정형적 군집 탐색에 가장 효과적이며, 데이터의 조밀한 밀도 차이에 기반하여 군집을 찾아내는 알고리즘 기법들을 **밀도기반 군집(Density-based Clustering)**이라고 합니다. 대표적으로 DBSCAN, DENCLUE 등이 있습니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "SOM(Self Organizing Maps) 알고리즘은 고차원의 데이터를 이해하기 쉬운 저차원의 뉴런(Neuron)으로 정렬하여 지도(Map)의 형태로 형상화하는 방법이다. 다음 중 SOM 방법의 설명으로 부적절한 것은 무엇인가?",
    "answer": "3",
    "explanation": "SOM(자기조직화지도)은 목표 타깃 라벨 없이 작동하는 **대표적인 자율(비지도) 인공신경망** 기법입니다. 따라서 \"지도학습의 역전파 알고리즘처럼 피드백을 처리한다\"는 설명은 잘못되었습니다. SOM은 역전파가 없으며, 오직 순방향(Feed-Forward Flow) 연산으로만 진행됩니다.",
    "options": [
      "입력 벡터와 가장 비슷한 연결강도 벡터를 가진 경쟁층의 뉴런이 승자이며, 승자와 그 주변의 경쟁층 뉴런에 대해서만 연결강도 조정을 수행하는 학습 방법이다.",
      "고차원의 표현을 1차원으로 표현할 수 있는 장점이 있다.",
      "지도 형태의 형상화는 입력변수의 위치 관계를 그대로 보존한다는 특징이 있다.",
      "자율적인(Unsupervised) 신경망 모델로서 역전파(Back Propagation) 알고리즘처럼 여러 단계의 피드백을 처리하면서 전방 패스(Feed-Forward Flow)를 사용하는 방법이다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-57",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "nci.data는 64개 암세포주에 대한 6830개 유전자 microarray 데이터이다. 아래는 이 자료를 이용한 군집분석 결과이다. 다음 중 아래 결과에 대한 설명으로 가장 부적절한 것은?\n\n```\n          [ Single Linkage Dendrogram ]\n           \n                +-----------------+\n                |                 |\n            +---+---+         +---+---+\n            |       |         |       |\n```",
    "answer": "3",
    "explanation": "최단연결법(Single Linkage)은 단순히 군집 간 데이터들의 최소 물리적 거리 하나만을 찾아 계산하므로, 군집 내부 데이터의 모든 평균 거리를 계산해야 하는 평균연결법(Average Linkage)에 비해 오히려 **계산량이 훨씬 간소하고 빠릅니다.**",
    "options": [
      "최단 연결법을 사용한 계층적 군집분석 방법이다.",
      "두 군집 사이의 거리를 각 군집에서 하나의 관측값을 뽑았을 때 나타날 수 있는 거리의 최소값으로 측정한다.",
      "사슬모양의 군집이 생길 수 있다.",
      "평균연결법에 비해 계산량이 많다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-58",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 연관성 분석에 대한 설명으로 부적절한 것은?",
    "answer": "3",
    "explanation": "시차 연관분석(Sequential Pattern Analysis)은 거래 사건들 간의 단순 병렬적 연관에 그치지 않고, \"시간적 선후 관계(순서)\"를 추적하여 규칙을 발견하는 기법입니다. 이는 선행 거래 행위가 후행 거래 행위에 영향을 미치는 인과 및 원인-결과의 흐름으로도 의미 있게 해석이 가능하여 의사결정에 대단히 가치 있게 쓰입니다.",
    "options": [
      "Apriori 알고리즘은 최소 지지도보다 큰 빈발항목집합에서 높은 측도(신뢰도, 향상도) 값을 갖는 연관규칙을 구하는 방법이다.",
      "연관성 분석은 하나 이상의 제품이나 서비스를 포함하는 거래 내역을 이용하여 동시에 구매되는 제품별 빈도표를 통해 규칙을 찾는대서 시작했다.",
      "품목 A와 품목 B의 구매가 상호 관련이 없다면 향상도는 1이 된다.",
      "사건들이 어떤 순서로 일어나고 이 사건들 사이에 연관성을 알아내는 것이 시차 연관분석이지만 원인과 결과의 형태로 해석되지는 않는다."
    ]
  },
  {
    "id": "adp-s4-c5-mcq-59",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 이상값 자료에 민감한 K평균 군집의 단점을 보완하기 위해 평균 대신 사용되는 것으로 적절한 것은?",
    "answer": "0",
    "explanation": "이상값(Outlier)의 영향으로 왜곡될 수 있는 평균(Mean) 통계량의 수학적 한계를 보완하기 위해, 이상점에 덜 민감하고 데이터의 순서상 정가운데 위치값을 취하는 **중앙값(Median) 또는 메도이드(Medoid)**를 군집의 중심으로 취하는 대표 기법들이 적용됩니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 R에서 연관성 분석을 위해 apriori 함수를 활용하여 연관 규칙을 생성하였다. 다음 중 생성된 연관 규칙을 보기 위해 사용되는 함수로 가장 적절한 것은?",
    "answer": "2",
    "explanation": "R 환경의 연관분석 라이브러리(`arules`)에서 `apriori()` 함수를 거쳐 최종적으로 도출 및 생성된 구체적인 연관성 규칙들(룰 리스트, 지지도, 신뢰도 등)의 내부 텍스트 속성을 콘솔 창에 보여주기 위해 호출하는 명령어는 **`inspect()`** 함수입니다.",
    "options": [
      "sort()",
      "arule()",
      "inspect()",
      "apriori()"
    ]
  },
  {
    "id": "adp-s4-c5-mcq-61",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 아래 거래 전표에서 연관 규칙 \"빵 → 우유\"의 향상도를 구한 것으로 알맞은 것은?\n\n| 품목 | 거래건수 |\n| :--- | :---: |\n| 빵 | 100 |\n| 우유 | 100 |\n| 맥주 | 100 |\n| 빵, 우유, 맥주 | 50 |\n| 우유, 맥주 | 200 |\n| 빵, 우유 | 250 |\n| 빵, 맥주 | 200 |",
    "answer": "2",
    "explanation": "* **향상도 공식:** $	ext{Lift}(A 	o B) = rac{P(A \\cap B)}{P(A) 	imes P(B)} = rac{	ext{Support}(A \\cup B)}{	ext{Support}(A) 	imes 	ext{Support}(B)}$  \n* 전체 총 거래건수의 합은 $100 + 100 + 100 + 50 + 200 + 250 + 200 = 1000$건입니다.  \n* 빵이 포함된 총 거래수 $= 100(빵) + 50(빵,우유,맥주) + 250(빵,우유) + 200(빵,맥주) = 600$건 $	o P(빵) = rac{600}{1000} = 0.6$  \n* 우유가 포함된 총 거래수 $= 100(우유) + 50(빵,우유,맥주) + 200(우유,맥주) + 250(빵,우유) = 600$건 $	o P(우유) = rac{600}{1000} = 0.6$  \n* 빵과 우유가 동시에 포함된 거래수 $= 50(빵,우유,맥주) + 250(빵,우유) = 300$건 $	o P(빵 \\cap 우유) = rac{300}{1000} = 0.3$  \n* $	ext{Lift}(빵 	o 우유) = rac{0.3}{0.6 	imes 0.6} = rac{0.3}{0.36} pprox 0.8333$ (즉, **83%**)  \n따라서 정답은 **③**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래 거래 전표에서 연관 규칙 \"A → B\"의 향상도는 얼마인가?(소수점 첫째자리에서 반올림)\n\n| 물품 | 거래건수 |\n| :--- | :---: |\n| {A} | 100 |\n| {B, C} | 100 |\n| {C} | 100 |\n| {A, B, C, D} | 50 |\n| {B, C} | 200 |\n| {A, B, D} | 250 |\n| {A, C} | 200 |",
    "answer": "2",
    "explanation": "* 전체 총 거래건수의 합은 $100 + 100 + 100 + 50 + 200 + 250 + 200 = 1000$건입니다.  \n* A를 포함하는 총 거래수 $= 100(A) + 50(A,B,C,D) + 250(A,B,D) + 200(A,C) = 600$건 $	o P(A) = rac{600}{1000} = 0.6$  \n* B를 포함하는 총 거래수 $= 100(B,C) + 50(A,B,C,D) + 200(B,C) + 250(A,B,D) = 600$건 $	o P(B) = rac{600}{1000} = 0.6$  \n* A와 B를 동시에 포함하는 거래수 $= 50(A,B,C,D) + 250(A,B,D) = 300$건 $	o P(A \\cap B) = rac{300}{1000} = 0.3$  \n* $	ext{Lift}(A 	o B) = rac{P(A \\cap B)}{P(A) 	imes P(B)} = rac{0.3}{0.6 	imes 0.6} = rac{0.3}{0.36} pprox 0.8333$ (반올림하여 **83%**)  \n따라서 정답은 **③**입니다.",
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
    "subjectTitle": "정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래는 쇼핑몰의 거래 내역이다. 다음 중 규칙 \"사과 → 딸기\"에 대한 향상도(lift)는 얼마인가?\n\n| 항목 | 거래수 |\n| :--- | :---: |\n| 사과 | 40 |\n| 딸기 | 20 |\n| 포도 | 30 |\n| 사과, 딸기 | 20 |\n| 사과, 포도 | 40 |\n| 딸기, 포도 | 10 |\n| 사과, 딸기, 포도 | 40 |\n| **전체 거래 수** | **200** |",
    "answer": "2",
    "explanation": "* 전체 총 거래 수는 $200$건입니다.  \n* 사과가 포함된 거래 수 $= 40(사과) + 20(사과,딸기) + 40(사과,포도) + 40(사과,딸기,포도) = 140$건 $	o P(사과) = rac{140}{200} = 0.7$  \n* 딸기가 포함된 거래 수 $= 20(딸기) + 20(사과,딸기) + 10(딸기,포도) + 40(사과,딸기,포도) = 90$건 $	o P(딸기) = rac{90}{200} = 0.45$  \n* 사과와 딸기가 동시에 포함된 거래 수 $= 20(사과,딸기) + 40(사과,딸기,포도) = 60$건 $	o P(사과 \\cap 딸기) = rac{60}{200} = 0.3$  \n* $	ext{Lift}(사과 	o 딸기) = rac{P(사과 \\cap 딸기)}{P(사과) 	imes P(딸기)} = rac{0.3}{0.7 	imes 0.45}$  \n따라서 식 형태로 매칭되는 답은 **③**입니다.\n\n---\n\n### 3.4. 문항별 상세 해설 (단답형 복습문제 01 ~ 20)",
    "options": [
      "0.3 / (0.6 × 0.45)",
      "0.4 / (0.7 × 0.45)",
      "0.3 / (0.7 × 0.45)",
      "0.4 / (0.6 × 0.45)"
    ]
  },
  {
    "id": "adp-s4-c5-sub-1",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "데이터 마이닝을 적용한 후 그 결과의 신뢰성을 검증하기 위해 데이터를 분할하는데 구축된 모델의 과잉 또는 과소 맞춤 등에 대한 미세조정 절차를 위해 사용되는 데이터는?",
    "answer": "검증용 데이터 (Validation Data)",
    "explanation": "데이터 마이닝 분석에서 모형 구축 후 신뢰성을 검증하기 위해 원본 데이터를 분할하는데, 이때 구축된 모형의 매개변수를 튜닝하거나 과잉/과소 적합 등에 대한 모형의 성능 미세조정(Hyperparameter tuning)을 위해 사용되는 중간 평가 데이터를 **검증용 데이터(Validation Data)**라고 합니다.",
  },
  {
    "id": "adp-s4-c5-sub-2",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "오분류표(Confusion Matrix)를 활용하여 모형을 평가하는 지표 중 범주 불균형(Class Imbalance Problem)을 가지고 있는 데이터에 중요한 범주만을 다루기 위해 사용되는 지표로 실제값이 False 인 관측치 중 예측치가 적중한 정도를 나타내는 지표는 무엇인가?",
    "answer": "특이도 (Specificity)",
    "explanation": "불균형 데이터 평가 시 실제 False(음성, 정상군 등)인 관측치 중 모형이 음성으로 정확히 적중하여 판단한 비율을 **특이도(Specificity)**라고 합니다. ($	ext{Specificity} = rac{TN}{TN+FP}$)",
  },
  {
    "id": "adp-s4-c5-sub-3",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "베이즈 정리(Bayes' Theory)와 특징에 대한 조건부 독립을 가설로 하는 알고리즘으로 클래스에 대한 사전 정보와 데이터로부터 추출된 정보를 결합하고 베이즈 정리를 이용하여 어떤 데이터가 특정 클래스에 속하는지를 분류하는 알고리즘은 무엇인가?",
    "answer": "나이브 베이지안 분류 (Naive Bayes Classification)",
    "explanation": "각 변수(특징)가 서로 독립적이라는 조건부 독립을 강력히 가정하고 베이즈 정리를 기반으로 하여 사후 확률을 구해 어떤 개체가 특정 클래스에 속하는지 분류하는 대표적 기법은 **나이브 베이지안 분류(Naive Bayes Classification)**입니다.",
  },
  {
    "id": "adp-s4-c5-sub-4",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "신경망 모형에서 아래의 식으로 계산되는 함수로서 표준화 지수 함수로 불리며, 출력값 z가 여러 개로 주어지고, 목표치가 다범주인 경우 각 범주에 속할 사후 확률을 제공하여 출력노드에 주로 사용되는 함수는?\n\n$$u_j = rac{\\exp(z_j)}{\\sum_{i=1}^L \\exp(z_i)}, \\quad j = 1, \\dots, L$$",
    "answer": "소프트맥스 함수 (Softmax Function)",
    "explanation": "다범주(Multi-class) 인공신경망의 출력 노드에서 입력값들을 각 범주에 해당하는 사후 확률 값(0~1 사이, 전체 합은 1)으로 변환해주는 지수 스케일링 함수를 **소프트맥스 함수(Softmax Function)**라고 합니다.",
  },
  {
    "id": "adp-s4-c5-sub-5",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "두 개체 간의 거리에 기반하여 군집을 형성해가는 계층적 군집방법에서 사용되는 측도 중 두 개체의 벡터 내적을 기반하여 아래의 수식으로 계산할 수 있는 유사성 측도는 무엇인가?\n\n$$	ext{similarity}(A, B) = rac{A \\cdot B}{\\|A\\| \\|B\\|} = rac{\\sum_{i=1}^n A_i B_i}{\\sqrt{\\sum_{i=1}^n (A_i)^2} \\sqrt{\\sum_{i=1}^n (B_i)^2}}$$",
    "answer": "코사인 유사도 (Cosine Similarity)",
    "explanation": "두 개체 간의 방향성을 측정하기 위해 두 벡터의 내적을 기반으로 각도의 크기(코사인 값)를 구해 유사성을 측정하는 지표는 **코사인 유사도(Cosine Similarity)**입니다. 값은 $-1$에서 $+1$ 사이의 범위를 가집니다.",
  },
  {
    "id": "adp-s4-c5-sub-6",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래는 오분류표를 나타낸 것이다. F1 값을 구하시오.\n\n| 실제값 \\ 예측값 | True | False | 합계 |\n| :--- | :---: | :---: | :---: |\n| **True** | 30 | 70 | 100 |\n| **False** | 170 | 40 | 210 |\n| **합계** | 200 | 110 | 310 |",
    "answer": "0.2",
    "explanation": "F1-score 공식은 다음과 같습니다:  \n$	ext{Precision(정밀도)} = rac{TP}{TP+FP} = rac{30}{30+170} = rac{30}{200} = 0.15$  \n$	ext{Recall(재현율)} = rac{TP}{TP+FN} = rac{30}{30+70} = rac{30}{100} = 0.3$  \n$	ext{F1} = rac{2 	imes 	ext{Precision} 	imes 	ext{Recall}}{	ext{Precision} + 	ext{Recall}} = rac{2 	imes 0.15 	imes 0.3}{0.15 + 0.3} = rac{0.09}{0.45} = 0.2$  \n따라서 F1 값은 **0.2**입니다.",
  },
  {
    "id": "adp-s4-c5-sub-7",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "혼합분포군집(Mixture Distribution Clustering)은 모형 기반의 군집 방법으로서 데이터가 k개의 모수적 모형의 가중합으로 표현되는 모집단 모형으로부터 나왔다는 가정 하에서 분석을 하는 방법이다. k개의 각 모형은 군집을 의미하며 이 혼합모형의 모수와 가중치의 최대가능도(Maximum Likelihood) 추정에 사용되는 알고리즘은 무엇인가?",
    "answer": "EM (Expectation Maximization) 알고리즘",
    "explanation": "혼합분포군집 분석과 같이 관측되지 않은 잠재변수가 존재하여 우도(Likelihood)를 직접 최대화하기 곤란할 때, 잠재변수의 기대치를 구하는 E-단계(Expectation Step)와 가중치 및 모수의 최대 우도를 구하는 M-단계(Maximization Step)를 번갈아 반복하여 최적값에 도출하게 유도하는 알고리즘은 **EM 알고리즘**입니다.",
  },
  {
    "id": "adp-s4-c5-sub-8",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "군집분석의 품질을 정량적으로 평가하는 대표적인 지표로 군집 내의 데이터 응집도(cohesion)와 군집간 분리도(separation)를 계산하여 군집 내의 데이터의 거리가 짧을수록, 군집 간 거리가 멀수록 값이 커지며 완벽한 분리일 경우 1의 값을 가지는 지표는?",
    "answer": "실루엣 (Silhouette)",
    "explanation": "군집분석이 우수하게 도출되었는지 평가하기 위해, 개별 데이터 포인트가 자신이 속한 군집 내의 다른 데이터들과 얼마나 조밀하게 모여있는지(응집도)와 이웃 군집의 데이터들과는 얼마나 멀리 떨어져 있는지(분리도)를 동시에 수치화하여 나타내는 지표는 **실루엣(Silhouette)** 계수입니다. 완전히 완벽한 분리일 때 최댓값인 $1$을 나타냅니다.",
  },
  {
    "id": "adp-s4-c5-sub-9",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "SOM(Self-Organizing Maps)에서는 각 학습 단계마다 입력층의 데이터 집합으로부터 하나의 표본 벡터를 임의로 선택하고 경쟁층의 프로토타입 벡터와의 거리를 계산하고 가장 가까운 프로토타입 벡터를 선택하는데 이 때 선택된 프로토타입 벡터를 나타내는 용어는 무엇인가?",
    "answer": "BMU (Best Matching Unit)",
    "explanation": "SOM(자기조직화지도) 학습 시, 임의의 입력 데이터가 제시되면 경쟁층에 배열된 뉴런의 가중치 벡터 중 입력 벡터와 유클리드 거리가 가장 짧아 최대로 유사한 뉴런을 선출하는데, 이 최종 승자 뉴런을 **BMU(Best Matching Unit)**라고 합니다.",
  },
  {
    "id": "adp-s4-c5-sub-10",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래는 미국 50개 주의 범죄 유형으로 군집분석을 한 결과이다. height=150에서 아래의 덴드로그램을 통해 군집 결과를 도출하면 총 군집의 수는 몇 개인가?\n\n```\n      Cluster Dendrogram\n  \n      +-----------------+ (height = 300)\n      |                 |\n  +---+---+         +---+---+ (height = 150)\n  |       |         |       |\n[Col 1] [Col 2]   [Col 3] [Col 4]...\n```",
    "answer": "3개",
    "explanation": "제공된 덴드로그램 그래프에서 높이 축 기준 $height=150$ 부근에 가상의 수평선을 가로지르게 배치하면, 하부로 파생되어 나누어지는 독립적인 잔가지(군집) 라인은 정확히 **3개**로 분할되어 산출됩니다.",
  },
  {
    "id": "adp-s4-c5-sub-11",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "랜덤 모델과 비교하여 해당 모델의 성과가 얼마나 좋아졌는지를 각 등급별로 파악하는 그래프로 상위등급에서 매우 크고 하위 등급으로 갈수록 감소하게 되면 일반적으로 모형의 예측력이 적절하다고 판단하게 된다. 모형 평가에 사용되는 이 그래프는 무엇인가?",
    "answer": "향상도 곡선 (Lift Curve)",
    "explanation": "분류 모델의 성과 평가 도구로 사용되며, 무작위 모델(Random Model) 대비 생성된 타깃팅 모형의 확률 성과 향상 비율을 가로축 등급별 누적으로 시각화하여 상위 등급에서 극대화되고 뒤로 갈수록 완만하게 감소하는 양상을 확인하게 해 주는 모형 평가지표 도표는 **향상도 곡선(Lift Curve)**입니다.",
  },
  {
    "id": "adp-s4-c5-sub-12",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래는 학생들의 키와 몸무게를 정규화한 데이터이다. 맨하튼 거리를 이용하여 군집분석을 하고자 한다. 맨하튼 거리를 이용하여 A와 B의 거리를 구하시오.\n\n| 사람 | (키, 몸무게) |\n| :---: | :---: |\n| **A** | (1, 5) |\n| **B** | (2, 4) |",
    "answer": "1",
    "explanation": "맨하튼 거리는 각 차원 좌표 차이의 절대값을 단순히 합산하는 방식입니다.  \n$	ext{Manhattan Distance}(A, B) = |1 - 2| + |5 - 4| = |-1| + |1| = 1 + 1 = 2$  \n따라서 맨하튼 거리는 **2**가 됩니다.",
  },
  {
    "id": "adp-s4-c5-sub-13",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> 분류할 데이터와 주어진 데이터의 모든 거리를 계산하여 가까운 거리의 데이터를 k개 만큼 찾은 후, 그 중에서 가장 빈도수가 높은 클래스로 분류해주는 기법",
    "answer": "k-최근접이웃 (k-NN, k-Nearest Neighbor)",
    "explanation": "기하학적 아이디어를 바탕으로 새로운 관측 데이터가 입력되었을 때 기존 데이터 중 가장 공간적 거리가 가깝게 위치한 이웃 데이터 $k$개를 탐색한 후 다수결 원칙에 의해 최다 빈도 범주로 클래스를 예측/분류해주는 알고리즘은 **k-최근접이웃(k-NN)** 기법입니다.",
  },
  {
    "id": "adp-s4-c5-sub-14",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "앙상블 기법 중 붓스트랩 표본을 구성하는 재표본 과정에서 분류가 잘못된 데이터에 더 큰 가중치를 주어 표본을 추출하는 기법은?",
    "answer": "부스팅 (Boosting)",
    "explanation": "앙상블 학습 중 하나인 **부스팅(Boosting)** 기법은 매 학습 단계마다 이전에 도출된 모형에서 분류가 취약하게 틀린(오류가 큰) 특정 데이터에 지속적으로 큰 가중치(확률)를 주어 다음 붓스트랩 샘플링과 가중합 학습에 집중시키는 예측모형 결합 기법입니다.",
  },
  {
    "id": "adp-s4-c5-sub-15",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아이템에 대한 설명과 사용자 선호를 기반으로 하여 과거에 사용자가 좋아했던 것과 비슷한 아이템을 추천하는 알고리즘은 무엇인가?",
    "answer": "내용 기반 필터링 (Content-based filtering)",
    "explanation": "추천 알고리즘 설계 시 아이템 자체의 특징 정보(예: 책의 주제, 영화의 장르 등)와 이를 대하는 타깃 유저의 과거 선호 성향을 상호 매핑하고 계산하여 과거에 유저가 고평가했던 유사한 특징의 신규 아이템을 권장해주는 기법을 **내용 기반 필터링(Content-based Filtering)**이라고 합니다.",
  },
  {
    "id": "adp-s4-c5-sub-16",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> 의사결정나무모형에서 끝마디가 너무 많이 나오면 모형이 과대 적합된 상태로 현실문제에 적용할 수 있는 규칙이 나오지 않게 된다. 이를 해결하기 위해 분류된 관측치의 비율이나 MSE(Mean Squared Error) 등을 고려하여 과적합 문제를 해결한다.",
    "answer": "가지치기 (Pruning)",
    "explanation": "의사결정나무모형에서 가지가 무한히 뻗어나가 끝마디가 매우 많아지면 훈련 데이터셋에 과적합(Overfitting)되어 일반화 규칙으로 현실에 적용할 수 없게 됩니다. 이때 분류된 레코드의 수, MSE, 정보이익(Information Gain) 등의 평가 수치 임계값을 고려하여 불필요한 자식 마디를 병합하거나 제거하는 조정을 **가지치기(Pruning)**라고 합니다.",
  },
  {
    "id": "adp-s4-c5-sub-17",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "신경망의 모형에는 Visible Layer과 Hidden Layer로 구성되어 Hidden Layer가 많은 다층 퍼셉트론에서 Hidden Layer를 많이 거칠수록 전달되는 오차가 크게 줄어들어 학습이 되지 않는 현상이 발생하는데, 이를 무엇이라고 하는가?",
    "answer": "기울기 소실 (Gradient Vanishing)",
    "explanation": "다층인공신경망(MLP) 및 딥러닝 모형에서 은닉층이 수없이 깊어지면, 역전파 알고리즘 학습 과정에서 가중치 조정을 위해 각 레이어에 편미분 오차율을 곱해나갈 때 활성화 함수(예: 시그모이드) 미분값 범위의 특성상 앞단 레이어로 갈수록 전달되는 미분 오차값이 사실상 $0$에 수렴하여 앞단 은닉층의 가중치가 전혀 갱신(학습)되지 않고 멈추는 한계 현상을 **기울기 소실(Gradient Vanishing)**이라고 합니다.",
  },
  {
    "id": "adp-s4-c5-sub-18",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래의 트랜잭션에서 추출된 연관규칙 중 하나인 \"B → C\"의 신뢰도는?\n\n```\nTransaction #1 {A, B, C}\nTransaction #2 {A, B, D}\nTransaction #3 {A, B}\nTransaction #4 {B, C}\nTransaction #5 {A, B, C, D}\nTransaction #6 {E}\n```",
    "answer": "3/5",
    "explanation": "* **신뢰도 공식:** $	ext{Confidence}(B 	o C) = rac{P(B \\cap C)}{P(B)} = rac{	ext{B와 C가 동시에 포함된 거래 수}}{	ext{B를 포함하는 거래 수}}$  \n* 제공된 거래 내역에서 B가 포함된 총 트랜잭션 수는 #1, #2, #3, #4, #5 로 총 **5건**입니다.  \n* B와 C가 동시에 포함된 트랜잭션 수는 #1, #4, #5 로 총 **3건**입니다.  \n* 따라서 신뢰도는 **$3/5$ (또는 60%, 0.6)**이 됩니다.",
  },
  {
    "id": "adp-s4-c5-sub-19",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "어떤 항목집합이 빈발하다면, 그 항목집합의 모든 부분집합도 빈발하다는 원리로 연관 규칙 알고리즘 중에서 가장 먼저, 많이 사용되고 있는 알고리즘은?",
    "answer": "Apriori 알고리즘",
    "explanation": "연관성 규칙 데이터 마이닝의 가장 근본적인 고전 알고리즘으로, \"만약 어떤 항목집합이 자주 발생(빈발)한다면, 그 내부 항목들의 모든 하위 부분집합들 또한 반드시 빈발하다\"는 성질(Apriori Property, 지지도 감소의 하향적 성질)을 바탕으로 불필요한 탐색 공간을 사전에 잘라내며 연관 규칙을 조속하게 찾아내는 기법은 **Apriori 알고리즘**입니다.",
  },
  {
    "id": "adp-s4-c5-sub-20",
    "subject": 14,
    "subjectTitle": "정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> Dying ReLU 현상을 보완하기 위한 활성화 함수로 입력값이 음수일 때 출력값을 0이 아닌 0.001과 같은 매우 작은 값을 출력하도록 하는 활성화 함수이다.",
    "answer": "Leaky ReLU",
    "explanation": "딥러닝에서 많이 쓰이는 ReLU 활성화 함수는 입력값이 음수($x < 0$)일 때 출력이 완전히 $0$이 되어 미분값 또한 $0$이 됨으로써 노드가 아예 활성화되지 못하고 사멸하는 'Dying ReLU' 현상이 발생합니다. 이를 개선하여 음수 영역에서도 미세하게 경사 값(예: $0.01$)을 통과하도록 설계해 노드의 사멸을 적극 방지하는 활성화 함수는 **Leaky ReLU**입니다.\n\n---\n\n*본 문서는 원본 pdf 및 실제 이미지 기출을 한 글자씩 성실하게 대조하여 완벽하게 추출한 정형 데이터 마이닝 수험 가이드 및 오답 노트입니다.*",
  },


  {
    "id": "adp-s4-c6-mcq-1",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "웹 콘텐츠나 PDF, 마이크로소프트 오피스 파일, XML, 텍스트 파일 등 다양한 포맷의 문서로부터 텍스트를 추출해 고품질의 정보를 도출하는 과정을 무엇이라고 하는가?",
    "answer": "0",
    "explanation": "텍스트 마이닝은 텍스트를 사용하여 패턴이나 관계를 추출하고 그 안에서 의미 있는 정보나 가치를 발굴하여 해석하는 일련의 과정이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "텍스트 마이닝의 특징에 대해 설명한 것 중 맞는 것은?",
    "answer": "2",
    "explanation": "텍스트 마이닝을 하려면 해당 언어에 대한 깊이 있는 이해와 문화나 관습에 대한 이해도 필요하고, 국가별 언어의 차이가 있으므로 국가별 텍스트 마이닝이 필요하다. 또한 Corpus는 데이터 마이닝의 절차 중 데이터의 정제, 통합, 선택, 변환의 과정을 거친 구조화된 단계이다.",
    "options": [
      "텍스트를 어근과 어미로 구분해서 하나의 feature로 만들어내는 단계가 중요하므로 언어에 대한 이해는 중요하지만 문화와 관습까지 이해할 필요는 없다.",
      "영어는 세계 공용어로써 많은 나라에서 활용하고 있기 때문에 국가별로 텍스트 마이닝 할 필요는 없다.",
      "자연어 처리 분야에서 분석 결과를 평가하기 위해 사용하는 방법 가운데 대표적인 것은 정확도(precision)와 재현율(recall)이다.",
      "corpus는 데이터 마이닝의 절차 중 데이터 마트를 생성하는 단계이다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-3",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "텍스트 마이닝의 분석 결과를 평가하기 위해 사용되는 방법론 중 재현율에 관한 설명으로 맞는 것은?\n\n| (분석모델) | 실제 긍정 | 실제 부정 |\n| :---: | :---: | :---: |\n| **긍정** | a | b |\n| **부정** | c | d |",
    "answer": "1",
    "explanation": "재현율(Recall) : 실제 정답 중에서 분석 모델에서 정답이라고 내놓은 결과의 비율. $a/(a+c)$이다.",
    "options": [
      "분석 모델이 긍정으로 분류한 데이터(a+b) 중 실제 긍정 데이터는 a이므로 재현율은 $a/(a+b)$이다.",
      "실제 존재하는 모든 긍정 메시지(a+c) 중 분석 결과 나온 개수가 a이므로 재현율은 $a/(a+c)$이다.",
      "전체 메시지(a+b+c+d) 중 분석 결과 나온 개수가 a이므로 재현율은 $a/(a+b+c+d)$이다.",
      "전체 메시지(a+b+c+d) 중 분석 결과 나온 개수가 a+b이므로 재현율은 $(a+b)/(a+b+c+d)$이다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-4",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "데이터 마이닝 절차 중 데이터의 정제, 통합, 선택, 변환의 과정을 거친 구조화된 단계로서 더 이상 추가적인 절차 없이 데이터 마이닝 알고리즘 실험에서 활용될 수 있는 상태를 무엇이라고 하는가?",
    "answer": "0",
    "explanation": "데이터 마이닝 절차에서 데이터의 정제, 통합, 선택, 변환의 과정을 거쳐 준비된 구조화된 데이터는 'Feature'라고 한다. Feature는 머신 러닝 알고리즘이 학습할 수 있는 형태로 정리된 데이터 항목을 의미하며, 이는 모델 훈련과 예측에 직접적으로 사용될 수 있게 구조화된 단계이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "텍스트 마이닝 패키지인 TM에서 문서를 관리하는 기본 구조를 Corpus라고 부르는데, 이는 텍스트 문서들의 집합을 의미한다. 메모리에서만 텍스트 문서를 유지하고 관리하는 것은 무엇인가?",
    "answer": "0",
    "explanation": "VCorpus(short for Volatile Corpus) : 메모리에서만 유지",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "텍스트 마이닝 패키지인 TM에서 영어 문서 A에 포함된 대소문자를 모두 소문자로 바꾸기 위해 사용하는 R 프로그래밍으로 적합한 것은 무엇인가?",
    "answer": "3",
    "explanation": "대문자를 소문자로 변환하는 코드는 `A <- tm_map(A, tolower)`이다.",
    "options": [
      "`A <- tm_map(A, as.PlainTextDocument)`",
      "`A <- tm_map(A, removeWords, stopwords(\"english\"))`",
      "`A <- tm_map(A, stripWhitespace)`",
      "`A <- tm_map(A, tolower)`"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-7",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "텍스트 마이닝 패키지인 TM에서 dtm이라는 문서에 포함된 단어 중 10회 이상 사용된 단어를 찾는 방법을 R로 프로그래밍한 것으로 옳은 것은?",
    "answer": "0",
    "explanation": "dtm이라는 문서에 포함된 단어 중 10회 이상 사용된 단어를 찾는 R 프로그램 방법은 `findFreqTerms(dtm, 10)`이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "문장에서 사용된 단어의 긍정과 부정여부에 따라 얼마나 긍정적인 단어가 많은지 여부로 소스를 부여해 긍정 문장인지를 평가하기 위한 분석으로 트위터의 트윗을 통해 자사의 브랜드의 긍정/부정 여부를 판단하는데 활용되는 분석은 무엇인가?",
    "answer": "0",
    "explanation": "문장에서 사용된 단어의 긍정과 부정 여부에 따라 얼마나 대상에 대한 반응이 긍정인지 부정인지를 평가하는 분석 방법은 감성분석이다.",
    "options": [
      "감성분석(Sentiment Analysis)",
      "분류분석(classification Analysis)",
      "소셜네트워크분석(Social Network Analysis)",
      "트윗분석(Twit Analysis)"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-9",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "사회연결망 분석(social network analysis)에 대한 설명으로 부적절한 것은 어느 것인가?",
    "answer": "3",
    "explanation": "최근에는 독립적 노드 사이의 관계에 대한 사회연결망 연구가 활발히 이루어지고 있다.",
    "options": [
      "개인과 집단들 간의 관계를 노드와 링크로써 모델링해 그것의 위상 구조와 확산 및 진화과정을 계량적으로 분석하는 방법론이다.",
      "최근 인터넷과 소셜네트워크의 발달로 발생하는 대용량 데이터를 활용해 개인과 개인, 개인과 집단 간의 네트워크를 분석하는 방법론이다.",
      "제이콥 마리노(Jacob Mareno)가 처음 \"sociometry\"에 발표하지만 사회연결망이라는 용어는 Barnes(1954)가 처음으로 내놓았다.",
      "최근에는 주로 그룹간 또는 그룹 안의 개인에 집중한 연구가 진행되고 있다."
    ]
  },
  {
    "id": "adp-s4-c6-mcq-10",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음은 사회연결망 분석방법에 대한 설명이다. 이 중 잘못 나열한 것은 어느 것인가?",
    "answer": "1",
    "explanation": "사회연결망 분석 방법에는 집합론적인 방법, 그래프 이론을 이용한 방법, 행렬을 이용한 방법이 있다.",
    "options": [
      "집합론적인 방법 - 각 개체들 간의 관계를 쌍으로 표현한 것",
      "계층적 그래프를 이용한 방법 - 계층적 군집분석의 방식으로 각 객체를 표현한 것",
      "그래프 이론을 이용한 방법 - 두 객체 간의 연결망은 두 점(노드)을 연결하는 선으로 표현한 것",
      "행렬을 이용한 방법 - 각 객체를 행렬의 행과 열에 대칭적으로 배치하고 행렬로 표현한 것"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-11",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "사회연결망 분석(social network analysis)의 네트워크 구조를 파악하는 기법 중 하나로 위세가 높은 사람들과 관계가 많을수록 자신의 위세 또한 높아지는 것을 특징으로 하며, 영향력이 높은 사람에 대한 단 하나의 연결이 그렇지 않은 여러 사람들과 관계를 맺는 경우보다 자신의 영향력을 키우는 기법은 무엇인가?",
    "answer": "3",
    "explanation": "위세 중심성 : 자신의 연결정도 중심성으로부터 발생하는 영향력과 자신이 연결된 타인의 영향력을 합하여 결정한다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "사회연결망 분석(social network analysis)에서 아래 그림과 같은 결과를 얻었다. 내용에 대한 설명 중 적절하지 않은 것은?\n\n```r\n> friend_comm_eb = edge.betweenness.community(m182_friend_no_iso)\n> friend_comm_eb\nGraph community structure calculated with the edge betweenness algorithm\nNumber of communities (best split): 3\nModularity (best split): 0.2797619 Membership vector:\n1 2 3 5 6 7 8 9 10 11 12 13 14 15\n1 2 3 3 3 2 2 1  1  3  1  2  2  1\n> plot(as.dendrogram(friend_comm_eb))\n```\n\n*(참고: 덴드로그램 이미지 생략)*",
    "answer": "1",
    "explanation": "분석 결과에서 3번 노드는 3번 군집, 15번 노드는 1번군집이므로 다른 군집으로 묶였다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "텍스트 데이터를 전처리하여 각 문서와 단어 간의 사용 여부를 이용해 만들어진 matrix를 무엇이라고 하는가?",
    "answer": "0",
    "explanation": "TDM(Term-Document Matrix)은 텍스트 데이터를 전처리하여 각 문서와 단어 간의 사용 여부를 이용해 만들어진 matrix이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 텍스트 마이닝의 기능 중 부적절한 것은?",
    "answer": "2",
    "explanation": "텍스트 마이닝은 크게 문서요약(summarization), 문서분류(classification), 문서군집(clustering), 특성추출(feature extraction)이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "tm 패키지의 데이터들의 변형을 위한 tm_map( )이라는 함수를 통해 사용할 수 있는 명령어로 틀린 것은?",
    "answer": "1",
    "explanation": "`tm_map()`이라는 함수를 통해 사용할 수 있는 명령어는 removeWords, removeNumbers, removePunctuation, stripWhitespace, stemDocument이다.",
    "options": [
      "removeWords",
      "stemMing",
      "stripWhitespace",
      "removeNumbers"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-16",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 아래 Term-Document Matrix에서 sparsity(희소성)의 값으로 적절한 것은?\n\n| Term | Document 1 | Document 2 | Document 3 | Document 4 | Document 5 |\n| :---: | :---: | :---: | :---: | :---: | :---: |\n| **돈까스** | 1 | 0 | 0 | 1 | 0 |\n| **떡볶이** | 0 | 0 | 0 | 0 | 1 |\n| **순대** | 0 | 1 | 0 | 1 | 0 |\n| **라면** | 1 | 0 | 1 | 0 | 0 |\n| **김밥** | 0 | 1 | 0 | 0 | 1 |",
    "answer": "2",
    "explanation": "sparsity는 tdm 안에 0인 원소가 있는 %를 의미한다. 총 25개 중 0이 16개 있으므로 64%이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "아래의 그림에 대한 설명으로 부적절한 것은?\n\n*(참고: \"BIG DATA\", \"complex\", \"analytics\", \"storage\", \"internet\" 등이 포함된 워드 클라우드 이미지)*",
    "answer": "2",
    "explanation": "워드 클라우드에서 작은 글자는 다른 단어보다 빈번하게 나타나지 않아 작게 표현한 것이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 사회연결망 분석에서 행과 열에 같은 개체가 배열되어 있는 매트릭스로 적절한 것은?",
    "answer": "3",
    "explanation": "1원모드 매트릭스는 행과 열에 같은 개체가 배열되는 것이다.",
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
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 사회연결망 분석을 R 프로그램으로 실행할 때, 사용하는 함수가 아닌 것은?",
    "answer": "3",
    "explanation": "R 프로그램에서 사회연결망 분석을 실행할 때, `inspect()` 함수는 사용하지 않는다.",
    "options": [
      "V( )",
      "E( )",
      "simplify( )",
      "inspect( )"
    ]
  },
  {
    "id": "adp-s4-c6-mcq-20",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "multiple",
    "question": "다음 중 사회연결망 분석의 중심성을 측정하는 방법으로 틀린 것은?",
    "answer": "3",
    "explanation": "사회연결망 분석의 중심성 측정 방법은 연결정도 중심성, 위세 중심성, 근접 중심성, 매개 중심성이다.",
    "options": [
      "연결정도 중심성",
      "위세 중심성",
      "근접 중심성",
      "밀도 중심성"
    ]
  },
  {
    "id": "adp-s4-c6-sub-1",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "텍스트 마이닝에서 문서에서 문장 내에 포함된 단어들을 어간과 어미로 분리하여 각 문서마다 사용된 단어의 어간들의 빈도를 표현하는 행렬을 만들 수 있다. R 프로그램을 통해 이러한 행렬을 만들고자 할 때 활용하는 함수는 무엇인가?",
    "answer": "DocumentTermMatrix() 또는 TermDocumentMatrix()",
  },
  {
    "id": "adp-s4-c6-sub-2",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "개인과 집단들 간의 관계를 노드와 링크로서 모델링해 그것의 위상구조와 확산 및 진화과정을 계량적으로 분석하는 방법은?",
    "answer": "소셜네트워크분석(SNA, Social Network Analysis)",
  },
  {
    "id": "adp-s4-c6-sub-3",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "텍스트 마이닝의 전처리(preprocessing) 과정 중에서 변형된 단어형태에서 접사(affix) 등을 제거하고 그 단어 외 원형 또는 어간(어형변화의 기초가 되는 부분)을 찾아내는 것을 지칭하는 용어는 무엇인가?",
    "answer": "스테밍(Stemming)",
  },
  {
    "id": "adp-s4-c6-sub-4",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> - 연결된 노드의 중요성에 가중치를 둬 노드의 중심성을 측정하는 방법\n> - 보나시치(Bonacich) 권력지수라고 불림",
    "answer": "위세 중심성(Eigenvector Centrality)",
  },
  {
    "id": "adp-s4-c6-sub-5",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "데이터의 정제·통합·선택·변환의 과정을 거친 후 구조화된 텍스트 데이터로 R의 텍스트 마이닝 패키지인 'tm'에서 문서 관리 기본 구조인 이것은 무엇인가?",
    "answer": "코퍼스(Corpus)",
  },
  {
    "id": "adp-s4-c6-sub-6",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래와 같이 문서에 포함된 단어의 사용 빈도에 따라 크기 및 배치를 달리하여 중요 단어들을 파악하도록 하는 텍스트 마이닝 시각화 방법은?\n\n*(참고: \"BIG DATA\" 중심의 워드 클라우드 이미지)*",
    "answer": "워드클라우드(Word Cloud)",
  },
  {
    "id": "adp-s4-c6-sub-7",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래 (가), (나)에 들어갈 적절한 말을 적으시오.\n> 소셜네트워크 분석에서 행렬을 이용하면 각 객체를 행렬의 행과 열에 대칭적으로 배치하고 i번째 객체와 j번째 객체간의 관계가(연결이) 존재하면 (i, j)번째 칸에 1을 넣고, 관계가 존재하지 않으면 0을 넣는다. ( 가 )는 행과 열에 같은 개체가 배열되는 것이며, ( 나 )는 행과 열에 다른 개체가 배열된다.",
    "answer": "(가) 1원 자료 / (나) 2원 자료",
  },
  {
    "id": "adp-s4-c6-sub-8",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "제품을 구매한 사람들 사이에 직접적인 상호작용의 관계가 존재하지 않더라도, 관계를 인위적으로 설정해 고객과 고객 또는 제품과 제품 사이의 관계를 나타내는 네트워크는?",
    "answer": "준 연결망(Quasi Network)",
  },
  {
    "id": "adp-s4-c6-sub-9",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> - 데이터에서 유의미한 단어 토큰만을 선별하기 위해서 쓸모없는 단어를 제거",
    "answer": "불용어 처리(Stopword Removal)",
  },
  {
    "id": "adp-s4-c6-sub-10",
    "subject": 14,
    "subjectTitle": "비정형 데이터 마이닝",
    "type": "subjective",
    "question": "아래의 설명하는 내용은 무엇인가?\n> - 의미를 담아 단어를 벡터로 바꿔주는 모델\n> - 원-핫 인코딩과 달리 한 단어가 미리 정의된 차원(보통 20~200)에서 연속형의 값을 갖는 벡터로 표현",
    "answer": "워드 임베딩(Word Embedding)",
  }
]
