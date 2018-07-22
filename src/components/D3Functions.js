import * as d3 from 'd3';


const width = 1080;
const height = 250;
const color = d3.scaleOrdinal(d3.schemeCategory10);
const force = d3.forceSimulation();

const drag = () => {
    d3.selectAll('g')
        .call(d3.drag()
            .on("start", dragStarted)
            .on("drag", dragging)
            .on("end", dragEnded));
};

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

const enterNode = (selection) => {
    selection.select('circle')
        .attr("r", 30)
        .style("fill", function(d) { return color(d.name) })


    selection.select('text')
        .attr("dy", ".35em")
        .style("transform", "translateX(-50%,-50%")
};

const updateNode = (selection) => {
    selection.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")

};

const enterLink = (selection) => {
    selection.attr("stroke-width", 2)
    .style("stroke","yellow")
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
        .call(drag);
    selection.selectAll('.link')
        .call(updateLink);
};


// Function to parse data from the API
const parseData = (data) => {
  const nodes = [];
  for (let email of data) {
    const currentNode = {};
    for (let element of email.message.split(/\n/g)) {
      if (element.includes("X-To:")) {
        currentNode['email'] = element;
        nodes.push(currentNode);
     	} else if (element.includes("X-From:")) {
        currentNode['email'] = element;
        nodes.push(currentNode);
     	}
    }
  }

  return nodes;
};