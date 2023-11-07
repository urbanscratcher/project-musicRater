# MusicRater

## 목적

- 음악 검색, 평가, 평가 항목 관리
- useState, useEffect, useRef, custom use hook 연습에 주력
- React, React-DOM만 사용

## URL
https://music-rater.netlify.app

## 기능

- 유튜브 음악 검색
- 추천 검색어 제공
- 평점 남기기
- 평점 요약 (최저, 최고, 평균)
- 남긴 평점 목록 보기
- 평점 기능은 전역적으로 적용
- 검색창 엔터키(검색), ESC키(취소) 기능 사용

## 데모
https://github.com/urbanscratcher/project-musicRater/assets/17016494/8e236eae-5a6e-4386-9e51-19223b317e7f

## 사용 라이브러리 & 기술

- Vite + React w/ pnpm
- TailwindCSS
- Docker
- react-youtube (YouTube IFrame API)
- react-top-loading-bar

## 백엔드 API
- ytmusicapi 파이썬 라이브러리 이용
- 간단한 GET 엔드포인트로 이루어진 API
- 현재 오라클 클라우드에 도커로 배포 (https://placidgull.com/ytapi 도메인 연결)
- CORS 적용

## 개발 여담
- 리액트 복습 개념으로 시작한 프로젝트...인데 API가 필요하네 -> 필요한 라이브러리 찾음 -> 파이썬이네 -> 어찌어찌 만듦
  -> 서버가 필요하네 -> AWS 만료 -> 평생 무료라는 오라클 클라우드 갈아탐 -> 오라클용 용어 같은 거 찾아보고 서버 세팅
  -> nginx 구성 -> https도 필요하네 -> 도메인 받기 -> 다시 세팅 등등등 순수 개발 외적인 부분에 80%의 시간을 잡아먹었다
- 검색창 구현이 좀 재밌었다
- 리액트와 찰떡이라는 테일윈드를 본격적으로 사용하기 시작했는데 역시 CSS를 잘 아는 상태에서 사용하는 게 맞는 것 같다. 정말 편함.
  - 아쉬운 점은 역시 가독성인데, 순서를 정리해주는 VS플러그인을 써도 임의의 숫자를 넣는 [ ] 문법은 인식하지 못하는 것 같아서 그냥 수동으로 관리할 수 밖에 없었다
- Vite 속도도 진짜 빠르다고 체감되었다
- 요즘 작업할 때마다 사용하는데 생각보다 쏠쏠(?)하다
  - 유튭 검색 API를 이용한 다른 아이디어도 생각나서 확장해볼까 생각 중
