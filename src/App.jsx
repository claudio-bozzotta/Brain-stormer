import { useState } from "react";

import './App.css';
import { Header } from './components/header/header';
import {CardWrapper} from './components/card/cardWrapper';
import {Card} from './components/card/card';


function App() {
 
  const [theme, setTheme] = useState("Cold-Fusion");

  return (
    <div className={theme}>
      <Header></Header>

      <div className="ordineSelect">
          <p>Theme</p> 
          <select
          value= {theme}
          onChange = {e => setTheme(e.target.value)}
          >
            <option>
              Cold-Fusion
            </option>
            <option>
              Color-Party
            </option>
            <option>
              Strawberry-Happy
            </option>
            <option>
              Mint-Fresh
            </option>
              {console.log(theme)}
          </select>
      </div>
      <div>
        <CardWrapper ></CardWrapper>
        <div className="cardWrapper">
          questa era una prova, si può cancellare
        </div>
        
      </div>
      
      <button type="button" onClick={() => (console.log("IL PULSANTE FUNZIONA"))}>
        PULSANTE PROVATORE
      </button>
    </div>
  
  );
}

export default App;
