import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

// basic chart behaviour, search possibility to create a class

// custom chart component
export default function BarPlot() {
    const size = {
        width: 600,
        height: 500
    }

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // eventually this will be a fetch

    return BaseReactChartBehaviour(createBarPlot, size, data);
}

// common structure for a specific chart type
function createBarPlot(ref: any, size: { width: number, height: number }, data) {
    const barPlot = d3
        .select(ref.current)
        .append('svg')
        .attr('width', size.width)
        .attr('height', size.height)
        .style('background-color', 'white')

    barPlot
        .append('text')
        .attr('x', size.width / 2)
        .attr('y', 20)
        .text(data)
}

// basic behaviour for a chart
function BaseReactChartBehaviour(createChart, size: { width: number, height: number }, data) {
    const chartReference = useRef(null);

    useEffect(() => {
        d3.select(chartReference.current)
            .select('svg')
            .remove();
    
        createChart(chartReference, size, data);
    }, []);

    return <div ref={chartReference} />
}