import * as C from './styles'
import Imgsrc from '../../img/itGeekslogo.jpg'


export const Header = () => {
    return(
        <C.Container>
       
            <div>
            <h1>Inscription des candidas</h1>
            <p>Inscrivez-vous pour joindre notre Club</p>
            </div>
            <div className='img'>
<img  src={Imgsrc} alt="It geeks clup logo"></img>
            </div>
       
        </C.Container>
    )
}