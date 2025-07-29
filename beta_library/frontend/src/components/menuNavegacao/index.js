import styled from 'styled-components'

const Opcoes = styled.ul `
    display: flex;
`
const Opcao = styled.li `
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;

    position: relative;
    transition: color 0.3s ease;

    &:hover {
    color: #4facfe;
  }
`

const textoMenu = ['INÍCIO', 'CATÁLOGO', 'SOBRE']

function MenuNavegacao(){
    return(
        <Opcoes>
            {textoMenu.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default MenuNavegacao;