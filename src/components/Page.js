import Livelihood from '../pages/Livelihood'
import Home from '../pages/Home'

export default function Page(props) {
    return (
        props.isLoading ?
            <div className='loading'><p>Loading...</p></div>
            :
            <div className='page'>
                {props.currentPage === 'home' && <Home data={props.data}>Home</Home>}
                {props.currentPage === 'll' && <Livelihood data={props.data}>Livelihood</Livelihood>}
                {props.currentPage === 'fs' && <div>Food Securtiy</div>}
                {props.currentPage === 'cr' && <div>Crops</div>}
                {props.currentPage === 'lstk' && <div>Livestock</div>}
                {props.currentPage === 'incm' && <div>Off Farm Incomes</div>}
            </div>
    )
}