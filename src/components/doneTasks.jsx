import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import Task from "./task";

function DoneTasks() {
  const [, , doneTasks, setDoneTasks] = useContext(TasksContext);

  return (
    <div
      className="m-2 shadow-sm p-2 rounded col align-items-center"
      style={{ backgroundColor: "#F5F5F5" }}>
      {doneTasks.length > 0 && <p className="text-muted">Completed Tasks</p>}
      {doneTasks.length > 0 ? (
        doneTasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            readOnly
            onDel={() => setDoneTasks(doneTasks.filter((_, i) => i !== index))}
          />
        ))
      ) : (
        <p className="text-muted">No completed tasks</p>
      )}
    </div>
  );
}

export default DoneTasks;
