import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import CvOne from "../cv_designs/designOne/CvOne";

class ComponentToPrint extends React.Component {
  render() {
    return (
      //can probably add more CV designs and wrap them in if else statements here depending on what the user selects?
      <CvOne /> 
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
