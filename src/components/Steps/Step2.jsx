import { useContext } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { GoBackButton } from "../Button/GoBackButton";
import { NextStepButton } from "../Button/NextStepButton";
import { AppContext } from "../../context/AppContext";

import { plansStep2 } from "./helpers/plansStep2";

export const Step2 = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  function handleClick(planName) {
    sessionStorage.setItem('plan', planName);
    setSelectedPlan(planName)
  }

  console.log(selectedPlan)

  return (
    <>
      <div>
        <h4 className="font-bold text-2xl lg:text-4xl text-blue-marine mb-3 text-center min-[425px]:text-left">
          Select Your Plan
        </h4>
        <p className="text-gray-cool text-sm lg:text-lg mb-5 lg:mb-10 text-center min-[425px]:text-left">
          You have the option of monthly or yearly billing.
        </p>

        <RadioGroup>
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
            {plansStep2.map((plan, index) => (
              <RadioGroup.Option key={index} value={plan}>
                {({ active, checked }) => (
                  <div
                    onClick={() => handleClick(plan.name)}

                    className={`flex items-center lg:block gap-4 transition border border-gray-light hover:ring-blue-marine hover:ring-1 p-2 lg:p-4 rounded-lg cursor-pointer ${
                      active ? "ring-blue-marine bg-magnolia ring-1" : null
                    } ${
                      checked ? "ring-blue-marine bg-magnolia ring-1" : null
                    }`} >
                      
                    <img src={plan.icon} />

                    <div className="lg:mt-14">
                      <h3 className="font-medium lg:text-lg text-blue-marine">
                        {plan.name}
                      </h3>
                      <span className="text-xs lg:text-sm text-gray-cool">
                        $ {plan.monthlyPrice}/mon
                      </span>
                    </div>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

        <div className="flex justify-center gap-5 mt-8">
          <span className="font-bold text-blue-marine text-sm lg:text-base">
            Monthly
          </span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-gray-cool" : "bg-blue-marine"
            } relative inline-flex h-6 w-11 items-center rounded-full`} >
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform duration-500 ease-in-out rounded-full bg-white transition`} />
          </Switch>
          <span className="font-bold text-gray-cool text-sm lg:text-base">
            Yearly
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <Link to={"/"}>
          <GoBackButton />
        </Link>
        <Link to={"/Step3"}>
          <NextStepButton />
        </Link>
      </div>
    </>
  );
};
