import { useState } from "react";
import "./App.css";
import { Films } from "./components/Films";
import FilmDetail from "./components/FilmDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact ";
import { FooterFilm } from "./components/Footer";
import { Header } from "./components/Header";

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
          </Routes>
          <FooterFilm />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
