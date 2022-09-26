import * as C from './styles'
import {useHistory} from 'react-router-dom'
import { useForm, FormActions } from '../../context/FormContext'
import { Theme } from '../../components/Theme/intex'
import { ChangeEvent, useEffect } from 'react'
import {ReactComponent as ButtonIcon} from '../../svgs/button.svg'

export const FormStep1 = () => {
    

    const history = useHistory()
    const { state, dispatch} = useForm()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value 

        })
    }

    const handleNextStep = () =>{
        if(state.name !== '') {
            history.push('/step2')
        } else{
            alert('Remplissez correctement les données \n\nNom')
        }

    }

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })

    },[])


    return(
        <Theme>
            <C.Container>
                <p className='passo'>Étape 1/5 </p>
                <h2>Commençons par votre nom</h2>
                <p>Remplissez le champ avec votre nom</p>

                <label>Ton nom complet</label>
                <input 
                    type="text" 
                    autoFocus
                    onChange={handleNameChange}
                    value={state.name}
                    />
                    

                <button  onClick={handleNextStep} className="cssbuttons-io-button"> suivante
                  <div className="icon">
                  <ButtonIcon/>
                  </div>
              </button>
            </C.Container>
        </Theme>
    )
}