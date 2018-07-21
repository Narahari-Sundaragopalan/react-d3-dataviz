import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
//import Graph from './components/Graph';


// const width = 1080;
// const height = 250;
// const color = d3.scaleOrdinal(d3.schemeCategory10);

// const enterNode = (selection) => {
//   selection.select('circle')
//       .attr("r", 30)
//       .style("fill", function(d) { return color(d.name) })


//   selection.select('text')
//       .attr("dy", ".35em")
//       .style("transform", "translateX(-50%,-50%")
// };

// const updateNode = (selection) => {
//   selection.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")

// };

// const enterLink = (selection) => {
//   selection.attr("stroke-width", 2)
//   .style("stroke","black")
//       .style("opacity",".2")
// };


// const updateLink = (selection) => {
//   selection
//       .attr("x1", (d) => d.source.x)
//       .attr("y1", (d) => d.source.y)
//       .attr("x2", (d) => d.target.x)
//       .attr("y2", (d) => d.target.y);
// };

// const updateGraph = (selection) => {
//   selection.selectAll('.link')
//       .call(updateLink);
// };

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       data : {"nodes":
//         [
//           {"email": "abc@gmail.com", "id": 1},
//           {"email": "efg@yahoo.com", "id": 2},
//           {"email": "qwerty@gmail.com", "id": 3},
//           {"email": "asdf@gmail.com", "id": 4}
//         ],
//       "links": 
//         [
//           {"source": 1, "target": 2},
//           {"source": 1, "target": 3}
//         ]
//       }
//     }
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <div className="graphContainer">
//           <header className="App-header">
//               <h1 className="App-title">Email Data Visualization using D3 JS </h1>
//           </header>
//           <Graph data={this.state.data} />
//         </div>
//       </div>
//         )
//     }
// }


// class Graph extends Component {
//   constructor(props){
//     super(props);
//   }

//   componentDidMount() {
//     this.d3Graph = d3.select(ReactDOM.findDOMNode(this));
    
//     var force = d3.forceSimulation(this.props.data.nodes)
//       .force("charge", d3.forceManyBody().strength(-50))
//       .force("link", d3.forceLink(this.props.data.links).distance(90))
//       .force("center", d3.forceCenter().x(width / 2).y(height / 2))
//       .force("collide", d3.forceCollide([5]).iterations([5]))

//     function dragStarted(d) {
//         if (!d3.event.active) force.alphaTarget(0.3).restart()
//         d.fx = d.x
//         d.fy = d.y

//     }

//     function dragging(d) {
//         d.fx = d3.event.x
//         d.fy = d3.event.y
//     }

//     function dragEnded(d) {
//         if (!d3.event.active) force.alphaTarget(0)
//         d.fx = null
//         d.fy = null
//     }

//     const node = d3.selectAll('g.node')
//       .call(d3.drag()
//                 .on("start", dragStarted)
//                 .on("drag", dragging)
//                 .on("end", dragEnded)
//            );
    
//       force.on('tick', () => {
//           this.d3Graph.call(updateGraph)
//       });
//   }

//   render() {
//       var nodes = this.props.data.nodes.map( (node) => {
//           return (
//           <Node
//               data={node}
//               name={node.name}
//               key={node.id}
//           />);
//       });
//       var links = this.props.data.links.map( (link,i) => {
//           return (
//               <Link
//                   key={link.target+i}
//                   data={link}
//               />);
//       });
//       return (
//           <svg className="graph" width={width} height={height}>
//               <g>
//                   {nodes}
//               </g>
//               <g>
//                   {links}
//               </g>
//           </svg>
//       );
//   }
// }


// class Node extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//       this.d3Node = d3.select(ReactDOM.findDOMNode(this))
//           .datum(this.props.data)
//           .call(enterNode)
//   }

//   componentDidUpdate() {
//       this.d3Node.datum(this.props.data)
//           .call(updateNode)
//   }

//   handle(e){
//       console.log(this.props.data.id + ' been clicked')
//   }

//   render() {
//       return (
//           <g className='node'>
//               <circle ref="dragMe" onClick={this.handle.bind(this)}/>
//               <text>{this.props.data.name}</text>
//           </g>
//       );
//   }
// }


// class Link extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//       this.d3Link = d3.select(ReactDOM.findDOMNode(this))
//           .datum(this.props.data)
//           .call(enterLink);
//   }

//   componentDidUpdate() {
//       this.d3Link.datum(this.props.data)
//           .call(updateLink);
//   }

//   render() {
//       return (
//               <line className='link' />
//       );
//   }
// }

const width = 1080;
const height = 250;
const color = d3.scaleOrdinal(d3.schemeCategory10);


const enterNode = (selection) => {
    selection.select('circle')
        .attr("r", 30)
        .style("fill", function(d) { return color(d.email) })


    selection.select('text')
        .attr("dy", ".35em")
        .style("transform", "translateX(-50%,-50%")
};

const updateNode = (selection) => {
    selection.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")

};

const enterLink = (selection) => {
    selection.attr("stroke-width", 2)
    .style("stroke","black")
        .style("opacity",".2")
};

const updateLink = (selection) => {
    selection
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
};

const updateGraph = (selection) => {
    selection.selectAll('.node')
        .call(updateNode)
    selection.selectAll('.link')
        .call(updateLink);
};

////////////////////////////////////////////////////////////////////////////
/////// App component. Hold graph data in state and renders Graph component.
/////// Graph component in turn renders Link and Node components.

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : {"nodes":
        [
          {"email": "abc@gmail.com", "id": 1},
          {"email": "efg@yahoo.com", "id": 2},
          {"email": "qwerty@gmail.com", "id": 3},
          {"email": "asdf@gmail.com", "id": 4}
        ],
      "links": 
        [
          {"source": 1, "target": 2},
          {"source": 1, "target": 3}
        ]
      }
    }
  }
  
  render() {
    return (
            <div className="graphContainer">
                <Graph data={this.state.data} />
            </div>
        )
    }
}

