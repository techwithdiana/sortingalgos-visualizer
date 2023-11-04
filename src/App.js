import HeaderBar from './components/HeaderBar';
import './App.css'; 
import ArrayBar from './components/ArrayBar';
function App() {
  return (
    <div className='main-container'>
      <div className="App">
        <HeaderBar />
        <ArrayBar array={[10, 40, 20, 30, 50]}/>
      </div>
    </div>
  );
}

export default App;