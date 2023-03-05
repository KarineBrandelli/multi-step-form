import { Sidebar } from "./components/Sidebar/Sidebar";
import "./index.css";

export default function App() {
  return (
    <div className="flex border-2 rounded-xl p-2 w-3/4 h-3/4 bg-white">
      <Sidebar />
    </div>
  );
}
