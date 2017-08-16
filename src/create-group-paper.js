import React, { Component } from "react";
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { CardActions } from "material-ui/Card";
import AutoComplete from "material-ui/AutoComplete";
import PeopleListView from "./people-list-view.js";
import db from "./firebase";

const CardContentStyle = {
  padding: 20,
  paddingBottom: 16
};

const focusGroupNameInputField = input => {
  if (input) {
    setTimeout(() => input.focus(), 100);
  }
};

class CreateGroup extends Component {
  state = {
    creatingGroup: false,
    disabledCreateGroup: true,
    selectedPeople: [],
    people: ["cougs4ever", "swordboy", "rflorence", "jmartel"],
    groupName: "",
    groupDescription: "",
    searchText: ""
  };

  clearForm = () => {
    this.setState({
      creatingGroup: false,
      selectedPeople: [],
      searchText: "",
      groupName: "",
      groupDescription: "",
      disabledCreateGroup: true
    });
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.state.groupName === ""
          ? this.setState({ disabledCreateGroup: true })
          : this.setState({ disabledCreateGroup: false });
      }
    );
  };

  handleUpdateInput = value => {
    this.setState({
      searchText: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    db.ref("/places").push({
      name: this.state.groupName,
      description: this.state.groupDescription
    });
    this.clearForm();
  };
  insertNewName = user => {
    this.setState({
      selectedPeople: this.state.selectedPeople.concat([user]),
      searchText: ""
    });
    this.refs["contact-autocomplete"].focus();
  };

  render() {
    const { people, creatingGroup, selectedPeople } = this.state;
    return (
      <div>
        {creatingGroup
          ? <Paper zDepth={3} style={{ paddingBottom: 20 }}>
              <form style={CardContentStyle} onSubmit={this.handleSubmit}>
                <h2 style={{ margin: 0 }}>Create a New Group</h2>

                <TextField
                  hintText="What do you want to call the group?"
                  floatingLabelText="Group Name"
                  fullWidth={true}
                  ref={focusGroupNameInputField}
                  value={this.state.groupName}
                  onChange={this.handleChange}
                  name="groupName"
                />
                <br />
                <TextField
                  hintText="What is the focus of the group?"
                  floatingLabelText="Group Description"
                  value={this.state.groupDescription}
                  fullWidth={true}
                  multiLine={true}
                  onChange={this.handleChange}
                  name="groupDescription"
                />
                <br />
                <AutoComplete
                  hintText="Enter a contact name, email address, or phone number"
                  floatingLabelText="Invite Others To The Group"
                  searchText={this.state.searchText}
                  onUpdateInput={this.handleUpdateInput}
                  onNewRequest={this.insertNewName}
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={people}
                  fullWidth={true}
                  ref="contact-autocomplete"
                />

                <PeopleListView people={selectedPeople} />

                <CardActions>
                  <RaisedButton
                    label="Create Group"
                    disabled={this.state.disabledCreateGroup}
                    primary={true}
                    style={{ marginLeft: 10 }}
                    type="submit"
                  />
                  <FlatButton label="Cancel" onClick={this.clearForm} />
                </CardActions>
              </form>
            </Paper>
          : <Paper zDepth={1}>
              <FlatButton
                onClick={() => {
                  this.setState({ creatingGroup: true });
                }}
                label="Create a new group"
                primary={true}
                fullWidth={true}
              />
            </Paper>}
      </div>
    );
  }
}

export default CreateGroup;
