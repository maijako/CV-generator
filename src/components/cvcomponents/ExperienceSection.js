import React, { useState, useEffect } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import BusinessIcon from "@mui/icons-material/Business";
import BadgeIcon from "@mui/icons-material/Badge";
import {
  TextField,
  InputAdornment,
  ThemeProvider,
  Box,
  createTheme,
  Button,
} from "@mui/material";
import "./cv-component-styles.css";
import { blue } from "@mui/material/colors";

function ExperienceSection() {
  const [experienceInputFields, setExperienceInputFields] = useState([
    {
      companyName: "",
      jotTitle: "",
      roleDetails: "",
      startDate: "",
      endDate: "",
      errors: {
        companyName: "",
        jotTitle: "",
      },
    },
  ]);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const formHasErrors = experienceInputFields.some((input) =>
      Object.values(input.errors).some((error) => error)
    );
    const formHasEmptyRequiredFields = experienceInputFields.some(
      (input) =>
        !input.companyName ||
        !input.jotTitle ||
        !input.roleDetails ||
        !input.startDate ||
        !input.endDate
    );

    const formHasStartDateAfterEndDate = experienceInputFields.some(
      (input) => input.startDate > input.endDate
    );

    setFormValid(
      !formHasErrors &&
        !formHasEmptyRequiredFields &&
        !formHasStartDateAfterEndDate
    );
  }, [experienceInputFields]);

  const validateInput = (name, value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = "This field is required.";
    }
    return errorMessage;
  };

  const handleInputChange = (index, event) => {
    let data = [...experienceInputFields];
    if (event.target !== undefined) {
      data[index][event.target.name] = event.target.value;
      data[index].errors[event.target.name] = validateInput(
        event.target.name,
        event.target.value
      );
      setExperienceInputFields(data);
    }
  };

  const handleFocus = (index, event) => {
    let data = [...experienceInputFields];
    data[index].errors[event.target.name] = "";
    setExperienceInputFields(data);
  };

  const addExpFields = (event) => {
    event.preventDefault();
    let newField = {
      companyName: "",
      jotTitle: "",
      roleDetails: "",
      startDate: "",
      endDate: "",
      errors: {
        companyName: "",
        jotTitle: "",
      },
    };
    setExperienceInputFields([...experienceInputFields, newField]);
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
          Experience Details
        </h3>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {experienceInputFields.map((input, index) => {
            return (
              <div key={index}>
                <div className="containerStyles">
                  <TextField
                    id={`input-company-name-${index}`}
                    label="Company Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Enter Company Name"
                    variant="filled"
                    sx={{ margin: "15px 0" }}
                    name="companyName"
                    value={input.companyName}
                    onChange={(event) => handleInputChange(index, event)}
                    onFocus={(event) => handleFocus(index, event)}
                    error={Boolean(input.errors.companyName)}
                    helperText={input.errors.companyName}
                  />
                  <TextField
                    id={`input-job-title-${index}`}
                    label="Job Title"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Enter Job Title"
                    variant="filled"
                    sx={{ margin: "15px 0" }}
                    name="jotTitle"
                    value={input.jotTitle}
                    onChange={(event) => handleInputChange(index, event)}
                    onFocus={(event) => handleFocus(index, event)}
                    error={Boolean(input.errors.jotTitle)}
                    helperText={input.errors.jotTitle}
                  />
                  <TextField
                    id={`job-detail-${index}`}
                    label="Role Details"
                    placeholder="Give a detailed description of your role."
                    variant="filled"
                    multiline
                    minRows={3}
                    maxRows={8}
                    sx={{ width: "50%" }}
                    name="roleDetails"
                    value={input.roleDetails}
                    onChange={(event) => handleInputChange(index, event)}
                    onFocus={(event) => handleFocus(index, event)}
                    error={Boolean(input.errors.roleDetails)}
                    helperText={input.errors.roleDetails}
                  />
                </div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    sx={{ margin: 2 }}
                    label="Enter Start Date"
                    variant="filled"
                    format="MMM YYYY"
                    name="startDate"
                    views={["month", "year"]}
                    onChange={(newValue) => {
                      const data = [...experienceInputFields];
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
                      setExperienceInputFields(data);
                    }}
                    error={Boolean(input.errors.startDate)}
                    helperText={input.errors.startDate}
                  />
                  <DatePicker
                    sx={{ margin: 2 }}
                    label="Enter End Date"
                    variant="filled"
                    format="MMM YYYY"
                    views={["month", "year"]}
                    name="endDate"
                    onChange={(newValue) => {
                      const data = [...experienceInputFields];
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
                      setExperienceInputFields(data);
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
            onClick={addExpFields}
          >
            Add Experience
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ExperienceSection;
