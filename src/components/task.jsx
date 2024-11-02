// components/Task.js
import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Task({ index, task ,onDel,readOnly }) {
  const [tasks, setTasks, doneTasks, setDoneTasks] = useContext(TasksContext);

  // Adjusted to use task.name, task.title, or whatever property holds the text.
  const taskText = typeof task === "string" ? task : task.title || "Unnamed Task";

  const markAsDone = () => {
    console.log("Current doneTasks:", doneTasks); // Debugging log
    console.log("Type of doneTasks:", typeof doneTasks); // Check the type

    if (!Array.isArray(doneTasks)) {
      console.error("doneTasks is not an array:", doneTasks);
      return; // Exit if doneTasks is not an array
    }

    // Proceed only if doneTasks is an array
    setDoneTasks([...doneTasks, task]); // Add the task to doneTasks
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the task from tasks
  };

  

  return (
    <div className="d-flex justify-content-between m-2 shadow-sm p-2 rounded align-items-center bg-white">
      <li className="list-group-item">{taskText}</li> 
      <div className="d-flex gap-2">
        {!readOnly &&<button onClick={markAsDone} className="btn btn-success rounded-circle shadow-sm">
          <FontAwesomeIcon icon={faCheck} />
        </button>}
        <button onClick={()=>onDel(index)} className="btn btn-danger rounded-circle shadow-sm">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}

export default Task;
