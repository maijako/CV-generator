import React from "react";
import { TextField, ThemeProvider, Box, createTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { blue } from "@mui/material/colors";

import skillsList from "./skills.json";

function SkillsSection() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
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
            '& .MuiInputBase-input': {
              color: blue[500],
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
              padding: '10px',
            },
          },
          paper: {
            boxShadow: '0px 0px 15px -5px rgba(0,0,0,0.2)',
            borderRadius: '5px',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ color: "black", marginBottom: "10px" }}>Skills</h3>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Autocomplete
            multiple
            id="tags-filled"
            options={skillsList}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Skills Set"
                margin="dense "
                placeholder="Choose Your Skill Set"
                variant="filled"
                color="warning" focused
              />
            )}
            sx={{ margin: "15px 0", width: "100%" }}
            variant="filled"
            color="warning"
            focused
          />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default SkillsSection;
