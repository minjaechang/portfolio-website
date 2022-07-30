import styles from './contact.module.css';

const Contact = (props) => (
  <section id='contact' className={styles.contact}>
    <div className={styles.contact__text}>
      <h4 className={styles.logo}>minjae</h4>
      <p className={styles.contact__email}>minjae.j.chang@gmail.com</p>
      <p className={styles.contact__location}>Auckland, New Zealand</p>
    </div>
    <div className={styles.contact__socialMedia}>
      <a href=''>
        <i className='fab fa-github'></i>
      </a>
      <a href='https://www.linkedin.com/in/minjaechang/'>
        <i className='fab fa-linkedin'></i>
      </a>
      <a href='/'>
        <i className='fab fa-twitter'></i>
      </a>
    </div>
  </section>
);

export default Contact;
