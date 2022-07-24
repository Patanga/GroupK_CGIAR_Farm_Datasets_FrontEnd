import { useState, useEffect } from "react"
import { getMapData } from "../calculators/home";
import { renderMapTile, updateMap } from '../plotOptions/Home/map'

import "leaflet/dist/leaflet.css";
import Alert from "react-bootstrap/Alert";

export default function Home(props) {
    const [mapData, setMapData] = useState([]);

    useEffect(() => {
        const setOptions = async () => {
            setMapData(await getMapData(props.data));
        }
        setOptions();
    }, [props.data])

    useEffect(() => {
        renderMapTile();
    }, [])

    useEffect(() => {
        const reRenderMap = async () => {
            updateMap(mapData);
        }
        if (mapData.length > 0) {
            reRenderMap();
        }
    }, [mapData])

    return <div>
        <Alert key='dark' className='dataLength'>
            Records: {mapData.length}
        </Alert>
        <div id="map" className="map-container"></div>
    </div>
}