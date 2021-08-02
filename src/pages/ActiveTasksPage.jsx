import { useDispatch, useSelector } from 'react-redux';
import EmptyListImage from '../assets/undraw_empty_street_sfxm.svg';
import PlaceholderImage from '../components/PlaceholderImage';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { toggle } from '../reducers/tasksSlice';

const ActiveTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const filtered = tasks.filter((task) => !task.done);

  const dispatch = useDispatch();

  const renderPlaceholder = () => {
    if (!filtered.length) {
      return (
        <PlaceholderImage
          src={EmptyListImage}
          caption="You don't have any active tasks"
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
