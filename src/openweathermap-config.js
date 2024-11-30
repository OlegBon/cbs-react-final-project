const appid = process.env.REACT_APP_OPENWEATHERMAP_APPID;
const url = (town) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${appid}`;

export { appid, url };
