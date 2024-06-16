# Music Rater

[Visit the site](https://music-rater.netlify.app)

October 2023 ~ November 2023 (2 Months)

This music rating website was completed after taking a React course. I focused on practicing basic React features and use hooks, as well as understanding global state management.

## Features
- **Keyword Suggestions**: Recommended keywords appear when you type keywords in the search bar.
- **Search Convenience**: You can search conveniently using the ESC key to cancel search, arrow keys to select search terms, and the Enter key to search.
- **Music Search**: You can search for YouTube music.
- **Music Rating**: You can rate music, and the rated items are automatically saved to the vault.
- **Rating Summary**: You can see the minimum, maximum, and average ratings, and the ratings are reflected globally in real time when you add or modify ratings.
- **Rating Item Management**: You can delete rating items saved in the vault and modify ratings directly from the list.

## Technical Focus
- I used only React and React-DOM without any other libraries.
- I focused on practicing `useState`, `useEffect`, `useRef`, and custom use hooks.

## Demo
<video src="https://github.com/urbanscratcher/project-musicRater/assets/17016494/90a09aa0-fa15-4d64-b22f-615f3100ce2a" controls></video>

## Tech Stack
### Frontend
- **Library**: React
- **Styling**: TailwindCSS
- **Component Library**: react-top-loading-bar
- **Storage**: localStorage

### Backend
- I developed an API separately in Python using a third-party library to wrap YouTube music search. [Go to GitHub](https://github.com/urbanscratcher/api-yt-music)
- **Third-party library**: ytmusicapi
- **Framework**: FastAPI
- **ASGI Server**: Uvicorn
  - Server for asynchronous communication between Python projects and web servers

### Development Environment
- **Package Management**: pnpm
- **Build Tool**: Vite

### Cloud Services and Deployment
- **API Deployment**: Oracle Cloud, Docker, Nginx (connected to personal domain link(https://***))
- **Hosting and Deployment**: Netlify

---
## Reflection
- I started this project as a React concept review, but I needed an API. I found the necessary library in Python and made it work somehow. However, I realized that I needed a server, and my AWS account had already expired. So I switched to Oracle Cloud, which is free for life, and set up a server. After learning Oracle terminology and configuring Nginx, I learned that I also needed an HTTPS address to solve the CORS issue. Eventually, I had to purchase a domain and set it up again. As a result, I spent 80% of my time on non-development tasks.
- Implementing the search bar was really fun.
- I tried using TailwindCSS, which is well-suited for React, and realized that it is more effective to use it when I know CSS well.
- However, the downside of TailwindCSS was its readability. I used a VS plugin to sort the order, but it seemed not to recognize the [] syntax with arbitrary numbers, so I had to sort it manually.
- I've been using it a lot lately in my work, and it's more substantial than I thought.
- I'm also thinking of expanding it using the YouTube Search API.
