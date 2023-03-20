import React from "react";
import { TextField, ThemeProvider, Box, createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

function ProfessionalSummary() {
  const theme = createTheme({
    palette: {
      primary: blue,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputLabel-root.Mui-focused': {
              color: blue[500],
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: blue[500],
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ color: "black", marginBottom: "10px" }}>Professional Summary</h3>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField fullWidth
            id="professional-summary"
            label="Summary"
            margin="dense"
            placeholder="Provide Professional details about yourself. Use the AI feature for some suggestion."
            multiline
            minRows={3}
            maxRows={8}
            sx={{ margin: 2, width: "50%" }}
            variant="filled"
            color="primary"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ProfessionalSummary;

