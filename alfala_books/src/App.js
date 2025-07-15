import './App.css';
import Logo from './components/logo';
import OptionsHeader from './components/optionsHeader/index.js';
import IconesHeader from './components/iconesHeader/index.js';
import perfil from './img/perfil.svg';
import sacola from './img/sacola.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionsHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;