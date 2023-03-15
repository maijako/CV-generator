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
                                                                    startDate: null,
                                                                    endDate:""
                                                                }])

    const handleInputChange = (index, event) =>{
        let data = [...experienceInputFields];
        //console.log(event.target);
        //console.log(data[index]);
        data[index][event.target.name] = event.target.value;
        console.log(experienceInputFields);
        setExperienceInputFields(data);
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
                                    format="MMM YY" 
                                    name="startDate" 
                                    value={input.startDate}
                                    onChange={newValue => {
                                        let data = [...experienceInputFields];
                                        data[index][input.startDate] = newValue;
                                        //console.log(experienceInputFields);
                                        setExperienceInputFields(data);
                                        //setExperienceInputFields({...input, startDate: newValue})
                                    }}
                                />
                                <DatePicker 
                                    sx={{margin: 2}} 
                                    label="Enter End Date" 
                                    format="MMM YY" 
                                    name="endDate" 
                                    value={input.endDate} 
                                    onChange={event => handleInputChange(index, event)} 
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