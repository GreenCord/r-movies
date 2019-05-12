import React, { Component } from "react";
import Moment from "react-moment";

export default class FormatDate extends Component {
  render() {
    return <Moment format="MMMM D, YYYY" date={this.props.date} />;
  }
}
