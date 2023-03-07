import { useState } from "react";
import { Switch } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";

import { plansStep2 } from "./helpers/plansStep2";

export const Step2 = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div>
        <h4 className="font-bold text-4xl text-blue-marine mb-3">
          Select Your Plan
        </h4>
        <p className="text-gray-cool text-lg mb-10">
          You have the option of monthly or yearly billing.
        </p>

        <RadioGroup>
          <div className="grid grid-cols-3 gap-10">
            {plansStep2.map((plan, index) => (
              <RadioGroup.Option key={index} value={plan}>
                {({ active, checked }) => (
                  <div
                    className={`transition border border-gray-light hover:ring-blue-marine hover:ring-1 p-4 rounded-lg cursor-pointer ${
                      active ? "ring-blue-marine bg-magnolia ring-1" : null
                    } ${
                      checked ? "ring-blue-marine bg-magnolia ring-1" : null
                    }`} >
                    <img src={plan.icon} />

                    <div className="mt-14">
                      <h3 className="font-medium text-lg text-blue-marine">
                        {plan.name}
                      </h3>
                      <span className="text-sm text-gray-cool">
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
          <span className="font-bold text-blue-marine">Monthly</span>
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
          <span className="font-bold text-gray-cool">Yearly</span>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="text-gray-cool border-2 rounded-lg w-40 py-3 font-bold hover:text-blue-marine transition">
          Go Back
        </button>
        <button className="bg-blue-purplish text-gray-light rounded-lg w-40 py-3 font-bold hover:opacity-80 transition">
          Next Step
        </button>
      </div>
    </>
  );
};
