import React, { useState } from "react";
function ColorChanger() {
  const [color, setColor] = useState("white");

  const changeColor = (newColor) => {
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <div>
      <h1>Color de fondo: {color}</h1>
      <button onClick={() => changeColor("red")}>Rojo</button>
      <button onClick={() => changeColor("blue")}>Azul</button>
      <button onClick={() => changeColor("green")}>Verde</button>
    </div>
  );
}

export default ColorChanger;
