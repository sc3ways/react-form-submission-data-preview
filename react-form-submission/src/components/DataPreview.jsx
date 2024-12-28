import { useContext } from "react";
import DataCard from "./DataCard";
import { FormContext } from "../context/forms-context";

const DataPreview = () => {
  const { formDataLists } = useContext(FormContext);
  console.log(formDataLists);
  return (
    <div className="preview-data">
      <div className="row">
        {formDataLists.map((list, idx) => (
          <DataCard key={idx} listItem={list} />
        ))}
      </div>
    </div>
  );
};
export default DataPreview;
