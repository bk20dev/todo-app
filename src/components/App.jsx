import { BrowserRouter, Route } from 'react-router-dom';
import ActiveTasksPage from '../pages/ActiveTasksPage';
import AllTasksPage from '../pages/AllTasksPage';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <div className="max-w-xl mx-auto h-full px-6">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={AllTasksPage} />
        <Route path="/active" component={ActiveTasksPage} />
        <Route path="/completed">
          <h1>Completed</h1>
        </Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
