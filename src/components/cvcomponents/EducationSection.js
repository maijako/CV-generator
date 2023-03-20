import React, { useState, useEffect } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import {
  TextField,
  InputAdornment,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ThemeProvider,
  createTheme,
  Button,
  Box,
} from "@mui/material";
import "./cv-component-styles.css";
import { blue } from "@mui/material/colors";

function EducationSection() {
  const [educationInputFields, setEducationInputFields] = useState([
    {
      instituteName: "",
      courseTitle: "",
      qualificationVal: "",
      startDate: "",
      endDate: "",
      errors: {
        instituteName: "",
        courseTitle: "",
        qualificationVal: "",
      },
    },
  ]);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const formHasErrors = educationInputFields.some((input) =>
      Object.values(input.errors).some((error) => error)
    );
    const formHasEmptyRequiredFields = educationInputFields.some(
      (input) =>
        !input.instituteName ||
        !input.courseTitle ||
        !input.qualificationVal ||
        !input.startDate ||
        !input.endDate
    );
    const formHasStartDateAfterEndDate = educationInputFields.some(
      (input) => input.startDate > input.endDate
    );

    setFormValid(
      !formHasErrors &&
        !formHasEmptyRequiredFields &&
        !formHasStartDateAfterEndDate
    );
  }, [educationInputFields]);

  const validateInput = (name, value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = "This field is required.";
    }
    return errorMessage;
  };

  const handleInputChange = (index, event) => {
    let data = [...educationInputFields];
    if (event.target !== undefined) {
      data[index][event.target.name] = event.target.value;
      data[index].errors[event.target.name] = validateInput(
        event.target.name,
        event.target.value
      );
      setEducationInputFields(data);
    }
  };

  const handleFocus = (index, event) => {
    let data = [...educationInputFields];
    data[index].errors[event.target.name] = "";
    setEducationInputFields(data);
  };

  const addEdFields = () => {
    let newField = {
      instituteName: "",
      courseTitle: "",
      qualificationVal: "",
      startDate: "",
      endDate: "",
    };
    setEducationInputFields([...educationInputFields, newField]);
  };
  const theme = createTheme({
    palette: {
      primary: blue,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root.Mui-focused": {
              color: blue[500],
            },
            "& .MuiInput-underline:after": {
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
        <h3 style={{ color: "black", marginBottom: "10px" }}>
          Education Details
        </h3>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {educationInputFields.map((input, index) => {
            return (
              <div key={index}>
                <div className="containerStyles">
                  <TextField
                    id="input-institute-name"
                    label="Institute Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SchoolRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Enter Institute Name"
                    variant="filled"
                    sx={{ margin: "15px 0" }}
                    name="instituteName"
                    value={input.instituteName}
                    onChange={(event) => handleInputChange(index, event)}
                    onFocus={(event) => handleFocus(index, event)}
                    error={Boolean(input.errors.instituteName)}
                    helperText={input.errors.instituteName}
                  />
                  <TextField
                    id="input-title-name"
                    label="Title"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SchoolRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Enter Title"
                    variant="filled"
                    sx={{ margin: "15px 0" }}
                    name="courseTitle"
                    value={input.courseTitle}
                    onChange={(event) => handleInputChange(index, event)}
                    onFocus={(event) => handleFocus(index, event)}
                    error={Boolean(input.errors.courseTitle)}
                    helperText={input.errors.courseTitle}
                  />
                  <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel id="selectedQualificationLabel">
                      Qualification
                    </InputLabel>
                    <Select
                      labelId="selectedQualificationLabel"
                      id="selectedQualification"
                      label="Qualification"
                      variant="filled"
                      name="qualificationVal"
                      value={input.qualificationVal}
                      onChange={(event) => handleInputChange(index, event)}
                      onFocus={(event) => handleFocus(index, event)}
                      error={Boolean(input.errors.qualificationVal)}
                      helperText={input.errors.qualificationVal}
                    >
                      <MenuItem value={"BA"}>BA</MenuItem>
                      <MenuItem value={"BSc"}>BSc</MenuItem>
                      <MenuItem value={"MA"}>MA</MenuItem>
                      <MenuItem value={"MSc"}>MSc</MenuItem>
                      <MenuItem value={"PhD"}>PhD</MenuItem>
                      <MenuItem value={"Certificate"}>Certificate</MenuItem>
                      <MenuItem value={"Diploma"}>Diploma</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    sx={{ margin: 2 }}
                    label="Enter Start Date"
                    variant="filled"
                    format="MMM YY"
                    views={["month", "year"]}
                    name="startDate"
                    onChange={(newValue) => {
                      const data = [...educationInputFields];
                      data[index].startDate = newValue.format("MMM YYYY");
                      if (
                        data[index].endDate &&
                        newValue > data[index].endDate
                      ) {
                        data[index].errors.startDate =
                          "Start date cannot be after end date.";
                      } else {
                        data[index].errors.startDate = "";
                      }
                      setEducationInputFields(data);
                    }}
                    error={Boolean(input.errors.startDate)}
                    helperText={input.errors.startDate}
                  />

                  <DatePicker
                    sx={{ margin: 2 }}
                    label="Enter End Date"
                    variant="filled"
                    format="MMM YY"
                    views={["month", "year"]}
                    name="endDate"
                    onChange={(newValue) => {
                      const data = [...educationInputFields];
                      data[index].endDate = newValue.format("MMM YYYY");
                      if (
                        data[index].startDate &&
                        newValue < data[index].startDate
                      ) {
                        data[index].errors.endDate =
                          "End date cannot be before start date.";
                      } else {
                        data[index].errors.endDate = "";
                      }
                      setEducationInputFields(data);
                    }}
                    error={Boolean(input.errors.endDate)}
                    helperText={input.errors.endDate}
                  />
                </LocalizationProvider>
              </div>
            );
          })}

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "skyblue",
              "&:hover": {
                backgroundColor: "deepskyblue",
              },
            }}
            onClick={addEdFields}
          >
            Add Education
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default EducationSection;
