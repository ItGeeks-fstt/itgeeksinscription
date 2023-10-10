import {createContext, ReactNode, useReducer} from "react";
import {FormActions} from "./types/types.ts";


type State = {
  currentStep: number;
  name: string;
  level: undefined | 1 | 2;
  team: undefined | 1 | 2 ;
  email: string;
  github: string;
  number: number;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: undefined,
  team: undefined,
  email: "",
  github: "",
  number: 0,
};

// Context API
export const FormContext = createContext<ContextType | undefined>(undefined);
// fetch user api

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setTeam:
      return { ...state, team: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    case FormActions.setNumber:
      return { ...state, number: action.payload };
    case FormActions.reset:
      return initialData;
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// import our data
