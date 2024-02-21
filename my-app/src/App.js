import './App.css';
import Method_Info from './Components/Method_Info.js';
import Class_Info from './Components/Class_Info.js';

function App() {
  return (
    <div className="App">
      <Method_Info />  
      <Class_Info />  
      <AddInput /> 
    </div>
  );
}

function AddInput() {
  const value = "fusion is the goat";
  return (
    <form>
      <label for ="text-form">Type something pls: </label>
      <input type="text" value = {value} id="text-form" />
    </form>
  );
}


export default App;
