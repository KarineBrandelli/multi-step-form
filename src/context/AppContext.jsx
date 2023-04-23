import React, { useState } from "react";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [period, setPeriod] = useState("monthly");

  const getPlan = JSON.parse(sessionStorage.getItem("plan"));

  return (
    <AppContext.Provider
      value={{
        period,
        setPeriod
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
