import { useEffect, useState ,useCallback} from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = useCallback(async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  }, []);

  

  useEffect(() => {
  const initFetch = async () => {
    await fetchTasks();
  };
  
  initFetch();
}, [fetchTasks]);

  const addTask = async () => {
    if (!title) return;
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id, status) => {
    await API.put(`/tasks/${id}`, {
      status: status === "pending" ? "completed" : "pending",
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
  
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 pb-12">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
        {/* Add Task Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Create a new task</h2>
          <div className="flex gap-3">
            <input
              className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-all"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
            />
            <button
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Task List Section */}
        <div className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-center text-slate-500 py-8">No tasks yet. Start by adding one above!</p>
          )}
          
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
            >
              <span
                className={`flex-1 text-base ${
                  task.status === "completed" 
                    ? "line-through text-slate-400" 
                    : "text-slate-800 font-medium"
                }`}
              >
                {task.title}
              </span>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => toggleTask(task.id, task.status)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                    task.status === "completed"
                      ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                  }`}
                >
                  {task.status === "completed" ? "Mark Pending" : "Mark Done"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
 
}