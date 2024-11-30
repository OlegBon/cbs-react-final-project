import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import { useEffect, useRef } from "react";
import { fetchWeather, setTown } from "../../data/reducers/weatherReducer";
import WeatherInfo from "./WeatherInfo/WeatherInfo";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { data, town, loading, error } = useSelector((state) => state.weather);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchWeather(town));
      isFirstRender.current = false;
    }
  }, [dispatch, town]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && town.trim()) {
      dispatch(fetchWeather(town));
    }
  };

  return (
    <div className="Sidebar">
      <div className="Inp-Field">
        <input
          type="text"
          value={town}
          onChange={(e) => dispatch(setTown(e.target.value))}
          onKeyDown={handleKeyDown}
          placeholder="Enter a city..."
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="Error-Message">{error}</p>}
      <WeatherInfo data={data} />
    </div>
  );
};

export default Sidebar;
