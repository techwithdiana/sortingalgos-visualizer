import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import PopupInfo from './components/PopUpInfo';


function App() {
  return (
    <div className='main-container'>
      <div className="App">
        <HeaderBar />
        <PopupInfo/>
      </div>
    </div>
  );
}

export default App;
