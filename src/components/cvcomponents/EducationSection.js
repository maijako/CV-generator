import React, {useState} from "react";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

function EducationSection() {
    const [startDateValue, setStartDateValue] = useState(null);
    const [endDateValue, setEndDateValue] = useState(null);
    return(
        
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker label="Enter Start Date" value={startDateValue} onChange={(newValue) => setStartDateValue(newValue)} />
                <DatePicker label="Enter End Date" value={endDateValue} onChange={(newValue) => setEndDateValue(newValue)} />
            </LocalizationProvider>
            
       
    );
};

export default EducationSection;