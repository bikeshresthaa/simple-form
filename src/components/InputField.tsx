import { useState } from 'react';

function InputField() {
  const [inputValue, setInputValue] = useState('not given');

  return (
    <div>
      <label>Name:
      <input type="text" value={ inputValue } onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <p>You entered: {inputValue}</p>
    </div>
  )
}

export default InputField;