import '../headerBeta/style.css'
import Logo from '../logoBeta'
import MenuNavegacao from '../menuNavegacao'
import IconesMenu from '../iconesMenu'

function HeaderBeta(){
    return(
        <header className="App-header">
            < Logo />
            < MenuNavegacao />
            < IconesMenu />
      </header>
    )
}

export default HeaderBeta