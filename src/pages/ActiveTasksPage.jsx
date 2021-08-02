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
        <div className="mx-auto w-80 my-16">
          <img src={EmptyListImage} alt="" className="block h-80 mb-6" />
          <p className="text-gray font-medium text-center">
            You don't have any active tasks
          </p>
        </div>
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
