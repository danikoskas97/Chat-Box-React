import React, { Component } from "react";

export default class Connexion extends Component {
  render() {
    return (
      <div className="conenxionBox">
        <form className="connexion">
          <input placeholder="Username" type="text" required></input>
          <button type="submit">GO</button>
        </form>
      </div>
    );
  }
}
