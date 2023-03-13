import React from "react";
import {
  Page, Text, View, Document, StyleSheet, PDFViewer
} from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 30,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "top",
    backgroundColor: "white",
    padding: 10,
  },
  heading: {
    color: "black",
    fontSize: "42px"
  },
  viewPDF: {
    width: "100%",
    height: "90vh"
  }
});

//Create Document component
const SamplePDF = () => (
  <PDFViewer style={styles.viewPDF}>
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>First name Last name</Text>
      </View>
    </Page>
  </Document>
  </PDFViewer>
);

export default SamplePDF;
