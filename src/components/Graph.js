import React, { Component } from 'react';
import * as d3 from 'd3';



class Graph extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const width = 640;
    const height = 480;

    // Initializing the graph
    const graph = d3.select('.graph')
      .attr('width', width)
      .attr('height', height);

      // Creating tooltip
      const tooltip = d3.select('.container')
        .append('div')
        .attr('class', 'tooltip')
        .html('Tooltip');

        // Initializing force simulation
        const simulation = d3.forceSimulation()
          .force('link', d3.forceLink())
          .force('charge', d3.forceManyBody())
          .force('collide', d3.forceCollide())
          .force('center', d3.forceCenter(width / 2, height / 2))
          .force('y', d3.forceY(0))
          .force('x', d3.forceX(0));

        //Drag functions
        const dragStart = d => {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        };

        const drag = d => {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        };

        const dragEnd = d => {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
  }

  render() {
    return (
      <div className="container">
        <h1>Data Visualization using D3 JS </h1>
        <div className="graph-container">
          <svg className="graph">
          </svg>
        </div>
      </div>
    );
  }
}

export default Graph;