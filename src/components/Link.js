import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom'


class Link extends Component {
  constructor(props) {
    super(props);

    this.enterLink = this.props.enterLink;
    this.updateLink = this.props.updateLink;
  }

  componentDidMount() {
      this.d3Link = d3.select(ReactDOM.findDOMNode(this))
          .datum(this.props.data)
          .call(this.enterLink);
  }

  componentDidUpdate() {
      this.d3Link.datum(this.props.data)
          .call(this.updateLink);
  }

  render() {
      return (
              <line className='link' />
      );
  }
}

export default Link;