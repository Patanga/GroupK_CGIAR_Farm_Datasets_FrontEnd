import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Dashboard.css'
import Navigator from './Navigator'
import Grouping from './Grouping'
import Page from './Page'

const initLists = {
    countries: [
        { value: '', label: 'Global' }
    ],
    regions: [
        { value: '', label: 'All Regions' }
    ],
    projects: [
        { value: '', label: 'All Projects' }
    ],
    income: [
        { value: 'global', label: 'All income category' },
        { value: 'under1', label: 'Below 1 USD' },
        { value: '1to1.9', label: '1 to 1.9 USD' },
        { value: 'over1.9', label: 'Above 1.9 USD' },
    ]
}

const initOption = {
    id_country: initLists.countries[0].value,
    region: initLists.regions[0].value,
    id_proj: initLists.projects[0].value,
    income: initLists.income[0].value,
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
        // Fetching data from db
        const response = await axios.get('dashboard/groupinglists', config);
        console.log("Success in fetching Grouping Lists")
        return {
            ...initLists,
            countries: initLists.countries.concat(formatLists(response.data["countryList"])),
            regions: initLists.regions.concat(formatLists(response.data["regionList"])),
            projects: initLists.projects.concat(formatLists(response.data["projectList"])),
        }
    } catch (err) {
        console.log(err);
    }
}

const getDataset = async (config) => {
    try {
        const response = await axios.get('dashboard/', config);
        console.log("Success in fetching dataset, length:" + response.data.length);
        return response.data
    } catch (err) {
        console.log(err);
    }
}

export default function Dashboard() {
    // For the whole dataset of a query
    const [data, setData] = useState({});
    // Dynamic grouping options lists
    const [lists, setLists] = useState(initLists);
    // Exclusive option
    // This option won't be updated when got new grouping lists
    const [exOp, setExOp] = useState('');
    // Current grouping options
    const [option, setOption] = useState(initOption);
    // Default page selection
    const [currentPage, setCurrentPage] = useState('ll');
    // Data loading state
    const [isLoading, setIsLoading] = useState(true);


    // Once the state 'option' changed
    // 1. Update grouping lists
    // 2. Fetch new dataset from db by new 'option' (wrapped as 'params' in a object )
    useEffect(() => {
        setIsLoading(true);
        const updateLists = async () => {
            let fullLists = await getGroupingLists();
            let newLists = await getGroupingLists({ params: option });
            newLists[exOp] = fullLists[exOp];
            console.log("newList:");
            console.log(newLists);
            setLists(newLists);
        }
        const getData = async () => {
            let newData = await getDataset({ params: option });
            setData(newData);
            setIsLoading(false);
        }
        updateLists();
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option])

    // Print loading state
    // Just for testing
    useEffect(() => {
        isLoading ? console.log("loading...") : console.log("loaded!");
    }, [isLoading])

    return (
        <div className='dashboard'>
            <div className='grouping' >
                <Grouping lists={lists} option={option} setOption={setOption} setExOp={setExOp} />
            </div>
            <div className='container' >
                <Navigator setCurrentPage={setCurrentPage} />
                <Page data={data} currentPage={currentPage} isLoading={isLoading} />
            </div>
        </div>
    )
}
