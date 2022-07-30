import styles from './projects.module.css';

const Projects = (props) => (
  <section id='works' className={styles.projects}>
    <h2 className={styles.projects__msg}>
      These are some of my featured projects
    </h2>
    <div className={styles.projects__list}>
      <div className={styles.project}>
        <div className={styles.project__img}>
          <img src='./images/responsive-website.jpeg' alt='project' />
        </div>
        <h3 className={styles.project__title}>Online Shopping</h3>
        <p className={styles.project__description}>
          Responsive website made of HTML and CSS
        </p>
        <a
          className={styles.project__link}
          href='https://goofy-murdock-a8cd13.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          Link to project
        </a>
      </div>
      <div className={styles.project}>
        <div className={styles.project__img}>
          <img src='./images/chatbot.png' alt='project' />
        </div>
        <h3 className={styles.project__title}>Coffee Chatbot</h3>
        <p className={styles.project__description}>
          Chatbot made of JavaScript only
        </p>
        <a
          className={styles.project__link}
          href='https://reverent-bell-fa5d38.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          Link to project
        </a>
      </div>
      <div className={styles.project}>
        <div className={styles.project__img}>
          <img src='./images/reservationizer.jpeg' alt='project' />
        </div>
        <h3 className={styles.project__title}>Reservationizr</h3>
        <p className={styles.project__description}>
          Website to make reservation to restaurants <br />
          Made of React, Node/Express + MongoDB
        </p>
        <a
          className={styles.project__link}
          href='https://priceless-minsky-ec98b8.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          Link to project
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
