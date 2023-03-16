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
                                                                quali: "",
                                                                startDate: "",
                                                                endDate: ""
                                                            }]);
    // const [startDateValue, setStartDateValue] = useState(null);
    // const [endDateValue, setEndDateValue] = useState(null);
    const [qualification, setQualification] = useState("");

    const handleInputChange = (index, event) => {
        let data = [...educationInputFields];

        if(event.target !== undefined){
            data[index][event.target.name] = event.target.value;
            setEducationInputFields(data);
        }
    }

    const addEdFields = () => {
        let newField = {
            instituteName: "",
            courseTitle: "",
            quali: "",
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
                                        value={qualification}
                                        label="Qualification"
                                        onChange={(event) => setQualification(event.target.value)}
                                    >
                                        <MenuItem value={"Degree"}>Under Graduate</MenuItem>
                                        <MenuItem value={"Masters"}>Post Graduate</MenuItem>
                                        <MenuItem value={"Certificate"}>Certificate</MenuItem>
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
                                        console.log(educationInputFields);
                                        educationInputFields[index].startDate = newValue.format("MMM YYYY");
                                        console.log(educationInputFields[index].startDate);
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