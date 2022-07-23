import { useEffect, useState } from 'react';
import { buildOffFarmIncome, buildOffFarmMonth, buildOffFarmActivity, buildOffFarmUsage } from '../calculators/offfarm'

import { getOffIncomeOption } from '../plotOptions/OffFarm/offfarmincome'
import { getOffMonthOption } from '../plotOptions/OffFarm/offfarmmonth'
import { getOffActivityOption } from '../plotOptions/OffFarm/offfarmactivities'
import { getOffUsageOption } from '../plotOptions/OffFarm/offfarmusage'

// Encapsulation of echarts for react hook
// To use ECharts component, just pass the option by props
import Echart from '../useChart'
import Alert from "react-bootstrap/Alert";

export default function Livelihood(props) {
    const [optionOffIncome, setOptionOffIncome] = useState({});
    const [optionMonth, setOptionMonth] = useState({});
    const [optionActivity, setOptionActivity] = useState({});
    const [optionUsage, setOptionUsage] = useState({});

    // When global dataset changes, update the charts options
    useEffect(() => {
        const setOptions = async () => {
            setOptionOffIncome(getOffIncomeOption(buildOffFarmIncome(props.data)));
            setOptionMonth(getOffMonthOption(buildOffFarmMonth(props.data)));
            setOptionActivity(getOffActivityOption(buildOffFarmActivity(props.data)));
            setOptionUsage(getOffUsageOption(buildOffFarmUsage(props.data)));

            console.log('Set')
        }
        setOptions();
    }, [props.data])

    return (
        <>
            <Alert key='success' className='dataLength'>
                Records: {props.data.length}
            </Alert>
            <div className="defaultChart">
                <Echart option={optionOffIncome} />
            </div>
            <div className="defaultChart">
                <Echart option={optionMonth} />
            </div>
            <div className="defaultChart">
                <Echart option={optionActivity} />
            </div>
            <div className="defaultChart">
                <Echart option={optionUsage} />
            </div>
        </>
    )
}