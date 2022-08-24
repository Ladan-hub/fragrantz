import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchDetail } from "../../store/perfumes";
import { perfumeDelete } from "../../store/perfumes";
import { perfumeUpdate } from "../../store/perfumes";

import "./PerfumeDetail.css";



const PerfumeDetail = () => {
    const { perfumeId } = useParams();
    
  //useSelectors
  const logedInUser = useSelector(state => state.session.user);
  const perfumes = useSelector((state) => state.perfumes);
  const perfume = perfumes[+perfumeId];
  
  const history  = useHistory();


  // Thunk Action Dispatch with UseEffect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(perfumeId));
  }, [dispatch, perfumeId]);

  // delete button event handler 
  const deleteEventHandler = async () => {
    const deletedPerfume = await dispatch(perfumeDelete(perfume))
    if (deletedPerfume) {
      history.push('/')
    }
  }

  // edit button event handler 
  const editEventHandler = async () => {
    const editedPerfume = await dispatch(perfumeUpdate(perfume))
    if (perfume) {
      history.push('/perfumes/edit')
    }
  }



  return (
    <>
    <div>
        <h1>
            {perfume?.name}
        </h1>
        <img src={perfume?.perfumeImg} alt="perfume" />
        <div className="caption">{perfume?.name}</div>
        <div className="caption">{perfume?.brand}</div>
        <div className="caption">Perfumer: {perfume?.masterPerfumer}</div>
        <section className="delete-edit">
        {perfume?.userId === logedInUser?.id ? <button onClick={deleteEventHandler}>Delete Perfume</button> : null}
        {perfume?.userId === logedInUser?.id ? <button onClick={editEventHandler}>Edit Perfume</button> : null}
        </section>
    </div>
    </>
  )
};

export default PerfumeDetail;
