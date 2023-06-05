import { useState } from "react";
import "./App.css";
import { Films } from "./components/Films";

function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div>
      {dark ? (
        <div className="App">
          <Films toggleDark={toggleDark} theme="light" />
        </div>
      ) : (
        <div className="App-light">
          <Films toggleDark={toggleDark} theme="dark" />
        </div>
      )}
    </div>
  );
}

export default App;
