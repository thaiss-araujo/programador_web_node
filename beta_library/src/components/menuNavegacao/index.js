import '../menuNavegacao/style.css'

const textoMenu = ['INÍCIO', 'CATÁLOGO', 'SOBRE']

function MenuNavegacao(){
    return(
        <ul className="opcoes">
            {textoMenu.map((texto) => (
                <li className="opcao"><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default MenuNavegacao;