import React from "react";
import { TextField, InputAdornment, Container } from '@mui/material';
import { AccountCircle, ContactMail, PhoneAndroid } from '@mui/icons-material';
import EducationSection from "./EducationSection";

function BasicUserInfo() {
    const containerStyles = { bgcolor: "#cfe8fc",
                                display:"flex", 
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginTop: 10,
                                padding: 5 };
    
    const textFieldStyles = {margin: "15px 0"};

    return(
        <div>
            <Container maxWidth="sm" sx={containerStyles}>

                <TextField
                    id="input-first-name"
                    label="First Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Enter First Name"
                    variant="outlined"
                    sx={textFieldStyles}
                />

                <TextField
                    id="input-second-name"
                    label="Second Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Enter Second Name"
                    variant="outlined"
                    sx={textFieldStyles}
                />

                <TextField
                    id="input-email-address"
                    label="Email ID"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ContactMail sx={{fontSize: "large"}}/>
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Enter Email Address"
                    variant="outlined"
                    sx={textFieldStyles}
                />

                <TextField
                    id="input-phone-number"
                    label="Phone Number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneAndroid sx={{fontSize: "large"}}/>
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Enter Phone Number"
                    variant="outlined"
                    sx={textFieldStyles}
                />
                <EducationSection />
            </Container>
            
        </div>
    );
};

export default BasicUserInfo;