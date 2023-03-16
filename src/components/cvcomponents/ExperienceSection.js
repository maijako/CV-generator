import React, { useState } from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import { TextField, InputAdornment} from '@mui/material';
import "./cv-component-styles.css";

function ExperienceSection() {
    const [experienceInputFields, setExperienceInputFields] = useState([{
                                                                    companyName: "",
                                                                    jotTitle: "",
                                                                    roleDetails: "",
                                                                    startDate: "",
                                                                    endDate:""
                                                                }])
    

    const handleInputChange = (index, event) =>{
        let data = [...experienceInputFields];
        if(event.target!==undefined) {
        data[index][event.target.name] = event.target.value;
        console.log(experienceInputFields);
        setExperienceInputFields(data);
        }
    }

    const addExpFields = (event) => {
        event.preventDefault();
        let newField = {
            companyName: "",
            jotTitle: "",
            roleDetails: "",
            startDate: "",
            endDate:""
        };
        setExperienceInputFields([...experienceInputFields, newField]);
    }

    return (
        <>
            <h3>Experience Details</h3>
            {
                experienceInputFields.map((input, index) => {
                    return(
                        <div key={index}>
                            <div className="containerStyles">
                                <TextField
                                    id="input-company-name"
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
                                    sx={{margin: "15px 0"}}
                                    name="companyName"
                                    value={input.companyName}
                                    onChange={event => handleInputChange(index, event)}
                                />
                                <TextField
                                    id="input-job-title"
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
                                    sx={{margin: "15px 0"}}
                                    name="jotTitle"
                                    value={input.jotTitle}
                                    onChange={event => handleInputChange(index, event)}
                                />

                                <TextField
                                    id="job-detail"
                                    label="Role Details"
                                    placeholder="Give a detailed description of your role."
                                    multiline
                                    minRows={3}
                                    maxRows={8}
                                    sx={{width: "50%"}}
                                    name="roleDetails"
                                    value={input.roleDetails}
                                    onChange={event => handleInputChange(index, event)}
                                />

                                
                            </div>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker 
                                    sx={{margin: 2}} 
                                    label="Enter Start Date" 
                                    format="MMM YYYY" 
                                    name="startDate"
                                    views={['month', 'year']}
                                    onChange={newValue => {
                                        console.log(experienceInputFields);
                                        experienceInputFields[index].startDate = newValue.format("MMM YYYY");
                                        console.log(experienceInputFields[index].startDate);
                                    }}
                                />
                                <DatePicker 
                                    sx={{margin: 2}} 
                                    label="Enter End Date" 
                                    format="MMM YYYY" 
                                    views={['month', 'year']}
                                    name="endDate"
                                    onChange={newValue => {
                                        console.log(experienceInputFields);
                                        experienceInputFields[index].endDate = newValue.format("MMM YYYY");
                                        console.log(experienceInputFields[index].endDate);
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    )
                })
            }

            <button onClick={addExpFields}>Add Experience</button>
            
        </>
    );
}

export default ExperienceSection;