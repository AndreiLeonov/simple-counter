import React from 'react';
import {Counter} from '../src/components/Counter'
import { Settings } from './components/Settings';

function App() {
  console.log('APP render');

  const [value, setValue] = React.useState(0);
  
  return (
    <div>
      <Counter />
      <Settings />
    </div>
  );
}

export default App;
