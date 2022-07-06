// Total Value of Activities
// Stacked bar chart
const appendTVA = (doc) => {
    doc.api_tva =
        doc.api_income_lstk_ppp_pd_pmae +
        doc.api_income_crop_ppp_pd_pmae +
        doc.api_income_offfarm_ppp_pd_pmae +
        doc.api_cons_lstk_ppp_pd_pmae +
        doc.api_cons_crop_ppp_pd_pmae;

    return doc;
}

exports.getBarData = (data) => {
    const barData = data.map(doc => appendTVA(doc));
    return barData;
}

exports.getPieData = (data) => {
    let under_1_cnt = 0;
    let _1to1_9_cnt = 0;
    let above_1_9_cnt = 0;

    data.map(doc => {
        if (doc.api_income_tot_ppp_pd_pmae >= 1.9) {
            above_1_9_cnt++;
        }
        else if (doc.api_income_tot_ppp_pd_pmae >= 1) {
            _1to1_9_cnt++;
        }
        else if (doc.api_income_tot_ppp_pd_pmae > 0) {
            under_1_cnt++;
        }
        // Null value not counted
    })
    // format data for echarts
    return [
        { value: under_1_cnt, name: '< 1 USD' },
        { value: _1to1_9_cnt, name: '1 to 1.99 USD' },
        { value: above_1_9_cnt, name: '> 1.99 USD' },
    ]
}

exports.getBoxData = (data) => {

    let cons_crop_annual_arr = [];
    let cons_lstk_annual_arr = [];
    let incm_crop_annual_arr = [];
    let incm_lstk_annual_arr = [];
    let incm_offfarm_annual_arr = [];

    data.map(doc => {
        const year = doc.year;
        const days = (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 366 : 365;
        cons_crop_annual_arr.push(doc.api_cons_crop_ppp_pd_pmae * days);
        cons_lstk_annual_arr.push(doc.api_cons_lstk_ppp_pd_pmae * days);
        incm_crop_annual_arr.push(doc.api_income_crop_ppp_pd_pmae * days);
        incm_lstk_annual_arr.push(doc.api_income_lstk_ppp_pd_pmae * days);
        incm_offfarm_annual_arr.push(doc.api_income_offfarm_ppp_pd_pmae * days);
    })

    return [
        cons_crop_annual_arr,
        cons_lstk_annual_arr,
        incm_crop_annual_arr,
        incm_lstk_annual_arr,
        incm_offfarm_annual_arr
    ]
}