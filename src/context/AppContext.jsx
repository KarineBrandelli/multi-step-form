import React, { useState } from "react";
import { plansStep2 } from "../components/Steps/helpers/plansStep2";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(plansStep2[0]);
  const [period, setPeriod] = useState("monthly");
  const [selectedPlanAdds, setSelectedPlanAdds] = useState([]);

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
