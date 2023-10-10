import {Router} from "./routes/router";
import {FormProvider} from "./context/FormContext";


import GlobalStyled from "./components/styles/GlobalStyledComponents/GlobalStyled";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <div>
            <FormProvider>
                <Toaster/>
                <Router/>
                <GlobalStyled/>
            </FormProvider>
        </div>
    );
}

export default App;
