import './App.css';
import Counter from "./Comps/Counter";
import { useState } from "react";

const App = () => {
  const [counterValue, setCounterValue] = useState(0);

  function incrementor() {
     setCounterValue(counterValue + 1);
     console.log("button clicked")
  }

  function decrementor() {
    setCounterValue(counterValue - 1);
  }

  return (
     <div className="app-container"> 
       
      <Counter incrementor={incrementor} decrementor={decrementor} counterValue={counterValue} />
     </div>
  );
}

export default App;

/**App -
      Manages the state(counter value) and logic(increment/decrement functions) */