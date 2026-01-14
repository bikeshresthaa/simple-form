import { useState } from 'react';

function InputField({label}: {label?: string}) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <label>{ label }:
      <input type="text" value={ inputValue } onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <p>You entered: {inputValue}</p>
    </div>
  )
}

export default InputField;