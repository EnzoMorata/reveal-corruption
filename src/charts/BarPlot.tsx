import {
    SimpleD3Component,
    SimpleD3ComponentProps
} from 'simple-d3-component'

import * as d3 from 'd3';

export class BarPlot extends SimpleD3Component {
    constructor(props: SimpleD3ComponentProps) {
        super(props);
    }

    createVisualization() {
        super.createVisualization();

        const barPlot = d3.select(this.state.componentReference.current)
            .select('svg')         
            .style('background-color', 'white')

        barPlot
            .append('text')
            .attr('x', this.state.size.width / 2)
            .attr('y', 20)
            .text('My First Barplot Component')
    }
}
