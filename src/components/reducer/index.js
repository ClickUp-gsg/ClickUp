export const initState = {
  tasks: [
    {
      id: 0,
      title: "this is title 1",
      desc: "this description 1",
      isCompleted: false,
    },
    {
      id: 1,
      title: "this is title 2",
      desc: "this description 2",
      isCompleted: true,
    },
    {
      id: 2,
      title: "this is title 3",
      desc: "this description 3",
      isCompleted: false,
    },
  ],
  isLoading: false,
  user: {},
};

let id = 3;

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { id: id++, ...action.payload }],
      };
    case "EDIT_TASKS":
      return { ...state, tasks: action.payload };
    case "EDIT_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: {} };
    default:
      console.log("Nothing match the type of action");
  }
}
