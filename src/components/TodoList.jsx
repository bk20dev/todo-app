import TodoItem from './TodoItem';

const TodoList = ({
  tasks,
  onToggle,
  showDelete = false,
  onDelete = () => {},
}) => (
  <div className="flex flex-col gap-3">
    {tasks.map(({ id, title, done }) => (
      <TodoItem
        key={id}
        title={title}
        done={done}
        onToggle={() => onToggle(id)}
        showDelete={showDelete}
        onDelete={() => onDelete(id)}
      />
    ))}
  </div>
);

export default TodoList;
