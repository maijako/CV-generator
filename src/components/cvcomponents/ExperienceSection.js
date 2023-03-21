import { useDispatch, useSelector } from "react-redux";
import {
  setNewExperience,
  setCompanyName,
  setJobTitle,
  setRoleDetails,
  setStartDate,
  setEndDate,
  deleteExperience
} from "../../state/experience";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import BusinessIcon from "@mui/icons-material/Business";
import BadgeIcon from "@mui/icons-material/Badge";
import { TextField, InputAdornment } from "@mui/material";
import Grid from '@mui/material/Grid';
import "./cv-component-styles.css";


function ExperienceSection() {

  const selectExperiences = state => state.experience;
  const experiences = useSelector(selectExperiences);
  const dispatch = useDispatch();

  const handleCompanyChange = (event, experienceIndex) => {
    const newCompany = event.target.value;
    // if(validateA(newCompany)){} -- an example of where a validation function from formValidation.js would go
    dispatch(setCompanyName(experienceIndex, newCompany));
  };

  const handleJobChange = (event, experienceIndex) => {
    const newJob = event.target.value;
    dispatch(setJobTitle(experienceIndex, newJob));
  };

  const handleRoleChange = (event, experienceIndex) => {
    const newRole = event.target.value;
    dispatch(setRoleDetails(experienceIndex, newRole));
  };

  const handleStartChange = (date, experienceIndex) => {
    const newStart = date.format("MMM YYYY");
    dispatch(setStartDate(experienceIndex, newStart));
  };

  const handleEndChange = (date, experienceIndex) => {
    const newEnd = date.format("MMM YYYY");
    dispatch(setEndDate(experienceIndex, newEnd));
  };


  const addExpFields = () => {
    let newField = {
      companyName: "",
      jobTitle: "",
      roleDetails: "",
      startDate: "",
      endDate: "",
    };
    dispatch(setNewExperience(newField));
  };

  const removeExpFields = (index) => {
    dispatch(deleteExperience(index));
  }

  return (
    <> 
      <h3>Experience Details</h3>
      <Grid container spacing={3}>
      {experiences.map((experience, index) => (
        <Grid key={index} item xs={12} sm={6}>
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
              sx={{ margin: "15px 0", width: "100%" }}
              name="companyName"
              value={experience.companyName}
              onChange={(event) => handleCompanyChange(event, index)}
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
              sx={{ margin: "15px 0", width: "100%" }}
              name="jobTitle"
              value={experience.jobTitle}
              onChange={(event) => handleJobChange(event, index)}
            />
            <TextField
              id={`job-detail-${index}`}
              label="Role Details"
              placeholder="Give a detailed description of your role."
              multiline
              minRows={3}
              maxRows={8}
              sx={{ width: "100%" }}
              name="roleDetails"
              value={experience.roleDetails}
              onChange={(event) => handleRoleChange(event, index)}
            />
            {/* <div sx={{display:"flex", flexDirection: "row", width: "100%"}}> */}
              <LocalizationProvider dateAdapter={AdapterMoment}>
          
                <DatePicker
                  sx={{ margin: 2, width: "100%" }}
                  //className="dateField"
                  label="Enter Start Date"
                  format="MMM YYYY"
                  name="startDate"
                  views={["month", "year"]}
                  onChange={(date) => handleStartChange(date, index)}
                />
                <DatePicker
                  sx={{ margin: 2, width: "100%" }}
                  //className="dateField"
                  label="Enter End Date"
                  format="MMM YYYY"
                  views={["month", "year"]}
                  name="endDate"
                  onChange={(date) => handleEndChange(date, index)}
                />
              </LocalizationProvider>
            <button className="addButton removeButton" onClick={() => removeExpFields(index)}>Remove Experience</button>
          </div>
        </Grid>
      ))}
      </Grid>
      <button className="addButton" onClick={addExpFields}>Add Experience</button>
    </>
  );
}

export default ExperienceSection;

