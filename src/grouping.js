import { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'

const incomeList = [
    { value: 'global', label: 'All income category' },
    { value: 'under1', label: 'Below 1 USD' },
    { value: '1to1.9', label: '1 to 1.9 USD' },
    { value: 'over1.9', label: 'Above 1.9 USD' },
]
const Grouping = ({ lists, setLists, getGroupingLists, options, optionLists, updateOptions }) => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [project, setProject] = useState('');
    const [income, setIncome] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let lists = await getGroupingLists();
            setLists(lists);
            setIsLoading(false);
        };
        fetchData();
    }, [country, region, project, income]);

    const onClickSearchButton = () => {
        let newOptions = {
            id_country: country.value ? country.value : '',
            region: region.value ? region.value : '',
            id_proj: project.value ? project.value : '',
            income: income.value ? income.value : '',
        }
        updateOptions(newOptions)
    }

    useEffect(() => {
        updateOptions({
            id_country: country.value ? country.value : '',
            region: region.value ? region.value : '',
            id_proj: project.value ? project.value : '',
            income: income.value ? income.value : '',
        });
        let lists = getGroupingLists();
        setLists(lists);
    }, [country, region, project, income])



    return (
        <div style={{ margin: '50px' }}>
            <h3>Grouping: </h3>
            {
                    (<>
                        <Select className='select' defaultInputValue="Global" options={lists.countries} onChange={setCountry} />
                        <Select className='select' defaultInputValue="Region" options={lists.regions} onChange={setRegion} />
                        <Select className='select' defaultInputValue="Project" options={lists.projects} onChange={setProject} />
                        <Select className='select' defaultInputValue="Income Category" options={incomeList} onChange={setIncome} />
                        {/* <button className='groupingSearchButton' onClick={onClickSearchButton}>Search</button> */}
                    </>
                    )
            }
        </div>
    )
}
export default Grouping;