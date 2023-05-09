import { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { useResolvedPath } from "react-router-dom";
import { sidebar } from "../Steps/helpers/sidebar";

export const Sidebar = () => {
  const { pathname } = useResolvedPath();
  const [active, setActive] = useState([false, false, false, false]);

  const routes = ['/', '/Step2', '/Step3', '/Step4']

  useEffect(() => {
    const currentRoute = routes.indexOf(pathname)    
    setActive(active.map((_, i) => i === currentRoute))
  }, [pathname])

  return (
    <>
      <div className="w-full flex justify-center -mt-24 mb-7 lg:mt-0 lg:h-full lg:w-72 lg:mr-2 lg:block lg:p-0 lg:rounded-xl lg:bg-[url('https://user-images.githubusercontent.com/108953489/236943000-231b3139-bd0f-44e2-b9ab-8699536842af.svg')] bg-center bg-no-repeat bg-cover">
        <ul className="flex gap-5 font-medium text-white lg:pt-10 lg:pl-8 lg:pr-2 lg:text-lg lg:block">
          {sidebar.map((item, index) => {
            return (
              <Navigation
                key={`route-${index + 1}`}
                isActive={active[index]}
                stepCounter={item.stepCounter}
                stepTitle={item.stepTitle}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
