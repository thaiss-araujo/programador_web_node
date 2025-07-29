import Logo from '../logoBeta'
import MenuNavegacao from '../menuNavegacao'
import IconesMenu from '../iconesMenu'
import styled from 'styled-components'

const HeaderContainer = styled.header `
    display: flex;
    justify-content: center;
    background-color: #f4faff;
`

function HeaderBeta(){
    return(
        <header className="App-header">
            <HeaderContainer>
            < Logo />
            < MenuNavegacao />
            < IconesMenu />
            </HeaderContainer>
      </header>
    )
}

export default HeaderBeta