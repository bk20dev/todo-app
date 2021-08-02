import { useDispatch, useSelector } from 'react-redux';
import EmptyListImage from '../assets/undraw_happy_music_g6wc.svg';
import PlaceholderImage from '../components/PlaceholderImage';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { toggle } from '../reducers/tasksSlice';

const AllTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const renderPlaceholder = () => {
    if (!tasks.length) {
      return (
        <PlaceholderImage
          src={EmptyListImage}
          caption="You don't have any tasks"
        />
      );
    }
  };

  return (
    <div>
      <TodoForm />
      <TodoList tasks={tasks} onToggle={(id) => dispatch(toggle(id))} />
      {renderPlaceholder()}
    </div>
  );
};

export default AllTasksPage;
