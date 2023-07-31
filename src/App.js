import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemContainer greenting={'Bienvenido'}/>
    </div>
  );
}

export default App;
