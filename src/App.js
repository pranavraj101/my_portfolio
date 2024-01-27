import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#11071F"}}>
      <Navbar/>
      <Home />
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
