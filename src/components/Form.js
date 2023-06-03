import React, { Component } from 'react';
import Overview from './Overview';

class Form extends Component {
  constructor(props) {
    super(props);

    const { sections } = this.props;
    const list = Object.keys(sections);
    const taskObj = [];

    // DO NOT NEED KEY VALUE PAIR, JUST PUSH OBJECT IN A LIST
    // Extract id from input fields
    // Assign id to state.task as keys
    list.forEach((key) => {
      taskObj.push({ text: '', label: key, id: sections[key] });
    });

    this.state = {
      task: taskObj,
      tasks: [],
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();

    const { task } = this.state;
    const taskObj = [];

    // Reset input
    task.forEach((task) => {
      taskObj.push({ text: '', label: task.label, id: task.id });
    });

    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: taskObj,
    });
  };

  handleChange = (e) => {
    const { task } = this.state;
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

    this.setState({
      task: taskObj,
    });
  };

  render() {
    const { task, tasks } = this.state;
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          {task.map((task) => {
            // console.log(task[sections[label]]);
            return (
              <div key={task.id} id={task.id}>
                <label htmlFor="taskInput">{task.label}</label>
                <input
                  onChange={this.handleChange}
                  value={task.text}
                  type="text"
                  id="taskInput"
                />
              </div>
            );
          })}

          <button type="submit">Submit</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default Form;
