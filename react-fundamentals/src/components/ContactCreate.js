import React from "react";

export default class ContactCreate extends React.Component {
  contstructor(props) {}

  render() {
    return (
      <div>
        <h2>Create Contact</h2>
        <p>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="phone" placeholder="phone" />
        </p>
        <button>button</button>
      </div>
    );
  }
}
