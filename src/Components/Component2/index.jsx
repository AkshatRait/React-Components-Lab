import React, { useState } from 'react'

const Component2 = () => {
  const [currentColor, setCurrentColor] = useState('none'); // Set an initial color, e.g., 'red'

  const handleChange = (e) => {
    setCurrentColor(e.target.value);
  }

  return (
    <div className={currentColor}>
      <form action="color-picker">
        <label>
            Red
        </label>
        <input
          type="radio"
          value="red"
          onChange={handleChange}
          checked={currentColor === "red"}
        />
        <label>
            Green
        </label>
        <input
          type="radio"
          value="green"
          onChange={handleChange}
          checked={currentColor === "green"}
        />
        <label>
            Purple
        </label>
        <input
          type="radio"
          value="purple"
          onChange={handleChange}
          checked={currentColor === "purple"}
        />
      </form>
    </div>
  )
}

export default Component2
