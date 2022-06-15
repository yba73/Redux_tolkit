import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./Components/Add";
import ListTask from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <div className="listbox">
        <div className="header">
          <h1>Todo List</h1>
          <Add />
        </div>
        <ListTask />
      </div>
    </div>
  );
}

export default App;
