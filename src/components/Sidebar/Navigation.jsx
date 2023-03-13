import { Link } from "react-router-dom";

export const Navigation = ({ route, isActive, stepCounter, stepTitle }) => {
  return (
    <>
      <li className="mb-8">
        <div className="flex items-center">
          <Link to={route}>
            <div
              className={`border-2 ${
                isActive
                  ? " text-blue-marine bg-gradient-to-r from-blue-light to-blue-pastel"
                  : "bg-transparent border-white" }
                  w-10 h-10 rounded-[50%] lg:mr-4 font-bold flex items-center justify-center cursor-pointer`} >
              {stepCounter}
            </div>
          </Link>
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
