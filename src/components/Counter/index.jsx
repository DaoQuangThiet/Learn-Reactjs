import React, { useState } from 'react';
ColorBox.propTypes = {};

function ColorBox(props) {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      {count}
      <button onClick={() => setCount(x => x + 1)}> + </button>
      <button onClick={() => setCount(x => x - 1)}> - </button>
    </div>
  )
}
export default ColorBox;