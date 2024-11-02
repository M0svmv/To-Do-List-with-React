import "./App.css";
import DoneTasks from "./components/doneTasks";
import NewTask from "./components/newTask";
import Tasks from "./components/tasks";

import TasksProvider from "./context/tasksContext";

function App() {
  return (
    <div className=" container col-md-7 col-sm-11 d-flex justify-content-center App bg-light shadow-sm p-2 rounded flex-column mt-2">
      <TasksProvider>
        <NewTask />
        <Tasks />
        <DoneTasks />
      </TasksProvider>
    </div>
  );
}

export default App;
