import { useContext } from "react";
import { FormContext } from "../context/forms-context";

const DataCard = ({ listItem }) => {
  const { deleteItem } = useContext(FormContext);
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {listItem.firstname} {listItem.lastname}
          </h5>
          <p className="card-text">{listItem.discreption}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <button
          className="btn btn-danger"
          onClick={() => deleteItem(listItem.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DataCard;
