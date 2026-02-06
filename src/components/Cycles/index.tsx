import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: "trabalho",
    shortBreakTime: "pausa curta",
    longBreakTime: "pausa longa",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>

      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => (
          <span
            key={index}
            className={`${styles.cycleDot} ${styles[state.tasks[index].type]}`}
            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[state.tasks[index].type]}`}
            title={`Ciclo de ${cycleDescriptionMap[state.tasks[index].type]}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
