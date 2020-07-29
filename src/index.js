import React from "react";
import ReactDOM from "react-dom";
import ScotchInfobar from "./ScotchInfoBar";

import "./styles.css";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Iterate over Array and display data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {users.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>{user.car}</p>
          </div>
        ))}
      </div>
      <ScotchInfobar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
