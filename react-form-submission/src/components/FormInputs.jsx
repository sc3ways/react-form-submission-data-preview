import { useContext, useState } from "react";
import { FormContext } from "../context/forms-context";

const FormInputs = () => {
  const { addNewData } = useContext(FormContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [discreption, setDiscreption] = useState("");
  const [errmessage, setErrmessage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!firstname.trim()) {
      setErrmessage("Please enter your fistname");
    } else if (!lastname.trim()) {
      setErrmessage("Please enter your lastname");
    } else if (!discreption.trim()) {
      setErrmessage("Please enter something about you");
    } else {
      setErrmessage("");

      setFirstname("");
      setLastname("");
      setDiscreption("");
      addNewData(firstname, lastname, discreption);
    }
  };

  return (
    <div className="forms-wrap">
      <h2>Form Inputs</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter your firstname"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter your lastname"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={discreption}
            onChange={(e) => setDiscreption(e.target.value)}
            placeholder="Enter about you"
          ></textarea>
        </div>
        {errmessage && <p style={{ color: "#CC0000" }}>{errmessage}</p>}
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormInputs;
