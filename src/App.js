import React from "react";
import "./styles.css";

export default function App() {
  // Skriv JavaScript här

  return (
    // Skriv "HTML" (JSX) här
    <div className="App">
      <h1>
        <span role="img" aria-label="curry">
          🍛
        </span>
        Curryncy
        <span role="img" aria-label="curry">
          🍛
        </span>
      </h1>
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
          <input value="0" />
        </label>
        EUR: 0€
      </div>
      <div>
        <label>
          EUR:
          <input value="0" />
        </label>
        SEK: 0kr
      </div>
    </div>
  );
}
