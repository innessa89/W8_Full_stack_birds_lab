import SightingCard from "./SightingCard";
const SightingsGrid = ({sightings, removeSighting, updateBirdSighting }) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} updateBirdSighting={updateBirdSighting} />
    });
    
    return (
        <>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;