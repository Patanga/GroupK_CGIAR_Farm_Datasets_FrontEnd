import React, {Component, useEffect, useState} from "react";

import Select from 'react-select';
import axios from "axios";

import { CountryList, subRegionList, projectList } from "../groupingSample/groupingSample";
// Define initial Grouping List
const initialLists = {
    countries: [
        { value: "", label: "Global" }
    ],
    subRegions: [
        { value: "", label: "All Regions" }
    ],
    projects: [
        { value: "", label: "All Projects" }
    ],
    income: [
        { value: 'global', label: "All income category" },
        { value: 'under1', label: "Below 1 USD" },
        { value: '1to1.9', label: "1 to 1.9 USD" },
        { value: 'over1.9', label: "Above 1.9 USD"},
    ]
}

// Get Grouping List onclick
const getGroupingList = async () => {
    try {
        // TODO - 需要后端提供格式如groupingSample一样的GroupingList
        const grouping = await axios.get('http://localhost:8080/api/data/groupinglists/');
        console.log("Success in fetching Grouping Lists")
        return {
            grouping
        }
    } catch (err) {
        console.log(err);
    }
}

//  需要单独生成三个去重的Grouping json文件 (Countries, subRegion, Project)
const Groupings = ({ options, optionLists, updateOptions}) => {
    const [country, setCountry] = useState('');
    const [subRegion, setSubRegion] = useState('');
    const [project, setProject] = useState('');
    const [incomeCategory, setIncomeCategory] = useState('');

    //  ？
    const [lists, setLists] = useState(initialLists);
    const [isLoading, setIsLoading] = useState(false);

    //  原：每一步都重新向数据库发送申请
    //  TODO - 改成，每一步都对api返回的数据用filter过滤
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let lists = await getGroupingList();
            setLists(lists);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    // 搜索用的，暂时没用上
    const onClickGrouping = () => {
        let newOptions = {
            // 这啥语法
            country: country.value ? country.value : '',
            subRegion: subRegion.value ? subRegion.value : '',
            project: project.value ? project.value : '',
            incomeCategory: incomeCategory.value ? incomeCategory.value : '',
        }
        updateOptions(newOptions)
    }

    return (
        <div>
            <div>
                <form>
                    <label>Country</label>
                    <select name = "Country">
                        <option value = "all" onChange={setCountry}>All</option>
                        {
                            Object.entries(CountryList).map((list, _) => {
                                let key = list[0]
                                let value = list[1]
                                return <option value={value} onChange={setCountry}>{key}</option>
                            })
                        }
                    </select>
                </form>
                <form>
                    <label>Sub-national regions</label>
                    <select name = "Sub-national_regions">
                        <option value = "all" onChange={setSubRegion}>All</option>
                        {
                            Object.entries(subRegionList).map((list, _) => {
                                let key = list[0]
                                let value = list[1]
                                return <option value={value} onChange={setSubRegion}>{key}</option>
                            })
                        }
                        )}
                    </select>
                </form>
                <form>
                    <label>Projects</label>
                    <select name = "Projects">
                        <option value = "all" onChange={setProject}>All</option>
                        {
                            Object.entries(projectList).map((list, _) => {
                                let key = list[0]
                                let value = list[1]
                                return <option value={value} onChange={setProject}>{key}</option>
                            })
                        }
                        )}
                    </select>
                </form>
                <form>
                    <label>Income categories</label>
                    <select name = "Income_categories">
                        <option value = "all" onChange={setIncomeCategory}>All</option>
                        <option value = "<1USD" onChange={setIncomeCategory}>&lt;1USD</option>
                        <option value = "1-1.9USD" onChange={setIncomeCategory}>1-1.9USD</option>
                        <option value = ">1.9USD" onChange={setIncomeCategory}>&gt;1.9USD</option>
                    </select>
                </form>
                <button
                    className=""
                    onClick={() => this.props.resetDashboard()}
                >
                    Global/Reset
                    <i/>
                </button>
            </div>
        </div>
    )
}

export default Groupings;