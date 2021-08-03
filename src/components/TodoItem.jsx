import DeleteIcon from '../assets/delete.svg';

const TodoItem = ({
  title,
  done,
  onToggle,
  showDelete = false,
  onDelete = () => {},
}) => {
  const renderDeleteButton = () => {
    if (showDelete) {
      return (
        <img
          src={DeleteIcon}
          alt="Delete"
          className="cursor-pointer transition-opacity opacity-50 hover:opacity-100"
          onClick={onDelete}
        />
      );
    }
  };

  const renderControls = () => (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="transition-colors mr-2 w-5 h-5 border-2 border-gray border-opacity-50 rounded-full text-primary focus:ring-primary"
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

  return (
    <div className="flex items-center justify-between font-medium">
      {renderControls()}
      {renderDeleteButton()}
    </div>
  );
};

export default TodoItem;
