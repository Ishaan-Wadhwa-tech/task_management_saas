import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b border-slate-200">
      <h1 className="text-xl font-bold text-slate-800 tracking-tight">Task Manager</h1>
      <button 
        onClick={logout} 
        className="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      >
        Logout
      </button>
    </nav>
  );
}