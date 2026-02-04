import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda a técnica pomodoro 🍅</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ☕
      </a>
      <a href="https://github.com/heitor-exe">Heitor Macedo</a>
    </footer>
  );
}
