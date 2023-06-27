import { useState } from "react";
import "./App.css";
import { Films } from "./page/Films";
import FilmDetail from "./components/FilmDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./page/Contact";
import { FooterFilm } from "./components/Footer";
import { Header } from "./components/Header";
import News from "./page/News";
import About from "./page/About";

function App() {
  const [dark, setDark] = useState(true);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Films toggleDark={toggleDark} theme={dark} />}
            ></Route>
            <Route path="detail/:id" element={<FilmDetail />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="about" element={<About />}></Route>
          </Routes>
          <FooterFilm />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
