import usuario from '../../img/usuario.svg'
import livros from '../../img/livros.svg'
import '../iconesMenu/style.css'

const icones = [usuario, livros]

function IconesMenu(){
    return(
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'>
                    <img src={icone}></img>
                </li>
            ))}
        </ul>
    )
}

export default IconesMenu;