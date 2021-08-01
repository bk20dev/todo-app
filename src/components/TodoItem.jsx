const TodoItem = ({ title, done, onToggle }) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      className="transition-colors mr-2 w-5 h-5 rounded-full text-yellow-400 focus:ring-yellow-400"
      checked={done}
      onChange={onToggle}
    />
    <span
      className={`transition-opacity font-medium text-lg select-none ${
        done ? 'line-through opacity-50' : ''
      }`}
    >
      {title}
    </span>
  </label>
);

export default TodoItem;
