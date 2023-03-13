import React from "react";
import {
  Page, Text, View, Document, StyleSheet, PDFViewer
} from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginTop: 60,
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
