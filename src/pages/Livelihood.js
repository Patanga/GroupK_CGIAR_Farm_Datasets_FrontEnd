import ReactECharts from 'echarts-for-react';
import { getPieOption } from '../charts/livelihood/pie';
import { getBarOption } from '../charts/livelihood/bar';
import { getBoxOption } from '../charts/livelihood/box';
import { getBarData, getPieData, getBoxData } from '../data_processors/livelihood';

// var bar = echarts.init(document.getElementById('stackedBar'));
// var pie = echarts.init(document.getElementById('pie'));
// var box = echarts.init(document.getElementById('boxWhisker'));

const Livelihood = (data) => {
    // console.log("Livelihood.js")
    // console.log(data.data);

    if(!data.data.length) {
        return <h1>Sorry, no data in this group.</h1>
    }
    const barData = getBarData(data.data);
    const pieData = getPieData(data.data);
    const boxData = getBoxData(data.data);
    
    return (
        <>
            <div className="LLChart" id='bar'>
                <ReactECharts option={getBarOption(barData)} style={{ height: '100%', width: '100%', }} />
            </div>
            <div className="LLChart" id='pie'>
                <ReactECharts option={getPieOption(pieData)} style={{ height: '100%', width: '100%', }} />
            </div>
            <div className="LLChart" id='box'>
                <ReactECharts option={getBoxOption(boxData)} style={{ height: '100%', width: '100%', }} />
            </div>
        </>
    )

}
export default Livelihood;
