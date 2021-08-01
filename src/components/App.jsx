import { useState } from 'react';
import TodoItem from './TodoItem';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <TodoItem
        title="Do some coding"
        done={checked}
        onToggle={() => setChecked(!checked)}
      />
    </div>
  );
};

export default App;
