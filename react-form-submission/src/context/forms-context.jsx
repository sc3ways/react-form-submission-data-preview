import { createContext, useReducer } from "react";

export const FormContext = createContext({
  formDataLists: [],
  addNewData: () => {},
  deleteItem: () => {},
});
const formDataReducer = (currentData, action) => {
  let newdata = currentData;
  if (action.type === "ADD_DATA") {
    newdata = [action.payload, ...currentData];
  }
  if (action.type === "DELETE") {
    newdata = currentData.filter((item) => item.id !== action.payload.id);
  }
  return newdata;
};

const FormContextProvider = ({ children }) => {
  const [formDataLists, dispatchFormDataList] = useReducer(formDataReducer, []);
  const addNewData = (firstname, lastname, discreption) => {
    dispatchFormDataList({
      type: "ADD_DATA",
      payload: {
        id: Date.now(),
        firstname,
        lastname,
        discreption,
      },
    });
  };
  const deleteItem = (id) => {
    dispatchFormDataList({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };

  return (
    <FormContext.Provider value={{ formDataLists, addNewData, deleteItem }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
