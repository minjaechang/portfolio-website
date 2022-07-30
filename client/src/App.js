import './App.css';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';

function App() {
  return (
    <div class='container'>
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
