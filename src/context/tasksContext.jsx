// context/tasksContext.js
import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

function TasksProvider({ children }) {
  const localTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
  const localDoneTasks =
    JSON.parse(window.localStorage.getItem("doneTasks")) || []; // Ensure this is an array

  const [tasks, setTasks] = useState(localTasks);
  const [doneTasks, setDoneTasks] = useState(localDoneTasks); // Ensure this is an array

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    window.localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [doneTasks]);

  return (
    <TasksContext.Provider value={[tasks, setTasks, doneTasks, setDoneTasks]}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
