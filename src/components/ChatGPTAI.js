import React, { useState } from "react";
import {Configuration, OpenAIApi} from "openai";
import APIKEY from "../APIKey.json";

import Box from '@mui/material/Box';
import { TextField, Button } from "@mui/material";
import Modal from '@mui/material/Modal';

//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch} from "react-redux";
import { setSummary } from "../state/summary";

function ChatGPTAI() {

    const [open, setOpen] = useState(false);
    const [numPrevExperience, setNumPrevExperience] = useState(0);
    const [promptValues, setPromptValues] = useState({
                                                    prevRole: "",
                                                    jobRole: "",
                                                    relExpEdu: ""
                                                })
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const handlePrevExperience = (event) => {
        const value = Number(event.target.value);
        console.log(value);
        if(isNaN(value)){
            console.log("Please Enter a valid number");
            return;
        }else if(value<0 || value > 25) {
            console.log("exp not in range");
        }else{
            setNumPrevExperience(value);
        }
        
    }

    const handlePromptValues = (event) => {
        setPromptValues({...promptValues, [event.target.name]: event.target.value})
        console.log(promptValues);
    }
    const dispatch = useDispatch();
    const configuration = new Configuration({
      apiKey: APIKEY.APIKeyAI,
    });

    console.log("After Configuration call");
    const openai = new OpenAIApi(configuration);

    const getResponse = async () => {
      console.log("Inside response");
      try{
        const respObj = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Write a professional summary for front end development",
            temperature: 0.6,
            max_tokens: 10,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        let responseData = respObj["data"]["choices"][0]["text"];
        const responseText = responseData.slice(2);
        dispatch(setSummary({ summary: responseText }));

      }catch(error){
        console.error(error);
      }
    };

  return (
    <div>
      <button onClick={getResponse}>Genterate Response</button>
      <Button onClick={handleOpen}>Summary Suggestion</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TextField
                id="input-previous-role"
                label="Previous Role"
                name="prevRole"
                placeholder="Enter Previous Role"
                variant="outlined"
                value={promptValues.prevRole}
                onChange={(event) => handlePromptValues(event)}
                sx={{ margin: "15px 0" }}
            />

            <TextField
                id="input-previous-experience"
                label="Previous Experience"
                name="prevExperience"
                placeholder="Enter Previous Experience"
                variant="outlined"
                value={numPrevExperience}
                onChange={(event) => handlePrevExperience(event)}
                sx={{ margin: "15px 0" }}
            />

            <TextField
                id="input-job-role"
                label="Job Role"
                name="jobRole"
                placeholder="Enter Job Role To Apply"
                variant="outlined"
                value={promptValues.jobRole}
                onChange={(event) => handlePromptValues(event)}
                sx={{ margin: "15px 0" }}
            />

            <TextField
                id="input-expedu-role"
                label="Relavant Experience/Education"
                name="relExpEdu"
                placeholder="Enter Relavent Experience or Education for the role"
                variant="outlined"
                value={promptValues.relExpEdu}
                onChange={(event) => handlePromptValues(event)}
                sx={{ margin: "15px 0" }}
            />
        </Box>
      </Modal>
    </div>
  );
}

// Generate a summary that elaborates my unique selling points and sets me apart from other candidates, using the following details:\n5 years experience in cutomer service.\nCurrently looking for a role in software development.\nCompleted a bootcamp in front end web development.

export default ChatGPTAI;
