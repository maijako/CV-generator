import React, {useState} from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { TextField, InputAdornment, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import "./cv-component-styles.css";

function EducationSection() {
    const [educationInputFields, setEducationInputFields] = useState([{
                                                                instituteName: "",
                                                                courseTitle: "",
                                                                qualificationVal: "",
                                                                startDate: "",
                                                                endDate: ""
                                                            }]);

    const handleInputChange = (index, event) => {
        let data = [...educationInputFields];

        if(event.target !== undefined){
            data[index][event.target.name] = event.target.value;
            setEducationInputFields(data);
            console.log(educationInputFields);
        }
    }

    const addEdFields = () => {
        let newField = {
            instituteName: "",
            courseTitle: "",
            qualificationVal: "",
            startDate: "",
            endDate: ""
        };
        setEducationInputFields([...educationInputFields, newField]);
    }

    return(
        
        <>
            <h3>Education Details</h3>
            {
                educationInputFields.map((input, index) => {
                    return(
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
                                    sx={{margin: "15px 0"}}
                                    name="instituteName"
                                    value={input.instituteName}
                                    onChange={event => handleInputChange(index, event)}
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
                                    sx={{margin: "15px 0"}}
                                    name = "courseTitle"
                                    value = {input.courseTitle}
                                    onChange = {event => handleInputChange(index, event)}
                                />
                                <FormControl sx={{ minWidth: 150 }}>
                                    <InputLabel id="selectedQualificationLabel">Qualification</InputLabel>
                                    <Select
                                        labelId="selectedQualificationLabel"
                                        id="selectedQualification"                                       
                                        label="Qualification"
                                        name="qualificationVal"
                                        value={input.qualificationVal}
                                        onChange = {event => handleInputChange(index, event)}
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
                                    sx={{margin: 2}} 
                                    label="Enter Start Date"  
                                    format="MMM YY"
                                    views={["month", "year"]}
                                    name = "startDate"
                                    onChange={newValue => {
                                        educationInputFields[index].startDate = newValue.format("MMM YYYY");
                                    }}
                                />

                                <DatePicker 
                                    sx={{margin: 2}} 
                                    label="Enter End Date"  
                                    format="MMM YY"
                                    views={["month", "year"]}
                                    name = "endDate"
                                    onChange={newValue => {
                                        console.log(educationInputFields);
                                        educationInputFields[index].endDate = newValue.format("MMM YYYY");
                                        console.log(educationInputFields[index].endDate);
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    );
                })
                
            }

            <button onClick={addEdFields}>Add Education</button>
        </>
            
       
    );
};

export default EducationSection;