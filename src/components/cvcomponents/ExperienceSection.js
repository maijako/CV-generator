import React, { useState, useEffect } from "react";
//redux imports
import { useDispatch, useSelector } from "react-redux";
import { setExperiences } from "../../state/experience";
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

  //Using useDispatch from react-redux to dispatch actions ot the Redux store
  const dispatch = useDispatch();

  // useSelector retreives the experience data from the Redux store
  const experienceDetails = useSelector((state) => state.experience.experiences);

  //When experienceDetails change, update the local state with the new data
  useEffect(() => {
    setExperienceInputFields(experienceDetails);
  }, [experienceDetails]);


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

    setFormValid(!formHasErrors && !formHasEmptyRequiredFields && !formHasStartDateAfterEndDate);
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

  // Dispatches the action to set the experience data in the Redux store
  const handleSubmit = () => {
    dispatch(setExperiences({ experiences: experienceInputFields }));
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
                onFocus={(event) => handleFocus(index, event)}
                error={Boolean(input.errors.roleDetails)}
                helperText={input.errors.roleDetails}
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
                  const data = [...experienceInputFields];
                  data[index].startDate = newValue.format("MMM YYYY");
                  if (data[index].endDate && newValue > data[index].endDate) {
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

      <button onClick={addExpFields}>Add Experience</button>
      {/* <button disabled={!formValid} onClick={() => { }}> */}
      <button disabled={!formValid} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default ExperienceSection;
