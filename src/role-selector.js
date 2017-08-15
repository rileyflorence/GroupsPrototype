import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const styles = {
  customWidth: {
    width: 190
  }
};

export default class RoleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          underlineStyle={{ border: "none" }}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="As a Participant" />
          <MenuItem value={2} primaryText="As an Owner" />
          <MenuItem value={3} primaryText="Remove from Group" />
        </DropDownMenu>
      </div>
    );
  }
}
