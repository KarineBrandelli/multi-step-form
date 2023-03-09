import { sidebar } from "../Steps/helpers/sidebar";

export const Header = () => {
  return (
    <div className="lg:hidden bg-[url('../../src/assets/bg-sidebar-mobile.svg')] h-[] pt-12 pb-36 w-full bg-center bg-no-repeat bg-cover flex justify-center">
      <ul className="flex gap-5 text-white font-medium">
        {sidebar.map((item, index) => (
          <li
            key={index}
            className="w-9 h-9 rounded-[50%] border-2 cursor-pointer flex items-center justify-center" >
            {item.stepCounter}
          </li>
        ))}
      </ul>
    </div>
  );
};
