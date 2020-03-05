import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [eurValue, setEuroValue] = useState(0);

  const rateSekToEur = 0.095;
  const rateEurToSek = 10.57;

  function handleInputSek(event) {
    let sek = event.target.value;
    let eur = sek * rateSekToEur;
    setEuroValue(eur);
  }

  return (
    // Skriv "HTML" (JSX) här
    <div className="App">
      <h1>🍛 Curryncy 🍛</h1>
      <h3>Let us do the math</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div>
        <label>
          SEK:
          <input onChange={handleInputSek} />
        </label>
        <span>EUR: {eurValue.toFixed(2)}€ </span>
      </div>
    </div>
  );
}
