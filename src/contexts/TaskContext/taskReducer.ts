import { TaskActionTypes, type TaskActionModel } from "./taskActions";
import type { TaskStateModel } from "../../models/TaskStateModel";

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel {
    // Sempre deve retornar o estado
    switch (action.type) {
        case TaskActionTypes.START_TASK:
            return state;
        case TaskActionTypes.INTERRUPT_TASK:
            return state;
        case TaskActionTypes.RESET_TASK:
            return state;
        default:
            return state;
    }
}