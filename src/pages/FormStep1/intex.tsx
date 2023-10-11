import * as C from "./styles";
import {useNavigate} from 'react-router-dom';
import {Theme} from "../../components/Theme/intex";
import {ChangeEvent, useEffect} from "react";
import {useForm} from "../../context/hooks/UseForm.tsx";
import {FormActions} from "../../context/types/types.ts";
import toast from "react-hot-toast";


export const FormStep1 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        });
    };

    const handleNextStep = () => {
        if (state.name) {
            navigate("/step2");
        } else {
            toast.error("Enter your name");
        }
    };

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        });
    }, [dispatch]);

    return (
        <Theme>
            <C.Container>
                <p className="passo">Step 1/5 </p>
                <h2>Let's start with your name</h2>
                <p>Fill in the field with your name</p>

                <label>Your full name</label>
                <input
                    type="text"
                    autoFocus
                    onChange={handleNameChange}
                    value={state.name}
                />

                <button disabled={!state.name} onClick={handleNextStep} className="cssbuttons-io-button">
                    Next
                    <div className="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                  fill="currentColor"></path>
                        </svg>

                    </div>
                </button>
            </C.Container>
        </Theme>
    );
};
