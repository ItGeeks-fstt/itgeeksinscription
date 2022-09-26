import * as C from './styles'
import {useHistory, Link} from 'react-router-dom'
import { Theme } from '../../components/Theme/intex'
import { SelectOption } from '../../components/SelectOption'
import {useForm, FormActions} from '../../context/FormContext'
import {useEffect} from 'react'
import {ReactComponent as ButtonIcon} from '../../svgs/button.svg'





export const FormStep4 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleNextStep = () => {
        
        history.push('/step5')

    }

    useEffect(()=>{
      
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        
        

    },[])

    const setLevel = (level: number) => {
   
        dispatch({
            type: FormActions.setTeam,
            payload: level 
        })

    }

    return(
        <Theme>
            <C.Container>
            <p className='passo'>STEP 4/5</p>
            <h2>{state.name} Choose your Team</h2>
            <p>You can read the description to get more info</p>

            <SelectOption
            title="Formation  team"
            description="Coding is what we do and love. And we want for all students who are interested in computer science to " 
            icon="🏫"
            selected={state.team === 1}
            onClick={()=>setLevel(1)}
            more=' understand the concepts and write better code by learning and teaching each other. By choosing this team, you will be helping other students in developing applications, learning programming languages and solving problems… You should know the basic coding languages such as C++ and JavaScript. More over you should know how to write and debug code, as well as having an experience in front-end or back-end software development.'
            />
             <SelectOption
                    title="Organization team "
                    description="This team should organize all the events hosted by the club in the most efficient way possible."
                    icon="⌚"
                    selected={state.team === 2}
                    onClick={()=>setLevel(2)}
                    more=" It should manage the event planning process, manage the budget parameters and develop networks with other event organizers so we can collaborate on other events. As a requirement, you should have the ability to work on a team, flexibility, motivation and the sense of responsibility."
                />
            <SelectOption
            title="Media  team"
            description="Coding is what we do and love. And we want for all students who are interested in computer science to" 
            icon="📀"
            selected={state.team === 3}
            onClick={()=>setLevel(3)}
            more=" understand the concepts and write better code by learning and teaching each other. By choosing this team, you will be helping other students in developing applications, learning programming languages and solving problems… You should know the basic coding languages such as C++ and JavaScript. More over you should know how to write and debug code, as well as having an experience in front-end or back-end software development"
            />
             <SelectOption
                    title="Design  team"
                    description="your club will be hosting various activities and events.So you will be working with a team of designers "
                    icon="🌌"
                    selected={state.team === 4}
                    onClick={()=>setLevel(4)}
                    more=" in order to achieve a common design goal for the club projects. As well, the team should work on improving and integrating better user feedback into the design process. As a requirement: Creativity, Visual Communication, and a portfolio of illustrations or other graphics will be a plus."
                />

            <div className='navigation'>
                <Link to='/step3'>Revenir</Link>
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