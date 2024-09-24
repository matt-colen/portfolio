import thumbnail1 from "../assets/images/quiz-up.png";
import thumbnail2 from "../assets/images/movie-watchlist.png";
import thumbnail3 from "../assets/images/sky-watch.png";

const projects = [
  {
    name: "Sky Watch",
    description: "An app to find the current weather for any destination",
    tags: ["React", "API", "Netlify Serverless Functions"],
    thumbnail: thumbnail3,
    link: "https://sky-watch-mc.netlify.app/",
    github: "https://github.com/matt-colen/sky-watch",
  },
  {
    name: "Quiz Up",
    description: "An app to test your knowledge on various topics",
    tags: ["React", "API"],
    thumbnail: thumbnail1,
    link: "https://quiz-up-mc.netlify.app/",
    github: "https://github.com/matt-colen/quiz-up",
  },
  {
    name: "Movie Watchlist",
    description: "An app to search for movies and build a watchlist",
    tags: ["JS", "API", "Netlify Serverless Functions"],
    thumbnail: thumbnail2,
    link: "https://movie-watchlist-mc.netlify.app",
    github: "https://github.com/matt-colen/movie-watchlist",
  },
];

export default projects;
