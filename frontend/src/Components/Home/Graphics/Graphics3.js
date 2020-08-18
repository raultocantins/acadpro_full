import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./Graphics3.css";
export default class Graphics3 extends Component {
  render() {
    return (
      <Paper elevation={0}>
        <div className="card">
          <div className="card-content">
            <div className="columns columns-kpi is-mobile is-desktop has-block-display">
              <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">
                Renewed Users
              </div>
              <div
                id="renewed-users-changeper"
                className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless has-up-val"
                data-up="↑"
                data-down="↓"
              >
                24%
              </div>
            </div>
            <div id="renewed-users-val">8.02K</div>
          </div>
        </div>
      </Paper>
    );
  }
}
