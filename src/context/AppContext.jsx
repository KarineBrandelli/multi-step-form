import React, { useState } from "react";
import { plansStep2 } from "../components/Steps/helpers/plansStep2";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(plansStep2[0]);
  const [period, setPeriod] = useState("monthly");
  const [selectedPlanAdds, setSelectedPlanAdds] = useState([]);
  
  const CalcPlansTotal = () => {
    let plansTotalValue =
      period === "monthly"
        ? selectedPlan.monthlyPrice
        : selectedPlan.yearlyPrice;
    if (selectedPlanAdds.length > 0) {
      selectedPlanAdds.map((adds) =>
        period === "monthly"
          ? (plansTotalValue += adds.monthlyPrice)
          : (plansTotalValue += adds.yearlyPrice)
      );
    }
    return plansTotalValue;
  };

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        selectedPlan,
        setSelectedPlan,
        period,
        setPeriod,
        selectedPlanAdds,
        setSelectedPlanAdds,
        CalcPlansTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
