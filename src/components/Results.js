import ResultComponent from "./ResultComponent";
import CurrentResult from "./CurrentResult";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faFaceRollingEyes } from "@fortawesome/free-solid-svg-icons";

import "../styles/Results.css";

const sad = <FontAwesomeIcon icon={faFaceFrown} />;
const rollingEyes = <FontAwesomeIcon icon={faFaceRollingEyes} />;

const Results = ({ err, currentResult, results, input, status }) => {
  const resComponent = results.map((result, index) => (
    <ResultComponent
      key={index}
      location={result.location}
      country={result.country}
      currentDate={result.date}
      temp={result.temp}
      feelsLike={result.feelsLike}
      humidity={result.humidity}
      pressure={result.pressure}
      sunrise={result.sunrise}
      sunset={result.sunset}
      wind={result.wind}
    />
  ));

  return (
    <>
      <div className="row">
        <section className="curr-res col-sm-8 col-md-6 col-lg-4 mx-auto my-5">
          {status === 200 ? (
            <CurrentResult
              location={currentResult.location}
              country={currentResult.country}
              currentDate={currentResult.date}
              temp={currentResult.temp}
              feelsLike={currentResult.feelsLike}
              humidity={currentResult.humidity}
              pressure={currentResult.pressure}
              sunrise={currentResult.sunrise}
              sunset={currentResult.sunset}
              wind={currentResult.wind}
            />
          ) : err ? (
            <div
              className="no-results text-center py-5 rounded"
              style={{ fontWeight: "bold" }}
            >
              <h2 style={{ fontWeight: "bold" }}>
                No results found
                <span className="sad"> {sad}</span>
                <br /> Choose another city!
              </h2>
            </div>
          ) : null}
        </section>
      </div>
      <hr className="mb-5 mt-4" />
      <div className="row">
        <div className="col-sm-8 col-lg-6 mx-auto history">
          <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>
            History
          </h2>
          {results.length !== 0 ? (
            <ul
              className="d-flex flex-column p-0 text-center"
              style={{ listStyle: "none" }}
            >
              {resComponent.slice(0, 5)}
            </ul>
          ) : (
            <h3 className="text-center">
              History list is empty yet {rollingEyes}
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
