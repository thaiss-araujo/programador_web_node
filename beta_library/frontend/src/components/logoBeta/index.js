import logo from '../../img/logo_beta.svg'
import styled from 'styled-components'

const LogoContainer = styled.div `
  display: flex;
  font-size: 30px;
`

const LogoImage = styled.img `
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Logo (){
    return(
        <LogoContainer>
            <LogoImage src={logo} 
            alt='Logo Beta Library'>

            </LogoImage>
        </LogoContainer>
    )
}

export default Logo