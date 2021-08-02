import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { update } from '../reducers/formSlice';
import { add } from '../reducers/tasksSlice';

const TodoForm = () => {
  const details = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const title = details.title.trim();
    if (!title) return;

    dispatch(add({ id: v4(), title, done: false }));
    dispatch(update({ title: '' }));
  };

  return (
    <form className="flex mb-6" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="add details"
        className="flex-grow border-2 border-opacity-50 border-gray rounded-xl mr-6 font-medium placeholder-gray focus:border-primary focus:ring-0"
        value={details.title}
        onChange={(e) => dispatch(update({ title: e.target.value }))}
      />
      <button
        type="submit"
        className="py-4 px-10 bg-primary hover:shadow-primary font-medium text-white rounded-xl"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
