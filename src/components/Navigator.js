// React-Bootstrap
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/Button";
import {Nav} from "react-bootstrap";

export default function Navigator(props){
    return <div>
        {/*<ButtonToolbar className="custom-btn-toolbar">*/}
        {/*    <ButtonGroup>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('home')}>Home</Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('ll')}>Livelihood</Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('fs')}>Food Security</Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('cr')}>Crops</Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('lstk')}>Livestock</Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('incm')}>Off Farm Incomes</Button>*/}
        {/*    </ButtonGroup>*/}
        {/*</ButtonToolbar>*/}
        <Nav justify>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentPage('home')}><div className='navFont'>Home</div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentPage('ll')}><div className='navFont'>Livelihood</div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentPage('fs')}><div className='navFont'>Food Security</div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentPage('cr')}><div className='navFont'>Crops</div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentPage('lstk')}><div className='navFont'>Livestock</div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentPage('incm')}><div className='navFont'>Off Farm Incomes</div></Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
}