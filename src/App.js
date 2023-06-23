import About from './Components/About/About';
import Contacts from './Components/Contact/Contacts';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import Projects from './Components/Projects/Projects';
import Qualification from './Components/Qualification/Qualification';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
