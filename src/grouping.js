import { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'

const applyGroupings = async (options) => {
    // Re-calculate 
}

// For testing
const grouping_countries = [
    { value: 'gloabl', label: 'Global' },
    { value: 'china', label: 'China' },
    { value: 'usa', label: 'USA' },
    { value: 'japan', label: 'Japan' },
    { value: 'uk', label: 'UK' },
]
const grouping_regions = [
    { value: 'whole_country', label: 'Whole Country' },
    { value: 'asdasd', label: 'DSADAS' },
    { value: 'qweqwe', label: 'QWEWQE' },
    { value: 'sadasda', label: 'ASDSAD' },
    { value: 'fghfgh', label: 'HGGDH' },
]
const grouping_projects = [
    { value: 'all_projects', label: 'All projects' },
    { value: 'adn', label: 'ADN' },
    { value: 'abc', label: 'ABC' },
    { value: 'jkl', label: 'JKL' },
    { value: 'opo', label: 'OPO' },
]



const initLists = {
    countries: [
        { value: "Loading", label: "Loading" }
    ],
    regions: [
        { value: "Loading", label: "Loading" }
    ],
    projects: [
        { value: "Loading", label: "Loading" }
    ],
    income: [
        { value: "Loading", label: "Loading" }
    ],
}

const grouping_income = [
    { value: 0, label: 'All income category' },
    { value: 1, label: 'Below 1 USD' },
    { value: 2, label: '1 to 1.9 USD' },
    { value: 3, label: 'Above 1.9 USD' },
]


// const grouping_cat = [grouping_countries, grouping_regions, grouping_projects, grouping_income]

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
        // const response = await axios.get('http://localhost:8080/api/data/groupinglists/');
        // Fetching from test json holder https://jsonkeeper.com/b/WRXI via proxy
        // If this temporary link failed, upload the groupingListsSample.json to jsonkeeper ato generate new link
        const response = await axios.get('WRXI');
        console.log("Success in fetching Grouping Lists")
        console.log(response.data)
        // return response.data
        return {
            countries: formatLists(response.data["countryList"]),
            regions: formatLists(response.data["regionList"]),
            projects: formatLists(response.data["projectList"]),
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
            country: country.value ? country.value : '',
            region: region.value ? region.value : '',
            project: project.value ? project.value : '',
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
                        <Select className='select' defaultValue={lists.countries[0].value} options={lists.countries} onChange={setCountry} />
                        <Select className='select' defaultValue={lists.regions[0].value} options={lists.regions} onChange={setRegion} />
                        <Select className='select' defaultValue={lists.projects[0].value} options={lists.projects} onChange={setProject} />
                        <Select className='select' defaultValue={grouping_income[0].value} options={grouping_income} onChange={setIncome} />
                        <button className='groupingSearchButton' onClick={onClickSearchButton}>Search</button>
                    </>
                    )
            }
        </div>
    )
}
export default Grouping;