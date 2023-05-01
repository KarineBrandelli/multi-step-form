import { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { GoBackButton } from "../Button/GoBackButton";
import { NextStepButton } from "../Button/NextStepButton";

import { plansStep3 } from "./helpers/plansStep3";

export const Step3 = () => {
  const { selectedPlanAdds, setSelectedPlanAdds, period } =
    useContext(AppContext);

  const handleChange = (event, selectedAdds) => {
    let addsList = [...selectedPlanAdds];
    if (event.target.checked) {
      addsList = [...selectedPlanAdds, selectedAdds];
    } else {
      addsList.splice(selectedPlanAdds.indexOf(selectedAdds), 1);
    }
    setSelectedPlanAdds(addsList);
  };

  const isChecked = (item) => selectedPlanAdds.includes(item);

  return (
    <>
      <div className="w-full">
        <h4 className="font-bold text-2xl lg:text-4xl text-blue-marine mb-3 text-center min-[425px]:text-left">
          Pick add-ons
        </h4>
        <p className="text-gray-cool text-sm lg:text-lg mb-5 lg:mb-10 text-center min-[425px]:text-left">
          Add-ons help enhance your gaming experience.
        </p>

        {plansStep3.map((adds, index) => (
          <div
            key={index}
            className={`${
              isChecked(adds) ? "active-checkbox" : "not-checked-item"
            }  p-2 lg:px-8 lg:py-6 rounded-lg flex items-center justify-between mb-3 cursor-pointer border-[1px] border-gray-cool hover:ring-[1px] hover:ring-blue-purplish hover:border-[1px] hover:border-blue-purplish transition duration-300`}
          >
            <div className="flex justify-between items-center gap-3 lg:gap-8">
              <input
                value={adds}
                type="checkbox"
                className="lg:h-6 lg:w-6 accent-blue-purplish"
                onChange={(event) => handleChange(event, adds)}
                checked={isChecked(adds)}
              />

              <div>
                <h3 className="text-blue-marine font-medium text-sm lg:text-lg">
                  {adds.title}
                </h3>
                <span className="text-gray-cool text-xs lg:text-base">
                  {adds.description}
                </span>
              </div>
            </div>
            <span className="text-blue-purplish text-xs lg:text-base font-medium">
              {period === "monthly"
                ? `+$${adds.monthlyPrice}/mon`
                : `+$${adds.yearlyPrice}/yr`}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <Link to={"/Step2"}>
          <GoBackButton />
        </Link>
        <Link to={"/Step4"}>
          <NextStepButton />
        </Link>
      </div>
    </>
  );
};
