import React from "react";
import {Configuration, OpenAIApi} from "openai";
import APIKEY from "../APIKey.json";

//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch} from "react-redux";
import { setSummary } from "../state/summary";

function ChatGPTAI() {
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
    </div>
  );
}

// Generate a summary that elaborates my unique selling points and sets me apart from other candidates, using the following details:\n5 years experience in cutomer service.\nCurrently looking for a role in software development.\nCompleted a bootcamp in front end web development.

export default ChatGPTAI;
