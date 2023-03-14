import React from "react";
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

function ProfessionalSummary() {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 }
    ];
    return(
        <>
            <h3>Professional Summary</h3>
            <TextField
                id="professional-summary"
                label="Summary"
                placeholder="Provide Professional details about yourself. Use the AI feature for some suggestion."
                multiline
                minRows={3}
                maxRows={8}
                sx={{margin: 2, width: "50%"}}
            />

            <Autocomplete
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[1]]}
                filterSelectedOptions
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="filterSelectedOptions"
                    placeholder="Favorites"
                />
                )}
            />
        </>
    );
}

export default ProfessionalSummary;