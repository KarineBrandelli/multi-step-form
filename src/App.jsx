import { Sidebar } from "./components/Sidebar/Sidebar";
import { Step1 } from "./components/Steps/Step1";
import "./index.css";

export default function App() {
  return (
    <div className="flex border-2 rounded-xl p-2 w-3/4 h-3/4 bg-white">
      <Sidebar />
      <div className="border-2 px-4 mx-auto my-auto h-[38rem] w-[40rem] flex flex-col justify-between">
        <Step1 />
      </div>
    </div>
  );
}
