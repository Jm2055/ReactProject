import './App.css';
import { PropTypes } from "prop-types";
import Method_Info from './Components/Method_Info.js';
import Class_Info from './Components/Class_Info.js';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Class_Info title ="The goat"/>  
      <ButtonState></ButtonState> 
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState(""); //first value = one to store state, 2nd is function to update it
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  };

  const updateCounterClicked = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Data title = {title} count = {count} />
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
  <div>
    <p>Title: {props.title}</p>
    <p>Count: {props.count}</p>
  </div>
  );
}

export default App;
