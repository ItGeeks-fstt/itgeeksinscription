import * as C from "./styles";
import {Theme} from "../../components/Theme/intex";
import {Link, useNavigate} from "react-router-dom";
import {ChangeEvent, FormEvent, useEffect} from "react";
import {useForm} from "../../context/hooks/UseForm.tsx";
import {FormActions} from "../../context/types/types.ts";
import toast from "react-hot-toast";

export const FormStep3 = () => {
    const {state, dispatch} = useForm();
    const navigate = useNavigate();

    const handleNextStep = (e: FormEvent<EventTarget>) => {
        if (state.email.includes("@") && state.github !== "" && state.number) {
            navigate("/step4");
        } else {
            toast.error(`   correctly fill in the data
        
        ${state.email.includes("@") ? "" : "email must be valid (have @)"}
        ${state.github !== "" ? "" : "github otherwise type null"}
        ${state.number ? "" : "Number"}
        `);
            e.preventDefault();
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    };

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        });
    };

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNumber,
            payload: e.target.value,
        });
    };

    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, [dispatch, navigate, state.name]);

    return (
        <Theme>
            <C.Container>
                <p className="passo"> Step 3/5</p>
                <h2>Cool {state.name}, where do we find you ?</h2>
                <p>Fill in your details so that we can contact you.</p>

                <label>What is your email ?</label>
                <input type="email" onChange={handleEmailChange} value={state.email}/>

                <label>What is your whatsapp number?</label>
                <input
                    type="number"
                    onChange={handleNumberChange}
                    value={state.number}
                />
                <label>What is your GitHub ?</label>
                <input type="text" onChange={handleUrlChange} value={state.github}/>

                <div className="navigation">
                    <Link to="/step2">Back</Link>
                    <button
                        onClick={handleNextStep}
                        type="submit"
                        className="cssbuttons-io-button"
                    >
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
