import ReactECharts from 'echarts-for-react';
import { getPieOption } from '../plotOptions/Livelihood/pie';
import { getBarOption } from '../plotOptions/Livelihood/bar';
import { getBoxOption } from '../plotOptions/Livelihood/box';
import { getBarData, getPieData, getBoxData } from '../calculator/livelihood.calculator';


const Livelihood = (data) => { // data里面是all_pages的数据

    if(!data.data.length) {
        return <h1>Sorry, no data in this group.</h1>
    }

    // 数据处理 - from calculator
    const barData = getBarData(data.data);
    const pieData = getPieData(data.data);
    const boxData = getBoxData(data.data);

    console.log("Data is " + data);

    return (
        <>
            <h1>Livelihood: Should have dashboard here</h1>
            <div className="LLChart" id='bar'>
                <ReactECharts option={getBarOption(barData)} style={{ height: '100%', width: '100%', }} />
            </div>
            <div className="LLChart" id='pie'>
                <ReactECharts option={getPieOption(pieData)} style={{ height: '100%', width: '100%', }} />
            </div>
            <div className="LLChart" id='box'>
                <ReactECharts option={getBoxOption(boxData)} style={{ height: '100%', width: '100%', }} />
            </div>
        </>)
}
export default Livelihood;