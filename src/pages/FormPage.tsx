import { useState } from 'react';
import Input from '../components/InputField';
import RadioButton from '../components/RadioButton';

function FormPage() {
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <>
      <Input type="text" label="Name" value={name} onChange={setName} />
        <p>You Entered: {name}</p>
      <Input type="checkbox" label="I agree!" value={agree} onChange={setAgree} />
      
      <RadioButton 
        title="SELECT A GENDER:"
        options={["Male", "Female", "Other"]}
        
      />
    </>
  )
}

export default FormPage;