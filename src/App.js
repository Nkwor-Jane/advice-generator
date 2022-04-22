import { createContext,useState } from "react";
import "./App.css"
import Generator from "./components/Generator";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () =>{
    setTheme((curr) => (
      curr ==="dark" ? "light":"dark"
    ))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
      <Generator/>

      {/* switch slider for light/dark mode */}
      <div className="switch-checkbox">
              <span id="mode-text">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme}/>
                    <span className="slider round"> </span>
                </label>
                </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
