import * as C from "./styles";
import {Link, useNavigate} from "react-router-dom";
import {Theme} from "../../components/Theme/intex";
import {SelectOption} from "../../components/SelectOption";
import {useEffect} from "react";
import {useForm} from "../../context/hooks/UseForm.tsx";
import {FormActions} from "../../context/types/types.ts";

export const FormStep4 = () => {
    const {state, dispatch} = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        state.team && navigate("/step5");
    };

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4,
        });
    }, [dispatch]);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setTeam,
            payload: level,
        });
    };

    return (
        <Theme>
            <C.Container>
                <p className="passo">Step 4/5</p>
                <h2>{state.name} Choose your Team</h2>
                <p>You can read the description to get more info</p>

                <SelectOption
                    title="Formation  team"
                    description="Coding is what we do and love. And we want for all students who are interested in computer science to "
                    icon="🏫"
                    selected={state.team === 1}
                    onClick={() => setLevel(1)}
                    more=" understand the concepts and write better code by learning and teaching each other. By choosing this team, you will be helping other students in developing applications, learning programming languages and solving problems… You should know the basic coding languages such as C++ and JavaScript. More over you should know how to write and debug code, as well as having an experience in front-end or back-end software development."
                />
                <SelectOption
                    title="Organization team "
                    description="This team should organize all the events hosted by the club in the most efficient way possible."
                    icon="⌚"
                    selected={state.team === 2}
                    onClick={() => setLevel(2)}
                    more=" It should manage the event planning process, manage the budget parameters and develop networks with other event organizers so we can collaborate on other events. As a requirement, you should have the ability to work on a team, flexibility, motivation and the sense of responsibility."
                />

                <div className="navigation">
                    <Link to="/step3">Back</Link>
                    <button onClick={handleNextStep} className="cssbuttons-io-button">
                        {" "}
                        Next
                        <div className="icon">
                            <SelectOption
                                title="Formation  team"
                                description="Coding is what we do and love. And we want for all students who are interested in computer science to "
                                icon="🏫"
                                selected={state.team === 1}
                                onClick={() => setLevel(1)}
                                more=" understand the concepts and write better code by learning and teaching each other. By choosing this team, you will be helping other students in developing applications, learning programming languages and solving problems… You should know the basic coding languages such as C++ and JavaScript. More over you should know how to write and debug code, as well as having an experience in front-end or back-end software development."
                            />
                            <SelectOption
                                title="Organization team "
                                description="This team should organize all the events hosted by the club in the most efficient way possible."
                                icon="⌚"
                                selected={state.team === 2}
                                onClick={() => setLevel(2)}
                                more=" It should manage the event planning process, manage the budget parameters and develop networks with other event organizers so we can collaborate on other events. As a requirement, you should have the ability to work on a team, flexibility, motivation and the sense of responsibility."
                            />
                        </div>
                    </button>
                </div>
            </C.Container>
        </Theme>
    );
};
