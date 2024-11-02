import { useContext, useEffect, useRef, useState } from "react";
import { TasksContext } from "../context/tasksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function NewTask() {
  const [tasks, setTasks] = useContext(TasksContext);
  const [newTask, setNewTask] = useState("");
  const focus = useRef();
  useEffect(() => {
    focus.current.focus();
  }, [tasks]);
  return (
    <div
      style={{ backgroundColor: "#F5F5F5" }}
      className="d-flex justify-content-between m-2 shadow-sm  p-2 rounded col  align-items-center position-relative">
      <input
        type="text"
        ref={focus}
        placeholder="New Task"
        id="new-task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            newTask && setTasks([...tasks, newTask]);
            setNewTask("");
          }
        }}
        className="col p-3 rounded-pill shadow-sm form-control"
      />
      <button
        onClick={() => {
          newTask && setTasks([...tasks, newTask]);
          setNewTask("");
        }}
        className="btn btn-primary shadow-sm rounded-circle position-absolute top-50 end-0 translate-middle">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default NewTask;
