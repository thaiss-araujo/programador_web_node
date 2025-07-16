import '../header/style.css'
import Logo from '../logo';
import OptionsHeader from '../optionsHeader';
import IconesHeader from '../iconesHeader';

function Header(){
    return(
        <header className="App-header">
        <Logo />
        <OptionsHeader />
        <IconesHeader />
      </header>
    )
}

export default Header