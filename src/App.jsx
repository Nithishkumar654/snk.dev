// src/App.jsx
import { ThemeProvider } from "./hooks/useTheme";
import ThemeCanvas from "./components/ThemeCanvas";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import {
  Skills,
  Experience,
  Projects,
  Achievements,
  Contact,
} from "./components/Sections";

function Portfolio() {
  return (
    <>
      {/* Fixed animated canvas — z-index 0, behind everything */}
      <ThemeCanvas />

      {/* Floating theme switcher — z-index 999 */}
      <ThemeSwitcher />

      {/* Main scrollable content — z-index 1, sits above canvas */}
      <div id="main-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
