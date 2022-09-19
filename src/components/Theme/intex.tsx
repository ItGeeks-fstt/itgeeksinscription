import * as C from './styles'
import { ReactNode } from 'react'
import { Header } from '../Header'
import {SidebarItem} from '../SidebarItem'
import {useForm} from '../../context/FormContext'

type Props = {
    children: ReactNode
}



export const Theme = ({children}: Props) => {
    const {state} = useForm()
    return(
        <C.Container>
            <C.Area>
                
                <Header />

                <C.Steps>
                    <C.Sidebar>
                    <SidebarItem
                            title="personnel"
                            description="identifier-vous"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                            allowed={state.currentStep >= 1}
                        />

                        <SidebarItem
                            title="Professionnelle"
                            description="votre niveau"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                            allowed={state.currentStep >= 2}
                        />

                        <SidebarItem
                            title="Contacts"
                            description="comment vous trouver"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                            allowed={state.currentStep >= 3}
                        />
                        <SidebarItem
                            title="Conclu"
                            description="Succès"
                            icon="check"
                            path="/step4"
                            active={state.currentStep === 4}
                            allowed={state.currentStep >= 4}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                    
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}