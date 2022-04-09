import { useEffect, useState } from "react";

import Search from "./components/Search";
import Results from "./components/Results";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const key = "0d8b1390b37a76e3b913ceb3950d2bbc";
const axios = require("axios");

const cloud = <FontAwesomeIcon icon={faCloud} />;
const sun = <FontAwesomeIcon icon={faSun} />;

const App = () => {
  const [results, setResults] = useState([]);
  const [currentResult, setCurrentResult] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // const searchWeather = () => {
  //   if (inputValue.length === 0) return;
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&units=metric`;
  //   axios
  //     .get(API)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const currentDate = new Date().toLocaleTimeString();
  //         console.log(response);

  //         const result = {
  //           location: response.data.name,
  //           date: currentDate,
  //           temp: response.data.main.temp,
  //         };

  //         setCurrentResult(result);
  //         setResults((results) => [result,...results]);
  //         console.log(results);
  //         setErr(false);
  //         setInputValue("");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setErr(true);
  //     });
  // };

  useEffect(() => {
    if (inputValue.length === 0) return;
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&units=metric`;
    axios
      .get(API)
      .then((response) => {
        if (response.status === 200) {
          const currentDate = new Date().toLocaleString();
          console.log(response);

          const result = {
            location: response.data.name,
            country: response.data.sys.country,
            date: currentDate,
            temp: response.data.main.temp,
          };

          setCurrentResult(result);
          setResults((results) => [result, ...results]);
          setErr(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
      });
  }, [inputValue]);

  return (
    <div className="weather_app">
      <h1>
        App Weather
        <span className="sun">{sun}</span>
        <span className="cloud">{cloud}</span>
      </h1>
      <Search
        // onClick={searchWeather}
        handleInputValue={handleInputValue}
        inputValue={inputValue}
      />
      <Results
        err={err}
        results={results}
        currentResult={currentResult}
        input={inputValue}
      />
    </div>
  );
};

export default App;
