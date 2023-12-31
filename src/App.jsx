import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Definition from "./components/Definition/Definition";
import Footer from "./components/Footer";
import banner from "../public/img/dictionary.png"
import { dividerClasses } from "@mui/material";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/";

  useEffect(() => {
    async function dictionaryAPI() {
      try {
        if (word !== "") {
          const fetchedData = await axios.get(
            BASE_URL + `${category}/${word}`
          );
          setMeanings(fetchedData.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    dictionaryAPI();
  }, [word, category]);



  return (
    <React.Fragment>
      <Header
        category={category}
        setCategory={setCategory}
        word={word}
        setWord={setWord}
      />
      {word ? (
        <Definition
          meanings={meanings}
          word={word}
          category={category}
        />
      ) : (
        <div className="banner">
          <img src={banner} alt="book-banner" />
        </div>)
      }
      <ThemeToggle />
      <Footer />
    </React.Fragment>
  );
}

export default App;
