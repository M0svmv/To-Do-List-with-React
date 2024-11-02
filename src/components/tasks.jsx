// components/Tasks.js
import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import Task from "./task";

function Tasks() {
  const [tasks,setTasks] = useContext(TasksContext);
  const onDel = (index) => {setTasks(tasks.filter((_, i) => i !== index))};
  return (
    <div className="m-2 shadow-sm p-2 rounded col align-items-center"
    style={{ backgroundColor: "#F5F5F5" }}>
      {tasks.length>0 && <p className="text-muted">Pending Tasks</p>}
      {tasks.length > 0 ? tasks.map((task, index) => (
        <Task key={index} index={index} task={task} onDel={onDel} />
      )):(
        <p className="text-muted">No pending tasks</p>)}
    </div>
  );
}

export default Tasks;
