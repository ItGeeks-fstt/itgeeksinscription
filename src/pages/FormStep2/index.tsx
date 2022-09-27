import * as C from './styles'
import {useHistory, Link} from 'react-router-dom'
import { Theme } from '../../components/Theme/intex'
import { SelectOption } from '../../components/SelectOption'
import {useForm, FormActions} from '../../context/FormContext'
import {useEffect} from 'react'
import {ReactComponent as ButtonIcon} from '../../svgs/button.svg'





export const FormStep2 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleNextStep = () => {
      
       state.level!==undefined && history.push('/step3')
    }

    useEffect(()=>{
      
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        
        

    },[])

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level 
        })

    }

    return(
        <Theme>
            <C.Container>
            <p className='passo'>Step 2/5</p>
            <h2>{state.name}, What's describe you the most</h2>
            <p>Choose an option that describe your current level</p>

            <SelectOption
            title="I am a beginner"
            description="I'm interested in all things computer." 
            icon="🥳"
            selected={state.level === 1}
            onClick={()=>setLevel(1)}
            more=''
            />

             <SelectOption
                    title="I am a programmer"
                    description="I have been programming for a Period"
                    icon="😎"
                    selected={state.level === 2}
                    onClick={()=>setLevel(2)}
                    more=''
                />

            <div className='navigation'>
                <Link to='/'>Back</Link>
                <button  onClick={handleNextStep} className="cssbuttons-io-button"> Next
                  <div className="icon">
                  <ButtonIcon/>
                  </div>
              </button>
               
            </div>


            </C.Container>
        </Theme>
    )
}