import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Divider from "material-ui/Divider";
import ViewGroup from "./view-group.js";
import CreateGroup from "./create-group-paper.js";
import Header from "./header.js";
import db from "./firebase.js";

const makeList = obj => {
  return Object.keys(obj).map(key => {
    const item = obj[key];
    item.key = key;
    return item;
  });
};

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    db.ref("users").on("value", snapshot => {
      this.setState({
        users: snapshot.val() || /*<-- this means or*/ []
      });
    });
    /*fetch(
      "https://randomuser.me/api/?results=1000&inc=name,email,phone,picture,login"
    )
      .then(res => res.json())
      .then(json => {
        db.ref("/ftUsers").push(json.results);
      });*/
  }

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
            <h2>Family Places I'm In</h2>
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
