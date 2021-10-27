import { createContext, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export const Provider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
