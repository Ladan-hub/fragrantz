import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const SeachResults = () => {

    const perfumes = useSelector(state => Object.values(state.perfumes));
    console.log("THIS IS THE PERFUME THAT HAS BEEN SEARCHED", perfumes)

    const history = useHistory();
    return (
        <>
         
             <main className="all-perfumes-container">
                
                 {perfumes.map((perfume) => (
                     <main className="perfumes-container" key={perfume.id}>
                       <div className="perfume-image-container">
                     <img onClick={() => history.push(`/perfumes/${perfume.id}`)} className="perfume-image" key={perfume.id} src={perfume.perfumeImg} alt="This is the perfume" onError={event => {event.target.src = "https://library.tamu.edu/discovery/resources/images/default-thumbnail.jpg"}}/> 
                     </div> 
                     </main> 
                     
                 ))}
                 
             </main>
    
         </>
        
     )
}

export default SeachResults;


