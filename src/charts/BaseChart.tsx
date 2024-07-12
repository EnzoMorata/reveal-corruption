import React, { 
    Component,
    createRef
} from 'react';
import * as d3 from 'd3';

export interface BaseChartProps {
    size: { width: number, height: number },
    data: any
}

export interface BaseChartState {
    size: { width: number, height: number },
    data: any,
    chartReference: React.RefObject<HTMLDivElement>,
}

export class BaseChart extends Component<BaseChartProps, BaseChartState>{
    constructor(props: BaseChartProps) {
        super(props);
        this.state = {
            data: props.data,
            size: props.size,
            chartReference: createRef<HTMLDivElement>(),
        }
    }

    componentDidMount() {
        this.clearChart();
        this.createChart();
    }
    
    private clearChart() {
        d3.select(this.state.chartReference.current)
            .select('svg')
            .remove();
    }
    
    protected createChart() {
        d3.select(this.state.chartReference.current)
            .append('svg')
            .attr('width', this.state.size.width)
            .attr('height', this.state.size.height);
    }

    componentDidUpdate(prevProps: Readonly<BaseChartProps>) {
        if (prevProps.size !== this.props.size) {
            this.clearChart();
            this.createChart();
        }
    }

    render() {   
        return <div ref={this.state.chartReference} />
    }        
}
