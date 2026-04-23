import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      await API.post("/auth/signup", data);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      if (err.response?.status === 409) {
        alert("User already exists. Redirecting to login...");
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="p-6 bg-white shadow rounded w-80">
        <h2 className="text-xl mb-4">Signup</h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          className="border p-2 w-full mb-4"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white w-full py-2 rounded"
        >
          Signup
        </button>

        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}