// import { db } from "../../firebase";

// tasks: [
//   {
//     id: 0,
//     title: "this is title 1",
//     desc: "this description 1",
//     isCompleted: false,
//   },
//   {
//     id: 1,
//     title: "this is title 2",
//     desc: "this description 2",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     title: "this is title 3",
//     desc: "this description 3",
//     isCompleted: false,
//   },

export const initState = {
  tasks: [],
  user: {},
};
// WHEN FREE DO IT FOR DELETE AND TOGGLE
// function findTaskById(id, cb) {
//   for (let i = 0; i < newTasks.length; i++) {
//     if (newTasks[i].id === id) {
//       cb();
//     }
//   }
// }

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
