import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

class Node extends Component {
  constructor(props) {
    super(props);

    this.enterNode = this.props.enterNode;
    this.updateNode = this.props.updateNode;
  }

  componentDidMount() {
      this.d3Node = d3.select(ReactDOM.findDOMNode(this))
          .datum(this.props.data)
          .call(this.enterNode)
  }

  componentDidUpdate() {
      this.d3Node.datum(this.props.data)
          .call(this.updateNode)
  }

  handle(e){
      console.log(this.props.data.id + ' been clicked')
  }

  render() {
      return (
          <g className='node'>
              <circle ref="dragMe" onClick={this.handle.bind(this)}/>
              <text>{this.props.data.name}</text>
          </g>
      );
  }
}

 export default Node;