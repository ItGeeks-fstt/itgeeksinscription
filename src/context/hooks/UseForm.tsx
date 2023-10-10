// Hooks Context
import {useContext} from "react";
import {FormContext} from "../FormContext.tsx";

export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error("useForm needs to be used inside the FormProvider");
    }
    return context;
};