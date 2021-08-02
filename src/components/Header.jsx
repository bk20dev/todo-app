import { Link, useLocation } from 'react-router-dom';

const HeaderTab = ({ active, path, children }) => (
  <Link to={path}>
    <div className="cursor-pointer">
      <p className="text-center font-medium my-3 px-8">{children}</p>
      <div
        className={`w-full border-b-4 rounded-t mx-auto ${
          active ? 'border-primary' : 'border-transparent'
        }`}
      ></div>
    </div>
  </Link>
);

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <h1 className="font-bold text-4xl text-center py-8">#todo</h1>
      <div className="flex justify-between px-6 overflow-x-auto">
        <HeaderTab path="/" active={pathname === '/'}>
          All
        </HeaderTab>
        <HeaderTab path="/active" active={pathname === '/active'}>
          Active
        </HeaderTab>
        <HeaderTab path="/completed" active={pathname === '/completed'}>
          Completed
        </HeaderTab>
      </div>
      <div className="border-b border-gray" style={{ marginTop: '-1px' }}></div>
    </header>
  );
};

export default Header;
