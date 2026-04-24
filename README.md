# 🚀 Task Management SaaS (Mini)

A production-ready **full-stack Task Management application** built with secure authentication and multi-user support. Users can create, manage, and track their own tasks in a clean and responsive interface.

---

# 🧠 Tech Stack

## 🔹 Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

## 🔹 Backend

* Node.js
* Express.js
* Sequelize ORM

## 🔹 Database

* PostgreSQL (Local / Neon)

## 🔹 Authentication

* JWT (JSON Web Tokens)
* bcrypt (password hashing)

---

# ✨ Features Implemented

## 🔐 Authentication

* User Signup & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes

## 📋 Task Management

* Create tasks
* View only your tasks (multi-user isolation)
* Update task status (Pending → Completed)
* Delete tasks

## ⚙️ Backend

* RESTful API design
* MVC architecture (controllers, routes, models)
* Error handling middleware
* Secure user-task relationship

## 🎨 Frontend

* Clean and responsive UI (Tailwind)
* API integration using Axios
* Global auth state management
* Protected routing

## 🗄 Database

* PostgreSQL schema design
* Sequelize ORM for modeling
* Proper associations (User → Tasks)

---

# ⚙️ Setup Instructions

## 📌 1. Clone the repository

```bash
git clone https://github.com/your-username/task_manager_saas.git
cd task_manager_saas
```

---

## 📌 2. Setup Backend

```bash
cd backend
npm install
```

### 🔐 Create `.env` file in `/backend`

```env
PORT=5000
DB_URL=your_postgres_connection_string
JWT_SECRET=your_secret_key
```

### ▶️ Run backend

```bash
node server.js
```

---

## 📌 3. Setup Frontend

```bash
cd frontend
npm install
```

### 🌐 Create `.env` file in `/frontend`

```env
VITE_API_URL=http://localhost:5000/api
```

### ▶️ Run frontend

```bash
npm run dev
```

---

## 🌍 4. Open the App

Visit:

```
http://localhost:5173
```

---

# 🔄 Application Flow

1. User signs up / logs in
2. JWT token is stored in localStorage
3. User accesses dashboard
4. User performs CRUD operations on tasks
5. Backend ensures user-specific data access

---

# 📂 Project Structure

```
task_manager_saas/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── api/
│
└── README.md
```

---

# 🔐 Security Considerations

* Passwords are hashed using bcrypt
* JWT used for secure authentication
* Protected API routes
* Environment variables for secrets

---

# 🚀 Future Improvements

* Task deadlines & reminders
* Drag-and-drop task management
* Notifications
* Role-based access control
* Docker & CI/CD integration

---

# 📌 Live Demo & Links

* 🔗 GitHub Repo: *(https://github.com/Ishaan-Wadhwa-tech/task_management_saas)*
* 🌐 Live App: *(Add deployment link here)*

---

# 👨‍💻 Author

Built as part of a Full Stack Developer Internship Screening Assignment.
