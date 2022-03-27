import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";
import { GoogleLogin } from "react-google-login";

class SignIn extends Component {
  componentWillMount() {
    document.getElementById("body").className = "bg-gradient-primary";
  }

  handleSignIn = (response) => {
    console.log(response);
    const { code } = response;
    axios
      .post("/api/create-tokens", { code })
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="App-header">
            <h1>
              Welcome to <b>OnTrack</b>
            </h1>
            <h4>
              An <code>ML-Based</code> Homework Tracker
            </h4>
            <hr />
            <div>
              <div className="user">
                <GoogleLogin
                  className="btn btn-google btn-user btn-block"
                  clientId="1062515714621-35tek1at77jjse1o47cqa1trok77uses.apps.googleusercontent.com"
                  buttonText="Sign In"
                  onSuccess={this.handleSignIn}
                  onFailure={this.handleSignIn}
                  cookiePolicy="single_host_origin"
                  responseType="code"
                  accessType="code"
                  scope="openid email profile https://www.googleapis.com/auth/calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
