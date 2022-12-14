import Banner from "../../components/Banner";
import Body1 from "../../components/Body1";
import Body2 from "../../components/Body2";
import Hotsearch from "../../components/Hotsearch";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Listtree from "../../components/Listtree";
import Forminput from "../../components/Forminput";
import TextField from "@mui/material/TextField";
import { useState } from "react";
function HomePage() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <Banner />
      {/* <Listtree /> */}

      <Body1 />
      <Body2 />
      <Hotsearch />
      <Forminput />
    </div>
  );
}

export default HomePage;
