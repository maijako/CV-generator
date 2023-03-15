import React, { useState } from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import { TextField, InputAdornment} from '@mui/material';
import "./cv-component-styles.css";

function ExperienceSection() {
    const [inputFields, setInputFields] = useState([{name: "", age: ""}]);
    const [experienceInputFields, setExperienceInputFields] = useState([{
                                                                    companyName: "",
                                                                    jotTitle: "",
                                                                    roleDetails: "",
                                                                    startDate: "",
                                                                    endDate:""
                                                                }])

    const handleFormChange = (index, event) => {
        console.log("Form change function gets called");
        let data = [...inputFields];
        console.log(data);
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = (event) => {
        event.preventDefault();
        let newField = {name: "", age:""}
        setInputFields([...inputFields, newField]);
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
                                />

                                <TextField
                                    id="job-detail"
                                    label="Role Details"
                                    placeholder="Give a detailed description of your role."
                                    multiline
                                    minRows={3}
                                    maxRows={8}
                                    sx={{width: "50%"}}
                                />

                                
                            </div>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker sx={{margin: 2}} label="Enter Start Date" format="MMM YY" />
                                <DatePicker sx={{margin: 2}} label="Enter End Date" format="MMM YY"  />
                            </LocalizationProvider>
                        </div>
                    )
                })
            }

            <button onClick={addExpFields}>Add more fields...</button>
            {/* <div className="containerStyles">
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
                />

                <TextField
                    id="job-detail"
                    label="Role Details"
                    placeholder="Give a detailed description of your role."
                    multiline
                    minRows={3}
                    maxRows={8}
                    sx={{width: "50%"}}
                />

                
            </div>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker sx={{margin: 2}} label="Enter Start Date" format="MMM YY" />
                <DatePicker sx={{margin: 2}} label="Enter End Date" format="MMM YY"  />
            </LocalizationProvider> */}
            <form>
                {
                    inputFields.map((input, index) => {
                        return(
                            <div key={index}>
                                <input
                                    name='name'
                                    placeholder='Name'
                                    value={input.name}
                                    onChange={event => handleFormChange(index, event)}
                                />
                                <input
                                    name='age'
                                    placeholder='Age'
                                    value={input.age}
                                    onChange={event => handleFormChange(index, event)}
                                />
                            </div>
                        )
                    })
                }
                <button onClick={addFields}>Add more fields...</button>
            </form>
        </>
    );
}

export default ExperienceSection;