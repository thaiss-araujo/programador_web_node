import logo from '../../img/logo.svg'


function Logo() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src={logo} alt='Alfala books'></img>
          <p><strong>Alfala</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default Logo;