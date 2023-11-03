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
- 현재 오라클 클라우드에 도커로 배포
- https://placidgull.com/ytapi 도메인 연결
- CORS
