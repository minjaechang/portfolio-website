import './App.css';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';

function App() {
  return (
    <div class='container'>
      <Navbar />
      <Intro />
      <Projects />

      {/* <!-- contact --> */}
      <section id='contact' class='contact'>
        <div class='contact__text'>
          <h4 class='logo'>minjae</h4>
          <p class='contact__email'>minjae.j.chang@gmail.com</p>
          <p class='contact__location'>Auckland, New Zealand</p>
        </div>
        <div class='contact__social-media'>
          <a href=''>
            <i class='fab fa-github'></i>
          </a>
          <a href='https://www.linkedin.com/in/minjaechang/'>
            <i class='fab fa-linkedin'></i>
          </a>
          <a href='/'>
            <i class='fab fa-twitter'></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
