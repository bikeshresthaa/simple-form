import { useState } from 'react';

function CheckBox({label}: {label?: string}) {
  const [ isChecked, setIsChecked ] = useState(false);
  
  return (
    <div>
      <label htmlFor="myCheckbox" >
        <input type="checkbox" id="myCheckbox" checked={ isChecked } onChange={(e) => setIsChecked(e.target.checked)} />
        { label }
      </label>
    </div>
  )
}

export default CheckBox;