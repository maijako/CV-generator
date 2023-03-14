import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

// Create styles
const styles = {
  button: {
    display: "flex",
    alignSelf: "centre"
  },

  page: {
    // display: "flex",
    // flexDirection: "column",
    justifyContent: "top",
    alignItems: "left",
    backgroundColor: "white",
    marginTop: 60,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
  },

  heading: {
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "top",
  },

  headingText: {
    display: "block",
    color: "black",
    fontSize: "32px",
  },

  contact: {
    display: "block",
    JustifyContent: "left",
  },

  contactText: {
    fontSize: "10px",
    color: "grey",
  },
};



class ComponentToPrint extends React.Component {
  render() {
    return (
      //placeholder component
      <div style={styles.page}>
        <div style={styles.heading} placeholder="Candidate Name">Candidate Name</div>
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
      <button style={styles.button} onClick={handlePrint}>Print CV</button>
    </div>
  );
};

render(<PrintCV />, document.getElementById("root"));

export default PrintCV;