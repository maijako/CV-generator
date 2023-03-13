import React from "react";
import {
  Page, Text, View, Document, StyleSheet, PDFViewer
} from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
  viewPDF: {
    width: "100%",
    height: "90vh"
  },

  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "left",
    backgroundColor: "white",
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40,
  },

  heading: {
    display: "block",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "top",
  },

  headingText: {
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

});


//Create Document component
const SamplePDF = () => (
  <PDFViewer style={styles.viewPDF}>
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Candidate Name</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.contactText}>developer@cvbuilder.com</Text>
        <Text style={styles.contactText}>+44 789654321</Text>
      </View>
    </Page>
  </Document>
  </PDFViewer>
);

export default SamplePDF;
