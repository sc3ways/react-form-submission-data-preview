import DataPreview from "./components/DataPreview";
import FormInputs from "./components/FormInputs";
import FormContextProvider from "./context/forms-context";

function App() {
  return (
    <FormContextProvider>
      <div className="container mt-4">
        <h1 className="mb-5">Form Submssion</h1>
        <div className="row">
          <div className="col-lg-6">
            <FormInputs />
          </div>
          <div className="col-lg-6">
            <DataPreview />
          </div>
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
