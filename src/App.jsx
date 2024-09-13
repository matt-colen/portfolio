import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import About from "./components/About/About.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
