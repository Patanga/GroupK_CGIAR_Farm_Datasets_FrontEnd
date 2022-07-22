// React-Bootstrap
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/Button";

export default function Navigator(props){
    return <div>
        <ButtonToolbar className="custom-btn-toolbar">
            <ButtonGroup>
                <Button variant="outline-dark" onClick={() => props.setCurrentPage('home')}>Home</Button>
                <Button variant="outline-dark" onClick={() => props.setCurrentPage('ll')}>Livelihood</Button>
                <Button variant="outline-dark" onClick={() => props.setCurrentPage('fs')}>Food Security</Button>
                <Button variant="outline-dark" onClick={() => props.setCurrentPage('cr')}>Crops</Button>
                <Button variant="outline-dark" onClick={() => props.setCurrentPage('lstk')}>Livestock</Button>
                <Button variant="outline-dark" onClick={() => props.setCurrentPage('incm')}>Off Farm Incomes</Button>
            </ButtonGroup>
        </ButtonToolbar>
    </div>
}