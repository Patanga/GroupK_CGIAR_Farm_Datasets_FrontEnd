import React, { Component, useState, useEffect } from "react";
import Grouping from "./grouping";
import axios from 'axios'
import Home from "./pages/Home";
import Livelihood from "./pages/Livelihood";

// Convert options object to config object for query db
const options2config = (options) => {
    return { params: options }
}

const fetchDataset = async (config) => {
    try {
        const response = await axios.get('/', config);
        console.log("Success in fetching dataset, length:" + response.data.length);
        // console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err);
    }
}


const initLists = {
    countries: [
        { value: "", label: "Global" }
    ],
    regions: [
        { value: "", label: "All Regions" }
    ],
    projects: [
        { value: "", label: "All Projects" }
    ],
    income: [
        { value: 'global', label: 'All income category' },
        { value: 'under1', label: 'Below 1 USD' },
        { value: '1to1.9', label: '1 to 1.9 USD' },
        { value: 'over1.9', label: 'Above 1.9 USD' },
    ]
}

const formatLists = (list) => {
    var arr = []
    for (var i in list) {
        arr.push({ value: list[i], label: list[i] });
    }
    return arr;
}

const getGroupingLists = async (config) => {
    try {
        // Fetching from db
        const response = await axios.get('dashboard/groupinglists', config);
        console.log("Success in fetching Grouping Lists")
        // console.log(response.data)
        // return response.data
        return {
            countries: initLists.countries.concat(formatLists(response.data["countryList"])),
            regions: initLists.regions.concat(formatLists(response.data["regionList"])),
            projects: initLists.projects.concat(formatLists(response.data["projectList"])),
        }
    } catch (err) {
        console.log(err);
    }
}


const Dashboard = () => {
    const [lists, setLists] = useState(initLists);
    const [data, setData] = useState({});
    const [currentPage, setCurrentPage] = useState('ll');
    const [options, setOptions] = useState({
        id_country: '',
        region: '',
        id_proj: '',
        income: '',
    });

    const setState = (newState, changeStateFn, callback) => {
        changeStateFn((state) => {
            if (state.constructor === Object) {
                state = Object.assign({}, state, newState)
            }
            if (state.construct === Array) {
                state = newState.slice()
            }
            callback(state)
            return state
        })
    }

    const updateOptions = async (newOptions) => {
        setState(newOptions, setOptions, (e) => {
            console.log('Options updated:')
            console.log(newOptions)
        })
        console.log("old data length:" + data.length)
        const newdata = await fetchDataset(options2config(newOptions));
        setData(newdata);
    }

    useEffect(() => {
        const updateLists = async () => {
            let newlists = await getGroupingLists(options2config(options));
            setLists(newlists);
        }
        updateLists();
    }, [options])

    return (
        <>
            <h1>Rhomis Dashboard </h1>
            <div className='grouping'>
                <Grouping lists={lists} setLists={setLists} options={options} updateOptions={updateOptions} getGroupingLists={getGroupingLists} />
            </div>
            <div className="page">
                <div className="buttonlist">
                    <button className="pagebutton" onClick={() => setCurrentPage('home')}>Home</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('ll')}>Livelihood</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('fs')}>Food Securtiy</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('cr')}>Crops</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('in')}>Income</button>
                </div>
                <div className="pageContainer">
                    {/* {currentPage === 'home' && <Home />} */}
                    {/* {currentPage === 'll' && <Livelihood data={data} />} */}
                </div>
            </div>
        </>
    )

}
export default Dashboard