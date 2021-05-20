import React, { Component } from "react";
import Skills from "../contents/Skills";

class CardInfo extends Component {
  render() {
    return (
      <div class="CardInfo">
        <div class="compdet">
          <h3>My Recent Projects</h3>
          <div className="CardInfo">
            <div className="compdet">
              <a
                href="https://github.com/hdezbriant/AllTrails-AND-Parks"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
          <div class="CardInfo">
            <div class="compdet">
              <a
                href="https://tvnames.github.io/password_generator"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
          <div class="CardInfo">
            <div class="compdet">
              <a
                href="https://stormy-shore-76414.herokuapp.com"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
          <div class="CardInfo">
            <div class="compdet">
              <a
                href="https://tvnames.github.io/ormEcommerce"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
          <a
            href="https://github.com/sjlevalley/InfoFountain"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    );
  }
}

export default CardInfo;
