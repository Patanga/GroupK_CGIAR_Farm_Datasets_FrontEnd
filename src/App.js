import React, {Component, useEffect, useState} from "react";
import axios from 'axios'
//import { Switch, Route, Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

// 布局组件
import Display from "./components/display";
// Dashboard - 各页面组件 - @睿
import MainPage from "./topics/MainPage";
import Livelihood from "./topics/Livelihood";
import FoodSecurity from "./topics/FoodSecurity";
import Crops from "./topics/Crops";
import Livestock from "./topics/Livestock";
import OffFarmIncome from "./topics/OffFarmIncome";

// 拉取数据 - TODO - url要改
// TODO - 每切一个页面就fetch一次么
const fetchDataset = async (config) => {
    try {
        const response = await axios.get('/data/all_pages', config);
        console.log("Success in fetching dataset")
        return response.data
    } catch (err) {
        console.log(err);
    }
}

// App/Dashboard
const App = () => {
    // The default setting/state of dashboard
    // Hook - useState : https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate
    const [options, setOptions] = useState(
        {
            country: '',
            subRegion: '',
            project: '',
            incomeCategory: '',
        }
    );
    const [currentPage, setCurrentPage] = useState('MainPage');
    const [data, setData] = useState({});

    // To make side effect happen - In this case, side effect is to fetch data
    // Hook - useEffect : https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetchDataset();
            console.log("fetchData success in useEffect")
            console.log(res);
            setData(res);
        };
        fetchData();
    },[]); // [] is to let useEffect run Only Once

    // To define setState
    // 为啥要分Object和Array两种情况呀 - 抄回来的，跟深拷贝浅拷贝有关系
    const setState = (newState, changeStateFunction, callback) => {
        changeStateFunction((state) => {
            if (state.constructor === Object) {
                state = Object.assign({}, state, newState)
            }
            if (state.constructor === Array) {
                state = newState.slice()
            }
            callback(state)
            return state
        })
    }

    // Countries变动的时候同时改动subRegions
    const updateOptions = async (newOptions) => {
        setState(newOptions, setOptions, (e)=> {
            console.log('Options updated')
        })
        let config = {
            params: newOptions
        }
        // TODO - 改为从API已返回的数据里面读取
        const  newData = await fetchDataset(config);

        console.log("old data length: " + data.length)
        setData(newData);
        console.log("new data length: " + data.length)
    }

    return (
        <div className = "main_wrap">
            <main className = "container row">
                <div className = "dashboard__box">
                    <div className="tmpPageContainer">
                        {currentPage === 'MainPage' && <MainPage data={data} />}
                        {currentPage === 'Livelihood' && <Livelihood data={data}/>}
                        {currentPage === 'FoodSecurity' && <FoodSecurity data={data}/>}
                        {currentPage === 'Crops' && <Crops data={data}/>}
                        {currentPage === 'Livestock' && <Livestock data={data}/>}
                        {currentPage === 'OffFarmIncome' && <OffFarmIncome data={data}/>}
                    </div>
                    <Display
                        /*TODO - Dashboard import
                        *  allDashboard期望： 接收topic(形式：api and eChart?)和grouping信息
                        *  渲染图表
                        *  暂时用不着这个组件
                        * */
                        /*allDashboard={}*/
                    />
                    <div className="topics">
                        <div className="topicsList">
                            <button
                                className="topicButton"
                                onClick={()=>setCurrentPage('MainPage')}
                            >
                                Main Page
                            </button>
                            <button
                                className="topicButton"
                                onClick={()=>setCurrentPage('Livelihood')}
                            >
                                Livelihood
                            </button>
                            <button
                                className="topicButton"
                                onClick={()=>setCurrentPage('FoodSecurity')}
                            >
                                Food Security
                            </button>
                            <button
                                className="topicButton"
                                onClick={()=>setCurrentPage('Crops')}
                            >
                                Crops
                            </button>
                            <button
                                className="topicButton"
                                onClick={()=>setCurrentPage('Livestock')}
                            >
                                Livestock
                            </button>
                            <button
                                className="topicButton"
                                onClick={()=>setCurrentPage('OffFarmIncome')}
                            >
                                Off Farm Income
                            </button>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    );

}

export default App;
