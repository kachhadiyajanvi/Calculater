import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  let [val, setval] = useState('');
  let [val1, setval1] = useState('');
  let [ans, setans] = useState('');
  const handleClick = (n) => {
    if(n===1){
      setans(parseInt(val)+parseInt(val1));
    }
    if(n===2){
      setans(parseInt(val)-parseInt(val1));
    }
    if(n===3){
      setans(parseInt(val)*parseInt(val1));
    }
    if(n===4){
      setans(parseInt(val)/parseInt(val1));
    }
  }
  return (
    <div className="App">
      <table align='center' className='p-4'  border={1} >
        <thead>
         <tr >
          <td colSpan={2}><h4 className='text-center text-secondary'>Simple_Calculater</h4></td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Value 1:</td>
          <td><input type='text' onChange={(e) => {setval(e.target.value)}}></input></td>
        </tr>
        <tr>
          <td>Value 2:</td>
          <td><input type='text' onChange={(e) => {setval1(e.target.value)}}></input></td>
        </tr>
        <tr className='text-center'>
          <td colSpan={2}>
            <input type='button' onClick={() => handleClick(1)} value='SUM' className=' m-2 px-4'></input>
            <input type='button' onClick={() => handleClick(2)} value='SUB' className=' m-2 px-4'></input>
            <input type='button' onClick={() => handleClick(3)} value='MUL' className=' m-2 px-4'></input>
            <input type='button' onClick={() => handleClick(4)} value='DIV' className=' m-2 px-4'></input>
          </td>
        </tr>
        </tbody>
       <tfoot>
       <tr className='text-center'>
          <td colSpan={2}><input type='text' value={ans}></input></td>
        </tr>
       </tfoot>
      </table>
    </div>
  );
}

export default App;
