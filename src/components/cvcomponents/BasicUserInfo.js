import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { AccountCircle, ContactMail, PhoneAndroid } from "@mui/icons-material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import "./cv-component-styles.css";

//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../state/profile";


//pass the state.profile in Basic User Info
//store useSelector and useDispatch in variables

function BasicUserInfo() {

  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setProfile({ ...profile, [e.target.name]: e.target.value }))
  }

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);

  // };
  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // };
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handlePhoneChange = (event) => {
  //   setPhone(event.target.value);
  // };

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
  //accessing all values below via profile reducer, replacing handle[uniqueName]Change with 'handleChange'

  const validateForm = () => {
    let valid = true;
    if (!profile.firstName) {
      setFirstNameError("Please enter your first name.");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (!profile.lastName) {
      setLastNameError("Please enter your last name.");
      valid = false;
    } else {
      setLastNameError("");
    }
    if (!profile.email || !/\S+@\S+\.\S+/.test(profile.email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!profile.phone || !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(profile.phone)) {
      setPhoneError("Please enter a valid phone number.");
      valid = false;
    } else {
      setPhoneError("");
    }
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit the form data
      console.log("Form submitted successfully.");
    }
  };

  const textFieldStyles = { margin: "15px 0" };
  return (
    <>
      <div className="containerStyles">
        <h3>Basic Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <TextField
              id="input-first-name"
              className="form-row"
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
              variant="outlined"
              // sx={textFieldStyles}
              value={profile.firstName}
              onChange={(e) => handleChange(e)} //changed from 'onChange={handleChange}'
              onFocus={() => handleFieldFocus("firstName")}
              error={!!firstNameError}
              helperText={firstNameError}
            />
            <TextField
              id="input-second-name"
              className="form-row"
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
              variant="outlined"
              sx={textFieldStyles}
              value={profile.lastName}
              onChange={handleChange}
              onFocus={() => handleFieldFocus("lastName")}
              error={!!lastNameError}
              helperText={lastNameError}
            />
          </div>
          <div className="form-row">
            <TextField
              id="input-email-address"
              className="form-row"
              label="Email ID"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactMail sx={{ fontSize: "large" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Email Address"
              variant="outlined"
              sx={textFieldStyles}
              value={profile.email}
              onChange={handleChange}
              onFocus={() => handleFieldFocus("email")}
              error={!!emailError}
              helperText={emailError}
            />

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
              variant="outlined"
              sx={textFieldStyles}
              value={profile.phone}
              onChange={handleChange}
              onFocus={() => handleFieldFocus("phone")}
              error={!!phoneError}
              helperText={phoneError}
            />

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
              variant="outlined"
              sx={textFieldStyles}
              value={profile.userLocation}
              onChange={handleChange}
            // onFocus={() => handleFieldFocus("phone")}
            // error={!!phoneError}
            // helperText={phoneError}
            />
          </div>
          <div className="form-row">
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
              variant="outlined"
              sx={textFieldStyles}
              value={profile.userNameLinkedIn}
              onChange={handleChange}
            // onFocus={() => handleFieldFocus("phone")}
            // error={!!phoneError}
            // helperText={phoneError}
            />

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
              variant="outlined"
              sx={textFieldStyles}
              value={profile.userNameGitHub}
              onChange={handleChange}
            // onFocus={() => handleFieldFocus("phone")}
            // error={!!phoneError}
            // helperText={phoneError}
            />

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
              variant="outlined"
              sx={textFieldStyles}
              value={profile.webPortfolio}
              onChange={handleChange}
            // onFocus={() => handleFieldFocus("phone")}
            // error={!!phoneError}
            // helperText={phoneError}
            />
             
        
          </div>
          {/* <Button variant="contained" type="submit">
            Submit
          </Button> */}
        </form>
      </div>
    </>
  );
}
export default BasicUserInfo;
