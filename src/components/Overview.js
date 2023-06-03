import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
      {tasks.map((task) => {
        return (
          <li key={task.id} id={task.id}>
            {task.label}: {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
