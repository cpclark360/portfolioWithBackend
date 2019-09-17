import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Contact extends Component {
  state = {
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }
  };

  // focus on usernameFirst
  // componentDidMount() {
  //   this.usernameFirst.current.focus();
  // }

  // ref to get input field user input
  // usernameFirst = React.createRef();
  // usernameLast = React.createRef();
  // userEmail = React.createRef();
  // userMessage = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    // const firstName = this.usernameFirst.current.value;
    // const lastName = this.usernameLast.current.value;
    // const email = this.userEmail.current.value;
    // const message = this.userMessage.current.value;
    const data = {
      firstName: this.state.contactInfo.firstName,
      lastName: this.state.contactInfo.lastName,
      email: this.state.contactInfo.email,
      message: this.state.contactInfo.message
    };

    axios
      .post("http://localhost:8082/api/contacts", data)
      .then(res => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(
          "Error in Create Contact!",
          this.state.contactInfo.firstName
        );
      });
  };

  handleChangeContact = e => {
    // dont update the state directly clone the state then let react update the state
    const contactInfo = { ...this.state.contactInfo };
    contactInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ contactInfo });
  };

  render() {
    const { contactInfo } = this.state;

    return (
      <main id="main">
        <div className="contact-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="userFirstName">First name</label>
                <input
                  autoFocus
                  type="text"
                  className="form-control"
                  value={contactInfo.firstName} // controlled Element set value to state property
                  onChange={this.handleChangeContact}
                  name="firstName" // e.currentarget.name
                  // ref={this.usernameFirst}
                  id="userFirstName"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userLastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  value={contactInfo.lastName}
                  onChange={this.handleChangeContact}
                  name="lastName" // e.currentarget.name
                  // ref={this.usernameLast}
                  id="userLastName"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="form-row">
                <div className="col-auto mb-3">
                  <label htmlFor="userEmail">E-mail</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroupPrepend2"
                      >
                        @
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      value={contactInfo.email}
                      onChange={this.handleChangeContact}
                      name="email" // e.currentarget.name
                      // ref={this.userEmail}
                      id="userEmail"
                      placeholder="E-mail"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="userMessage">Message</label>
              <textarea
                className="form-control"
                value={contactInfo.message}
                onChange={this.handleChangeContact}
                name="message" // e.currentarget.name
                // ref={this.userMessage}
                id="userMessage"
                rows="3"
              />
            </div>
            <button className="btn btn-info" type="submit">
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default Contact;
