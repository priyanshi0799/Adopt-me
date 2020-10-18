//mostly code from react.js.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link } from "@reach/router";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listening. <Link to="/">Click here</Link>
          to go back to Home Page or wait for 5 seconds
        </h1>
      );
    }
    return this.props.children;
  }
}
