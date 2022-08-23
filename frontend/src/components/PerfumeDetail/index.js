import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchDetail } from "../../store/perfumes";

import "./PerfumeDetail.css";

const PerfumeDetail = () => {
    const { perfumeId } = useParams();
  //useSelectors
  const perfumes = useSelector((state) => state.perfumes);
  const perfume = perfumes[+perfumeId];

  const sanityCheck = () => {
    console.log(perfumeId);
    console.log(perfume);
  }
  

  // Thunk Action Dispatch with UseEffect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(perfumeId));
  }, [dispatch, perfumeId]);



  return (
    <div>
        <h1>
            {perfume?.name}
        </h1>
        <button onClick={sanityCheck}>
            
        </button>
    </div>
  )
};

export default PerfumeDetail;
