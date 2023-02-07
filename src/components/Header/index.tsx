import * as C from "./styles";
import Imgsrc from "../../img/itGeekslogo.png";
import React from "react";

export const Header = () => {
  return (
    <C.Container>
      <div>
        <h1>Candidate registration</h1>
        <p>Sign up to join our Club</p>
      </div>
      <div className="img">
        <img src={Imgsrc} alt="It geeks clup logo"></img>
      </div>
    </C.Container>
  );
};
