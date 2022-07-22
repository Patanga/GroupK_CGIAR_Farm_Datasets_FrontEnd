import { useEffect, useState } from 'react';
import {count, buildFoodShortageData, buildHDDSData, buildFoodConsumedData} from '../calculators/foodSecurity'

import { getFsHFIASOption } from "../plotOptions/FoodSecurity/fshfias"
import { getFsFoodShortageOption } from "../plotOptions/FoodSecurity/fsfoodshortage"
import { getFsHDDSOption } from "../plotOptions/FoodSecurity/fshdds"
import { getFsFoodConsumedOption } from "../plotOptions/FoodSecurity/fsfoodconsumed"

// Encapsulation of echarts for react hook
// To use ECharts component, just pass the option by props
import Echart from '../useChart'
import Alert from "react-bootstrap/Alert";

export default function FoodSecurity(props) {
    const [optionFsHFIAS, setOptionFsHFIAS] = useState({});
    const [optionFsFoodShortage, setOptionFsFoodShortage] = useState({});
    const [optionFsHDDS, setOptionFsHDDS] = useState({});
    const [optionFsFoodConsumed, setOptionFsFoodConsumed] = useState({});

    // When global dataset changes, update the charts options
    useEffect(() => {
        const setOptions = async () => {
            setOptionFsHFIAS(getFsHFIASOption(count(props.data, "HFIAS")));
            setOptionFsFoodShortage(getFsFoodShortageOption(buildFoodShortageData(props.data)));
            setOptionFsHDDS(getFsHDDSOption(buildHDDSData(props.data)));
            setOptionFsFoodConsumed(getFsFoodConsumedOption(buildFoodConsumedData(props.data)));
        }
        setOptions();
    }, [props.data])


    // return ECharts
    return (
        <>
            <Alert key='success'>
                Records: {props.data.length}
            </Alert>
            <div className="defaultChart">
                <h4>HFIAS</h4>
                <Echart option={optionFsHFIAS} />
            </div>

            <div className="defaultChart">
                <h4>Food Shortage</h4>
                <Echart option={optionFsFoodShortage} />
            </div>

            <div className="defaultChart">
                <h4>HDDS</h4>
                <Echart option={optionFsHDDS} />
            </div>

            <div className="defaultChart">
                <h4>Food Consumed</h4>
                <Echart option={optionFsFoodConsumed} />
            </div>
        </>
    )
}