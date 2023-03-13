import React, {useState} from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { TextField, InputAdornment, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

function EducationSection() {
    const [startDateValue, setStartDateValue] = useState(null);
    const [endDateValue, setEndDateValue] = useState(null);
    const [qualification, setQualification] = useState("");
    return(
        
        <>
        <h3>Education Details</h3>
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
        <FormControl>
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
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker label="Enter Start Date" value={startDateValue} onChange={(newValue) => setStartDateValue(newValue)} />
            <DatePicker label="Enter End Date" value={endDateValue} onChange={(newValue) => setEndDateValue(newValue)} />
        </LocalizationProvider>
        </>
            
       
    );
};

export default EducationSection;