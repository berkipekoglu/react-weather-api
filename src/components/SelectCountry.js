import {useState, useEffect, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import {countries} from './Country'
const axios = require('axios')

function SelectCountry() {

    const {country, setCountry, data, setData} = useContext(ThemeContext)

    const [selectedCountry, setselectedCountry] = useState()

    const x = 'd859739bd372483a47068eb10f6a3560' //google parametleri kullanarak yapılan api key aramalarından kaçınmak için 'x' kullandım.

    useEffect( () => {
        getWeather(country)
    }, [country])

     const getWeather = (item) => {
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${item},tr&appid=${x}&lang=tr&units=metric`,
        }
        axios.request(options)
        .then ( (res) => {
            setData(res.data)
            console.log(res)       
        })
        .catch ( (err) => {console.log('HATA!',err)})
    }

    return (
        <div className="select-container">
            <select name="countryBox" className="select-country" onChange={(e) => setCountry(e.target.value)} value={country}>
                {
                    countries.map((item, i) => {
                        return <option key={i} value={item}>{item}</option>
                    })
                }
            </select>   
        </div>
    )
}

export default SelectCountry
