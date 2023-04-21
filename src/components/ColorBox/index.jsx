import React, { useState } from 'react';
ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = React.useState('white')

  return (
    <div>
      {color}
      <button onClick={() => setColor('black')}> Change to Black </button>
      <button onClick={() => setColor('red')}> Change to Red </button>
    </div>
  )
}
export default ColorBox;