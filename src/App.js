import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Divider from "material-ui/Divider";
import ViewGroup from "./view-group.js";
import CreateGroup from "./create-group-paper.js";
import DatePicker from "material-ui/DatePicker";
import RaisedButton from "material-ui/RaisedButton";
import Header from "./header.js";

/* var WebFontConfig = {
  google: { families: [ 'Roboto:400,300,500:latin' ] }
};
      (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })(); */

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  render() {
    const groupsStyle = {
      maxWidth: "640px",
      margin: "auto",
      padding: "20px"
    };

    const groupsListStyle = {
      listStyle: "none"
    };

    const groupsListItemStyle = {
      marginBottom: "20px"
    };

    return (
      <div className="App">
        <Header />
        <MuiThemeProvider>
          <div style={groupsStyle}>

            <ul style={groupsListStyle}>
              <li style={groupsListItemStyle}>
                <ViewGroup
                  title="Only Me"
                  description="Work in Family Tree with living people that will only be visible to me.."
                />
              </li>

            </ul>
            <Divider style={{ marginBottom: "20px" }} />
            <h2>Groups I'm In</h2>
            <ul style={groupsListStyle}>
              <li style={groupsListItemStyle}>
                <ViewGroup
                  title="Bishop Family"
                  description="The family of Verland Elmer working together."
                />
              </li>

            </ul>
            <CreateGroup />

          </div>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
