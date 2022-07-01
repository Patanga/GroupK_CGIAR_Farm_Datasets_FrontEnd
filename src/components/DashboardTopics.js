import React, { PureComponent } from "react";

// TODO - import dashboardList
// 期望：return一个api，渲染到App.js里面的<Display/>里面的 {allDashboard}中
// 似乎并不需要这个文件，直接放在dashboard/topics里面也可以

export default function DashboardTopics(dashboardTopic) {
    if (dashboardTopic == "MainPage") {
        return ;
    } else if (dashboardTopic == "Livelihoods") {
        return ;
    } else if (dashboardTopic == "FoodSecurity"){
        return ;
    } else if (dashboardTopic == "Crops"){
        return ;
    } else if (dashboardTopic == "Livestock"){
        return ;
    } else if (dashboardTopic == "OffFarmIncome"){
        return ;
    }
}