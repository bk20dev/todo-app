import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggle }) => (
  <div className="flex flex-col gap-3">
    {tasks.map(({ id, title, done }) => (
      <TodoItem
        key={id}
        title={title}
        done={done}
        onToggle={() => onToggle(id)}
      />
    ))}
  </div>
);

export default TodoList;
