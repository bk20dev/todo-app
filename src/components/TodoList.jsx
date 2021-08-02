import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../reducers/tasksReducer';
import TodoItem from './TodoItem';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-3">
      {tasks.map(({ id, title, done }) => (
        <TodoItem
          key={id}
          title={title}
          done={done}
          onToggle={() => dispatch(toggle(id))}
        />
      ))}
    </div>
  );
};

export default TodoList;
