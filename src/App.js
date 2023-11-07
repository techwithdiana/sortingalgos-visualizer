import HeaderBar from './components/HeaderBar';
import './App.css'; 
import ArrayBar from './components/ArrayBar';
import PopUpInfo from './components/PopUpInfo';
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState([30, 10, 20, 50, 40]);
  const [curAlg, setCurAlg] = useState('');

  return (
    <div className='main-container'>
      <div className="App">
        <HeaderBar setArrFunc={setArr} setCurAlgFunc={setCurAlg}/>
        <div className='visualizer-container'>
          <ArrayBar array={arr}/>
          <PopUpInfo selectedAlgorithm={curAlg} />
        </div>
      </div>
    </div>
  );
}

export default App;