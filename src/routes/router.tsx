import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { FormStep1 } from "../pages/FormStep1/intex";
import { FormStep2 } from "../pages/FormStep2";
import { FormStep3 } from "../pages/FormStep3";
import { FormStep4 } from "../pages/FormStep4";
import { FormStep5 } from "../pages/FormStep5";
// import EndOfRegistartion from "../pages/EndOfRegistartion/EndOfRegistartion";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* comment this route to disable the end of registration*/}
        {/* <Route path='/'  component={EndOfRegistartion} /> */}
        <Route path="/" exact component={FormStep1} />
        <Route path="/step2" component={FormStep2} />
        <Route path="/step3" component={FormStep3} />
        <Route path="/step4" component={FormStep4} />
        <Route path="/step5" component={FormStep5} />
      </Switch>
    </BrowserRouter>
  );
};
