import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { fetchPerfumes } from "../../store/perfumes";
import pic from "../../context/edoardo-cuoghi-7uQWuGsVrHg-unsplash.jpg"
import "./Perfumes.css"



const Perfumes = () => {
    // Thunk Action Dispatch with UseEffect
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPerfumes())
    }, [dispatch])

    // UseSelectors
    const perfumes = useSelector(state => Object.values(state.perfumes))
    const logedInUser = useSelector(state => state.session.user);
    

    
    const history = useHistory()
    // const perfumeId = perfumes.map((perfume) => perfume.id )
    // // On click event handler function
    // const perfumeClicked = () => {
    //     history.push(`/perfumes/${perfumeId}`)
    // }


    // if the user is logged in:
    
        return (
           <>
           <section className="menu-picture">
           <div className="picture-container">
                        <img className="picture" src={pic} />
                    </div>
            <div className="menu-items">
            <div className="menu-navlink-container">
                       <NavLink className="menu-navlink" to="/">Woody</NavLink>
                       </div>
                       <div className="menu-navlink-container">
                       <NavLink className="menu-navlink" to="/">Citrus</NavLink>
                       </div>
                       
                       <div className="menu-navlink-container">
                       <NavLink className="menu-navlink" to="/">Floral</NavLink>
                       </div>
                       <div className="menu-navlink-container">
                       <NavLink className="menu-navlink" to="/">Leather</NavLink>
                       </div>
                       <div className="menu-navlink-container">
                       <NavLink className="menu-navlink" to="/">Aquatic</NavLink>
                       </div>
                       <div className="menu-navlink-container">
                       <NavLink className="menu-navlink" to="/">Gourmand</NavLink>
                       </div>
                    </div>
                    
            </section>
            
                 
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

export default Perfumes; 

