import React from "react";
import {useState,useEffect,useRef} from 'react';


import BirdFullCard from "./BirdFullCard";
import './App.css'

const API_URL = 'https://zapari.any.do/birds/20'


const App = () => {

  const [isBird , setIsBirds]= useState(false);

  const [birds , setBirds] = useState([]);
  const [showBird , setShowBird] = useState([])
  const [cord1 ,Setcord1] = useState(0);
  const [cord2 ,Setcord2] = useState(0);

  const ref = useRef(null);


  // fetching 20 birds from the API and adding them to the list.
  // we are adding so when we keep scrolling we will see all the birds results.
  const searchBirds = async (title) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setBirds(oldBirds => [...oldBirds , ...data.items])

  };
  // saving the bird that we want to show.
  const showFullBird = async (bird) =>{
    setShowBird(bird)
    setIsBirds(true);
    const cor1 = await bird.location.lat;
    const cor2 = await bird.location.lng;
    Setcord1(cor1)
    Setcord2(cor2)



}



  // searchBirds when page loads
  // handleScroll we we getting to the bottem of the scorlling component
  useEffect(() => {
    searchBirds()
    const handleScroll = (e) =>{

      if (window.innerHeight + element.scrollTop + 300> element.scrollHeight)
      {
        searchBirds()
      }
    }
    const element = ref.current;

    element.addEventListener('scroll', handleScroll);
  }, [] );




  return (
    <div className="app">
      <h1>Birds For The Win</h1>
      <div className="mainApp">
      <div className="bird">

      </div>

      <div className="scroll-left"  ref={ref}>
        <span>
          <ul>
          {/* if and else statment */}
          { 
          birds?.length > 0 
           ? (
            <div className="container">
            {birds.map((bird) =>
                  <div className="bird">
                  <div>
                      <img
                        // with there is an Error with the image we will load this image instead 
                        onError={(event) => event.target.src = 'https://pbs.twimg.com/media/DBwQkYbWAAAiFQr.jpg'}
                        src={bird.image !== 'N/A' ? bird.image : 'https://via.placeholder.com/400'}
                        alt={bird.name}
                        onClick ={() => showFullBird(bird)}
                        />
                  </div>
                  <div>
                      <h3>{bird.name}</h3>
                  </div>
                  <br/>
              </div>
              )}
          </div>
          
           ) : 
           (
             <div className="empty">
              <h3>
                Loading...
              </h3>
             </div>
           )
         }
        
          </ul>
        </span>
      </div>

      <div className="center" >
        {/* if and else statment */}
        {
          isBird
          ? (
            <BirdFullCard bird={showBird} cord1={cord1} cord2 ={cord2}/>

          ):
          (
            <div className="empty">
             <h2>
               Nothing to show yet!
             </h2>
            </div>
          )
        }
      </div>
      </div>
    </div>
  )
}

export default App;

