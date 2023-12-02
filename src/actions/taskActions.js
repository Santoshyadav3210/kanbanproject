import { ADD_TASK, SET_ERROR ,UPDATE_TASK, DELETE_TASK} from './actionTypes';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const setError = (errorMessage) => {
  return {
    type: SET_ERROR,
    payload: errorMessage,
  };
};

export const updateTask = (updatedTask) => {
    return {
      type: UPDATE_TASK,
      payload: updatedTask,
    };
  };

  export const deleteTask = (taskId) => {
    return {
      type: DELETE_TASK,
      payload: taskId,
    };
  };

