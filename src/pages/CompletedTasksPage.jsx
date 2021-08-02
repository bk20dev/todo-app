import { useDispatch, useSelector } from 'react-redux';
import EmptyListImage from '../assets/undraw_Imagination_re_i0xi.svg';
import TodoList from '../components/TodoList';
import { toggle, remove, clear } from '../reducers/tasksReducer';

const CompletedTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const filtered = tasks.filter((task) => task.done);

  const dispatch = useDispatch();

  const renderClearButton = () => {
    if (filtered.length) {
      return (
        <button
          onClick={() => dispatch(clear())}
          className="block ml-auto mt-8 py-4 px-10 bg-primary hover:shadow-primary font-medium text-white rounded-xl"
        >
          Delete all
        </button>
      );
    }
  };

  const renderPlaceholder = () => {
    if (!filtered.length) {
      return (
        <img
          src={EmptyListImage}
          alt="No tasks completed"
          className="block mx-auto w-80 h-80 my-16"
        />
      );
    }
  };

  return (
    <div>
      <TodoList
        tasks={filtered}
        onToggle={(id) => dispatch(toggle(id))}
        showDelete={true}
        onDelete={(id) => dispatch(remove(id))}
      />
      {renderClearButton()}
      {renderPlaceholder()}
    </div>
  );
};

export default CompletedTasksPage;
