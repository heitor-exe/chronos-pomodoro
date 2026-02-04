import { useState } from "react";
import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

type AvailabeThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailabeThemes>("dark");

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    // Não segue o link
    event.preventDefault();

    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme;
    });

    // document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para Home"
        title="Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Tema"
        onClick={handleTheme}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
