import React from "react";
import { MapContainer, TileLayer ,Pane , Circle,} from 'react-leaflet';


// Map => using react - leaflet ;)

const Map = ({cord1,cord2}) =>{

    
    return (
        <MapContainer center={[cord1, cord2]}
          zoom={0.5}
          scrollWheelZoom={true}
          style={{height:495,width:495}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Pane name="custom" style={{zindex:100}}>
            <Circle center={[cord1, cord2]} radius={2000} />
        </Pane >

        </MapContainer>

    )
}

export default Map;
