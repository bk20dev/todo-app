import { useDispatch, useSelector } from 'react-redux';
import EmptyListImage from '../assets/undraw_empty_street_sfxm.svg';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { toggle } from '../reducers/tasksReducer';

const ActiveTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const filtered = tasks.filter((task) => !task.done);

  const dispatch = useDispatch();

  const renderPlaceholder = () => {
    if (!filtered.length) {
      return (
        <img
          src={EmptyListImage}
          alt="No active tasks"
          className="block mx-auto w-80 h-80 my-16"
        />
      );
    }
  };

  return (
    <div>
      <TodoForm />
      <TodoList tasks={filtered} onToggle={(id) => dispatch(toggle(id))} />
      {renderPlaceholder()}
    </div>
  );
};

export default ActiveTasksPage;
