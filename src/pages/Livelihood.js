import { useEffect, useState } from 'react';
import { getBarData, getPieData, getBoxData } from '../calculators/livelihood'

import { getBarOption } from '../plotOptions/Livelihood/bar'
import { getBoxOption } from '../plotOptions/Livelihood/box'
import { getPieOption } from '../plotOptions/Livelihood/pie'

// Encapsulation of echarts for react hook
// To use ECharts component, just pass the option by props
import Echart from '../useChart'

export default function Livelihood(props) {
    const [optionBar, setOptionBar] = useState({});
    const [optionPie, setOptionPie] = useState({});
    const [optionBox, setOptionBox] = useState({});

    // When global dataset changes, update the charts options
    useEffect(() => {
        const setOptions = async () => {
            setOptionBar(getBarOption(getBarData(props.data)));
            setOptionPie(getPieOption(getPieData(props.data)));
            setOptionBox(getBoxOption(getBoxData(props.data)));

            console.log(optionBar);
        }
        setOptions();
    }, [props.data])

    return (
        <>
            <h2>Records: {props.data.length}</h2>
            <div className="LLChart" id='bar'>
                <Echart option={optionBar} />
            </div>
            <div className="LLChart" id='pie'>
                <Echart option={optionPie} />
            </div>
            <div className="LLChart" id='box'>
                <Echart option={optionBox} />
            </div>
        </>
    )
}