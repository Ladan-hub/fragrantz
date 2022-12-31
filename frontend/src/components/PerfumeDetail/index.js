import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { commentsRead } from "../../store/comments";
import { fetchDetail } from "../../store/perfumes";
import { perfumeDelete } from "../../store/perfumes";
import { perfumeUpdate } from "../../store/perfumes";
import Comment from "../Comment";
import CommentForm from "../CreateCommentForm";

import "./PerfumeDetail.css";

const PerfumeDetail = () => {
  const { perfumeId } = useParams();

  //useSelectors
  const logedInUser = useSelector((state) => state.session.user);
  const perfumes = useSelector((state) => state.perfumes);
  const perfume = perfumes[+perfumeId];
  const comments = useSelector((state) => Object.values(state.comments));
  //console.log(comments)
  const history = useHistory();

  // Thunk Action Dispatch for READing perfumes
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(perfumeId));
  }, [dispatch, perfumeId]);

  // Thunk Action Dispatch for READing comments
  useEffect(() => {
    dispatch(commentsRead(perfumeId));
  }, [dispatch, perfumeId]);

  // DELETE button event handler
  const deleteEventHandler = async () => {
    const deletedPerfume = await dispatch(perfumeDelete(perfume));
    if (deletedPerfume) {
      history.push("/");
    }
  };

  // UPDATE button event handler (when you click in this button, you will be redirected to the edit form)
  const editEventHandler = () => {
    //const editedPerfume = await dispatch(perfumeUpdate(perfume))
    if (perfume) {
      history.push(`/perfumes/${perfumeId}/edit`);
    }
  };

  // comment button event handler (when you click in this button, you will be redirected to the comment form)
  const commentEventHandler = () => {
    if (perfume) {
      history.push(`/perfumes/${perfumeId}/comment`);
    }
  };

  //let targetComment = comments.filter(comment=> comment.perfumeId === Number(perfumeId))

  //console.log(targetComment);

  return (
    <>
     
        <section className="img-and-info">
           {/* <div className="perfume-info-container"> */}
          <div className="caption-container">
        <h2 className="caption-name">{perfume?.name}</h2>
        <h2 className="caption-brand">{perfume?.brand}</h2>
        <h2 className="caption-perfumer">Perfumer: {perfume?.masterPerfumer}</h2>
        <p className="description">{perfume?.description}</p>
        </div>
        
          
        
        
          <div className="perfume-img-container">
          <img className="perfume-img" src={perfume?.perfumeImg} alt="perfume" />
          </div>
        {/* <h1 className="perfume-name">{perfume?.name}</h1> */}
       
        {/* </div> */}
        </section>




        <span className="delete-edit">
          {perfume?.userId === logedInUser?.id ? (
            <button className="delete-perfume" onClick={deleteEventHandler}>
              Delete Perfume
            </button>
          ) : null}
          {perfume?.userId === logedInUser?.id ? (
            <button className="edit-perfume" onClick={editEventHandler}>
              Edit Perfume
            </button>
          ) : null}
          </span>
          {/* {logedInUser? <button className="write-comment-button" onClick={commentEventHandler}>Write Comment</button> : null} */}
          
          {logedInUser ?<h2 className="add-comment-msg">Add Comment</h2>: null}
  
          {logedInUser ? <CommentForm /> : null}
        
        <section className="all-comments">
          <Comment />
        </section>
    </>
  );
};

export default PerfumeDetail;
