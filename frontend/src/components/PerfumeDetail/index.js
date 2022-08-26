import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { commentsRead } from "../../store/comments";
import { fetchDetail } from "../../store/perfumes";
import { perfumeDelete } from "../../store/perfumes";
import { perfumeUpdate } from "../../store/perfumes";
import Comment from "../Comment";

import "./PerfumeDetail.css";



const PerfumeDetail = () => {
    const { perfumeId } = useParams();
    
  //useSelectors
  const logedInUser = useSelector(state => state.session.user);
  const perfumes = useSelector((state) => state.perfumes);
  const perfume = perfumes[+perfumeId];
  const comments = useSelector(state => Object.values(state.comments))
  //console.log(comments)
  const history  = useHistory();


  // Thunk Action Dispatch for READing perfumes
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(perfumeId));
  }, [dispatch, perfumeId]);

  // Thunk Action Dispatch for READing comments
  useEffect(() => {
    dispatch(commentsRead(perfumeId))
  }, [dispatch, perfumeId])


  // DELETE button event handler 
  const deleteEventHandler = async () => {
    const deletedPerfume = await dispatch(perfumeDelete(perfume))
    if (deletedPerfume) {
      history.push('/')
    }
  }

  // UPDATE button event handler (when you click in this button, you will be redirected to the edit form)
  const editEventHandler = () => {
    //const editedPerfume = await dispatch(perfumeUpdate(perfume))
    if (perfume) {
      history.push(`/perfumes/${perfumeId}/edit`)
    }
  }

  // comment button event handler (when you click in this button, you will be redirected to the comment form)
  const commentEventHandler = () => {
    if (perfume) {
      history.push(`/perfumes/${perfumeId}/comment`)
    }
  }

  //let targetComment = comments.filter(comment=> comment.perfumeId === Number(perfumeId))

  //console.log(targetComment);



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
        {logedInUser? <button onClick={commentEventHandler}>Write Comment</button> : null}
        </section>
        <section className="all-comments">
          <Comment />
        </section>
    </div>
    </>
  )
};

export default PerfumeDetail;
