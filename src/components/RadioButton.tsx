import { useState } from 'react';

function RadioButton({title, options}: {title?: string, options?: string[]}) {
  const [selectedOption, setSelectedOption] = useState(options ? options[0] : "");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <h2>{ title }</h2>
      {options ? options.map((option) => ( 
        <label htmlFor={option}>
         <input type="radio" id={option} name={options?.join("-")} value={option} checked={ selectedOption === option } onChange={handleOptionChange} />
          {option}
        </label>
      )) : "No options available"}

      <p>Selected: { selectedOption }</p>
    </div>
  )
}

export default RadioButton;