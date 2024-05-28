
# MusicRater

## Purpose

- Music search, rating, and rating item management
- Focus on practicing useState, useEffect, useRef, custom hooks
- Only using React and React-DOM

## URL
https://music-rater.netlify.app

## Features

- Search for music on YouTube
- Provide recommended search terms
- Leave ratings
- Rating summary (minimum, maximum, average)
- View list of ratings
- Rating function is applied globally
- Search box uses Enter key (search), ESC key (cancel) functionality

## Demo
https://github.com/urbanscratcher/project-musicRater/assets/17016494/8e236eae-5a6e-4386-9e51-19223b317e7f

## Libraries & Technologies Used

- Vite + React w/ pnpm
- TailwindCSS
- react-youtube (YouTube IFrame API)
- react-top-loading-bar

## Backend API
- Using ytmusicapi Python library
- Simple GET endpoint API
- Currently deployed with Docker on Oracle Cloud (connected to a domain I own at https://****)
- CORS applied

## Development Notes
- Started as a project to review React concepts... then I needed an API -> found the necessary library -> it's in Python -> somehow managed to make it
  -> needed a server -> AWS expired -> switched to Oracle Cloud because it's free forever -> researched Oracle-specific terms and set up the server
  -> configured nginx -> needed https -> got a domain -> reset everything, etc. Spent 80% of the time on non-development tasks.
- Implementing the search box was fun.
- Started using TailwindCSS, which is said to be perfect with React, and it really is convenient, especially if you already know CSS well.
  - The downside is readability. Even with a VS plugin that sorts order, it seems to not recognize the arbitrary numbers in the [ ] syntax, so I had to manage it manually.
- I use it often these days and it's surprisingly useful.
  - Considering extending this idea using the YouTube search API for other projects.


