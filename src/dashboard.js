import React, { Component, useState, useEffect } from "react";
import Grouping from "./grouping";
import axios from 'axios'
import Home from "./pages/Home";
import Livelihood from "./pages/Livelihood";


// Working in progress
const fetchDataset = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Success in fetching dataset")
        // console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err);
    }
}


const Dashboard = () => {
    var dataset = null
    const [options, setOptions] = useState({
        country: '',
        region: '',
        project: '',
        income: '',
    });
    const [currentPage, setCurrentPage] = useState('home');


    // Second empty argument can let useEffect run Only Once
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsLoading(true);
    //         const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //         const json = await res.json();
    //         console.log(json);
    //         setData(json);
    //         setIsLoading(false);
    //     };
    //     fetchData();
    // }, []);


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

    const updateOptions = (newOptions) => {
        setState(newOptions, setOptions, (e) => {
            console.log('Options updated')
            console.log(e)
        })
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
                    {currentPage === 'll' && <Livelihood />}
                </div>
            </div>
        </>
    )

}
export default Dashboard