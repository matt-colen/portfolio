import thumbnail1 from "./assets/images/quiz-up.png";
import thumbnail2 from "./assets/images/movie-watchlist.png";
import thumbnail3 from "./assets/images/twimba.png";

const projects = [
  {
    name: "Quiz Up",
    description: "An app to test your skills on various topics",
    tags: ["React", "API"],
    thumbnail: thumbnail1,
    link: "https://quiz-up-mc.netlify.app/",
    github: "https://github.com/matt-colen/quiz-up",
  },
  {
    name: "Movie Watchlist",
    description: "An app to search for movies and create a watchlist",
    tags: ["JS", "API", "Netlify Serverless Functions"],
    thumbnail: thumbnail2,
    link: "https://movie-watchlist-mc.netlify.app",
    github: "https://github.com/matt-colen/movie-watchlist",
  },
  {
    name: "Twimba",
    description: "A clone of the Twitter (X) app",
    tags: ["JS", "Firebase Database", "Firebase Auth"],
    thumbnail: thumbnail3,
    link: "https://twimba-mc.netlify.app/",
    github: "https://github.com/matt-colen/twimba",
  },
];

export default projects;
