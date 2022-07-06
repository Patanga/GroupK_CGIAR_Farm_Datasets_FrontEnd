import React, { Component, useState, useEffect } from "react";
import Grouping from "./grouping";
import axios from 'axios'
import Home from "./pages/Home";
import Livelihood from "./pages/Livelihood";

const fetchDataset = async (config) => {
    try {
        const response = await axios.get('dashboard', config);
        console.log("Success in fetching dataset, length:" + response.data.length);
        // console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err);
    }
}

const Dashboard = () => {
    const [options, setOptions] = useState({
        id_country: '',
        region: '',
        id_proj: '',
        income: '',
    });
    const [currentPage, setCurrentPage] = useState('ll');
    const [data, setData] = useState({});


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
        let config = {
            params: newOptions
        }
        console.log("old data length:" + data.length)
        const newdata = await fetchDataset(config);
        setData(newdata);
        // setState(newdata, setData, (e) => {
        //     console.log('Data updated using new options')
        //     console.log(newdata)
        // })

    }

    return (
        <>
            <h1>Rhomis Dashboard </h1>
            <div className='grouping'>
                <Grouping options={options} updateOptions={updateOptions} />
            </div>
            <div className="page">
                <div className="buttonlists">
                    <button className="pagebutton" onClick={() => setCurrentPage('home')}>Home</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('ll')}>Livelihood</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('fs')}>Food Securtiy</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('cr')}>Crops</button>
                    <button className="pagebutton" onClick={() => setCurrentPage('in')}>Income</button>
                </div>
                <div className="pageContainer">
                    {currentPage === 'home' && <Home />}
                    {currentPage === 'll' && <Livelihood data={data} />}
                </div>
            </div>
        </>
    )

}
export default Dashboard