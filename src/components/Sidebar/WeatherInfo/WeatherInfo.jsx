import "./WeatherInfo.css";

const WeatherInfo = ({ data }) => {
  return (
    <div className="Container-Weather">
      {data.name && (
        <>
          <div className="City-Weather">
            <p>
              {data.name}, {data.sys?.country}
            </p>
          </div>
          <div className="Temp-Weather">
            <h3>{data.main?.temp?.toFixed()}°C</h3>
          </div>
          <div className="Desk-Weather">
            <p>
              {data.weather?.[0]?.main}, {data.weather?.[0]?.description}
            </p>
          </div>
          <div className="Info-Weather">
            <div className="Feels-Info-Weather">
              <p>Feels like: {data.main?.feels_like?.toFixed()}°C</p>
            </div>
            <div className="Temp-Info-Weather">
              <p>The low will be: {data.main?.temp_min?.toFixed()}°C</p>
            </div>
            <div className="Temp-Info-Weather">
              <p>The high will be: {data.main?.temp_max?.toFixed()}°C</p>
            </div>
            <div className="Humidity-Info-Weather">
              <p>Humidity: {data.main?.humidity} %</p>
            </div>
            <div className="Wind-Info-Weather">
              <p>Wind: {data.wind?.speed?.toFixed()} m/s</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherInfo;
