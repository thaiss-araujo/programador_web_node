import logo from '../../img/logo_beta.svg'
import '../logoBeta/style.css'

function Logo (){
    return(
        <div className="logo">
            <img src={logo} alt='Logo Beta Library'></img>
            <p>Beta Library - sua biblioteca digital moderna</p>
        </div>
    )
}

export default Logo