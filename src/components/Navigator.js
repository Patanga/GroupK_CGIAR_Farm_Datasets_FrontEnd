export default function Navigator(props){
    return <div className='navigator'>
        <button className='pagebutton' onClick={() => props.setCurrentPage('home')}>Home</button>
        <button className='pagebutton' onClick={() => props.setCurrentPage('ll')}>Livelihood</button>
        <button className='pagebutton' onClick={() => props.setCurrentPage('fs')}>Food Securtiy</button>
        <button className='pagebutton' onClick={() => props.setCurrentPage('cr')}>Crops</button>
        <button className='pagebutton' onClick={() => props.setCurrentPage('lstk')}>Livestock</button>
        <button className='pagebutton' onClick={() => props.setCurrentPage('incm')}>Off Farm Incomes</button>
    </div>
}