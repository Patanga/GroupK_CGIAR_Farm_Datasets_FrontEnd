// React-Bootstrap
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/Button";
import {Nav} from "react-bootstrap";

export default function Navigator(props){
    return <div>
        {/*<ButtonToolbar className="custom-btn-toolbar">*/}
        {/*    <ButtonGroup fill className="justify-content-center">*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('home')}><div className='navFont'>Home</div></Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('ll')}><div className='navFont'>Livelihood</div></Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('fs')}><div className='navFont'>Food Security</div></Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('cr')}><div className='navFont'>Crops</div></Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('lstk')}><div className='navFont'>Livestock</div></Button>*/}
        {/*        <Button variant="outline-dark" onClick={() => props.setCurrentPage('incm')}><div className='navFont'>Off Farm Incomes</div></Button>*/}
        {/*    </ButtonGroup>*/}
        {/*</ButtonToolbar>*/}
        <Nav variant="pills" defaultActiveKey="/home" className="justify-content-center" fill>
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