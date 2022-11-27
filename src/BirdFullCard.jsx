import React from "react";
import './BirdFullCard.css'
import Map from './Map';



const BirdFullCard = ({bird,cord1,cord2}) =>{


    const playSound = (sound) =>{
        new Audio(sound).play();
    }

    return (
        <table>
        <div className="birdFull">
            <tr>
                <td>
            <div className="birdFull-left" >
                <div>
                    <img src={bird.image !== 'N/A' ? bird.image : 'https://via.placeholder.com/400'}
                    alt={bird.name}
                    resizeMode='contain'
                    onError={(event) => event.target.src = 'https://pbs.twimg.com/media/DBwQkYbWAAAiFQr.jpg'}
                    />
                </div>

                <div>
                    <h3>{bird.name}</h3>
                </div>            

                <div>
                    <button onClick={() =>playSound(bird.sound)}>
                        <b>Play Sound</b>
                    </button>
                </div>
            </div>
                <br/>
                </td>
                <td>
            <div className="birdFull-right">

                <Map cord1={cord1} cord2={cord2}></Map>
            </div>
            </td>
            </tr>  
        </div>
        </table>

    )
}

export default BirdFullCard;
