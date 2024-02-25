import React, { useState } from "react";

const RunAwayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Calculate the new position based on the mouse pointer
    const maxX = window.innerWidth - 100; // Adjust the values based on your button size
    const maxY = window.innerHeight - 40;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Update the position state
    setPosition({ x: newX, y: newY });
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      Run Away!
    </button>
  );
};

export default RunAwayButton;
