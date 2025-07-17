import logo from '../../img/logo_beta.svg'
import '../logoBeta/style.css'

function Logo (){
    return(
        <div className="logo">
            <img src={logo} alt='Logo Beta Library'></img>
        </div>
    )
}

export default Logo