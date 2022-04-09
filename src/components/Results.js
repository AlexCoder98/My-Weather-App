import ResultComponent from "./ResultComponent";
import CurrentResult from "./CurrentResult";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faFaceRollingEyes } from "@fortawesome/free-solid-svg-icons";

import "../styles/Results.css";

const sad = <FontAwesomeIcon icon={faFaceFrown} />;
const rollingEyes = <FontAwesomeIcon icon={faFaceRollingEyes} />;

const Results = ({ err, currentResult, results, input }) => {
  const resComponent = results.map((result, index) => (
    <ResultComponent
      key={index}
      location={result.location}
      country={result.country}
      currentDate={result.date}
      temp={result.temp}
    />
  ));

  return (
    <main className="info">
      <section className="results">
        {input.length === 0 ? null : err ? (
          <h2>
            No results found {sad}
            <br /> Choose another city!
          </h2>
        ) : (
          <CurrentResult
            location={currentResult.location}
            country={currentResult.country}
            currentDate={currentResult.date}
            temp={currentResult.temp}
          />
        )}
      </section>
      <div className="history">
        <h2>History</h2>
        {results.length !== 0 ? (
          <ul>{resComponent.slice(0, 5)}</ul>
        ) : (
          <h3>History list is empty yet {rollingEyes} </h3>
        )}
      </div>
    </main>
  );
};

export default Results;
