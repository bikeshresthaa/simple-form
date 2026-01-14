import { useState } from 'react';

function CheckBox() {
  const [ isChecked, setIsChecked ] = useState(false);
  
  return (
    <div>
      <label htmlFor="myCheckbox" >
        <input type="checkbox" id="myCheckbox" checked={ isChecked } onChange={(e) => setIsChecked(e.target.checked)} />
        I agree!
      </label>
      <p>{ isChecked ? "You agreed!" : "You disagreed!" }</p>
    </div>
  )
}

export default CheckBox;