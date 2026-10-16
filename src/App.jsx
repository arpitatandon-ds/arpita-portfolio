import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App(){

return(

<>

<Navbar/>

<main className="overflow-hidden">
  <Hero/>
  <About/>
  <Skills/>
  <Experience/>
  <Projects/>
  <Certifications/>
  <Achievements/>
  <Contact/>
</main>

<Footer/>

</>

)

}


export default App;