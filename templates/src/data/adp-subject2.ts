import { Question } from '../types';

export const ADP_SUBJECT2_QUESTIONS: Question[] = [
  {
    "id": "adp-2-mc-1-01",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 CDC(Change Data Capture) 기술에 대한 설명 중 옳은 것은?",
    "options": [
      "변경된 데이터를 실시간으로 감지하지 못하고, 주기적으로 일정 시간마다 업데이트 한다.",
      "CDC는 데이터에 변경이 생겼다는 것을 식별하고, 변경된 데이터는 캡처할 수 없다.",
      "데이터베이스 내 데이터에 대한 변경을 식별해 필요한 후속 처리를 자동화하는 기술이다.",
      "데이터 웨어하우스 구축에는 사용할 수 있으나, ODS 구축에는 사용할 수 없다."
    ],
    "answer": "2",
    "explanation": "데이터베이스 내 데이터에 대한 변경을 식별하고, 필요한 후속 처리를 자동화하는 기술이 바로 CDC이다. 이 기술을 통해 데이터 변경 사항을 실시간으로 감지하고 처리할 수 있다."
  },
  {
    "id": "adp-2-mc-1-02",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 EAI(Enterprise Application Integration)의 활용 효과로 옳지 않은 것은?",
    "options": [
      "향후 정보 시스템 개발 및 유지 보수비용 절감 도모",
      "다양한 조건에 의한 CDC 메커니즘을 구현 기능",
      "협력사·파트너·고객과의 상호 협력 프로세스 연계 발전 기반 확보",
      "그룹 및 지주 회사 계열사들 간 상호 관련 데이터 동기화 등을 위한 데이터 표준화 기반 확보"
    ],
    "answer": "1",
    "explanation": "CDC(Change Data Capture)는 데이터의 변경을 실시간으로 추적하는 기술이며, 이는 데이터 통합의 한 방법일 수 있지만 EAI의 핵심 목적이나 활용 효과와는 직접적인 관련이 없다."
  },
  {
    "id": "adp-2-mc-1-03",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 빅데이터가 가지고 있는 특징에 대한 설명으로 가장 적절하지 않은 것은?",
    "options": [
      "과거와 현재의 데이터를 수집·분석하여 새로운 정보를 발굴하고, 가까운 미래를 예측할 수 있다.",
      "일반적으로 OLAP(다차원 분석)을 위주로 한다.",
      "시각화를 통해 데이터에서 통찰력(insight)을 획득하고자 하는 시도는 빅데이터의 고유한 특징이다.",
      "비정형 또는 준정형 데이터를 정형 데이터로 변환(transformation)하는 것은 빅데이터의 주요한 기술적 특징이다."
    ],
    "answer": "1",
    "explanation": "빅데이터는 일반적으로 데이터마이닝, 통계기법, 기계학습, 시각화 등의 다양한 고도 분석 방법론을 사용한다. OLAP은 다차원 데이터를 대화식으로 분석하기 위한 기술로, 주로 전통적인 데이터 웨어하우스에서 이용하는 방식이다."
  },
  {
    "id": "adp-2-mc-1-04",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 SQL on 하둡 기술에 해당하지 않는 것은?",
    "options": [
      "샤크(Shark)",
      "스파크(Spark)",
      "아파치 드릴(Drill)",
      "호크(HAWQ)"
    ],
    "answer": "1",
    "explanation": "스파크(Spark)는 일반적으로 데이터 처리를 위한 인메모리 분산 컴퓨팅 시스템이다. Spark는 데이터 처리 및 분석을 위한 다양한 라이브러리를 제공하며 내부의 Spark SQL 모듈이 존재하나, Spark 엔진 자체가 단독 SQL on 하둡 기술로 분류되지는 않는다."
  },
  {
    "id": "adp-2-mc-1-05",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 ODS(Operational Data Store)를 구성하기 위한 일괄 작업 ETL의 작업 단계(Layer) 순서로 적절한 것은?",
    "options": [
      "Interface Layer - Cleansing Layer - Staging Layer - Integration Layer - Profiling Layer - Export Layer",
      "Staging Layer - Profiling Layer - Interface Layer - Integration Layer - Cleansing Layer - Export Layer",
      "Interface Layer - Profiling Layer - Cleansing Layer - Integration Layer - Staging Layer - Export Layer",
      "Interface Layer - Staging Layer - Profiling Layer - Cleansing Layer - Integration Layer - Export Layer"
    ],
    "answer": "3",
    "explanation": "ODS 구성을 위한 일괄 작업 ETL은 Interface Layer -> Staging Layer -> Profiling Layer -> Cleansing Layer -> Integration Layer -> Export Layer의 단계로 구성될 수 있다."
  },
  {
    "id": "adp-2-mc-1-06",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 하둡에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "하둡(Hadoop)은 하둡 분산 파일시스템(HDFS)과 MapReduce를 핵심 구성요소로 가진다.",
      "HDFS에 저장되는 데이터는 3중복제가 되어 서로 다른 물리서버에 저장되므로 서버에서 장애가 발생하더라도 데이터 유실을 방지할 수 있다.",
      "하둡은 공유형 분산 아키텍처 시스템에 해당한다.",
      "맵리듀스는 하둡에서 제공하는 대규모 분산 병렬 처리 기술로 구글이 처음 고안해 상용화한 기술이다."
    ],
    "answer": "2",
    "explanation": "하둡(Hadoop)은 공유원 분산 아키텍처가 아니라, 비공유형 분산 아키텍처(shared-nothing architecture) 기반의 시스템이다. 각 노드는 자체적인 저장소와 연산 자원을 가지며 병목 없이 독립적으로 작동한다."
  },
  {
    "id": "adp-2-mc-1-07",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 데이터 적재 작업의 핵심구성요소인 ETL에 관한 설명으로 가장 적절한 것은?",
    "options": [
      "추출 : 처리가 완료된 데이터를 특정 목표 시스템에 저장",
      "변환 : 데이터 클렌징, 형식변환, 표준화, 통합 또는 다수 애플리케이션에 내장된 비즈니스 룰 적용",
      "작업 단위 : 획득한 데이터를 목표 시스템에 적재하는 하나의 작업",
      "적재 : 하나 또는 그 이상의 데이터 원천들로부터 데이터 획득"
    ],
    "answer": "1",
    "explanation": "ETL은 Extraction(추출), Transformation(변환), Loading(적재) 과정을 의미하며, 이 중 '변환' 단계는 데이터 정제와 통합, 형식 변환, 표준화 등 데이터를 목적에 맞게 가공하는 핵심 단계이다."
  },
  {
    "id": "adp-2-mc-1-08",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "CDC(Change Data Capture) 구현 방식에 대한 설명으로 가장 옳지 않은 것은?",
    "options": [
      "Status on Rows는 타임 스탬프 및 버전 넘버 기법에 대한 보완 용도로 활용될 수는 없다.",
      "Event Programming은 애플리케이션 개발 부담과 복잡도를 증가시키나, 다양한 조건에 의한 CDC 메커니즘을 구현할 수 있는 기법이다.",
      "Log Scanner on Database 기법을 사용하면 트랜잭션 무결성에 대한 영향도를 최소화할 수 있다.",
      "Version Numbers on Rows를 활용하면 일반적으로 레코드들의 최신 버전을 기록·관리하는 참조 테이블을 함께 운영한다."
    ],
    "answer": "0",
    "explanation": "Status on Rows는 타임 스탬프 및 버전 넘버 기법과 함께 사용되어 데이터 변경 사항을 더 효과적으로 추적하고 보완할 수 있다."
  },
  {
    "id": "adp-2-mc-1-09",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 로그 데이터 수집 시스템에 해당하지 않는 것은?",
    "options": [
      "페이스북 프레스토",
      "아파치 Flume-NG",
      "아파치 Chukwa",
      "페이스북 Scribe"
    ],
    "answer": "0",
    "explanation": "페이스북 프레스토는 대규모 데이터 웨어하우스에서 빠른 대화형 쿼리를 실행하기 위한 분산 SQL 질의/쿼리 엔진이다. 로그 수집 시스템이 아니다."
  },
  {
    "id": "adp-2-mc-1-10",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 EAI(Enterprise Application Integration) 설명으로 가장 옳지 않은 것은?",
    "options": [
      "EAI는 허브 역할을 하는 브로커를 가운데에 두고, 연결 대상 노드들의 데이터 연계 요구를 중개해 주는 방식으로 노드 간 연결 구조를 단순화한다.",
      "EAI를 활용하면 웹 서비스 등 인터넷 비즈니스를 위한 기본 토대를 확립할 수 있다.",
      "EAI의 아키텍처는 단일 접점인 허브시스템을 이용한 중앙집중식 연결구조이다.",
      "EAI의 구현 유형 중 Mediation(intra-communication)은 EAI 엔진이 외부 정보 시스템으로부터 데이터 요청들을 일괄적으로 수행해 필요한 데이터를 전달한다."
    ],
    "answer": "3",
    "explanation": "④번은 EAI의 구현 유형 중 Federation(inter-communication)에 해당하는 설명이다."
  },
  {
    "id": "adp-2-mc-1-11",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "데이터 웨어하우스의 테이블 모델링 기법인 스타스키마에 대한 설명으로 옳은 것은?",
    "options": [
      "조인 스키마(Join schema)라고도 하며, 데이터 웨어하우스 스키마 중 가장 복잡하다.",
      "스타 스키마는 이해하기 어렵다는 것이 단점이다.",
      "스타 스키마는 쿼리 작성이 복잡하고 조인 테이블 개수가 많다.",
      "단일 사실 테이블(Fact Table)을 중심으로 다수의 차원 테이블(Dimensional Table)들로 구성된다."
    ],
    "answer": "3",
    "explanation": "스타 스키마는 데이터 웨어하우스 스키마 중 가장 단순하며, 직관적이어서 이해하기 쉽다. ③번은 스노우 플레이크 스키마에 해당하는 내용이다."
  },
  {
    "id": "adp-2-mc-1-12",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 비정형 데이터 처리 기술에 대한 설명으로 가장 부적절한 것은?",
    "options": [
      "데이터 연동에 있어서 관계형 DB에서 하둡으로 데이터를 옮기는 것은 가능하지만 하둡에서 관계형 DB로 데이터를 옮기는 것은 불가능하다.",
      "YARN은 맵리듀스의 단점을 극복하기 위해 시작되었고, 분산 애플리케이션을 구현하기 위한 자원 관리 프레임워크를 지원한다.",
      "워크플로 관리에는 Oozie, Azkaban 등의 기술이 사용된다.",
      "Flume-NG, Kafka 등은 대표적인 비정형 데이터 수집 기술이다."
    ],
    "answer": "0",
    "explanation": "데이터 연동 기술인 스쿱(Sqoop)은 DB에서 하둡으로, 하둡에서 DB로 양방향 전송을 모두 지원한다."
  },
  {
    "id": "adp-2-mc-1-13",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "CDC(Change Data Capture)의 구현 기법 중 Log Scanner on Database 방식의 특징 중 옳지 않은 것은?",
    "options": [
      "트랜잭션 로그만 읽기 때문에 데이터베이스 성능에 거의 영향을 주지 않는다.",
      "변경 데이터를 거의 실시간으로 감지할 수 있어 지연 시간이 매우 짧다.",
      "데이터 변경을 추적하기 위해 테이블에 트리거를 추가해야 한다.",
      "테이블 구조나 스키마 변경 없이도 구현이 가능하다."
    ],
    "answer": "2",
    "explanation": "트리거를 추가하는 방식은 Triggers on Tables 방식이다. Log Scanner는 데이터베이스 트랜잭션 로그를 직접 읽기 때문에 트리거가 필요 없다."
  },
  {
    "id": "adp-2-mc-1-14",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음은 ODS(Operational Data Store)와 DW(Data Warehouse)를 비교한 내용의 보기들이다. 이 중 가장 적절한 것은?",
    "options": [
      "데이터의 내용 관점에서 보면 DW는 현재 또는 비교적 최신의 데이터를 저장하고, ODS는 오래된 상세 데이터 및 2차 가공된 고도로 요약된 데이터를 저장한다.",
      "과거에 ODS는 DW와 구분되는 명확한 특징을 지닌 분석영역이었지만 현재, 운영환경의 통합이 상당수 진행된 상황에서는 단순히 DW를 구축하기 위한 1차 데이터 수집공간의 의미로 설계하는 경우도 있다.",
      "ODS는 단순한 적재(Load)와 접근(Access)기능 중심이지만, DW는 데이터의 업데이트 저장 환경으로 데이터베이스에서의 데이터 처리의 모든 기능을 사용하도록 설계되어 있다.",
      "DW가 비교적 소규모 데이터를 저장하는데 비해 ODS는 대규모 데이터를 저장하는데 사용된다."
    ],
    "answer": "1",
    "explanation": "①, ③, ④번은 모두 ODS와 DW에 대해 반대로 설명하고 있다."
  },
  {
    "id": "adp-2-mc-1-15",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 EAI의 활용이 기업에 가져올 수 있는 효과 혹은 변화에 관한 설명으로 부적절한 것은?",
    "options": [
      "협력사, 파트너, 고객과의 협력 프로세스를 서로 연계할 수 있다.",
      "글로벌 경영 환경에 상응하는 데이터 표준화 기반을 제공한다.",
      "지역적으로 분리된 정보 시스템에 대한 데이터 표준화 기반은 제공하지 못한다.",
      "웹 서비스 등의 인터넷 비즈니스를 위한 기본 토대를 확립할 수 있게 해준다."
    ],
    "answer": "2",
    "explanation": "EAI는 지역적으로 분리된 정보 시스템들 간의 데이터 표준화 및 유기적인 통합 연계 기반을 제공한다."
  },
  {
    "id": "adp-2-mc-1-16",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 전통적 데이터 처리 기법과 빅데이터 처리 기법을 비교한 것으로 적절하지 않은 것은?",
    "options": [
      "전통적 데이터 처리 기법에서는 운영 DB의 데이터를 ODS로 적재하고, 이를 다시 데이터 웨어하우스에 적재한다.",
      "전통적 데이터 처리에서는 인프라스트럭처로 SQL 혹은 RDBMS를 사용하며, 빅데이터 처리에서는 NoSQL 혹은 초대형 분산 데이터 저장소를 사용한다.",
      "빅데이터 처리 기법과 전통적 데이터 처리 기법은 모두 통계와 데이터마이닝 기술을 활용한다.",
      "빅데이터 처리 기법과 전통적 데이터 처리 기법은 모두 시각화를 통해 데이터에서 인사이트를 도출한다."
    ],
    "answer": "3",
    "explanation": "시각화를 통해 대용량 데이터에서 통찰(insight)을 획득하고자 하는 시도는 빅데이터 처리 기법의 고유한 특성이다."
  },
  {
    "id": "adp-2-mc-1-17",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 하둡 에코시스템의 구성요소와 그에 해당하는 설명을 짝지은 것으로 옳지 않은 것은?",
    "options": [
      "Oozie는 하둡 작업을 관리하는 워크플로우 및 코디네이터 시스템이다.",
      "Hive는 하둡 기반의 데이터 웨어하우스이며, 테이블 단위의 데이터 저장과 SQL 쿼리를 지원한다.",
      "Chukwa는 분산 환경에서 생성되는 데이터를 HDFS에 안정적으로 저장시키는 플랫폼이다.",
      "Scribe는 Sqoop과 같은 대용량 데이터 전송 솔루션으로 하둡에서 데이터를 가져오기 위한 SQL을 지정할 수 있다."
    ],
    "answer": "3",
    "explanation": "④번은 Flume 또는 Sqoop 등에 해당하는 혼동 설명이며, Scribe는 페이스북에서 개발된 데이터 수집 플랫폼으로 Chukwa와 달리 중앙집중 서버로 데이터를 전송한다."
  },
  {
    "id": "adp-2-mc-1-18",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 대용량 질의 기술에 관한 설명으로 옳지 않은 것은?",
    "options": [
      "하둡과 하이브(Hive)는 대용량 데이터를 배치 처리하는데 최적화 되어 있다.",
      "아파치 타조(Tajo)는 SQL-on-Hadoop을 위한 분산 쿼리 엔진으로, PostgreSQL 기반의 자체 엔진을 사용하며 아파치에서 개발되었다.",
      "하이브(Hive)는 SQL 질의를 이용하여 하둡에 저장된 데이터를 처리하고 분석할 수 있게 해준다.",
      "하둡은 초기에는 자바 기반의 MapReduce를 사용해야 했지만, Hive, Pig 등의 고수준 언어 도입으로 SQL 기반 분석이 가능해져 코딩 부담이 줄어들었다."
    ],
    "answer": "1",
    "explanation": "아파치 타조는 고려대학교 대학원에서 시작되었으며, PostgreSQL 기반이 아니라 독자적인 SQL 처리 엔진을 지니고 있다."
  },
  {
    "id": "adp-2-mc-1-19",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 기업 정보 시스템들의 데이터를 연계·통합하는 소프트웨어 및 정보 시스템 아키텍처 프레임워크인 EAI에 관한 설명으로 옳지 않은 것은?",
    "options": [
      "EAI는 미들웨어(Bus)를 이용하여 서비스 중심으로 시스템을 유기적으로 연계한다.",
      "EAI를 도입하면 글로벌 경영 환경에 적합한 데이터 표준화 기반을 정립할 수 있다.",
      "Mediation 구현은 Publish/subscribe Model에 해당한다.",
      "다양한 형태로 산재되어 있는 애플리케이션을 프로세스 및 메시지 차원에서 통합/관리한다."
    ],
    "answer": "0",
    "explanation": "①번은 ESB(Enterprise Service Bus)에 관한 설명이다. EAI는 미들웨어(Hub)를 이용하여 비즈니스 로직을 중심으로 통합 연계한다."
  },
  {
    "id": "adp-2-mc-1-20",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 하둡 에코시스템을 구성하는 다양한 기술과 그에 해당하는 설명으로 적절하지 않은 것은?",
    "options": [
      "스쿱(Sqoop)은 하둡과 데이터베이스 간의 데이터 연동 솔루션으로 오픈소스이다.",
      "Pig는 Pig Latin 언어를 제공하지만, 복잡한 MapReduce 프로그래밍을 대체하지는 못한다.",
      "Flume은 로그 데이터를 수집하기 위해 소스(Source), 채널(Channel), 싱크(Sink)로 구성된 데이터 흐름 파이프라인 구조를 갖는다.",
      "Mahout은 하둡 기반으로 데이터 마이닝 알고리즘을 구현한 오픈 소스 라이브러리에 해당한다."
    ],
    "answer": "1",
    "explanation": "Pig는 복잡한 MapReduce 프로그래밍을 대체할 고차원 언어인 Pig Latin 언어를 완벽히 제공하며 코딩량을 크게 줄여준다."
  },
  {
    "id": "adp-2-mc-2-01",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "아마존 SimpleDB의 데이터 모델용어와 관계형 데이터베이스(RDBMS)의 데이터 모델용어의 연결이 적절하지 않은 것은?",
    "options": [
      "Domain - Table",
      "Attribute - Column",
      "Data Dictionary - schema",
      "Item - Record"
    ],
    "answer": "2",
    "explanation": "SimpleDB의 데이터 모델은 Domain, Item, Attribute, Value로 구성되며 스키마(schema)가 없는 구조이다."
  },
  {
    "id": "adp-2-mc-2-02",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "무공유(Shared Nothing) 클러스터와 공유 디스크(Shared Disk) 클러스터를 비교한 내용 중 옳지 않은 것은?",
    "options": [
      "무공유 클러스터에서 각 데이터베이스 인스턴스는 자신이 관리하는 데이터 파일을 자신의 로컬 디스크에 저장하며, 이 파일들은 노드 간에 공유하지 않는다.",
      "공유 디스크 클러스터는 노드 확장에 제한이 있으나, 공유 디스크 클러스터가 커지면 디스크 영역에서 병목현상이 발생한다.",
      "공유 디스크 클러스터의 경우 높은 수준의 폴트톨러런스(fault-tolerance)를 제공하므로 클러스터를 구성하는 노드 중 하나의 노드만 살아 있어도 서비스가 가능하다.",
      "Oracle RAC(Real Application Cluster)를 제외한 대부분의 데이터베이스 클러스터가 무공유 방식을 채택하고 있다."
    ],
    "answer": "1",
    "explanation": "무공유 클러스터는 노드 확장에 제한이 없고, 공유 디스크 클러스터는 클러스터의 규모가 커지면 디스크 영역에서 병목 현상이 발생한다는 단점을 가진다. (설명이 반대로 됨)"
  },
  {
    "id": "adp-2-mc-2-03",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 구글 파일 시스템(GFS)을 설계할 때 세웠던 가정으로 적절하지 않은 것은?",
    "options": [
      "높은 처리율보다 낮은 응답 지연시간이 중요하다.",
      "여러 클라이언트에서 동시에 동일한 파일에 데이터를 추가하는 경우를 고려한다.",
      "파일에 대한 쓰기 연산은 주로 순차적으로 일어나고, 파일에 대한 갱신은 드물게 이루어진다.",
      "저가형 서버로 구성된 환경으로 서버의 고장이 빈번히 발생할 수 있다고 가정한다."
    ],
    "answer": "0",
    "explanation": "GFS를 설계할 때는 낮은 응답 지연시간보다 대용량 처리를 위한 '높은 처리율'이 더 중요하다."
  },
  {
    "id": "adp-2-mc-2-04",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "GFS(Google File System)의 구동원리 중 옳지 않은 것은?",
    "options": [
      "청크(chunk)는 청크서버에 의해 생성/삭제 될 수 있으며, 유일한 식별자에 의해 구별된다.",
      "GFS는 해시 테이블 구조 등을 사용함으로써 메모리에서 보다 효율적인 메타 데이터의 처리를 지원한다.",
      "GFS는 파일을 일정한 크기의 청크(chunk)들로 나누어 청크서버들에 분산·저장한다.",
      "클라이언트는 마스터로부터 읽고자 하는 파일의 청크(chunk)가 저장된 청크서버의 위치를 알아낸 뒤, 직접 청크서버에 파일 데이터를 요청한다."
    ],
    "answer": "0",
    "explanation": "GFS에서 청크는 고유한 64비트 청크 핸들로 구별된다. 청크의 생성과 삭제는 청크서버가 독립적으로 수행하는 것이 아니라, 마스터 서버의 지시에 따라 이루어진다."
  },
  {
    "id": "adp-2-mc-2-05",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "분산 파일 시스템인 러스터(Luster)에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "클러스터 파일 시스템(Cluster File Systems Inc.)에서 개발한 객체 기반 클러스터 파일 시스템이다.",
      "고속네트워크로 연결된 클라이언트 파일 시스템, 메타데이터 서버, 객체 저장서버들로 구성되어있다.",
      "러스터는 파일의 메타 데이터와 파일 데이터에 대한 동시성 제어를 위해 별도의 잠금을 사용한다.",
      "객체 저장서버는 파일 시스템의 이름 공간과 파일에 대한 메타데이터를 관리한다."
    ],
    "answer": "3",
    "explanation": "파일 시스템의 이름 공간과 파일에 대한 메타데이터를 관리하는 것은 메타데이터 서버이다."
  },
  {
    "id": "adp-2-mc-2-06",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "Oracle RAC 데이터베이스 서버에 대한 다음의 설명 중 옳지 않은 것은?",
    "options": [
      "Oracle RAC 데이터베이스 서버는 한 노드가 어떤 이유로 장애를 일으켰을 때 클러스터를 구성하는 노드 중 하나의 노드만 살아 있어도 서비스가 가능하다.",
      "추가 처리 성능이 필요하면 응용 프로그램이나 데이터베이스를 수정할 필요 없이 새 노드를 클러스터에 쉽게 추가할 수 있다.",
      "클러스터의 모든 노드는 데이터베이스의 모든 테이블에 차등하여 액세스하며, 특정 노드가 데이터를 '소유'하는 개념이 존재한다.",
      "RAC는 표준화된 소규모(CPU 4개 미만) 저가형 상용 하드웨어의 클러스터에서도 고가의 SMP 시스템만큼 효율적으로 응용 프로그램을 실행함으로써 하드웨어 비용을 절감한다."
    ],
    "answer": "2",
    "explanation": "공유 디스크 방식인 Oracle RAC의 모든 노드는 데이터베이스의 모든 테이블에 동등하게 액세스하며, 특정 노드가 데이터를 '소유'하는 개념이 없다."
  },
  {
    "id": "adp-2-mc-2-07",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "NoSQL에 대한 다음의 설명 중 옳지 않은 것은?",
    "options": [
      "NoSQL은 Key와 Value의 형태로 자료를 저장하고, 빠르게 조회할 수 있는 자료 구조를 제공하는 저장소다.",
      "전통적인 RDBMS의 장점이라고 할 수 있는 복잡한 Join 연산 기능을 지원한다.",
      "스키마 없이 동작하며, 구조에 대한 정의 변경 없이 자유롭게 데이터베이스의 레코드에 필드를 추가할 수 단다.",
      "높은 수평적 확장성, 가용성, 성능을 제공한다."
    ],
    "answer": "1",
    "explanation": "NoSQL은 전통적인 RDBMS의 장점이라고 할 수 있는 복잡한 Join 연산 기능은 지원하지 않는다."
  },
  {
    "id": "adp-2-mc-2-08",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "구글 Sawzall에 대한 설명 중 옳은 것은?",
    "options": [
      "Sawzall은 MapReduce를 구체화한 스크립트 형태의 병렬 프로그래밍 언어다.",
      "Sawzall은 사용자가 이해하기 쉬운 인터페이스를 제공하며, MapReduce 개발 생산성과는 관련성이 없다.",
      "오픈소스 프로젝트인 Pig나 하이브(Hive)의 개발 배경과 기본적인 개념은 Sawzall과 유사하다.",
      "MapReduce에 대한 이해가 없으면 병렬 프로그래밍에 어려움이 있다."
    ],
    "answer": "2",
    "explanation": "Sawzall은 MapReduce를 추상화한 스크립트 형태의 언어다. MapReduce 개발 생산성을 대폭 높였으며, 오픈소스인 Pig와 Hive 역시 Sawzall과 유사한 배경 및 개념으로 탄생했다."
  },
  {
    "id": "adp-2-mc-2-09",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "MySQL에 대한 다음의 설명 중 옳지 않은 것은?",
    "options": [
      "특정한 하드웨어 및 소프트웨어를 요구하지 않고 병렬 서버구조로 확장이 가능하다.",
      "MySQL 운영 중에 노드를 추가/삭제가 가능하다.",
      "MySQL 클러스터는 데이터의 가용성을 높이기 위해 데이터를 다른 노드에 복제시키며, 특정 노드에 장애가 발생하더라도 지속적인 데이터 서비스가 가능하다.",
      "클러스터에 참여하는 노드(SQL 노드, 데이터 노드, 매니저를 포함) 수는 255로 제한한다. 데이터 노드는 최대 48개까지만 가능하다."
    ],
    "answer": "1",
    "explanation": "MySQL 클러스터는 운영 중에 실시간으로 노드를 추가/삭제할 수 없다."
  },
  {
    "id": "adp-2-mc-2-10",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "MapReduce에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "분할정복 방식으로 대용량 데이터를 병렬로 처리할 수 있는 프로그래밍 모델이다.",
      "맵과 리듀스라는 2개의 함수 구현으로 동작되는 시스템이다.",
      "정렬과 같은 작업은 MapReduce에서 직접 수행할 수 있으며 매우 효과적으로 수행이 가능하다.",
      "map 단계에서는 key와 value의 쌍들을 입력으로 받는다."
    ],
    "answer": "2",
    "explanation": "정렬과 같은 작업은 대량의 데이터 전송 오버헤드로 인해 수행 성능이 저하되므로, 맵리듀스 모델에 직접적으로 대규모 적용하기에는 아주 적합하지 않다."
  },
  {
    "id": "adp-2-mc-2-11",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 가상화 기술을 이용할 경우 얻을 수 있는 효과로 가장 부적절한 것은?",
    "options": [
      "수시로 변화하는 가상머신의 자원 요구량에 맞추어 전체 시스템의 자원을 재배치함으로써 자원 할당의 유연성을 증가시킨다.",
      "가상머신에서 실행중인 애플리케이션의 장애가 다른 가상머신에는 전혀 영향을 미치지 않는다.",
      "다양한 운영체제나 운영환경에서 테스트가 필요한 경우, 새로운 서버를 추가하지 않아도 테스트 환경을 구성할 수 있다.",
      "마이그레이션(migration) 기능을 이용할 경우 운영 중인 가상머신을 중지하고, 가상머신을 다른 물리적인 서버로 이동시킬 수 있다."
    ],
    "answer": "3",
    "explanation": "마이그레이션 기능을 이용할 경우 서비스 운영 중인 가상머신의 '중지 없이(Live Migration)' 가상머신을 다른 물리적인 서버로 자유롭게 이동시킬 수 있다."
  },
  {
    "id": "adp-2-mc-2-12",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "Hadoop Architecture에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "JobTracker는 MapReduce 시스템의 마스터이고, TaskTracker는 워커 데몬이다.",
      "TaskTracker는 JobTracker에게 3초에 한 번씩 주기적으로 하트비트(Heartbeat)를 보내 살아 있다는 것을 알린다.",
      "데몬 관점에서 하둡은 2개의 구성요소를 가지고 있다.",
      "네임노드(NameNode)와 데이터노드(DataNode)는 분산 파일 시스템의 데몬들이다."
    ],
    "answer": "2",
    "explanation": "대몬 관점에서 하둡은 크게 4개의 핵심 구성요소(NameNode, DataNode, JobTracker, TaskTracker)를 가지고 있다."
  },
  {
    "id": "adp-2-mc-2-13",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "SQL on Hadoop 기술에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "하둡에 저장된 대용량 데이터를 대화형식의 SQL 질의를 통해서 처리하고 분석하는 기술이다.",
      "임팔라는 하둡과 Hbase에 저장된 데이터를 대상으로 SQL 질의를 할 수 있다.",
      "호튼웍스에서 개발한 아파치 스팅거(Stinger)는 하이브 코드를 최대한 이용하여 성능을 개선하는 방식으로 개발되었다.",
      "SQL on Hadoop 원조 기술은 구글에서 개발한 빅테이블이다."
    ],
    "answer": "3",
    "explanation": "구글의 빅테이블(Bigtable)은 대표적인 NoSQL 기술이다. SQL on Hadoop 기술 중 최초로 대중에게 공개된 것은 클라우데라 임팔라(Impala) 등이다."
  },
  {
    "id": "adp-2-mc-2-14",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 하둡의 성능과 관련된 설명으로 옳지 않은 것은?",
    "options": [
      "맵리듀스 작업에서 sort 작업은 데이터가 커지더라도 처리시간이 크게 증가하지 않는다.",
      "하둡 클러스터를 구성하는 서버의 수를 늘림으로 처리 시간을 줄일 수 있는 것은 아니다.",
      "플랫폼이 선형 확장성을 가지고 있다면 처리 속도를 개선할 수 있다.",
      "맵리듀스의 sort는 map에서 reduce로 넘어가는 과정에서 항상 발생하는 프로세스이다."
    ],
    "answer": "0",
    "explanation": "맵리듀스 작업의 특성상 데이터가 커질수록 네트워크 셔플링 및 정렬(sort) 연산에 소요되는 처리 시간이 선형적으로 증가한다."
  },
  {
    "id": "adp-2-mc-2-15",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "병렬 쿼리 시스템 중 하나인 아파치 Pig에 대한 설명으로 옳은 것은?",
    "options": [
      "야후에서 개발한 데이터 저장을 위한 언어이며, 아직 오픈소스 프로젝트화되지 않았다.",
      "Hadoop MapReduce 위에서 동작하는 구체화된 병렬 처리 언어이다.",
      "Pig는 맵리듀스의 중복된 알고리즘 개발, 코드 공유의 어려움 등의 요구사항을 해결하기 위해 정의된 언어이다.",
      "아파치 Pig를 이용하면 MapReduce를 이용할 때보다 프로그래밍해야 할 코드 라인의 수는 줄지 않지만 데이터 처리 속도가 매우 빨라진다."
    ],
    "answer": "2",
    "explanation": "Pig는 야후에서 개발한 데이터 분석 및 처리를 위한 고차원 언어 및 컴파일러 플랫폼으로, 맵리듀스의 중복 개발 및 어려움을 극복하기 위해 제안되었으며 코딩 라인 수를 크게 단축시킨다."
  },
  {
    "id": "adp-2-mc-2-16",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "클라우드 컴퓨팅의 기반이 되는 인프라 기술인 가상화에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "최근에는 CPU 제조업체에서도 하드웨어에서 가상화 기술을 지원하는 등 새로운 가상화 방법이 계속 나오고 있기 때문에 서버 가상화 기술을 정확하게 분류하기는 힘들다.",
      "컨테이너 기반 가상화 방식에서 가상화를 지원하는 계층을 하이퍼바이저라고 한다.",
      "서버 가상화는 물리적인 서버와 운영체제 사이에 적절한 계층을 추가해 서버를 사용하는 사용자에게 물리적인 자원은 숨기고 논리적인 자원만을 보여주는 기술이다.",
      "완전가상화는 어떠한 운영 체제라도 수정하지 않은 채 설치가 가능하다."
    ],
    "answer": "1",
    "explanation": "컨테이너 기반 가상화 방식에서 가상화를 지원하는 계층은 '게스트 운영환경(Virtual server environment)' 또는 컨테이너 엔진이라고 부른다. 하이퍼바이저는 OS 레벨 아래의 하드웨어 가상화 기술이다."
  },
  {
    "id": "adp-2-mc-2-17",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "하이퍼바이저 기반의 가상화와 컨테이너 기반 가상화를 비교한 다음의 내용 중 옳지 않은 것은?",
    "options": [
      "하이퍼바이저 기반 가상화는 가상머신 내에서 완전한 하드웨어 독립성을 가지며, 컨테이너 기반 가상화는 호스트 OS를 사용한다.",
      "하이퍼바이저 기반 가상화는 높은 오버헤드를 발생시키는 반면, 컨테이너 기반 가상화는 오버헤드가 거의 없다.",
      "컨테이너 기반 가상화는 공통 소프트웨어에 의한 중앙 집중식 관리 구조를 가지며, 하이퍼바이저 기반 가상화는 가상머신별로 별도로 관리되는 구조를 가진다.",
      "Xen과 VMware ESX는 컨테이너 기반 가상화의 대표 제품이다."
    ],
    "answer": "3",
    "explanation": "Xen과 VMware ESX는 하이퍼바이저(Hypervisor) 기반 가상화의 대표적인 제품이다."
  },
  {
    "id": "adp-2-mc-2-18",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음 중 MySQL에 관한 설명으로 옳지 않은 것은?",
    "options": [
      "장애가 발생했던 노드가 복구되어 클러스터에 투입된 경우에도 기존 데이터와 변경된 데이터에 대한 동기화 작업이 자동으로 수행된다.",
      "MySQL의 구성요소 중 MySQL 노드는 클러스터를 관리하는 노드로 클러스터 시작과 재구성 시에만 관여한다.",
      "클러스터에 참여하는 노드(SQL 노드, 데이터 노드, 매니저를 포함) 수는 255로 제한되며, 데이터 노드는 최대 48개까지만 가능하다.",
      "MySQL 클러스터는 비공유형으로서 메모리 기반 데이터베이스의 클러스터링을 지원한다."
    ],
    "answer": "1",
    "explanation": "②번은 관리 노드(Management Node)에 해당하는 설명이다. MySQL 노드는 클러스터 내의 데이터에 실시간으로 접근하는 SQL 엔진 역할을 담당한다."
  },
  {
    "id": "adp-2-mc-2-19",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "호스트 컴퓨터에서 다수의 운영 체제를 동시에 실행하기 위한 논리적 플랫폼인 하이퍼바이저(Hypervisor)에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "하이퍼바이저는 하나의 물리적 서버에서 여러 개의 가상머신을 생성하고 운영할 수 있도록 해 주는 소프트웨어 계층이다.",
      "물리적 서버 위에 존재하는 가상화 레이어를 통해 운영체제를 수행하는데 필요한 하드웨어 환경을 가상으로 만들어 준다.",
      "하이퍼바이저를 통해 사용자는 추가 하드웨어 구입 없이 새로운 운영체제의 설치, 애플리케이션의 테스팅 및 업그레이드를 동일한 물리적 서버에서 동시에 수행할 수 있다.",
      "하이퍼바이저는 하드웨어 환경 에뮬레이션(emulation)을 수행하지만 소프트웨어 스택 보존의 기능은 수행하지 못한다."
    ],
    "answer": "3",
    "explanation": "하이퍼바이저는 하드웨어 환경 에뮬레이션뿐만 아니라, 시스템 자원 격리/할당, 가상머신들의 소프트웨어 스택 보존 및 완전한 독립적 구동 기능을 모두 성실히 수행한다."
  },
  {
    "id": "adp-2-mc-2-20",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "multiple",
    "question": "다음의 데이터베이스 클러스터에 대한 설명 중 옳지 않은 설명은 무엇인가?",
    "options": [
      "Oracle RAC 데이터베이스 서버는 공유 클러스터이며, 별도의 폴트톨러런스 기능은 제공하지 않는다.",
      "데이터베이스 파티셔닝을 구현하면 성능의 선형적인 증가 효과를 볼 수 정단다.",
      "MS SQL Server는 연합 데이터베이스 형태이며, Active-Standby 방법의 페일오버(failover) 메커 편집을 제공한다.",
      "Oracle RAC 데이터베이스 서버에서 클러스터가 커지면 디스크 영역의 병목현상이 발생할 수도 있다."
    ],
    "answer": "0",
    "explanation": "Oracle RAC는 강력한 고가용성과 폴트톨러런스(Fault Tolerance) 기능을 아주 우수하게 제공하여 노드 장애 시에도 서비스 무중단을 보장한다."
  },
  {
    "id": "adp-2-subj-01",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "ETL의 주요 기능 중 하나 또는 그 이상의 데이터 원천(Source)들로부터 데이터를 획득하는 것은?",
    "answer": "추출 (Extraction)",
    "explanation": "Extraction"
  },
  {
    "id": "adp-2-subj-02",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "데이터 웨어하우스의 특징 중 데이터는 최초 저장 이후에는 읽기 전용(Read Only)의 속성을 가지며, 삭제되지 않는다는 것은 무엇인가?",
    "answer": "영속성, 비휘발성 (Non Volatile)",
    "explanation": "Non Volatile"
  },
  {
    "id": "adp-2-subj-03",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "아래에서 설명하는 내용은 무엇인가?\n\n기업 내 또는 기업 간 상호 이질적 정보 시스템들의 데이터를 연계함으로써 상호 융화 내지 동기화돼 작동하도록 하는 것으로, 비즈니스 프로세스를 자동화하고 실시간으로 통합 연계할 수 있다.",
    "answer": "EAI (Enterprise Application Integration)",
    "explanation": "EAI(Enterprise Application Integration)는 기업 내 다양한 애플리케이션과 시스템을 중앙 집중식이나 분산 방식으로 연계하여 데이터와 비즈니스 프로세스를 통합하는 아키텍처입니다."
  },
  {
    "id": "adp-2-subj-04",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "아래에서 설명하는 내용은 무엇인가?\n\n기업에서 발생하는 대표적인 비정형 데이터로, 과거에는 문제 상황 보존을 위해 사용됐고 최근에는 마케팅/영업 전략 수립을 위한 사용자의 행태 분석 등에 사용된다. 수집 시스템의 예로는 아파치 Flume-NG, 페이스북 Scribe 등이 있다.",
    "answer": "로그 (Log)",
    "explanation": "Log"
  },
  {
    "id": "adp-2-subj-05",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "하둡 에코시스템(Hadoop Ecosystem)에서 분산 데이터를 처리하는 기술로 대용량 데이터 세트를 분산 병렬 컴퓨팅에서 처리하거나 생성하기 위한 목적으로 만들어졌으며, 소프트웨어 프레임워크로 모든 데이터를 키-값(Key-Value) 쌍으로 구성되는 것은?",
    "answer": "맵리듀스 (MapReduce)",
    "explanation": "MapReduce"
  },
  {
    "id": "adp-2-subj-06",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "아래에서 설명하는 내용은 무엇인가?\n\n데이터 연동 기능을 수행하는 대표적인 오픈 소스 솔루션으로 오라클, MySQL, 사이베이스 등 JDBC를 지원하는 대부분의 관계형 데이터베이스와의 연동을 지원한다.",
    "answer": "스쿱 (Sqoop)",
    "explanation": "Sqoop"
  },
  {
    "id": "adp-2-subj-07",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "( ) 안에 들어갈 용어는 무엇인가?\n\n하둡은 저비용으로 대용량 데이터를 저장하고 신속하게 처리할 수 있는 시스템으로 이전에 비해 단순해졌지만 여전히 코딩이 필요하기 때문에 분석가에게는 어려움이 존재한다. 이러한 이유로 사용자에게 친숙한 SQL이라는 질의 기술을 이용하여 하둡에 저장된 데이터를 쉽게 처리하고 분석할 수 있도록 해주는 ( )가 등장해 널리 사용되고 있다.",
    "answer": "하이브 (Hive)",
    "explanation": "Hive"
  },
  {
    "id": "adp-2-subj-08",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "페이스북에서 자체적으로 개발하여 사용하고 있는 하둡 기반의 데이터 웨어하우징 엔진이며, 아파치 라이선스로 공개된 기술은 무엇인가?",
    "answer": "프레스토 (Presto)",
    "explanation": "프레스토(Presto)는 페이스북이 대규모 데이터 웨어하우스에 대해 빠르고 대화형(Interactive)인 분석 질의를 수행하기 위해 개발한 분산 SQL 쿼리 엔진입니다."
  },
  {
    "id": "adp-2-subj-09",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "아래에서 설명하는 내용은 무엇인가?\n\n데이터에 대한 추가 작업을 위해 다양한 데이터 원천(Source)으로부터 데이터를 추출·통합한 데이터베이스다. 일반적으로 실시간(Real Time) 또는 실시간 근접(Near Real Time) 트랜잭션 데이터 혹은 가격 등의 원자성을 지닌 하루 수준 데이터들을 저장하기 위해 설계된다.",
    "answer": "ODS (Operational Data Store)",
    "explanation": "Operational Data Store"
  },
  {
    "id": "adp-2-subj-10",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "아래에서 설명하는 내용은 무엇인가?\n\n데이터 웨어하우스의 테이블 모델링 기법으로 스타 스키마의 차원 테이블들을 제 3정규형으로 정규화한 형태이다. 데이터의 중복이 제거돼 데이터 적재 시 시간이 단축된다는 장점이 있으나 스타 스키마에 비해 스키마 구조의 복잡성이 증가하므로 조인 테이블의 개수가 증가하고 쿼리 작성의 난이도가 상승한다는 단점이 존재한다.\n\n2장. 데이터 처리 기술",
    "answer": "스노우 플레이크 스키마 (Snowflake Schema)",
    "explanation": "스노우 플레이크 스키마(Snowflake Schema)는 스타 스키마의 차원 테이블을 제3정규형으로 한 번 더 정규화하여 데이터 중복을 최소화한 구조로, 테이블이 눈송이 모양으로 뻗어나간 형태를 띱니다."
  },
  {
    "id": "adp-2-subj-11",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "파일이 나누어진 조각의 단위로, 구글 파일 시스템(GFS)에서는 파일을 고정크기(64MB)로 나누어 저장하는데, 이 단위를 무엇이라 하는가?",
    "answer": "청크 (Chunk)",
    "explanation": "Chunk"
  },
  {
    "id": "adp-2-subj-12",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "GFS의 구성요소 중 하나로 모든 메타데이터를 메모리 상에서 관리하며, 주기적으로 수집되어 청크서버의 하트비트(Heartbeat) 메시지를 이용하여 chunk들의 상태에 따라 chunk를 재복제하거나 재분산하는 것과 같은 회복 동작을 수행하는 것은 무엇인가?",
    "answer": "마스터 (Master)",
    "explanation": "Master"
  },
  {
    "id": "adp-2-subj-13",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "아래에서 설명하는 내용은 무엇인가?\n\n대용량 데이터의 분산 저장 기능을 제공하는 시스템으로, 하나의 네임노드(NameNode)와 다수의 데이터노드(DataNode)로 구성되며, 파일 데이터는 블록(또는 청크) 단위로 나누어 여러 데이터노드에 분산·복제 저장된다.",
    "answer": "하둡 분산 파일 시스템 (HDFS)",
    "explanation": "HDFS"
  },
  {
    "id": "adp-2-subj-14",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "고속 네트워크로 연결된 클라이언트 파일 시스템, 메타데이터 서버, 객체 저장서버들로 구성되며 계층화된 모듈 구조로 TCP/IP, 인피니밴드(Infiniband), 미리넷(Myrinet)과 같은 네트워크를 지원하는 것은 무엇인가?",
    "answer": "러스터 (Luster)",
    "explanation": "Luster"
  },
  {
    "id": "adp-2-subj-15",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "( 가 )에 들어갈 용어는 무엇인가?\n\n( 가 )는 비공유 클러스터로서 메모리(최근에는 디스크도 제공) 기반 데이터베이스의 클러스터링을 지원하며, 특정한 하드웨어 및 소프트웨어를 요구하지 않고 병렬 서버구조로 확장이 가능하다. 데이터의 가용성을 높이기 위해 데이터를 다른 노드에 복제시키며, 특정 노드에 장애가 발생하더라도 지속적인 데이터 서비스가 가능하다.",
    "answer": "MySQL Cluster",
    "explanation": "MySQL Cluster는 비공유 아키텍처를 기반으로 고가용성과 실시간 응답성을 제공하며, 단일 장애점(SPOF) 없이 무중단 서비스를 지원하는 인메모리 기반 분산 데이터베이스 시스템입니다."
  },
  {
    "id": "adp-2-subj-16",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "( 가 )에 들어갈 용어는 무엇인가?\n\n관계형 데이터베이스에서 ( 가 )는 레코드와 유사한 개념으로 하나의 ( 가 )는 여러 개의 property를 가질 수 있으며, property는 name-value 쌍으로 저장된다.",
    "answer": "튜플 (Tuple)"
  },
  {
    "id": "adp-2-subj-17",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "인프라 기술은 클라우드 컴퓨팅의 근간이 되는 기술로, 그 중에서도 가장 기반이 되는 기술로 물리적인 서버와 운영체제 사이에 적절한 계층을 추가해 서버를 사용하는 사용자에게 물리적인 자원은 숨기고 논리적인 자원만을 보여주는 기술은 무엇인가?",
    "answer": "서버가상화 (Server Virtualization)"
  },
  {
    "id": "adp-2-subj-18",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "( 가 )에 들어갈 용어는 무엇인가?\n\n( 가 ) 기반의 가상화는 호스트 운영체제 위에 가상의 운영체제를 구성하기 위한 운영 환경 계층을 추가하여 운영체제만을 가상화한 방식으로, 가상화 수준이 낮기 때문에 다른 방식에 비해서 빠른 성능을 보인다는 장점이 있다.",
    "answer": "컨테이너 (Container)"
  },
  {
    "id": "adp-2-subj-19",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "( 가 )에 들어갈 용어는 무엇인가?\n\n하나의 물리적인 장비에 여러 개의 가상머신이 실행되고 있는 상황에서 가장 문제가 되는 것은 I/O에서의 ( 가 )이다. 따라서, CPU 자원의 파티셔닝만으로는 가상화 기술을 제대로 활용할 수 없으며, I/O 자원의 공유 및 파티셔닝이 필요하다.",
    "answer": "병목현상 (Bottleneck)",
    "explanation": "MySQL Cluster는 비공유 아키텍처를 기반으로 고가용성과 실시간 응답성을 제공하며, 단일 장애점(SPOF) 없이 무중단 서비스를 지원하는 인메모리 기반 분산 데이터베이스 시스템입니다."
  },
  {
    "id": "adp-2-subj-20",
    "subject": 12,
    "subjectTitle": "데이터 처리 기술 이해",
    "type": "subjective",
    "question": "호스트 컴퓨터에서 다수의 운영 체제를 동시에 실행하도록 하기 위한 논리적인 플랫폼으로, 물리적 서버 위에 존재하는 가상화 레이어를 통해 운영체제를 수행하는데 필요한 하드웨어 환경을 가상으로 만들어 주는 것은 무엇인가?",
    "answer": "하이퍼바이저 (Hypervisor)",
    "explanation": "하이퍼바이저는 하드웨어 환경 에뮬레이션뿐만 아니라, 시스템 자원 격리/할당, 가상머신들의 소프트웨어 스택 보존 및 완전한 독립적 구동 기능을 모두 성실히 수행한다."
  }
];
