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
                    title="Media & Design Team"
                    description="This team is responsible for all aspects of design and media promotion for your club."
                    icon="🎨"
                    selected={state.team === 1}
                    onClick={() => setLevel(5)}
                    more="Key Responsibilities:  Graphic Design: They create visuals, posters, flyers, and any graphic materials needed for club events and promotions.
Social Media Management: This team manages the club's social media accounts, including Instagram, and posts content regularly to keep members and the public informed.
Content Creation: They develop and curate content for various platforms, ensuring that the club's message is effectively communicated."
                />
                <SelectOption
                    title="Project Organisation Team"
                    description="This team focuses on planning and executing various events that are relevant to the club's mission and interests."
                    icon="🏫"
                    selected={state.team === 1}
                    onClick={() => setLevel(5)}
                    more="Key Responsibilities:
Event Planning: They plan and coordinate events such as Informatique bdarija, Hackathons, and ice breakers, ensuring that they align with the club's objectives.
Sponsorship: Identifying and securing sponsorships for club events, which includes creating sponsorship proposals, negotiating agreements, and managing sponsor relationships."
                />

                <div className="navigation">
                    <Link to="/step3">Back</Link>
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
