import React, { useState } from 'react';
import './App.css';

type HslColour = `hsl(${number}, ${number}%, ${number}%)`;

const randomColour = (): HslColour => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export const App = () => {
  const [colour, setColour] = useState<HslColour>(`hsl(0, 0%, 0%)`);

  return (
    <div style={{ backgroundColor: colour }} className="colour">
      <button onClick={() => setColour(randomColour())}>click me</button>
    </div>
  );
};
