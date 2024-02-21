import './App.css';
import { PropTypes } from "prop-types";
import Method_Info from './Components/Method_Info.js';
import Class_Info from './Components/Class_Info.js';

function App() {
  return (
    <div className="App">
      <Class_Info title ="The goat"/>   
      <AddInput text="Hi" number= {4} /> 
      <AddInput /> 
      <AddInput text="Mumma" /> 
    </div>
  );
}

function AddInput(props) {
  return (
    <form>
      <label for ="text-form">Type something pls: </label>
      <input type="text" value = {props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}
AddInput.defaultProps = {
  number: 11,
  text: "default"
}

AddInput.propTypes = {
  number: PropTypes.number, 
  text: PropTypes.string,
}
export default App;
