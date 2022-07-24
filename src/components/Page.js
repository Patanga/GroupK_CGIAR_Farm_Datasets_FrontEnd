import Livelihood from '../pages/Livelihood'
import Livestock from '../pages/Livestock'
import FoodSecurity from '../pages/FoodSecurity'
import Crops from '../pages/Crops'
import OffFarm from '../pages/OffFarm'
import Home from '../pages/Home'

export default function Page(props) {
    return (
        props.isLoading ?
            <div className='loading'><p>Loading...</p></div>
            :
            <div className='page'>
                {props.currentPage === 'home' && <Home data={props.data}>Home</Home>}
                {props.currentPage === 'll' && <Livelihood data={props.data}>Livelihood</Livelihood>}
                {props.currentPage === 'fs' && <FoodSecurity data={props.data}>Food Security</FoodSecurity>}
                {props.currentPage === 'cr' && <Crops data={props.data}>Crops</Crops>}
                {props.currentPage === 'lstk' && <Livestock data={props.data}>Livestock</Livestock>}
                {props.currentPage === 'incm' && <OffFarm data={props.data}>Off Farm Incomes</OffFarm>}
            </div>
    )
}