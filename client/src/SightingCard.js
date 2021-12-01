import { useState } from "react";
import { deleteSighting, updateSighting} from "./SightingService"



const SightingCard = ({sighting, removeSighting, updateBirdSighting}) => {

    const [sightingActive,setSightingActive]=useState(sighting);

    console.log(sightingActive);
    
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })};

    const handleUpdate = () => {
        delete sightingActive['_id'];
        updateSighting(sighting._id, sightingActive);
        updateBirdSighting(sighting._id)
        }

    const onDateChange = (e)=>{
       setSightingActive({
           ...sightingActive,
           date : e.target.value
       });
    }
    const onLocationChange = (e)=>{
        setSightingActive({
            ...sightingActive,
            location : e.target.value
        });
     }

     const onSpeciesChange = (e)=>{
        setSightingActive({
            ...sightingActive,
            species : e.target.value
        });
     }

    return (
        <>
        <ul>
            <li>
            <label htmlFor="species"><b>Species</b></label>
            <input onChange={onSpeciesChange} defaultValue={sighting.species} type="text" id="species"  />
            <br></br>
            <label htmlFor="location">location:</label>
            <input onChange={onLocationChange} defaultValue={sighting.location} type="text" id="location"  />
            <br></br>
            <label htmlFor="date">Date:</label>
            <input onChange={onDateChange} defaultValue={sighting.date} type="text" id="date"  />
            <br></br>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleUpdate}> Update </button>
            </li>
         </ul>

        </>
    )
}

export default SightingCard;