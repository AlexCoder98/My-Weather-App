import "../styles/CurrentResult.css";

const CurrentResult = ({ location, country, currentDate, temp }) => {
  return (
    <div className="currentResult">
      <h3>
        City: {location}, {country}
      </h3>
      <p>Current date: {currentDate}</p>
      <p>Temperature: {temp} &deg;C</p>
    </div>
  );
};

export default CurrentResult;
