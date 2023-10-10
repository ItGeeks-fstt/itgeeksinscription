import * as C from "./styles";
import {Link, useNavigate} from "react-router-dom";
import {Theme} from "../../components/Theme/intex";
import {SelectOption} from "../../components/SelectOption";
import {useEffect} from "react";
import {useForm} from "../../context/hooks/UseForm.tsx";
import {FormActions} from "../../context/types/types.ts";

export const FormStep2 = () => {
    const {state, dispatch} = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        state.level !== undefined && navigate("/step3");
    };

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2,
        });
    }, []);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    };

    return (
        <Theme>
            <C.Container>
                <p className="passo">Step 2/5</p>
                <h2>{state.name}, What's describe you the most</h2>
                <p>Choose an option that describe your current level</p>

                <SelectOption
                    title="I am a beginner"
                    description="I'm interested in all things computer."
                    icon="🥳"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                    more=""
                />

                <SelectOption
                    title="I am a programmer"
                    description="I have been programming for a Period"
                    icon="😎"
                    selected={state.level === 2}
                    onClick={() => setLevel(2)}
                    more=""
                />

                <div className="navigation">
                    <Link to="/">Back</Link>
                    <button onClick={handleNextStep} className="cssbuttons-io-button">
                        {" "}
                        Next
                        <div className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </C.Container>
        </Theme>
    );
};
