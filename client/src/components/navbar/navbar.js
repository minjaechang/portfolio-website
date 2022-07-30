import styles from './navbar.module.css';

const Navbar = (props) => {
  return (
    <navbar className={styles.navbar}>
      <h4 className={styles.logo}>minjae</h4>
      <ul className={styles.navbar__menu}>
        <li className={styles.navbar__item} data-link='#about'>
          About
        </li>
        <li className={styles.navbar__item} data-link='#works'>
          Featured
        </li>
        <li className={styles.navbar__item} data-link='#contact'>
          Contact
        </li>
      </ul>
      <span className={styles.navbar__toggleBtn}>
        <i className='fas fa-bars'></i>
      </span>
    </navbar>
  );
};

export default Navbar;
