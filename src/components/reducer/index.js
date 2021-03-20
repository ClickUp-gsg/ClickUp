import { home, star2 } from "../../assets";

const defaultLists = [
  { name: "home", icon: home },
  { name: "favorites", icon: star2 },
];

export const initState = {
  tasks: [
    // {
    //   id: 1,
    //   title: "header",
    //   desc: "description",
    //   isCompleted: false,
    //   hasStar: true,
    //   lists: ["home", "favorites"],
    // },
  ],
  user: {},
  lists: [...defaultLists], // for tasks lists
  currentList: "home",
  signErrors: {},
};

// let newTasks;
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
    case "TOGGLE_TASK_STATUS": {
      let newTasks = [...state.tasks];
      for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload) {
          newTasks[i] = {
            ...newTasks[i],
            isCompleted: !newTasks[i].isCompleted,
          };
        }
      }
      return { ...state, tasks: newTasks };
    }
    case "TOGGLE_TASK_STAR": {
      let newTasks = [...state.tasks];
      for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload.id) {
          newTasks[i] = {
            ...newTasks[i],
            hasStar: !newTasks[i].hasStar,
            lists: action.payload.newLists,
          };
        }
      }
      return { ...state, tasks: newTasks };
    }
    case "TOGGLE_TASK_PIN": {
      let newTasks = [...state.tasks];
      for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload) {
          newTasks[i] = {
            ...newTasks[i],
            isPinned: !newTasks[i].isPinned,
          };
        }
      }
      return { ...state, tasks: newTasks };
    }
    case "DELETE_TASK": {
      let newTasks = [...state.tasks];
      for (let i = 0; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload) {
          newTasks.splice(i, 1);
          break;
        }
      }
      return { ...state, tasks: newTasks };
    }
    case "EDIT_CURRENT_LIST":
      return { ...state, currentList: action.payload };
    case "EDIT_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: {}, lists: defaultLists, tasks: [] };
    case "SET_SIGN_ERRORS":
      return {
        ...state,
        signErrors: { ...action.payload },
      };
    case "CLEAR_SIGN_ERRORS":
      return { ...state, signErrors: {} };
    case "ADD_NEW_LIST":
      return { ...state, lists: [...state.lists, action.payload] };
    case "SET_LISTS":
      return {
        ...state,
        lists: [...defaultLists, ...action.payload],
      };
    case "DELETE_LIST": {
      let newLists = [...state.lists];
      for (let i = 0; i < newLists.length; i++) {
        if (newLists[i].name === action.payload) {
          newLists.splice(i, 1);
        }
      }
      return {
        ...state,
        lists: newLists,
      };
    }
    case "EDIT_LIST": {
      let newLists = [...state.lists];
      for (let i = 0; i < newLists.length; i++) {
        if (newLists[i].name === action.payload.id) {
          newLists[i].name = action.payload.newName;
        }
      }
      return {
        ...state,
        lists: newLists,
      };
    }
    default:
      console.log("Nothing match the type of action");
  }
}
