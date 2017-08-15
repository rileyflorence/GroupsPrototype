import React from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import RoleSelector from "./role-selector.js";

const rightIconMenu = (
  <div>
    <RoleSelector />
  </div>
);

const PeopleListView = props =>
  <div>
    <List>
      <Subheader>Group Members</Subheader>
      {props.people.map((person, index, arr) => [
        <ListItem
          leftAvatar={<Avatar src="images/ok-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText={person}
          secondaryText={person}
        />,
        index === arr.length - 1 ? null : <Divider inset={true} />
      ])}
    </List>
  </div>;

export default PeopleListView;
