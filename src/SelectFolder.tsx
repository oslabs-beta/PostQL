import * as React from 'react';

const SelectFolder = () => {
  const clicked = () => {
    console.log('hi');
  };

  return (
    <div>
      <button type="button" onClick={clicked}>
        CLICK ME
      </button>
    </div>
  );
};

export default SelectFolder;
