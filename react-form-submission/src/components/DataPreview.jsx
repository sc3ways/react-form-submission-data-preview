import { useContext } from "react";
import DataCard from "./DataCard";
import { FormContext } from "../context/forms-context";
import WelcomeMessage from "./WelcomeMessage";

const DataPreview = () => {
  const { formDataLists } = useContext(FormContext);
  // console.log(formDataLists);
  return (
    <div className="preview-data">
      <div className="row">
        {formDataLists.length === 0 && <WelcomeMessage />}
        {formDataLists.map((list) => (
          <DataCard key={list.id} listItem={list} />
        ))}
      </div>
    </div>
  );
};
export default DataPreview;
