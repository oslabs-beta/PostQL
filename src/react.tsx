import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { constructor } from 'react';
import SelectFolder from './SelectFolder';

const Index = () => {
  return (
    <>
      <div>Hello PostQL</div>
      <SelectFolder />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('app'));
