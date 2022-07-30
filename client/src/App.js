import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div class='container'>
      <Navbar />

      {/* <!-- introduction --> */}
      <section id='about' class='introduction'>
        <h1 class='introduction__title'>Hey, I'm Minjae</h1>
        <p class='introduction__msg'>
          I'm a student web developer living in New Zealand. I love trying new
          things and solving problems.
        </p>
      </section>

      {/* <!-- projects --> */}
      <section id='works' class='projects'>
        <h2 class='projects__msg'>These are some of my featured projects</h2>
        <div class='projects__list'>
          <div class='project'>
            <div class='project__img'>
              <img src='./images/responsive-website.jpeg' alt='project' />
            </div>
            <h3 class='project__title'>Online Shopping</h3>
            <p class='project__description'>
              Responsive website made of HTML and CSS
            </p>
            <a
              class='project__link'
              href='https://goofy-murdock-a8cd13.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              Link to project
            </a>
          </div>
          <div class='project'>
            <div class='project__img'>
              <img src='./images/chatbot.png' alt='project' />
            </div>
            <h3 class='project__title'>Coffee Chatbot</h3>
            <p class='project__description'>Chatbot made of JavaScript only</p>
            <a
              class='project__link'
              href='https://reverent-bell-fa5d38.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              Link to project
            </a>
          </div>
          <div class='project'>
            <div class='project__img'>
              <img src='./images/reservationizer.jpeg' alt='project' />
            </div>
            <h3 class='project__title'>Reservationizr</h3>
            <p class='project__description'>
              Website to make reservation to restaurants <br />
              Made of React, Node/Express + MongoDB
            </p>
            <a
              class='project__link'
              href='https://priceless-minsky-ec98b8.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              Link to project
            </a>
          </div>
        </div>
      </section>

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
