import { useEffect, useState } from 'react';
//import { getBarData, getPieData, getBoxData } from '../calculators/livelihood'
import { buildOffFarmIncome, buildOffFarmMonth, buildOffFarmActivity, buildOffFarmUsage } from '../calculators/offfarm'

// import { getBarOption } from '../plotOptions/Livelihood/bar'
// import { getBoxOption } from '../plotOptions/Livelihood/box'
// import { getPieOption } from '../plotOptions/Livelihood/pie'
import { getOffIncomeOption } from '../plotOptions/OffFarm/offfarmincome'
import { getOffMonthOption } from '../plotOptions/OffFarm/offfarmmonth'
import { getOffActivityOption } from '../plotOptions/OffFarm/offfarmactivities'
import { getOffUsageOption } from '../plotOptions/OffFarm/offfarmusage'

// Encapsulation of echarts for react hook
// To use ECharts component, just pass the option by props
import Echart from '../useChart'

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
            <h2>Records: {props.data.length}</h2>
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