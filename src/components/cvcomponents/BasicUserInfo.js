import React, { useState } from "react";
import { TextField, InputAdornment, ThemeProvider, createTheme, Box } from "@mui/material";
import { AccountCircle, ContactMail, PhoneAndroid } from "@mui/icons-material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import Grid from '@mui/material/Grid';
import "./cv-component-styles.css";

import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../state/profile";



function BasicUserInfo() {

  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setProfile({ ...profile, [e.target.name]: e.target.value }))
  }

 

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  

  const handleFieldFocus = (field) => {
    if (field === "firstName") {
      setFirstNameError("");
    } else if (field === "lastName") {
      setLastNameError("");
    } else if (field === "email") {
      setEmailError("");
    } else if (field === "phone") {
      setPhoneError("");
    }
  };
  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  const textFieldStyles = { margin: "15px 0", width: "100%" };
  return (
    <ThemeProvider theme={theme}>
      <h3>Basic Information</h3>
      <Box sx={{ mb: 2 }}>
      <div className="containerStyles">
        <Grid container spacing={2}>
          <Grid item sm={2}></Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="input-first-name"
              label="First Name"
              name="firstName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter First Name"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.firstName}
              onChange={(e) => handleChange(e)} 
              onFocus={() => handleFieldFocus("firstName")}
              error={!!firstNameError}
              helperText={firstNameError}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="input-second-name"
              label="Last Name"
              name="lastName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Last Name"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.lastName}
              onChange={handleChange}
              onFocus={() => handleFieldFocus("lastName")}
              error={!!lastNameError}
              helperText={lastNameError}
            />
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="input-email-address"
              className="form-row"
              label="Email"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactMail sx={{ fontSize: "large" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Email Address"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.email}
              onChange={handleChange}
              onFocus={() => handleFieldFocus("email")}
              error={!!emailError}
              helperText={emailError}
            />
          </Grid>
          <Grid item xs={12} sm={4}>

            <TextField
              id="input-phone-number"
              className="form-row"
              label="Phone Number"
              name="phone"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroid sx={{ fontSize: "large" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Phone Number"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.phone}
              onChange={handleChange}
              onFocus={() => handleFieldFocus("phone")}
              error={!!phoneError}
              helperText={phoneError}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="input-user-location"
              className="form-row"
              label="Location"
              name="userLocation"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLocationAltIcon sx={{ fontSize: "large" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Location"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.userLocation}
              onChange={handleChange}
          
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="input-user-linkedin-username"
              className="form-row"
              label="LinkedIn Username"
              name="userNameLinkedIn"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedInIcon sx={{ fontSize: "large" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Your LinkedIn User Name"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.userNameLinkedIn}
              onChange={handleChange}
        
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="input-user-github-username"
              className="form-row"
              label="GitHub Username"
              name="userNameGitHub"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GitHubIcon sx={{ fontSize: "large" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter GitHub UserName"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.userNameGitHub}
              onChange={handleChange}
         
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="input-web-portfolio"
              className="form-row"
              label="Portfolio Website"
              name="webPortfolio"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PublicIcon sx={{ fontSize: "large" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Portfolio Website"
              variant="filled"
              color="warning"
              focused
              sx={textFieldStyles}
              value={profile.webPortfolio}
              onChange={handleChange}
           
            />
          </Grid>
        </Grid>
      </div>
    </Box>
    </ThemeProvider>
  );
}
export default BasicUserInfo;
