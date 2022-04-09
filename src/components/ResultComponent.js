import "../styles/ResultComponent.css";

const ResultComponent = ({ location, country, currentDate, temp }) => {
  return (
    <li className="historyResultComponent">
      <h3 className="city">
        City: {location}, {country}
      </h3>
      <p>Date: {currentDate}</p>
      <p>Temperature: {temp} &deg;C</p>
    </li>
  );
};

export default ResultComponent;
