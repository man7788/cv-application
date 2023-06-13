import React, { useState } from 'react';
import Form from './Form';
import Overview from './Overview';

const SubSection = ({ sections }) => {
  const list = Object.keys(sections);
  const taskObj = [];

  list.forEach((key) => {
    taskObj.push({ text: '', label: key, id: sections[key] });
  });

  const [task, setTask] = useState(taskObj);
  const [tasks, setTasks] = useState([]);

  const onSubmitTask = (e) => {
    e.preventDefault();

    const taskObj = [];

    setTasks(tasks.concat(task));
    setTask(taskObj);
  };

  const handleChange = (e) => {
    const id = e.target.parentNode.id;
    const taskObj = [];

    // Update input value to state.task by finding matched id
    task.forEach((task) => {
      if (task.id === id) {
        taskObj.push({ text: e.target.value, label: task.label, id: task.id });
      } else {
        taskObj.push({ text: task.text, label: task.label, id: task.id });
      }
    });

    setTask(taskObj);
  };

  const editTask = () => {
    const taskObj = [];

    // Reset input
    tasks.forEach((task) => {
      taskObj.push(task);
    });

    setTask(taskObj);
    setTasks([]);
  };

  return (
    <div>
      <Form
        task={task}
        onSubmitTask={onSubmitTask}
        handleChange={handleChange}
      />
      {task.length === 0 && <Overview tasks={tasks} />}
      {task.length === 0 && <button onClick={editTask}>Edit</button>}
    </div>
  );
};

export default SubSection;
