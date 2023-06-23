import About from './Components/About/About';
import Contacts from './Components/Contact/Contacts';
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
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
      <Contacts/>
    </>
  );
}

export default App;
