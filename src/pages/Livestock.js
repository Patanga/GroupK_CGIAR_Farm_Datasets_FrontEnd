import { useEffect, useState } from 'react';
import { count, buildHeadsData, buildUseData, buildBreedsData } from "../calculators/livestock"

import { getLsBreedsOption } from "../plotOptions/Livestock/lsbreeds"
import { getLsFrequencyOption } from "../plotOptions/Livestock/lsfrequency"
import { getLsHeadsOption } from "../plotOptions/Livestock/lsheads"
import { getLsUsagesOption } from "../plotOptions/Livestock/lsusages"

// Encapsulation of echarts for react hook
// To use ECharts component, just pass the option by props
import Echart from '../useChart'
import Alert from "react-bootstrap/Alert";

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
        }
        setOptions();
    }, [props.data])

    return (
        <>
            <Alert key='success' className='dataLength'>
                Records: {props.data.length}
            </Alert>
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