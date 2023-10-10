import {BrowserRouter, Route, Routes} from "react-router-dom";

import {FormStep1} from "../pages/FormStep1/intex";
import {FormStep2} from "../pages/FormStep2";
import {FormStep3} from "../pages/FormStep3";
import {FormStep4} from "../pages/FormStep4";
import {FormStep5} from "../pages/FormStep5";
// import EndOfRegistration from "../pages/EndOfRegistration/EndOfRegistration";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* comment this route to disable the end of registration*/}
                {/*<Route path="/" component={EndOfRegistration} />*/}
                <Route path="/" element={<FormStep1/>}/>
                <Route path="/step2" element={<FormStep2/>}/>
                <Route path="/step3" element={<FormStep3/>}/>
                <Route path="/step4" element={<FormStep4/>}/>
                <Route path="/step5" element={<FormStep5/>}/>

            </Routes>
        </BrowserRouter>
    )
        ;
};
