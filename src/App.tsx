import InputField from './components/InputField';
import CheckBox from './components/CheckBox';
import RadioButton from './components/RadioButton';
import './App.css'

function App() {

  return (
    <>
      <InputField label="Name" />
      <CheckBox label="I agree!" />
      <RadioButton 
        title="SELECT A GENDER:"
        options={["Male", "Female", "Other"]}
      />
    </>
  )
}

export default App
