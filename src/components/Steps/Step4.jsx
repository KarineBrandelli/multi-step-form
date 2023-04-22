import { Link } from "react-router-dom";
import { ConfirmButton } from "../Button/ConfirmButton";

import { plansData } from "./helpers/plansData";

export const Step4 = () => {
  const getPlan = sessionStorage.getItem('plan') || 'Arcade';

  return (
    <>
      <div>
        <h4 className="font-bold text-2xl lg:text-4xl text-blue-marine mb-3 text-center min-[425px]:text-left">
          Finishing up
        </h4>
        <p className="text-gray-cool text-sm lg:text-lg mb-5 lg:mb-10 text-center min-[425px]:text-left">
          Double-check everything looks OK before confirming.
        </p>

        <div className="bg-magnolia p-4 rounded-lg mb-6">
          <div className="border-b border-gray-cool flex items-center justify-between pb-3">
            <div className="flex flex-col">
              <h3 className="font-bold text-blue-marine lg:text-lg">
                {getPlan} (Monthly)
              </h3>
              <Link
                to={"/Step2"}
                className="text-gray-cool underline text-sm pb-3 font-bold hover:text-blue-purplish transition cursor-pointer">
                  Change
              </Link>
            </div>
            <span className="font-bold text-blue-marine">$9/mo</span>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex flex-col">
              <h4 className="text-gray-cool text-xs lg:text-sm">
                Online service
              </h4>
            </div>
            <span className="text-blue-marine text-sm">+$1/mo</span>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex flex-col">
              <h4 className="text-gray-cool text-xs lg:text-sm">
                Larger storage
              </h4>
            </div>
            <span className="text-blue-marine text-sm">+$2/mo</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between px-4">
          <span className="text-gray-cool text-sm">Total (per month)</span>
          <span className="font-bold text-blue-purplish lg:text-xl">
            +$12/mon
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <Link to={"/Step5"}>
          <ConfirmButton />
        </Link>
      </div>
    </>
  );
};
