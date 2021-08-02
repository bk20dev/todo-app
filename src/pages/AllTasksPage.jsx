import { useDispatch, useSelector } from 'react-redux';
import EmptyListImage from '../assets/undraw_happy_music_g6wc.svg';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { toggle } from '../reducers/tasksSlice';

const AllTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const renderPlaceholder = () => {
    if (!tasks.length) {
      return (
        <div className="mx-auto w-80 my-16">
          <img src={EmptyListImage} alt="" className="block h-80 mb-6" />
          <p className="text-gray font-medium text-center">
            You don't have any tasks
          </p>
        </div>
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
