import { home, star2 } from "../../assets";

export const initState = {
  tasks: [],
  user: {},
  lists: [
    { name: "home", icon: home },
    { name: "favorites", icon: star2 },
  ],
  currentList: "home",
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
    case "TOGGLE_TASK_STAR":
      newTasks = [...state.tasks];
      for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload.id) {
          // let newTaskLists;
          // let oldTaskLists = [...newTasks[i].lists];
          // console.log("old lists", oldTaskLists);
          // const indexOfFavorites = oldTaskLists.indexOf("favorites");
          // console.log("is has star:", indexOfFavorites);
          // if (indexOfFavorites === -1) {
          //   newTaskLists = [...oldTaskLists, "favorites"];
          // } else {
          //   oldTaskLists.splice(indexOfFavorites, 1);
          //   newTaskLists = oldTaskLists;
          // }
          // console.log("new lists", newTaskLists);
          newTasks[i] = {
            ...newTasks[i],
            hasStar: !newTasks[i].hasStar,
            lists: action.payload.newLists,
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
    case "EDIT_CURRENT_LIST":
      return { ...state, currentList: action.payload };
    case "EDIT_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: {} };
    default:
      console.log("Nothing match the type of action");
  }
}
