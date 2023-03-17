import React, { useState, useEffect } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import BusinessIcon from "@mui/icons-material/Business";
import BadgeIcon from "@mui/icons-material/Badge";
import { TextField, InputAdornment } from "@mui/material";
import "./cv-component-styles.css";

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
      (input) => !input.companyName || !input.jotTitle
    );
    setFormValid(!(formHasErrors || formHasEmptyRequiredFields));
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

  return (
    <>
      <h3>Experience Details</h3>
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
                variant="outlined"
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
                variant="outlined"
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
                multiline
                minRows={3}
                maxRows={8}
                sx={{ width: "50%" }}
                name="roleDetails"
                value={input.roleDetails}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                sx={{ margin: 2 }}
                label="Enter Start Date"
                format="MMM YYYY"
                name="startDate"
                views={["month", "year"]}
                onChange={(newValue) => {
                  experienceInputFields[index].startDate =
                    newValue.format("MMM YYYY");
                }}
              />
              <DatePicker
                sx={{ margin: 2 }}
                label="Enter End Date"
                format="MMM YYYY"
                views={["month", "year"]}
                name="endDate"
                onChange={(newValue) => {
                  experienceInputFields[index].endDate =
                    newValue.format("MMM YYYY");
                }}
              />
            </LocalizationProvider>
          </div>
        );
      })}

      <button onClick={addExpFields}>Add Experience</button>
      <button disabled={!formValid} onClick={() => {}}>
        Submit
      </button>
    </>
  );
}

export default ExperienceSection;
