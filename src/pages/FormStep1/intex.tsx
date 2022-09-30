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
            alert('Fill in the data correctly \n\nName')
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
                <p className='passo'>Step 1/5 </p>
                <h2>Let's start with your name</h2>
                <p>Fill in the field with your name</p>

                <label>Your full name</label>
                <input 
                    type="text" 
                    autoFocus
                    onChange={handleNameChange}
                    value={state.name}
                    />
                    

                <button  onClick={handleNextStep} className="cssbuttons-io-button"> Next
                  <div className="icon">
                  <ButtonIcon/>
                  </div>
              </button>
            </C.Container>
        </Theme>
    )
}