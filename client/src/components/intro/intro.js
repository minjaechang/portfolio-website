import styles from './intro.module.css';

const Intro = (props) => (
  <section id='about' class={styles.introduction}>
    <h1 class={styles.title}>Hey, I'm Minjae</h1>
    <p class={styles.msg}>
      I'm a full stack developer having experiences using modern JavaScript
      frameworks.
    </p>
  </section>
);

export default Intro;
