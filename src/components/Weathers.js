import { useContext, useState, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"

function Weathers() {
  const {data} = useContext(ThemeContext)
  const [dataX, setDataX] = useState({})
  
  return (
    <div className="container">
                <div className="country-name">{data.name}</div>
                <div className="degree">
                    <span className="big-degree">{data.main.temp}°</span>
                    <div className="svgs">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                                {data.main.temp_max}°
                        </span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                                {data.main.temp_min}°
                        </span>
                    </div>
                </div>
                <div>
                    <span className="weather-title">{data.weather.description}</span>
                    <span className="weather-feel">Feel like 16°</span>
                </div>
                <hr />
                <div className="weather-info">
                    <div className="order">
                        <span className="weather-info-title">Humanity</span>
                        <div>
                            <span className="weather-point">73</span>
                            <span className="weather-point-title">%</span>
                        </div>
                    </div>

                    <div className="order">
                        <span className="weather-info-title">Visibility</span>
                        <div>
                            <span className="weather-point">10.0</span>
                            <span className="weather-point-title">km</span>
                        </div>
                    </div>

                    <div className="order">
                        <span className="weather-info-title">Pressure</span>
                        <div>
                            <span className="weather-point">1017</span>
                            <span className="weather-point-title">hPa</span>
                        </div>
                    </div>

                    <div className="order">
                        <span className="weather-info-title">Wind Speed</span>
                        <div>
                            <span className="weather-point">5.14</span>
                            <span className="weather-point-title">km/h</span>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Weathers;
