import { createContext, useReducer } from "react";

export const FormContext = createContext({
  formDataLists: [],
  addNewData: () => {},
});
const formDataReducer = (currentData, action) => {
  let newdata = currentData;
  if (action.type === "ADD_DATA") {
    newdata = [action.payload, ...currentData];
  }
  return newdata;
};

const FormContextProvider = ({ children }) => {
  const [formDataLists, dispatchFormDataList] = useReducer(
    formDataReducer,
    DEFAULT_DATA
  );
  const addNewData = (firstname, lastname, discreption) => {
    dispatchFormDataList({
      type: "ADD_DATA",
      payload: {
        firstname,
        lastname,
        discreption,
      },
    });
  };
  return (
    <FormContext.Provider value={{ formDataLists, addNewData }}>
      {children}
    </FormContext.Provider>
  );
};

const DEFAULT_DATA = [
  {
    firstname: "Sunil",
    lastname: "Choudhary",
    discreption:
      "A MERN Stack developer with 12 years experience in nodejs, reactjs, express js and mongodb.",
  },
  {
    firstname: "Deppak",
    lastname: "Verma",
    discreption:
      "A graphic designer with 10 years experience in adobe photoshop, coreldraw and video editing",
  },
];
export default FormContextProvider;
