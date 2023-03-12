import React from "react";
import Main from "./components/Main";
import Slider from "./components/Slider";
import img1 from "./assets/fabio-unsplash.jpg";

function App() {
  return (
    <div>
      <Main />
      <Slider imageSrc={img1}
      title={"Build your CV"}
      subtitle={"Stand out from the crowd"}
      />
      <Slider imageSrc={img1}
      title={"Work smart not hard"}
      subtitle={"Use the built-in AI to help you"}
      flipped={true}
      />
    </div>
  );
}

export default App;
