const HeaderTab = ({ children, active, onClick }) => (
  <div onClick={onClick} className="cursor-pointer">
    <p className="text-center font-medium mb-3 px-8">{children}</p>
    <div
      className={`w-full border-b-4 rounded-t mx-auto ${
        active ? 'border-primary' : 'border-transparent'
      }`}
    ></div>
  </div>
);

const Header = () => (
  <header>
    <h1 className="font-bold text-4xl text-center py-8">#todo</h1>
    <div className="flex justify-between px-6 overflow-x-auto">
      <HeaderTab active={true}>All</HeaderTab>
      <HeaderTab active={false}>Active</HeaderTab>
      <HeaderTab active={false}>Completed</HeaderTab>
    </div>
    <div className="border-b border-gray" style={{ marginTop: '-1px' }}></div>
  </header>
);

export default Header;
