import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { AccountCircle, ContactMail, PhoneAndroid } from "@mui/icons-material";
import "./cv-component-styles.css";

//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../state/profile";


//pass the state.profile down as props in Basic User Info
function BasicUserInfo(props) {
//store useSelector and useDispatch in variables
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
  const validateForm = () => {
    let valid = true;
    //adding accessing all values below via profile reducer
    if (!profile.firstName) {
      setFirstNameError("Please enter your first name.");
      valid = false;
    } else {
      setFirstNameError("");
    }
    //why is the below accessed via props but the above is only accessed via profile?
    if (!props.profile.lastName) {
      setLastNameError("Please enter your last name.");
      valid = false;
    } else {
      setLastNameError("");
    }
    if (!props.profile.email || !/\S+@\S+\.\S+/.test(props.profile.email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!props.profile.phone || !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(props.profile.phone)) {
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
            value={profile.firstName} //this is now accessed via profile reducer
            onChange={handleChange} //this is now just 'handleChange' not 'handleFirstNameChange'
            onFocus={() => handleFieldFocus("firstName")}
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
            value={profile.lastName} //accessing lastName via profile reducer
            onChange={handleChange} //this is now just 'handleChange' not 'handleLastNameChange'
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
            value={profile.email} //accessing email via profile reducer
            onChange={handleChange} //this is now just 'handleChange', not 'handleEmailChange'
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
            value={profile.phone} //we are now accessing phone from profile reducer 
            onChange={handleChange} //this is now just 'handleChange', not 'handlePhoneChange'
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
