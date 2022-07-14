import { useEffect, useRef } from 'react'
var echarts = require('echarts')

// Encapsulation of echarts for react hook

export default function Echart(props) {
    const chartRef = useRef(null);
    const option = props.option;
    useChart(chartRef, option);

    // Set echarts element to be fully fit in the father container
    return (<>
        <div style={{ width: '100%', height: '100%' }} ref={chartRef} />
    </>)
}


function useChart(chartRef, options) {
    let myChart = null;
    function renderChart() {
        const chart = echarts.getInstanceByDom(chartRef.current);
        if (chart) {
            myChart = chart;
        }
        else {
            myChart = echarts.init(chartRef.current);
        }
        myChart.setOption(options);
    }

    useEffect(() => {
        if (options !== undefined) renderChart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);


    useEffect(() => {
        return () => { myChart && myChart.dispose() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return;
}
// export default useChart;
