import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { add } from '../reducers/tasksReducer';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const title = details.trim();
    if (!title) return;

    dispatch(add({ id: v4(), title, done: false }));
    setDetails('');
  };

  return (
    <form className="flex py-6" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="add details"
        className="flex-grow border-2 border-opacity-50 border-gray rounded-xl mr-6 font-medium placeholder-gray focus:border-primary focus:ring-0"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button
        type="submit"
        className="py-4 px-10 bg-primary shadow-primary font-medium text-white rounded-xl"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
