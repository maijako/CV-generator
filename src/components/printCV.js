import React, { useRef } from "react";
import "../styles/printCV.css";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      //placeholder component
      <div>
        <div className="candidateName" placeholder="Candidate Name">Candidate Name</div>
      </div>
    );
  };
};

const PrintCV = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print CV</button>
    </div>
  );
};

render(<PrintCV />, document.getElementById("root"));

export default PrintCV;