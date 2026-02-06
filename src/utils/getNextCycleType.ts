import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
    if(currentCycle % 8 === 0) return 'longBreakTime'; // numero impar
    if(currentCycle % 2 === 0) return 'shortBreakTime'; // numero par
    return 'workTime'; // numero impar
}