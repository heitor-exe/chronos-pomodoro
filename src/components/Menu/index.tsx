import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";

type AvailabeThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailabeThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailabeThemes;
    return storageTheme || "dark";
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
