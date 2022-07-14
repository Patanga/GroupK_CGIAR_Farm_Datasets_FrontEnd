import React, {Component, useEffect, useState} from "react";
import axios from 'axios'
//import { Switch, Route, Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import './css/Dashboard.css'

// 筛选组件（topic & grouping）
import Groupings from "./components/groupings"

// Dashboard - 各页面组件
import MainPage from "./topics/MainPage";
import Livelihood from "./topics/Livelihood";
import FoodSecurity from "./topics/FoodSecurity";
import Crops from "./topics/Crops";
import Livestock from "./topics/Livestock";
import OffFarmIncome from "./topics/OffFarmIncome";

// 拉取数据
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

    // Set up Grouping Options
    // TODO - 这个钩子是要在grouping逻辑之后使用的,grouping
    // TODO - @睿哥 grouping逻辑需要能输出这四个string给到钩子用
    const [groupingOptions, setGroupingOptions] = useState(
        {
            country: '',
            subRegion: '',
            project: '',
            incomeCategory: '',
        }
    );
    // Set up Current Page
    const [currentPage, setCurrentPage] = useState('MainPage');
    // Set up data (from all_pages)
    const [data, setData] = useState([]);

    // To make side effect happen - In this case, side effect is to fetch data
    // Hook - useEffect : https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetchDataset();
            console.log("fetchData success in useEffect")
            console.log(res);
            setData(res);
        };
        fetchData(); // TODO - 不写也处于已经调用的状态了吧
    },[]); // [] is to let useEffect run Only Once

    // To define setState
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
    // TODO - Merge睿哥的组件
    // TODO - 返回Grouping的useState
    const updateOptions = async (newOptions) => {
        setState(newOptions, setGroupingOptions, (e)=> {
            console.log('Options updated')
        })
        let config = {
            params: newOptions
        }

        // TODO - 改为从API已返回的数据里面 - filter过后的数据
        // 这个应该要拆出来写，不要放在updateOptions里面
        const  newData = await fetchDataset(config);

        console.log("old data length: " + data.length)
        setData(newData);
        console.log("new data length: " + data.length)
    }

    return (
        <div className = "main_wrap">
            <main className = "container">
                <div className = "dashboard__box">
                    <div className="tmpPageContainer">
                        {/*切换不同Topics的页面*/}
                        {currentPage === 'MainPage' && <MainPage data={data} />}
                        {currentPage === 'Livelihood' && <Livelihood data={data}/>}
                        {currentPage === 'FoodSecurity' && <FoodSecurity data={data}/>}
                        {currentPage === 'Crops' && <Crops data={data}/>}
                        {currentPage === 'Livestock' && <Livestock data={data}/>}
                        {currentPage === 'OffFarmIncome' && <OffFarmIncome data={data}/>}
                    </div>
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
                    {/*<Groupings options={groupingOptions}*/}
                    {/*           updateOptions={updateOptions}*/}
                    {/*/>*/}
                    {/*
                    再加一个确认的按钮？
                    Grouping这里应当返回一些能用来filter的东西
                    */}
                </div>
            </main>
        </div>
    );

}

export default App;
