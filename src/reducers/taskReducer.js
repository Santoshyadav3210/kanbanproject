const initialState = {
  tasks: [],
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        error: null,
      };
    case 'UPDATE_TASK':
      const updatedTasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            name: action.payload.name,
            stage: action.payload.stage,
            priority: action.payload.priority,
            deadline: action.payload.deadline,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

      case 'DELETE_TASK':
        const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
        return {
          ...state,
          tasks: filteredTasks,
          error: null,
        };
    default:
      return state;
  }
};

export default taskReducer;

  
  
  
