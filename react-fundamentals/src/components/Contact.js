import React from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";
import ContactCreate from "./ContactCreate";

import update from "react-addons-update";

// 스케줄러 테스트
let scheduler = 0;
const tick = () => {
  alert("스케줄러 " + scheduler);
  scheduler++;
  setTimeout(tick, 2000);
};
setTimeout(tick, 2000);

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: "",
      contactData: [
        {
          name: "Abet",
          phone: "010-0000-0001",
        },
        {
          name: "Betty",
          phone: "010-0000-0002",
        },
        {
          name: "Charlie",
          phone: "010-0000-0003",
        },
        {
          name: "David",
          phone: "010-0000-0004",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  // component가 DOM위에 생기기 전(렌더링 되기 전)
  componentWillMount() {
    const contactData = localStorage.contactData;

    if (contactData) {
      this.setState({
        contactData: JSON.parse(contactData),
      });
    }
  }

  // component가 Update된 뒤
  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.contactData) !=
      JSON.stringify(this.state.contactData)
    ) {
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleClick(key) {
    this.setState({
      selectedKey: key,
    });
    console.log(key, "is selected");
  }

  handleCreate(contact) {
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] }),
    });
  }

  handleRemove() {
    if (this.state.selectedKey < 0) {
      return;
    }
    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selectedKey, 1]],
      }),
      selectedKey: -1,
    });
  }

  handleEdit(name, phone) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          name: { $set: name },
          phone: { $set: phone },
        },
      }),
    });
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter((contact) => {
        return (
          contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >
          -1
        );
      });
      return data.map((contact, i) => {
        return (
          // React의 Component에서는 onClick와 같은 이멘트가 props으로 전달되어서 작동되지 않는다, Native DOM에서는 작동함, 함수자체를 넘겨줘서 실행한다고 생각하기
          <ContactInfo
            contact={contact}
            key={i}
            onClick={() => this.handleClick(i)}
          />
        );
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey != -1}
          contact={this.state.contactData[this.state.selectedKey]}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
        <ContactCreate onCreate={this.handleCreate} />
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          localStorage Clear
        </button>
      </div>
    );
  }
}
