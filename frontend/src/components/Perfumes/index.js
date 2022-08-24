import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPerfumes } from "../../store/perfumes";
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
            <div>
                <h1 className="greeting-message">Enjoy Browsing the Perfumes!</h1>
                <section className="all-perfumes">
                    {perfumes.map((perfume) => (
                        <span className="container">
                        <img onClick={() => history.push(`/perfumes/${perfume.id}`)}
                        className="perfume-image" key={perfume.id} src={perfume.perfumeImg} alt="This is the perfume"
                        /> 
                        </span>
                    ))}

                </section>
            </div>
        )

    }

export default Perfumes; 

