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
        history.push('/step3')

    }

    useEffect(()=>{
        if(state.name === '') {
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        

    },[])

    const setLevel = (level: number) => {
        handleNextStep()
        dispatch({
            type: FormActions.setLevel,
            payload: level 
        })

    }

    return(
        <Theme>
            <C.Container>
            <p className='passo'>Étape 2/3</p>
            <h2>{state.name}, qu'est-ce qui vous décrit le mieux ?</h2>
            <p>Choisissez la meilleure option qui décrit votre niveau actuel</p>

            <SelectOption
            title="Je suis un débutant"
            description="Je suis intresse par toutes ce qui est informatique" 
            icon="🥳"
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
            />

             <SelectOption
                    title="Je suis un programmeur"
                    description="Je programme depuis une Période"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

            <div className='navigation'>
                <Link to='/'>Revenir</Link>
                <button  onClick={handleNextStep} className="cssbuttons-io-button"> suivante
                  <div className="icon">
                  <ButtonIcon/>
                  </div>
              </button>
               
            </div>


            </C.Container>
        </Theme>
    )
}