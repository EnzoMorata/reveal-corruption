import {
    BaseChart,
    BaseChartProps,
} from './BaseChart.tsx';
import * as d3 from 'd3';

export class BarPlot extends BaseChart {
    constructor(props: BaseChartProps) {
        super(props);
    }

    createChart() {
        const barPlot = d3
            .select(this.state.chartReference.current)
            .append('svg')
            .attr('width', this.state.size.width)
            .attr('height', this.state.size.height)
            .style('background-color', 'white')

        barPlot
            .append('text')
            .attr('x', this.state.size.width / 2)
            .attr('y', 20)
            .text(this.state.data)
    }
}
