import { useEffect, useState } from 'react';
import { buildCropLand, buildCropGrown, buildCropUsed, buildCropYields } from '../calculators/crops'

import { getCpGrown } from '../plotOptions/Crops/cpgrown'
import { getCpLand } from '../plotOptions/Crops/cpland'
import { getCpUsed } from '../plotOptions/Crops/cpused'
import { getCpYields } from '../plotOptions/Crops/cpyields'

// Encapsulation of echarts for react hook
// To use ECharts component, just pass the option by props
import Echart from '../useChart'


export default function Livelihood(props) {
    const [optionCpGrown, setOptionCpGrown] = useState({});
    const [optionCpLand, setOptionCpLand] = useState({});
    const [optionCpUsed, setOptionCpUsed] = useState({});
    const [optionCpYields, setOptionCpYields] = useState({});

    // When global dataset changes, update the charts options
    useEffect(() => {
        const setOptions = async () => {
            setOptionCpGrown(getCpGrown(buildCropGrown(props.data)));
            setOptionCpLand(getCpLand(buildCropLand(props.data)));
            setOptionCpUsed(getCpUsed(buildCropUsed(props.data)));
            setOptionCpYields(getCpYields(buildCropYields(props.data)));
        }
        setOptions();
    }, [props.data])

    return (
        <>
            <h2>Records: {props.data.length}</h2>
            <div className="defaultChart">
                <Echart option={optionCpGrown} />
            </div>
            <div className="defaultChart">
                <Echart option={optionCpLand} />
            </div>
            <div className="defaultChart">
                <Echart option={optionCpUsed} />
            </div>
            <div className="defaultChart">
                <Echart option={optionCpYields} />
            </div>
        </>
    )
}