import { Link } from "react-router-dom";
import { GoBackButton } from "../Button/GoBackButton";
import { NextStepButton } from "../Button/NextStepButton";

import { plansStep3 } from "./helpers/plansStep3";

export const Step3 = () => {
  return (
    <>
      <div className="w-full">
        <h4 className="font-bold text-2xl lg:text-4xl text-blue-marine mb-3">
          Pick add-ons
        </h4>
        <p className="text-gray-cool lg:text-lg mb-5 lg:mb-10">
          Add-ons help enhance your gaming experience.
        </p>

        {plansStep3.map((ao, index) => (
          <div
            key={index}
            className="px-1 py-2 lg:px-8 lg:py-6 rounded-lg flex items-center justify-between mb-3 cursor-pointer border-[1px] border-gray-cool hover:ring-[1px] hover:ring-blue-purplish hover:border-[1px] hover:border-blue-purplish transition duration-300" >
            <div className="flex justify-between items-center gap-3 lg:gap-8">
              <input
                value={ao}
                type="checkbox"
                className="lg:h-6 lg:w-6 accent-blue-purplish" />

              <div>
                <h3 className="text-blue-marine font-medium text-sm lg:text-lg">
                  {ao.title}
                </h3>
                <span className="text-gray-cool text-xs lg:text-base">
                  {ao.desc}
                </span>
              </div>
            </div>
            <span className="text-blue-purplish text-xs lg:text-base font-medium">
              +${ao.monthlyPrice}/mon
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
