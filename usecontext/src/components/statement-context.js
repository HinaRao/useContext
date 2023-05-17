import React from "react";

export const StatementsContext = React.createContext();

export const StatementsProvider = ({ children }) => {
  const [statements, setStatements] = React.useState({
    sum: 0,
    sub: 0,
    div: 0,
  });

  return (
    <StatementsContext.Provider value={{ statements, setStatements }}>
      {children}
    </StatementsContext.Provider>
  );
};