import usuario from '../../img/usuario.svg'
import livros from '../../img/livros.svg'
import styled from 'styled-components'

const Icones = styled.ul `
    display: flex;
    align-items: center;
`
const Icone = styled.li `
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`

const icones = [usuario, livros]

function IconesMenu(){
    return(
        <Icones>
            {icones.map((icone) => (
                <Icone>
                    <img src={icone}></img>
                </Icone>
            ))}
        </Icones>
    )
}

export default IconesMenu;