import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [homePage, setHomePage] = useState(true);

  return (
    <div>
      <Header homePage={homePage} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
