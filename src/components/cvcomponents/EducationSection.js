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
                                                                graduationDate: ""
                                                            }]);
    const [startDateValue, setStartDateValue] = useState(null);
    const [endDateValue, setEndDateValue] = useState(null);
    const [qualification, setQualification] = useState("");
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
                                />
                                <DatePicker 
                                    sx={{margin: 2}} 
                                    label="Enter End Date" 
                                    format="MMM YY"
                                />
                            </LocalizationProvider>
                        </div>
                    );
                })
                
            }
        </>
            
       
    );
};

export default EducationSection;