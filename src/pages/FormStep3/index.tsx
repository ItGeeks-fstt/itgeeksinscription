import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {Link, useHistory} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect,} from 'react'
import {ReactComponent as ButtonIcon} from '../../svgs/button.svg'



export const FormStep3 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()
    

    const handleNextStep = (e:React.FormEvent<EventTarget>) =>{
        if(state.email.includes('@')  && state.github !== '' && state.number) {
            history.push('/step4')
        } else{

        alert(`   remplir correctement les données
        
        ${state.email.includes('@') ?'':'email doit etre valide (avoir @)'}
        ${state.github !== ''  ?'':'github sinon taper null'}
        ${state.number?'':'Numéro'}
        `
        );
        e.preventDefault();
        }

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })


    }


    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setNumber,
            payload: e.target.value
        })
    }

    

    useEffect(()=>{
        if(state.name === '') {
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
        

    },[])
 
    return(
        <Theme>
            <C.Container>
                <p className='passo'> Step 3/5</p>
                <h2>Cool  {state.name}, où te trouve-t-on ?</h2>
                <p>Remplissez vos coordonnées afin que nous puissions vous contacter.</p>

                <label>Quel est votre e-mail ?</label>
                <input 
                type="email" 
                onChange={handleEmailChange}
                value={state.email}
        
                />
        
                <label>Quel est votre numéro WhatsApp?</label>
                <input 
                type="number" 
                onChange={handleNumberChange}
                value={state.number}
            
                />
                <label>Quel est votre GitHub ?</label>
                <input 
                type="text" 
                onChange={handleUrlChange}
                value={state.github}
               
                />
           
                
                <div  className='navigation'>
                    <Link to='/step2'>Revenir</Link>
                    <button  onClick={handleNextStep} type="submit" className="cssbuttons-io-button"> suivante
                  <div className="icon">
                  <ButtonIcon/>
                  </div>
              </button>
                </div>

            </C.Container>
        </Theme>
    )
}