import { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const StateProvider = ({ reducer, initState, children }) => {
  const contextValue = useReducer(reducer, initState); // will return [{state}, dispatch()]
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
