export const initState = {
  tasks: [],
  user: {},
};

let newTasks;
export function reducer(state, action) {
  switch (action.type) {
    case "EDIT_TASKS":
      return { ...state, tasks: action.payload };
    case "ADD_TASK":
      let newTasksObj = {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...action.payload,
          },
        ],
      };
      return newTasksObj;
    case "TOGGLE_TASK_STATUS":
      newTasks = [...state.tasks];
      for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload) {
          newTasks[i] = {
            ...newTasks[i],
            isCompleted: !newTasks[i].isCompleted,
          };
        }
      }
      return { ...state, tasks: newTasks };
    case "DELETE_TASK":
      newTasks = [...state.tasks];
      for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload) {
          newTasks.splice(i, 1);
          break;
        }
      }
      return { ...state, tasks: newTasks };
    case "EDIT_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: {} };
    default:
      console.log("Nothing match the type of action");
  }
}
