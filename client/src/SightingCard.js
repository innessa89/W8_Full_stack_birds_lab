import { deleteSighting, updateSighting} from "./SightingService"



const SightingCard = ({sighting, removeSighting, updateBirdSighting}) => {

    console.log(sighting);
    
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })};

    const handleUpdate = () => {
        updateSighting(sighting._id).then(()=>{
            updateBirdSighting(sighting._id);
        })}


    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleUpdate}> Update </button>

            <hr></hr>


        </>
    )
}

export default SightingCard;