import ReactSelect from 'react-select'

export default function Grouping(props) {
    return <div>
        <h3>Grouping Section</h3>
        <h6><i>Countries</i></h6>
        <ReactSelect className='select' options={props.lists.countries}
            defaultValue={props.lists.countries[0]}
            onChange={(e) => {
                props.setOption({ ...props.option, id_country: e.value });
                props.setExOp('countries');
            }}></ReactSelect>

        <h6><i>Regions</i></h6>
        <ReactSelect className='select' options={props.lists.regions}
            defaultValue={props.lists.regions[0]}
            onChange={(e) => {
                props.setOption({ ...props.option, region: e.value });
                props.setExOp('regions');
            }}></ReactSelect>

        <h6><i>Projects</i></h6>
        <ReactSelect className='select' options={props.lists.projects}
            defaultValue={props.lists.projects[0]}
            onChange={(e) => {
                props.setOption({ ...props.option, id_proj: e.value });
                props.setExOp('projects');
            }}></ReactSelect>

        <h6><i>Income Category</i></h6>
        <ReactSelect className='select' options={props.lists.income}
            defaultValue={props.lists.income[0]}
            onChange={(e) => {
                props.setOption({ ...props.option, income: e.value });
            }}></ReactSelect>
    </div>
}