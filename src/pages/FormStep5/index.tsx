import * as C from "./styles";
import {Theme} from "../../components/Theme/intex";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../config.ts";
import {useForm} from "../../context/hooks/UseForm.tsx";
import {FormActions} from "../../context/types/types.ts";

type user = {
    name: string;
    email: string;
    level: string;
    github: string;
    number: string;
    team: string;
};

const teams = {
    "1": "Organization  team ",
    "2": "Media / Design  team",
};

export const FormStep5 = () => {
    const [hasError, setHasError] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    const {state, dispatch} = useForm();
    const navigate = useNavigate();

    async function SubmitForm(data: user) {
        try {
            setIsWaiting(true);
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setIsWaiting(false);
            setHasError(false);
        } catch (e) {
            setHasError(true);
            setIsWaiting(false);
            throw new Error();
        }
    }

    useEffect(() => {
        if (state.email === "" || state.github === "" || !state.number) {
            navigate("/step3");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5,
            });

            SubmitForm({
                name: state.name,
                email: state.email,
                level: state.level === 1 ? "beginner" : "programmer",
                github: state.github,
                number: `0+${state.number}`,
                team: teams[state.team || 1],
            });
            //use an api to send the infos
        }
    }, [dispatch, navigate, state.email, state.github, state.level, state.name, state.number, state.team]);

    return (
        <Theme>
            <C.Container>
                {!hasError && !isWaiting && (
                    <>
                        <h2>Congratulations</h2>
                        <p>Registration sent successfully !</p>
                    </>
                )}
                {hasError && (
                    <>
                        <h2>OOPS </h2>
                        <p> An error has occurred !</p>
                    </>
                )}
                {isWaiting && (
                    <>
                        <h2>could you please </h2>
                        <p>your request is being processed</p>
                    </>
                )}

                <C.IconArea>
                    {!hasError && !isWaiting && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="rgb(91, 24, 153)"
                             width={120} height={120}>
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/>
                        </svg>
                    )}
                    {hasError && (
                        <svg fill="rgb(91, 24, 153)" width={120} height={120} viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6 12A6 6 0 106 0a6 6 0 000 12zM3 5a1 1 0 000 2h6a1 1 0 100-2H3z" fill="#000"/>
                        </svg>
                    )}
                    {isWaiting && (
                        <svg fill="rgb(91, 24, 153)" width={120} height={120} version="1.1" id="Capa_1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px"
                             viewBox="0 0 297 297" enableBackground="new 0 0 297 297;" xmlSpace="preserve">
                            <g>
                                <path d="M251.01,277.015h-17.683l-0.002-31.558c0-31.639-17.358-60.726-48.876-81.901c-3.988-2.682-6.466-8.45-6.466-15.055
                        s2.478-12.373,6.464-15.053c31.52-21.178,48.878-50.264,48.88-81.904V19.985h17.683c5.518,0,9.992-4.475,9.992-9.993
                        c0-5.518-4.475-9.992-9.992-9.992H45.99c-5.518,0-9.992,4.475-9.992,9.992c0,5.519,4.475,9.993,9.992,9.993h17.683v31.558
                        c0,31.642,17.357,60.728,48.875,81.903c3.989,2.681,6.467,8.448,6.467,15.054s-2.478,12.373-6.466,15.053
                        c-31.519,21.177-48.876,50.263-48.876,81.903v31.558H45.99c-5.518,0-9.992,4.475-9.992,9.993c0,5.519,4.475,9.992,9.992,9.992
                        h205.02c5.518,0,9.992-4.474,9.992-9.992C261.002,281.489,256.527,277.015,251.01,277.015z M83.657,245.456
                        c0-33.425,25.085-55.269,40.038-65.314c9.583-6.441,15.304-18.269,15.304-31.642s-5.721-25.2-15.305-31.642
                        c-14.952-10.046-40.037-31.89-40.037-65.315V19.985h129.686l-0.002,31.558c0,33.424-25.086,55.269-40.041,65.317
                        c-9.581,6.441-15.301,18.269-15.301,31.64s5.72,25.198,15.303,31.642c14.953,10.047,40.039,31.892,40.041,65.314v31.558h-3.312
                        c-8.215-30.879-50.138-64.441-55.377-68.537c-3.616-2.828-8.694-2.826-12.309,0c-5.239,4.095-47.163,37.658-55.378,68.537h-3.311
                        V245.456z M189.033,277.015h-81.067c6.584-15.391,25.383-34.873,40.534-47.76C163.652,242.142,182.45,261.624,189.033,277.015z"/>
                                <path d="M148.497,191.014c2.628,0,5.206-1.069,7.064-2.928c1.868-1.858,2.928-4.437,2.928-7.064s-1.06-5.206-2.928-7.065
                        c-1.858-1.857-4.436-2.927-7.064-2.927c-2.628,0-5.206,1.069-7.064,2.927c-1.859,1.859-2.928,4.438-2.928,7.065
                        s1.068,5.206,2.928,7.064C143.291,189.944,145.869,191.014,148.497,191.014z"/>
                                <path d="M148.5,138.019c5.519,0,9.992-4.474,9.992-9.992v-17.664c0-5.518-4.474-9.993-9.992-9.993s-9.992,4.475-9.992,9.993v17.664
                        C138.508,133.545,142.981,138.019,148.5,138.019z"/>
                            </g>
                            <g>
                            </g>

                        </svg>
                    )}
                </C.IconArea>

                <p className="check-email">
                    {" "}
                    <b>{state.name}</b> we have received your email and your information,
                    stay in touch!!!
                </p>
            </C.Container>
        </Theme>
    )
        ;
};
