import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [eurValue, setEurValue] = useState(0);
  const [sekValue, setSekValue] = useState(0);

  const rateSekToEur = 0.095;
  const rateEurToSek = 10.57;

  function handleInputSek(event) {
    let sek = event.target.value;
    let eur = sek * rateSekToEur;
    setEurValue(eur);
  }

  function handleInputEur(event) {
    let eur = event.target.value;
    let sek = eur * rateEurToSek;
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
      {/* <hr /> */}
      <div className="conversion">
        <div className="conversion__input">
          SEK
          <input onChange={handleInputSek} defaultValue={0} />=
        </div>
        <div className="conversion__result">
          EUR <span className="pink">{eurValue.toFixed(2)}</span>
        </div>
      </div>
      {/* <hr /> */}
      <div className="conversion">
        <div className="conversion__input">
          EUR
          <input onChange={handleInputEur} defaultValue={0} />=
        </div>
        <div>
          SEK <span className="pink">{sekValue.toFixed(2)}</span>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
}
