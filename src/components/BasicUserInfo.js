import React from "react";
import { TextField, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function BasicUserInfo() {
    return(
        <div>
            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
        </div>
    );
};

export default BasicUserInfo;