import './App.css';
import { useState } from 'react';

function Counter() {
  // let counts = 0;
  // alternative for uniform UI manipulation
  let [counts, counter] = useState(0)
  
  // const addvalue = () => {
  //   // counts += 1;
  //   // console.log(counts, "value added", Math.round(Math.random() * 10))
  //   counter(counts + 1);
    
  // }
  return (
    <div className="card">
      <h1>Siddhesh Here!</h1>
      <h2>Counter</h2>
      <h3 className='countDisplay'>count : {counts}</h3>
      <br />
      <div className="button-group">
        <button onClick={() => counter(counts + 1)}
        >Addvalue</button>
        <button className="remove" onClick={() => {
          if (counts > 0) counter(counts - 1);
        }}
          >Removevalue</button>
      </div>
    </div>
  );
}

export default Counter;