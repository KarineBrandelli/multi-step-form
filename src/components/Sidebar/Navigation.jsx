export const Navigation = ({ isActive, stepCounter, stepTitle }) => {
  return (
    <>
      <li className="mb-8">
        <div className="flex items-center">
          <div
            className={`${
              isActive
                ? " text-blue-marine bg-gradient-to-r from-blue-light to-blue-pastel border-none"
                : "bg-transparent border-white"
            }
                  w-10 h-10 rounded-[50%] lg:mr-4 font-bold flex items-center justify-center border-2 border-white`} >
            {stepCounter}
          </div>
          <div className="hidden lg:block">
            <span className="block text-sm text-gray-light">
              STEP {stepCounter}
            </span>
            <span className="text-base font-bold">{stepTitle}</span>
          </div>
        </div>
      </li>
    </>
  );
};
