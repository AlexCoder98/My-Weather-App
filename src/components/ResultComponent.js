import "../styles/ResultComponent.css";

const ResultComponent = ({ location, country, currentDate, temp }) => {
  return (
    <li className="history-result card mb-4 mx-auto">
      <div className="history-result-header card-header py-2">
        <h3 className="text-center" style={{ fontWeight: "bold" }}>
          {location}, {country}
        </h3>
      </div>
      <div className="history-result-body card-body p-3">
        <p>
          <b>Date:</b> {currentDate}
        </p>
        <p>
          <b>Temperature:</b> {temp} &deg;C
        </p>
      </div>
    </li>
  );
};

export default ResultComponent;
