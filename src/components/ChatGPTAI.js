import React, {useState, useEffect} from "react";
import {Configuration, OpenAIApi} from "openai";
import APIKEY from "../APIKey.json";
//import GPTResponse from "./components/GPTResponse";

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
          "model": "text-curie-001",
          "prompt": "Write a professional summary for Front End Developer",
          "max_tokens": 7,
          "temperature": 0
        });

        console.log("Response object: "+JSON.stringify(respObj));
        console.log("Response object: "+respObj["data"]["choices"][0]["text"]);
        //setResult(response)
      }catch(error){
        console.error(error);
      }
    };

  return (
    <div>
      <h3>This website is for testing the gpt responses</h3>
      <button onClick={getResponse}>Genterate Response</button>
      {/* <GPTResponse result={result}/> */}
    </div>
  );
}

export default ChatGPTAI;

// useEffect(() => {
//   const getUsers = async () => {
//     const users = await fetchUsers();
//     setUsers(users);
//   };

//   getUsers(); // run it, run it

//   return () => {
//     // this now gets called when the component unmounts
//   };
// }, []);