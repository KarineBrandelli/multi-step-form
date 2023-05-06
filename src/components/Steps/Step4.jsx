import { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { ConfirmButton } from "../Button/ConfirmButton";

export const Step4 = () => {
  const { userInfo, selectedPlan, period, selectedPlanAdds, CalcPlansTotal } =
    useContext(AppContext);

  function sendData() {
    let getUser = JSON.parse(localStorage.getItem("user")) || [];

    const newUser = {
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      planName: selectedPlan.name,
      billing: period,
      addons: selectedPlanAdds,
      userTotal: CalcPlansTotal(),
    };

    if (getUser.some((user) => user.email === newUser.email)) {
      alert("Ops! This email is already in our database.");
    } else {
      getUser.push(newUser);
      localStorage.setItem("user", JSON.stringify(getUser));
    }
  }

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
                {selectedPlan.name}{" "}
                <span className="text-sm sm:text-base">
                  ({period === "monthly" ? "Monthly" : "Yearly"})
                </span>
              </h3>
              <Link
                to={"/Step2"}
                className="text-gray-cool underline text-xs sm:text-sm font-bold hover:text-blue-purplish transition cursor-pointer"
              >
                Change
              </Link>
            </div>
            <span className="font-bold text-blue-marine">
              $
              {period === "monthly"
                ? `${selectedPlan.monthlyPrice}/mon`
                : `${selectedPlan.yearlyPrice}/yr`}
            </span>
          </div>

          {selectedPlanAdds.map((item, index) => (
            <div key={index} className="flex items-center justify-between pt-4">
              <div className="flex flex-col">
                <h4 className="text-gray-cool text-xs lg:text-sm">
                  {item.title}
                </h4>
              </div>
              <span className="text-blue-marine text-xs">
                +$
                {period === "monthly"
                  ? `${item.monthlyPrice}/mon`
                  : `${item.yearlyPrice}/yr`}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-between px-4">
          <span className="text-gray-cool text-sm">
            Total (per {period === "monthly" ? "month" : "year"})
          </span>
          <span className="font-bold text-blue-purplish lg:text-lg">
            +$
            {CalcPlansTotal()}
            {period === "monthly" ? `/mon` : `/yr`}
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