///////////////////////////////////////////////////////////
/////// Graph component. Holds Link and Node components

class Graph extends React.Component {

    componentDidMount() {
      this.d3Graph = d3.select(ReactDOM.findDOMNode(this));
      
      var force = d3.forceSimulation(this.props.data.nodes)
        .force("charge", d3.forceManyBody().strength(-50))
        .force("link", d3.forceLink(this.props.data.links).distance(90))
        .force("center", d3.forceCenter().x(width / 2).y(height / 2))
        .force("collide", d3.forceCollide([5]).iterations([5]))

      function dragStarted(d) {
          if (!d3.event.active) force.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y

      }

      function dragging(d) {
          d.fx = d3.event.x
          d.fy = d3.event.y
      }

      function dragEnded(d) {
          if (!d3.event.active) force.alphaTarget(0)
          d.fx = null
          d.fy = null
      }

      const node = d3.selectAll('g.node')
        .call(d3.drag()
                  .on("start", dragStarted)
                  .on("drag", dragging)
                  .on("end", dragEnded)
             );
      
        force.on('tick', () => {
            this.d3Graph.call(updateGraph)
        });
    }

    render() {
        var nodes = this.props.data.nodes.map( (node) => {
            return (
            <Node
                data={node}
                name={node.name}
                key={node.id}
            />);
        });
        var links = this.props.data.links.map( (link,i) => {
            return (
                <Link
                    key={link.target+i}
                    data={link}
                />);
        });
        return (
            <svg className="graph" width={width} height={height}>
                <g>
                    {nodes}
                </g>
                <g>
                    {links}
                </g>
            </svg>
        );
    }
}

///////////////////////////////////////////////////////////
/////// Link component

class Link extends React.Component {

    componentDidMount() {
        this.d3Link = d3.select(ReactDOM.findDOMNode(this))
            .datum(this.props.data)
            .call(enterLink);
    }

    componentDidUpdate() {
        this.d3Link.datum(this.props.data)
            .call(updateLink);
    }

    render() {
        return (
                <line className='link' />
        );
    }
}

///////////////////////////////////////////////////////////
/////// Node component

class Node extends React.Component {

    componentDidMount() {
        this.d3Node = d3.select(ReactDOM.findDOMNode(this))
            .datum(this.props.data)
            .call(enterNode)
    }

    componentDidUpdate() {
        this.d3Node.datum(this.props.data)
            .call(updateNode)
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

export default App;