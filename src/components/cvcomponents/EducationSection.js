import { useDispatch, useSelector } from "react-redux";
import {
  setNewEducation,
  setUniName,
  setCourseName,
  setDegreeLevel,
  setStartDate,
  setEndDate,
  deleteEducation,
} from "../../state/education";

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
} from "@mui/material";
import Grid from "@mui/material/Grid";
import "./cv-component-styles.css";

function EducationSection() {
  const selectEducation = (state) => state.education;
  const educations = useSelector(selectEducation);
  const dispatch = useDispatch();

  const handleUniChange = (event, educationIndex) => {
    const newUni = event.target.value;
    dispatch(setUniName(educationIndex, newUni));
  };

  const handleCourseChange = (event, educationIndex) => {
    const newCourse = event.target.value;
    dispatch(setCourseName(educationIndex, newCourse));
  };

  const handleDegreeChange = (event, educationIndex) => {
    const newDegree = event.target.value;
    dispatch(setDegreeLevel(educationIndex, newDegree));
  };

  const handleStartChange = (date, educationIndex) => {
    const newStart = date.format("MMM YYYY");
    dispatch(setStartDate(educationIndex, newStart));
  };

  const handleEndChange = (date, educationIndex) => {
    const newEnd = date.format("MMM YYYY");
    dispatch(setEndDate(educationIndex, newEnd));
  };

  const addEduFields = () => {
    let newField = {
      uniName: "",
      courseName: "",
      degreeLevel: "",
      startDate: "",
      endDate: "",
    };
    dispatch(setNewEducation(newField));
  };

  const deleteEduFields = (index) => {
    console.log("Delete education field called");
    dispatch(deleteEducation(index));
    console.log("After deleting education");
    console.log(educations);
  };

  return (
    <>
      <h3>Education Details</h3>
      <Grid container spacing={3}>
        {educations.map((education, index) => {
          return (
            <Grid key={index} item xs={12}>
              <div className="containerStyles">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
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
                      color="warning"
                      focused
                      sx={{ margin: "15px 0", width: "100%" }}
                      name="instituteName"
                      value={education.uniName}
                      onChange={(event) => handleUniChange(event, index)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                      color="warning"
                      focused
                      sx={{ margin: "15px 0", width: "100%" }}
                      name="courseTitle"
                      value={education.courseName}
                      onChange={(event) => handleCourseChange(event, index)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl sx={{ margin: "15px 0", width: "100%" }}>
                      <InputLabel id="selectedQualificationLabel">
                        Qualification
                      </InputLabel>
                      <Select
                        labelId="selectedQualificationLabel"
                        id="selectedQualification"
                        label="Qualification"
                        variant="filled"
                        color="warning"
                        focused
                        name="qualificationVal"
                        value={education.degreeLevel}
                        onChange={(event) => handleDegreeChange(event, index)}
                        // onFocus={(event) => handleFocus(index, event)}
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
                  </Grid>

                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        sx={{ margin: "15px 0", width: "100%" }}
                        label="Enter Start Date"
                        format="MMM YY"
                        views={["month", "year"]}
                        name="startDate"
                        onChange={(date) => handleStartChange(date, index)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        sx={{ margin: "15px 0", width: "100%" }}
                        label="Enter End Date"
                        format="MMM YY"
                        views={["month", "year"]}
                        name="endDate"
                        onChange={(date) => handleEndChange(date, index)}
                      />
                    </Grid>
                  </LocalizationProvider>
                  
                  <button
                    className="addButton removeButton"
                    onClick={() => deleteEduFields(index)}
                  >
                    Remove Education
                  </button>
                </Grid>
              </div>
            </Grid>
          );
        })}
      </Grid>

      <button className="addButton" onClick={addEduFields}>
        Add Education
      </button>
    </>
  );
}

export default EducationSection;
