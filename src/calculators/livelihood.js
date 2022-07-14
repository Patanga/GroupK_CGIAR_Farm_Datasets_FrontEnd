
exports.getBarData = (data) => {
    const barData = data.map(doc => {
        let newdoc = {
            id_unique: 'Record Unique ID: ' + doc.id_unique,
            incm_lstk: doc.api_income_lstk_ppp_pd_pmae,
            incm_crop: doc.api_income_crop_ppp_pd_pmae,
            incm_off: doc.api_income_offfarm_ppp_pd_pmae,
            cons_lstk: doc.api_cons_lstk_ppp_pd_pmae,
            cons_crop: doc.api_cons_crop_ppp_pd_pmae
        }
        newdoc.tva =
            newdoc.incm_lstk
            + newdoc.incm_crop
            + newdoc.incm_off
            + newdoc.cons_lstk
            + newdoc.cons_crop;
        return newdoc;
    });
    return barData;
}

exports.getPieData = (data) => {
    let under_1_cnt = 0;
    let _1to1_9_cnt = 0;
    let above_1_9_cnt = 0;

    data.forEach(doc => {
        if (doc.api_tot_ppp_income_pd_pmae >= 1.9) {
            above_1_9_cnt++;
        }
        else if (doc.api_tot_ppp_income_pd_pmae >= 1) {
            _1to1_9_cnt++;
        }
        else if (doc.api_tot_ppp_income_pd_pmae > 0) {
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

    data.forEach(doc => {
        const year = doc.year;
        const days = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365;
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