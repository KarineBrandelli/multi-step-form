import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Step1 } from "./components/Steps/Step1";
import { Step2 } from "./components/Steps/Step2";
import { Step3 } from "./components/Steps/Step3";
import { Step4 } from "./components/Steps/Step4";
import { Step5 } from "./components/Steps/Step5";

import "./index.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex rounded-xl -mt-24 px-3 py-6 lg:p-2 w-[93%] h-[550px] lg:w-3/4 lg:h-3/4 lg:mt-0 bg-white">
          <Sidebar />
          <div className="mx-auto my-auto w-[98%] h-full lg:px-4 lg:h-[38rem] lg:w-[65%] flex flex-col justify-between">
            <Routes>
              <Route path="/" element={<Step1 />} />
              <Route path="/Step2" element={<Step2 />} />
              <Route path="/Step3" element={<Step3 />} />
              <Route path="/Step4" element={<Step4 />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
