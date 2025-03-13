import { useMemo, useState } from 'react';
import './App.css';

function App () {
  const[weight, setWeight] = useState(120);
  const[height, setHeight] = useState(180);

  function onWeightChange(event){
    setWeight(event.target.value);
  }

  function onHeightChange(event){
    setHeight(event.target.value);
  }

  const output = useMemo(()=>{
    const calculateHeight = height/100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1);
  },[weight,height]);


  return (
    <main className='App'>
      <h1 className='Heading'>BMI Calculator</h1>
      <div className='input-section'>
          <p className='text-slider'> Weight: {weight}kg</p>
          <input className='input-slider' 
          type='range' 
          min={40}
          max={200}
          step={1} 
          onChange={onWeightChange}  
          />
          <p className='text-slider'> Height: {height}cm</p>
          <input className='input-slider' 
          type='range'
          min={140}
          max={220}
          step={1} 
          onChange={onHeightChange}  
          />
      </div>
      
      <div className='output-section'>
            <p>Your BMI is: </p>
            <p className='output'>{output}  kg/m<sup>2</sup></p>
      </div>
    </main>
  );
}

export default App;
