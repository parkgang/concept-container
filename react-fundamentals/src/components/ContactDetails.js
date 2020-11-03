import React from "react";

export default class ContactDetails extends React.Component {
  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    const blank = <div>Not Selected</div>;

    return (
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? details : blank}
        <button>Remove</button>
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: "",
    phone: "",
  },
};
