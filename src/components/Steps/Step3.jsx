import { plansStep3 } from "./helpers/plansStep3";

export const Step3 = () => {
  return (
    <>
      <div className="w-full">
        <h4 className="font-bold text-4xl text-blue-marine mb-3">
          Pick add-ons
        </h4>
        <p className="text-gray-cool text-lg mb-10">
          Add-ons help enhance your gaming experience.
        </p>

        {plansStep3.map((ao, index) => (
          <div
            key={index}
            className="px-8 py-6 rounded-xl flex items-center justify-between mb-3 cursor-pointer border-[1px] border-gray-cool hover:ring-2 hover:ring-blue-purplish transition duration-300" >
            <div className="flex justify-between items-center gap-8">
              <input
                value={ao}
                type="checkbox"
                className="h-6 w-6 accent-blue-purplish" />

              <div>
                <h3 className="text-blue-marine font-medium text-lg">
                  {ao.title}
                </h3>
                <span className="text-gray-cool font-normal">{ao.desc}</span>
              </div>
            </div>
            <span className="text-blue-purplish text-sm font-medium">
              +${ao.monthlyPrice}/mon
            </span>
          </div>
        ))}
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
