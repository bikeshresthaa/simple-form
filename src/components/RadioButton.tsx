import { useState } from 'react';

function RadioButton() {
  const [selectedOption, setSelectedOption] = useState('Male');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <h2>Choose a gender: </h2>

      <label htmlFor="male">
        <input type="radio" id='male' name='options' value="Male" checked={ selectedOption === "Male" } onChange={handleOptionChange} />
        Male
      </label>

      <label htmlFor="female">
        <input type="radio" id='female' name='options' value="Female" checked={ selectedOption === "Female" } onChange={handleOptionChange} />
        Female
      </label>
      <p>{selectedOption === "Male" ? "You are Male!" : "You are Female!" }</p>
    </div>
  )
}

export default RadioButton;