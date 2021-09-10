import React, { useState } from "react";
import Tasks from "./components/Tasks";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: "estudar ",
      completed: false,
    },
    {
      id: '2',
      title: " progrmação",
      completed: false,
    },
    {
      id: '2',
      title: "para o infito e além",
      completed: false,
    },
  ]);

  return( 
    <>
      <div className= "container" >
        <Tasks tasks={tasks} />  
      </div>
    </>
  );
};

export default App;

