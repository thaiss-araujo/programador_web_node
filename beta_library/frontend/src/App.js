import Header from './components/header';
import styled from 'styled-components';
import Pesquisa from './components/pesquisa';
import UltimosLancamentos from './components/ultimosLancamentos';

const AppContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #e6f0ff, #80bfff);
    font-family: "Poppins", sans-serif;
    color: #3A3A3A;

    li {
    list-style: none;
}
`

function App() {
  return (
    <div className="App">
      <Header />
      <Pesquisa />
      < UltimosLancamentos />
      < AppContainer />
    </div>
  );
}

export default App;
