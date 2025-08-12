import Hero from "./sections/Hero"
import About from "./sections/About";
import Projects from "./sections/Projects";
import NavBar from "./components/NavBar";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
};

export default App