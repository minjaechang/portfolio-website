import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => (
  <section id='contact' className={styles.contact}>
    <div className={styles.contact__text}>
      <h4 className='logo'>minjae</h4>
      <p className={styles.contact__email}>minjae.j.chang@gmail.com</p>
      <p className={styles.contact__location}>Auckland, New Zealand</p>
    </div>
    <div className={styles.contact__socialMedia}>
      <FontAwesomeIcon icon={faCoffee} href='https://github.com/minjaechang' />
      <a href='https://www.linkedin.com/in/minjaechang/'>
        <i className='fab fa-linkedin'></i>
      </a>
      {/* <a href='/'>
        <i className='fab fa-twitter'></i>
      </a> */}
    </div>
  </section>
);

export default Contact;
