import React, { useRef, useState } from 'react'

const Font = () => {
  const paragraphRef = useRef(null);
  const [fontSize, setFontSize] = useState(16)

  const increaseFontSize = () => {
    const newSize = fontSize + 2
    setFontSize(newSize)
    paragraphRef.current.style.fontSize = `${newSize}px`
  };

  return (
    <div>
      <p ref={paragraphRef}>Povecaj ovaj tekst</p>
      <button onClick={increaseFontSize}>Klikni dugme</button>
    </div>
  );
};

export default Font;