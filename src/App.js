import { useState } from "react";

import Search from "./components/Search";
import Results from "./components/Results";
import Clock from "./components/Clock";

import { ThemeContext } from "./context/ThemeContext";

import Switcher from "./components/Switcher";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const key = "0d8b1390b37a76e3b913ceb3950d2bbc";
const axios = require("axios");

const cloud = <FontAwesomeIcon icon={faCloud} />;
const sun = <FontAwesomeIcon icon={faSun} />;
const moon = <FontAwesomeIcon icon={faMoon} />;
const star = <FontAwesomeIcon icon={faStar} />;

const App = () => {
  const [results, setResults] = useState([]);
  const [currentResult, setCurrentResult] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState(false);
  const [resStatus, setResStatus] = useState("");

  const [theme, setTheme] = useState("light");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const searchWeather = () => {
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
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            sunrise: new Date(
              response.data.sys.sunrise * 1000
            ).toLocaleTimeString(),
            sunset: new Date(
              response.data.sys.sunset * 1000
            ).toLocaleTimeString(),
            wind: response.data.wind.speed,
          };
          setResStatus(response.status);
          setCurrentResult(result);
          setResults((results) => [result, ...results]);
          setInputValue("");
          setErr(false);
        }
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setResStatus("");
        setInputValue("");
        setErr(true);
      });
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container-fluid pb-5" id={theme}>
        <header
          className="bg-sky row position-relative"
          style={{
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "60% center",
          }}
        >
          <div
            className="positon-absolute"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          ></div>
          <h1
            className="position-absolute position-relative text-light"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "auto",
              fontWeight: "bold",
            }}
          >
            App Weather
            {theme === "light" ? (
              <span className="sun position-absolute">{sun}</span>
            ) : (
              <span className="moon position-absolute">{moon}</span>
            )}
            {theme === "light" ? (
              <span className="cloud position-absolute">{cloud}</span>
            ) : (
              <div className="stars position-absolute">
                <span className="star-1">{star}</span>
                <span className="star-2">{star}</span>
                <span className="star-3">{star}</span>
              </div>
            )}
          </h1>
          <Clock />

          <Switcher />
        </header>

        <section className="row mt-5">
          <Search
            onClick={searchWeather}
            handleInputValue={handleInputValue}
            inputValue={inputValue}
          />
        </section>
        <main className="container mx-auto">
          <Results
            err={err}
            results={results}
            currentResult={currentResult}
            input={inputValue}
            status={resStatus}
          />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
