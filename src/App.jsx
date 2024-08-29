import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Home page */}
        <Route
          path="/about"
          element={
            <>
              <Main showAbout />
            </>
          }
        />{" "}
        {/* About page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
