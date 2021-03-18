import React from 'react';
import {Counter} from '../src/components/Counter'

function App() {
  console.log('APP render');

  const [value, setValue] = React.useState(0);
  
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
