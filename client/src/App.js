import { useState, useEffect } from "react";
import './App.css';
import SightingsForm from "./SightingsForm";
import SightingsGrid from "./SightingsGrid";
import { getSightings, updateSighting } from "./SightingService";

function App() {

  const [birdSightings, setBirdSightings] = useState([]);

  useEffect(()=>{
    getSightings().then((allSightings)=>{
      setBirdSightings(allSightings);
    })
  }, []);

  const addSighting = (sighting) =>{
    const temp = birdSightings.map(s =>s);
    temp.push(sighting);
    setBirdSightings(temp);
  }

  const removeSighting = (id) => {
    const temp = birdSightings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBirdSightings(temp);
  }

  const updateBirdSighting=(id)=>{
    const updatedSighting=birdSightings.map(bird=>bird);
    const indexToUpdate=updatedSighting.map(bird=>bird._id).indexOf(id);
    // console.log(updatedSighting[indexToUpdate]);
    // updatedSighting[indexToUpdate].species="Crow";
    // setBirdSightings(updatedSighting)
    updateSighting(indexToUpdate)
  }

  return (
    <>
      <SightingsForm addSighting={addSighting}/>
      <SightingsGrid sightings={birdSightings} removeSighting={removeSighting} updateBirdSighting={updateBirdSighting}/>
      
    </>
  );
}

export default App;
