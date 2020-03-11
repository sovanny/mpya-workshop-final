import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [eurValue, setEurValue] = useState(0);
  const [sekValue, setSekValue] = useState(0);
  const [rateSekToEur, setRateSekToEur] = useState(0);

  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(data => setRateSekToEur(data.rates.SEK))
      .catch(console.log);
  }, []);

  function handleInputSek(event) {
    let sek = event.target.value;
    let eur = sek * rateSekToEur;
    setEurValue(eur);
  }

  function handleInputEur(event) {
    let eur = event.target.value;
    let sek = (eur * 1) / rateSekToEur;
    setSekValue(sek);
  }

  return (
    // Skriv "HTML" (JSX) här
    <div className="App">
      <h1>🍛 Curryncy 🍛</h1>
      <h2>Let us do the math.</h2>
      <hr className="hr--short" />
      <p className="description">
        It's all 'bout the money , It's all 'bout the dun dun do do do dumb.
        Convert your moneys between our two favorite currencies - the euro and
        the swedish krona. Buy stocks. Hide cash under your matress.
      </p>
      <div className="conversion">
        <div className="conversion__label pink">EUR</div>
        <input className="yellow" defaultValue={0} onChange={handleInputEur} />
        <div className="conversion__label pink">SEK</div>
        <div className="yellow">{sekValue.toFixed(2)}</div>
      </div>
      <div className="conversion">
        <div className="conversion__label pink">SEK</div>
        <input className="yellow" defaultValue={0} onChange={handleInputSek} />
        <div className="conversion__label pink">EUR</div>
        <div className="yellow">{eurValue.toFixed(2)}</div>
      </div>
    </div>
  );
}
