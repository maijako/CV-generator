import React, { useState } from "react";
import { ThemeProvider, TextField, InputAdornment, Box, createTheme } from "@mui/material";
import { AccountCircle, ContactMail, PhoneAndroid } from "@mui/icons-material";
import { blue } from "@mui/material/colors"
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

  const theme = createTheme({
    palette: {
      primary: blue,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputLabel-root.Mui-focused': {
              color: blue[500],
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: blue[500],
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: "20px" }}>
        <h3 style={{ color: "black", marginBottom: "10px" }}>Basic Information</h3>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField 
            id="input-first-name"
            label="First Name"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            placeholder="Enter First Name"
            variant="filled"
            color="primary"
            value={firstName}
            onChange={handleFirstNameChange}
            onFocus={() => handleFieldFocus("firstName")}
            error={!!firstNameError}
            helperText={firstNameError}
          />
          <TextField
            id="input-second-name"
            label="Last Name"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            placeholder="Enter Last Name"
            variant="filled"
            color="primary"
            value={lastName}
            onChange={handleLastNameChange}
            onFocus={() => handleFieldFocus("lastName")}
            error={!!lastNameError}
            helperText={lastNameError}
          />
          <TextField
            id="input-email-address"
            label="Email ID"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMail sx={{ fontSize: "large" }} />
                </InputAdornment>
              ),
            }}
            placeholder="Enter Email Address"
            variant="filled"
            color="primary"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => handleFieldFocus("email")}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            id="input-phone-number"
            label="Phone Number"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroid sx={{ fontSize: "large" }} />
                </InputAdornment>
              ),
            }}
            placeholder="Enter Phone Number"
            variant="filled"
            color="primary"
            value={phone}
            onChange={handlePhoneChange}
            onFocus={() => handleFieldFocus("phone")}
            error={!!phoneError}
            helperText={phoneError}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default BasicUserInfo;
