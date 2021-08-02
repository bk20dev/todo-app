const TodoItem = ({ title, done, onToggle }) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      className="transition-colors mr-2 w-5 h-5 rounded-full text-primary focus:ring-primary"
      checked={done}
      onChange={onToggle}
    />
    <span
      className={`transition-colors text-lg select-none ${
        done ? 'line-through text-gray' : ''
      }`}
    >
      {title}
    </span>
  </label>
);

export default TodoItem;
