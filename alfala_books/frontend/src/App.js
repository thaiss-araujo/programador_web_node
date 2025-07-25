import Header from './components/header';
import styled from 'styled-components';
import Pesquisa from './components/pesquisa';
import UltimosLancamentos from './components/ultimosLancamentos';

const AppContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165% );

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