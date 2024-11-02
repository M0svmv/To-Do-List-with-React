import { Outlet } from "react-router-dom";
function TasksList() {
  return (<>
    <div>
      <Outlet />
    </div>
  </>);
}

export default TasksList;