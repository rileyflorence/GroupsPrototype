import React, { Component } from "react";
import { Card, CardActions, CardHeader } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import PeopleListView from "./people-list-view.js";

class ViewGroup extends Component {
  state = {
    people: ["cougs4ever", "swordboy", "rflorence", "jmartel"]
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.title}
            subtitle={this.props.description}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Use this mode" primary={true} />
          </CardActions>
          <PeopleListView expandable={true} people={this.state.people} />

        </Card>
      </div>
    );
  }
}

export default ViewGroup;
