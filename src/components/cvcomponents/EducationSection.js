import { useDispatch, useSelector } from "react-redux";
import {
  setNewEducation,
  setUniName,
  setCourseName,
  setDegreeLevel,
  setStartDate,
  setEndDate,
  deleteEducation
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
import "./cv-component-styles.css";

function EducationSection() {

  const selectEducation = state => state.education;
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
  }

  const deleteEduFields = (index) => {
    console.log("Delete education field called");
    dispatch(deleteEducation(index));
    console.log("After deleting education");
    console.log(educations);
  }

  return (
    <>
      <h3>Education Details</h3>
      {educations.map((education, index) => {
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
                variant="outlined"
                sx={{ margin: "15px 0" }}
                name="instituteName"
                value={education.uniName}
                onChange={(event) => handleUniChange(event, index)}
                // onFocus={(event) => handleFocus(index, event)}
              
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
                variant="outlined"
                sx={{ margin: "15px 0" }}
                name="courseTitle"
                value={education.courseName}
                onChange={(event) => handleCourseChange(event, index)}
                // onFocus={(event) => handleFocus(index, event)}
               
              />
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel id="selectedQualificationLabel">
                  Qualification
                </InputLabel>
                <Select
                  labelId="selectedQualificationLabel"
                  id="selectedQualification"
                  label="Qualification"
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
              <button onClick={() => deleteEduFields(index)}>Remove Education</button>
            </div>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                sx={{ margin: 2 }}
                label="Enter Start Date"
                format="MMM YY"
                views={["month", "year"]}
                name="startDate"
                onChange={(date) => handleStartChange(date, index)}
                
              />

              <DatePicker
                sx={{ margin: 2 }}
                label="Enter End Date"
                format="MMM YY"
                views={["month", "year"]}
                name="endDate"
                onChange={(date) => handleEndChange(date, index)}
              />
            </LocalizationProvider>
            
          </div>
        );
      })}

      <button onClick={addEduFields}>Add Education</button>
    </>
  );
}

export default EducationSection;
