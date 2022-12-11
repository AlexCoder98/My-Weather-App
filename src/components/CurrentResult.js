import "../styles/CurrentResult.css";

const CurrentResult = ({
  location,
  country,
  currentDate,
  temp,
  feelsLike,
  humidity,
  pressure,
  sunrise,
  sunset,
  wind,
}) => {
  return (
    <div className="current-result card my-5">
      <div className="current-result-header card-header">
        <h3 className="text-center pt-2">
          {location}, {country}
        </h3>
        <section className="time-details">
          <div className="current-time">
            <p className="py-1">{currentDate}</p>
          </div>
          <div className="sunrise py-2">
            <p>
              <b>Sunrise:</b> {sunrise}
            </p>
          </div>
          <div className="sunset py-2">
            <p>
              <b>Sunset:</b> {sunset}
            </p>
          </div>
        </section>
      </div>
      <div className="current-result-body card-body p-3">
        <p className="mb-2" style={{ fontSize: "18px" }}>
          <b>Temperature:</b> {temp} &deg;C
        </p>
        <p className="mb-2" style={{ fontSize: "18px" }}>
          <b>Feels like:</b> {feelsLike} &deg;C
        </p>
        <p className="mb-2" style={{ fontSize: "18px" }}>
          <b>Humidity:</b> {humidity} %
        </p>
        <p className="mb-2" style={{ fontSize: "18px" }}>
          <b>Pressure:</b> {pressure} Pa
        </p>
        <p className="mb-2" style={{ fontSize: "18px" }}>
          <b>Wind:</b> {wind} m/s
        </p>
      </div>
    </div>
  );
};

export default CurrentResult;
