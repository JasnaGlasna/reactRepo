import React from "react";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      showResults: false, //krie rezultati inicijalno
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    this.setState({
      showResults: true,
    });
  };

  handleHideResults = () => {
    this.setState({
      showResults: false,
    });
  };

  render() {
    const { name, email, password, confirmPassword, age, showResults } =
      this.state;

    return (
      <div id="signup">
        <h1>Sign Up Form</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={this.handleChange}
            required
          />
          <br />

          <button type="button" onClick={this.handleSubmit}>
            Show Results
          </button>
        </form>

        {showResults && (
          <div>
            <h2>Results:</h2>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{email}</td>
                </tr>
                <tr>
                  <th>Password</th>
                  <td>{password}</td>
                </tr>
                <tr>
                  <th>Confirm Password</th>
                  <td>{confirmPassword}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>{age}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={this.handleHideResults}>Hide Results</button>
          </div>
        )}
      </div>
    );
  }
}
