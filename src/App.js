import HeaderBar from './components/HeaderBar';
import './App.css'; 
import ArrayBar from './components/ArrayBar';
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState([30, 10, 20, 50, 40]);

  return (
    <div className='main-container'>
      <div className="App">
        <HeaderBar setArrFunc={setArr} />
        <ArrayBar array={arr}/>
      </div>
    </div>
  );
}

export default App;