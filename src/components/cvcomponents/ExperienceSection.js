import React from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import { TextField, InputAdornment} from '@mui/material';
import "./cv-component-styles.css";

function ExperienceSection() {
    return (
        <>
        <h3>Experience Details</h3>
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
            </LocalizationProvider>
        </>
    );
}

export default ExperienceSection;