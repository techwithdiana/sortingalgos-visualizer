import './App.css';
import HeaderBar from './components/HeaderBar';
import ArrayBar from './components/ArrayBar';

function App() {
  return (
    <div className='main-container'>
      <div className="App">
        <HeaderBar />
        <ArrayBar array={[12, 23, 40, 52, 34, 69, 72, 84, 100, 36, 34, 15, 27, 45, 57, 39, 61]}/>
      </div>
    </div>
  );
}

export default App;
