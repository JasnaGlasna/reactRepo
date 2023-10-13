import React from "react";

export class DomashnoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
      showValues: false,
    };
  }

  handleInputChange = (e) => {
    // console.log(e)
    this.setState({
        [e.target.name]: e.target.value //e.target.name -> firstName,lastName,email,password,age
    });
  };

  render() {
    return (
      <div id="domashno-class">
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={this.state.firstName}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={this.state.lastName}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.setState({showValues: !this.state.showValues});
          }}
        >
          {this.state.showValues === true ? "Hide Table" : "Show Table"}
        </button>
        <br />
        <br />
        {this.state.showValues && (
          <table border={1}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.firstName}</td>
                <td>{this.state.laśtName}</td>
                <td>{this.state.email}</td>
                <td>{this.state.password}</td>
                <td>{this.state.age}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}