import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {

  const getTasks = () => {
    try {
      const tasks = localStorage.getItem("tasks");
      return JSON.parse(tasks) || [];
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
      return [];
    }
  };
  
  const initialArr = getTasks();

  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);

  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        title,
        description,
        // description,
      },
    ]);
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  };

  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks))
  }, [tasks]);

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val,i) => {
      return i !== index;
    });

    console.log(filteredArr)
    setTasks(filteredArr)
  }


  return (
    <div className="container" onSubmit={submitHandler}>
      <h1>Daily Goals</h1>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          {" "}
        </textarea>
        <button type="submit">Add</button>
      </form>

      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
      ))}
    </div>
  );
};

export default Home;
