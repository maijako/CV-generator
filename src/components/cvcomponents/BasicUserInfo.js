import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { AccountCircle, ContactMail, PhoneAndroid } from "@mui/icons-material";
import "./cv-component-styles.css";


function BasicUserInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
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
  const validateForm = () => {
    let valid = true;
    if (!firstName) {
      setFirstNameError("Please enter your first name.");
      valid = false;
    } else {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError("Please enter your last name.");
      valid = false;
    } else {
      setLastNameError("");
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!phone || !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(phone)) {
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
      <h3>Basic Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="containerStyles">
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
            value={firstName}
            onChange={handleFirstNameChange}
            onFocus={() =>handleFieldFocus("firstName")}
            error={!!firstNameError}
            helperText={firstNameError}
          />
          <TextField
            id="input-second-name"
            label="Last Name"
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
            value={lastName}
            onChange={handleLastNameChange}
            onFocus={() => handleFieldFocus("lastName")}
            error={!!lastNameError}
            helperText={lastNameError}
          />
          <TextField
            id="input-email-address"
            label="Email ID"
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
            value={email}
            onChange={handleEmailChange}
            onFocus={() => handleFieldFocus("email")}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            id="input-phone-number"
            label="Phone Number"
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
            value={phone}
            onChange={handlePhoneChange}
            onFocus={() => handleFieldFocus("phone")}
            error={!!phoneError}
            helperText={phoneError}
          />
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
export default BasicUserInfo;
