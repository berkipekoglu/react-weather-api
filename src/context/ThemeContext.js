import {createContext, useState, useEffect} from 'react'


const ThemeContext = createContext()

export const ThemeProvides = ({children} ) => {

    const [country, setCountry] = useState('İstanbul')
    const [data, setData] = useState({})
    // const [lon, setLon] = useState('')
    // const [lat, setLat] = useState('')
    // const [exclude, setExclude] = useState('minutely,hourly,alerts')

   
    useEffect( () => {
        
    }, [data])

    const values = {
        country,
        setCountry,
        data,
        setData
    }
    return <ThemeContext.Provider value={values}>   
        { children }</ThemeContext.Provider>
}


export default ThemeContext
