import ThemeContext, {ThemeProvides} from './context/ThemeContext'
import SelectCountry from './components/SelectCountry'
import Weathers from './components/Weathers'
import {useEffect, useContext} from 'react'
import './App.css';

function App() {

  const {data} = useContext(ThemeContext)

  return (
    <ThemeProvides>
      <div className="App">
        <header className="App-header">
          <SelectCountry />
          <Weathers />
        </header>
      </div>
    </ThemeProvides>
  );
}

export default App;
