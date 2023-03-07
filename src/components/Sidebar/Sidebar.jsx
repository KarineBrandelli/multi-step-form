import { sidebar } from "./sidebar";

export const Sidebar = () => {
  return (
    <div className="h-full w-80">
      <div className="bg-[url('../../src/assets/bg-sidebar-desktop.svg')] bg-center h-full bg-no-repeat bg-cover rounded-xl">
        <ul className="pt-10 pl-8 pr-2 text-white text-lg">
          {sidebar.map((item, index) => (
            <li key={index} className="mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-[50%] border-2 mr-4 font-bold flex items-center justify-center">
                  {item.stepCounter}
                </div>
                <div>
                  <span className="block text-sm text-gray-light">
                    STEP {item.stepCounter}
                  </span>
                  <span className="text-base font-bold">{item.stepTitle}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
