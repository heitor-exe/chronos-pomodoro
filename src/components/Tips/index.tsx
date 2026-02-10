import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCyleType = getNextCycleType(state.currentCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <b>{state.config.longBreakTime}min</b>
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso é de <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo descanso será <b>longo</b>
      </span>
    ),
  };
  return (
    <>
      {state.activeTask
        ? tipsForWhenActiveTask[state.activeTask.type]
        : tipsForNoActiveTask[nextCyleType]}
    </>
  );
}
