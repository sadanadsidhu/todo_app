import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, isDone: false }]);
      setNewTask("");
    }
  };

  const handleMarkAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isDone: !task.isDone }; // Toggle the isDone property
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <header>
        <h1 className="h1">To Do List</h1>
        <form id="new-task-form" onSubmit={handleAddTask}>
          <input
            type="text"
            name="new-task-input"
            id="new-task-input"
            placeholder="What do you have planned?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input type="submit" id="new-task-submit" value="ADD TASK" />
        </form>
      </header>
      <main>
        <section className="task-list">
          <h2>Tasks</h2>
          <div id="tasks">
            {tasks.map((task, index) => (
              <div
                className={`task ${task.isDone ? "done" : ""}`} // Apply a "done" class if the task is marked as done
                key={index}
              >
                <div className="content">
                  <input
                    type="text"
                    className="text"
                    value={task.text}
                    readOnly
                  />
                </div>
                <div className="actions">
                  <button
                    className="mark-done"
                    onClick={() => handleMarkAsDone(index)}
                  >
                    {task.isDone ? "Undo" : "Mark as Done"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
