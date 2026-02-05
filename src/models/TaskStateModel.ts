import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
    tasks: TaskModel[]; // Histórico, MainForm
    secondsRemaining: number; // CountDown, Histórico, MainForm, Button
    formattedSecondsRemaining: string; // Título, CountDown
    activeTask: TaskModel | null; // Histórico, MainForm, Button
    currentCycle: number; // Home
    config: {
        workTime: number; // MainForm
        shortBreakTime: number; // 
        longBreakTime: number; // MainForm
    }
}