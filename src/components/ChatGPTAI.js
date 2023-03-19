import React, {useState, useEffect} from "react";
import {Configuration, OpenAIApi} from "openai";
import APIKEY from "../APIKey.json";

function ChatGPTAI() {
  const [result, setResult] = useState("");

    const configuration = new Configuration({
      apiKey: APIKEY.APIKeyAI,
    });
    console.log("After Configuration call");
    const openai = new OpenAIApi(configuration);
    const getResponse = async () => {
      console.log("Inside response");
    //const getResponse = async () => {
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

        console.log("Response object: ");
        console.log(respObj);
        console.log("Data:");
        console.log(respObj["data"]["choices"][0]["text"]);
        setResult(respObj["data"]["choices"][0]["text"]);
      }catch(error){
        console.error(error);
      }
    };

  return (
    <div>
      <h3>This website is for testing the gpt responses</h3>
      <button onClick={getResponse}>Genterate Response</button>
      <p>{result}</p>
    </div>
  );
}

// Generate a summary that elaborates my unique selling points and sets me apart from other candidates, using the following details:\n5 years experience in cutomer service.\nCurrently looking for a role in software development.\nCompleted a bootcamp in front end web development.

export default ChatGPTAI;
