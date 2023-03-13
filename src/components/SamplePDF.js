import React from "react";
import {
  Page, Text, View, Document, StyleSheet
} from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

//Create Document component
const SamplePDF = () => {
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed >
        <Text style={styles.text}>Lorel ipsum</Text>
      </Text>
    </Page>
  </Document>
};

export default SamplePDF;
