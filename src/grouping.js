import { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'

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

const getGroupingLists = async () => {
    try {
        // Fetching from db
        const response = await axios.get('http://localhost:8080/api/data/groupinglists/');
        // Fetching from test json holder https://jsonkeeper.com/b/WRXI via proxy
        // If this temporary link failed, upload the groupingListsSample.json to jsonkeeper ato generate new link
        // const response = await axios.get('WRXI');
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


const Grouping = ({ options, optionLists, updateOptions }) => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [project, setProject] = useState('');
    const [income, setIncome] = useState('');
    const [lists, setLists] = useState(initLists);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let lists = await getGroupingLists();
            setLists(lists);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const onClickSearchButton = () => {
        let newOptions = {
            id_country: country.value ? country.value : '',
            region: region.value ? region.value : '',
            id_proj: project.value ? project.value : '',
            income: income.value ? income.value : '',
        }
        updateOptions(newOptions)
    }



    return (
        <div style={{ margin: '50px' }}>
            <h3>Grouping: </h3>
            {
                isLoading ? <h2>Loading...</h2> :
                    (<>
                        <Select className='select' defaultInputValue="Global" options={lists.countries} onChange={setCountry} />
                        <Select className='select' defaultInputValue="Region" options={lists.regions} onChange={setRegion} />
                        <Select className='select' defaultInputValue="Project" options={lists.projects} onChange={setProject} />
                        <Select className='select' defaultInputValue="Income Category" options={initLists.income} onChange={setIncome} />
                        <button className='groupingSearchButton' onClick={onClickSearchButton}>Search</button>
                    </>
                    )
            }
        </div>
    )
}
export default Grouping;