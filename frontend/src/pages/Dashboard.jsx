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
    <div>
      <Navbar />

      <div className="p-6">
        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 flex-1"
            placeholder="New Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between p-3 border mb-2"
          >
            <span
              className={
                task.status === "completed" ? "line-through" : ""
              }
            >
              {task.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(task.id, task.status)}
                className="bg-yellow-400 px-2"
              >
                Toggle Status
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}