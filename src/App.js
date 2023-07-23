import Cover from './Components/Cover';
import About from './Components/About';
import logo from './logo.svg';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Stats from './Components/Stats';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Cover />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Stats />
      <Contact />
      <Footer />
      {0 && <div id="preloader">
        <div id="loader"></div>
      </div>}
    </div>
  );
}

export default App;
