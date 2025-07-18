import './App.css';
import HeaderBeta from './components/headerBeta';
import styled from 'styled-components';

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
        <AppContainer>
        <HeaderBeta />
        </AppContainer>
    </div>
  );
}

export default App;
