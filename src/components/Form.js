const Form = (props) => {
  const { task, onSubmitTask, handleChange } = props;

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        {task.map((task) => {
          return (
            <div key={task.id} id={task.id}>
              <label htmlFor={task.label}>{task.label}</label>
              <input
                onChange={handleChange}
                value={task.text}
                type="text"
                id={task.label}
              />
            </div>
          );
        })}

        {task.length > 0 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default Form;
