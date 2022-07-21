import { useEffect, useState } from 'react';
//import { getBarData, getPieData, getBoxData } from '../calculators/livelihood'
import { count, buildHeadsData, buildUseData, buildBreedsData } from "../calculators/livestock"

// import { getBarOption } from '../plotOptions/Livelihood/bar'
// import { getBoxOption } from '../plotOptions/Livelihood/box'
// import { getPieOption } from '../plotOptions/Livelihood/pie'
import { getLsBreedsOption } from "../plotOptions/Livestock/lsbreeds"
import { getLsFrequencyOption } from "../plotOptions/Livestock/lsfrequency"
import { getLsHeadsOption } from "../plotOptions/Livestock/lsheads"
import { getLsUsagesOption } from "../plotOptions/Livestock/lsusages"

// Encapsulation of echarts for react hook
// To use ECharts component, just pass the option by props
import Echart from '../useChart'

export default function Livestock(props) {
    const [optionLsBreeds, setOptionLsBreeds] = useState({});
    const [optionLsFrequency, setOptionLsFrequency] = useState({});
    const [optionLsHeads, setOptionLsHeads] = useState({});
    const [optionLsUsages, setOptionLsUsages] = useState({});

    // When global dataset changes, update the charts options
    useEffect(() => {
        const setOptions = async () => {
            setOptionLsBreeds(getLsBreedsOption(buildBreedsData(props.data)));
            setOptionLsFrequency(getLsFrequencyOption(count(props.data, "Frequency")));
            setOptionLsHeads(getLsHeadsOption(buildHeadsData(props.data)));
            setOptionLsUsages(getLsUsagesOption(buildUseData(props.data)));

            console.log(optionLsBreeds);
        }
        setOptions();
    }, [props.data])

    return (
        <>
            <h2>Records: {props.data.length}</h2>
            <div className="defaultChart">
                <Echart option={optionLsBreeds} />
            </div>
            <div className="defaultChart">
                <Echart option={optionLsFrequency} />
            </div>
            <div className="defaultChart">
                <Echart option={optionLsHeads} />
            </div>
            <div className="defaultChart">
                <Echart option={optionLsUsages} />
            </div>
        </>
    )
}