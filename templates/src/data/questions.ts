import { Question } from '../types';
import { ADP_SUBJECT1_QUESTIONS } from './adp-subject1';
import { ADP_SUBJECT2_QUESTIONS } from './adp-subject2';
import { ADP_SUBJECT3_QUESTIONS } from './adp-subject3';
import { ADP_SUBJECT4_QUESTIONS } from './adp-subject4';
import { ADP_SUBJECT5_QUESTIONS } from './adp-subject5';

export const PRESEEDED_QUESTIONS: Question[] = [
  ...ADP_SUBJECT1_QUESTIONS,
  ...ADP_SUBJECT2_QUESTIONS,
  ...ADP_SUBJECT3_QUESTIONS,
  ...ADP_SUBJECT4_QUESTIONS,
  ...ADP_SUBJECT5_QUESTIONS,
  // Subject 1: 소프트웨어 설계
  {
    id: 's1-q1',
    subject: 1,
    subjectTitle: '디자인 싱킹',
    type: 'subjective',
    question: '디자인 싱킹의 5단계 프로세스는 무엇인가요?',
    answer: '공감하기 ➔ 문제정의 ➔ 아이디어 도출 ➔ 프로토타입 ➔ 테스트.'
  },
  {
    id: 's1-q2',
    subject: 1,
    subjectTitle: '소프트웨어 설계',
    type: 'multiple',
    question: '애자일(Agile) 선언문(Manifesto)의 4대 핵심 가치에 부합하지 않는 것은?',
    options: [
      '프로세스와 도구보다는 개인과 상호작용',
      '광범위한 문서화보다는 작동하는 소프트웨어',
      '계약 협상보다는 고객과의 협업',
      '수립된 계획 철저 준수 및 변화 억제하기'
    ],
    answer: '3' // index 3 (4th option)
  },
  {
    id: 's1-q3',
    subject: 1,
    subjectTitle: '디자인 패턴',
    type: 'subjective',
    question: 'GoF(Gang of Four) 디자인 패턴 중 객체 생성 과정을 추상화하는 생성 패턴(Creational Patterns)의 5가지 종류는?',
    answer: '추상 팩토리(Abstract Factory), 빌더(Builder), 팩토리 메서드(Factory Method), 프로토타입(Prototype), 싱글톤(Singleton).'
  },
  {
    id: 's1-q4',
    subject: 1,
    subjectTitle: 'UML 다이어그램',
    type: 'multiple',
    question: 'UML의 구조 다이어그램(Structure Diagram)이 아닌 것은?',
    options: [
      '클래스 다이어그램(Class Diagram)',
      '유스케이스 다이어그램(Usecase Diagram)',
      '패키지 다이어그램(Package Diagram)',
      '컴포넌트 다이어그램(Component Diagram)'
    ],
    answer: '1' // Usecase is a behavior diagram (index 1)
  },
  {
    id: 's1-q5',
    subject: 1,
    subjectTitle: 'UI 설계',
    type: 'subjective',
    question: '누구나 쉽게 이해하고 사용할 수 있어야 한다는 UI 설계 원칙은 무엇인가요?',
    answer: '직관성(Intuitiveness).'
  },

  // Subject 2: 소프트웨어 개발
  {
    id: 's2-q1',
    subject: 2,
    subjectTitle: '형상 관리',
    type: 'multiple',
    question: '형상 관리(Configuration Management)의 기본 절차 4단계 순서로 올바른 것은?',
    options: [
      '식별 ➔ 통제 ➔ 감사 ➔ 기록/보고',
      '통제 ➔ 식별 ➔ 기록/보고 ➔ 감사',
      '식별 ➔ 감사 ➔ 통제 ➔ 기록/보고',
      '기록/보고 ➔ 식별 ➔ 감사 ➔ 통제'
    ],
    answer: '0'
  },
  {
    id: 's2-q2',
    subject: 2,
    subjectTitle: '애플리케이션 테스트',
    type: 'subjective',
    question: '소프트웨어 내부 소스코드를 보며 논리적인 경로를 테스트하는 화이트박스 테스트의 검증 기준(커버리지) 대표적인 3가지는?',
    answer: '구문(Statement) 커버리지, 결정(Decision/Branch) 커버리지, 조건(Condition) 커버리지.'
  },
  {
    id: 's2-q3',
    subject: 2,
    subjectTitle: '블랙박스 테스트',
    type: 'multiple',
    question: '입력 조건의 중간값보다 경계 부근에서 오류가 발생할 확률이 높다는 점을 이용하는 블랙박스 테스트 기법은?',
    options: [
      '동등 분할(Equivalence Partitioning)',
      '원인-결과 그래프(Cause-Effect Graphing)',
      '경계값 분석(Boundary Value Analysis)',
      '오류 예측(Error Guessing)'
    ],
    answer: '2'
  },
  {
    id: 's2-q4',
    subject: 2,
    subjectTitle: '리팩토링',
    type: 'subjective',
    question: '프로그램의 외부 동작을 바꾸지 않고, 내부 코드를 정돈하여 유지보수성을 극대화시키는 작업을 무엇이라 하나요?',
    answer: '리팩토링(Refactoring).'
  },
  {
    id: 's2-q5',
    subject: 2,
    subjectTitle: '알고리즘 정렬',
    type: 'multiple',
    question: '퀵 정렬(Quick Sort)의 최악 시간복잡도와 평균 시간복잡도는 각각 무엇인가요?',
    options: [
      '최악: O(n log n), 평균: O(n log n)',
      '최악: O(n²), 평균: O(n log n)',
      '최악: O(n²), 평균: O(n²)',
      '최악: O(n³), 평균: O(n log n)'
    ],
    answer: '1'
  },

  // Subject 3: 데이터베이스 구축
  {
    id: 's3-q1',
    subject: 3,
    subjectTitle: '트랜잭션',
    type: 'subjective',
    question: '트랜잭션의 4대 특성(ACID)인 원자성, 일관성, 지속성 외에, 연산 중 타 연산이 끼어들 수 없음을 뜻하는 특성은?',
    answer: '격리성/고립성(Isolation).'
  },
  {
    id: 's3-q2',
    subject: 3,
    subjectTitle: '데이터베이스 무결성',
    type: 'multiple',
    question: '관계형 데이터베이스에서 기본키(PK) 값은 절대 중복될 수 없으며 Null 값을 가질 수 없다는 제약 조건은?',
    options: [
      '참조 무결성(Referential Integrity)',
      '도메인 무결성(Domain Integrity)',
      '개체 무결성(Entity Integrity)',
      '사용자 정의 무결성'
    ],
    answer: '2'
  },
  {
    id: 's3-q3',
    subject: 3,
    subjectTitle: '데이터 정규화',
    type: 'subjective',
    question: '데이터 정규화 과정 중, 테이블 내 모든 결정자가 후보키가 되도록 구성하는 단계는 무엇인가요?',
    answer: 'BCNF (Boyce-Codd Normal Form).'
  },
  {
    id: 's3-q4',
    subject: 3,
    subjectTitle: 'SQL 명령어',
    type: 'multiple',
    question: '다음 중 SQL 데이터 제어어(DCL)에 해당하는 명령어가 아닌 것은?',
    options: [
      'GRANT',
      'REVOKE',
      'COMMIT',
      'TRUNCATE'
    ],
    answer: '3' // TRUNCATE is DDL (index 3)
  },
  {
    id: 's3-q5',
    subject: 3,
    subjectTitle: '데이터베이스 이상현상',
    type: 'subjective',
    question: '릴레이션 조작 시 데이터의 중복성으로 인해 곤란을 겪는 세 가지 이상 현상(Anomaly)은?',
    answer: '삽입 이상, 삭제 이상, 갱신 이상.'
  },

  // Subject 4: 프로그래밍 언어 활용
  {
    id: 's4-q1',
    subject: 4,
    subjectTitle: '네트워크 OSI 7계층',
    type: 'multiple',
    question: 'OSI 7계층 중 물리적으로 링크된 두 인접 노드 간 신뢰성 있는 데이터 전송을 보장하고, 프레임 단위를 다루는 계층은?',
    options: [
      '물리 계층(Physical)',
      '데이터 링크 계층(Data Link)',
      '네트워크 계층(Network)',
      '전송 계층(Transport)'
    ],
    answer: '1'
  },
  {
    id: 's4-q2',
    subject: 4,
    subjectTitle: '운영체제 교착상태',
    type: 'subjective',
    question: '데드락(교착상태)의 4가지 발생 필요조건 중, 프로세스가 점유한 자원을 다른 프로세스가 강제로 뺏을 수 없음을 가리키는 조건은?',
    answer: '비선점(No Preemption).'
  },
  {
    id: 's4-q3',
    subject: 4,
    subjectTitle: '암호화 알고리즘',
    type: 'multiple',
    question: '대칭키 암호화 알고리즘이 아닌 것은?',
    options: [
      'AES',
      'DES',
      'RSA',
      'SEED'
    ],
    answer: '2' // RSA is asymmetric (index 2)
  },
  {
    id: 's4-q4',
    subject: 4,
    subjectTitle: '프로그래밍 메모리',
    type: 'subjective',
    question: '페이지 교체 알고리즘 중 가장 오랜 시간 사용되지 않은 페이지를 우선 교체하는 기법은?',
    answer: 'LRU(Least Recently Used).'
  },
  {
    id: 's4-q5',
    subject: 4,
    subjectTitle: '소프트웨어 개발 보안',
    type: 'multiple',
    question: '웹페이지에 악성 스크립트를 삽입하여 열람자의 개인정보를 유출하거나 세션 정보를 가로채는 대표적 취약점 공격 방식은?',
    options: [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'Buffer Overflow',
      'DDoS'
    ],
    answer: '1'
  },
  // Subject 5: 정보보안기사
  {
    id: 's5-q1',
    subject: 5,
    subjectTitle: '시스템 보안 / 암호학',
    type: 'subjective',
    question: '대칭키 암호화 알고리즘 중 블록 암호화 방식의 하나로, 미국 표준 기술 연구소(NIST)에 의해 공모되어 선정된 알고리즘으로 AES의 핵심 구조가 되는 것은?',
    answer: 'Rijndael (레인달).'
  },
  {
    id: 's5-q2',
    subject: 5,
    subjectTitle: '네트워크 보안',
    type: 'multiple',
    question: 'TCP 3-way Handshake 과정에서 서버의 대기 큐(Backlog Queue)를 가득 채워 정상적인 연결 요청을 받지 못하게 하는 서비스 거부(DoS) 공격은 무엇인가요?',
    options: [
      'Ping of Death',
      'SYN Flooding',
      'Smurf Attack',
      'Tear Drop'
    ],
    answer: '1' // SYN Flooding
  },
  {
    id: 's5-q3',
    subject: 5,
    subjectTitle: '애플리케이션 보안',
    type: 'subjective',
    question: '웹 취약점 중 하나로, 공격자가 입력 값에 악성 스크립트를 삽입하여 사용자 브라우저에서 실행되도록 하는 취약점을 일컫는 용어는?',
    answer: 'XSS (Cross-Site Scripting, 크로스 사이트 스크립팅).'
  }
];
