import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchDetail } from "../../store/perfumes";
import { perfumeDelete } from "../../store/perfumes";

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

  const deleteEventHandler = () => {
    dispatch(perfumeDelete(perfume))
    history.push('/')
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
        </section>
    </div>
    </>
  )
};

export default PerfumeDetail;
