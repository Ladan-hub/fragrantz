import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { commentDelete } from "../../store/comments";
import { useHistory } from "react-router-dom";
import './Comment.css'
import EditCommentForm from "../EditCommentForm";


const Comment = () => {

    const { perfumeId } = useParams();
    // useSelectors
    const perfumes = useSelector((state) => state.perfumes);
    const perfume = perfumes[perfumeId];
    const allPerfumeComments = useSelector(state =>state.comments)
    const commentsArr = Object.values(allPerfumeComments)
    // console.log(commentsArr)
    const logedInUser = useSelector(state => state.session.user);
    //let allPerfumeComments = comments.filter(comment=> comment.perfumeId === Number(perfumeId))
    // console.log("All perfume comments", commentsArr)
    // TO-DO: make sure targetComment is as specific as possible which comment as which user

    const history = useHistory()
    const dispatch = useDispatch();
    // event handler for delete button

    
    const deleteComment = async (id) => {
      const deleteComment = await dispatch(commentDelete(id));
      if (deleteComment) {
        history.push(`/perfumes/${perfumeId}`)
      }
    }

    const editComment = async (commentId) => {
      history.push(`/perfumes/${perfumeId}/comments/${commentId}/edit`)
    }


  return (
    <div>
      <h2 className="comment-label">Comments</h2>
      {commentsArr.map((comment) => (
        <div className="one-comment">{comment.comment}
        {comment?.userId === logedInUser?.id ? <button className="delete-comment-button" onClick={() => deleteComment(comment.id)}>Delete Comment</button> : null}
        
        {comment?.userId === logedInUser?.id ? <button className="delete-comment-button" onClick={() => editComment(comment.id)}>Edit Comment</button> : null} 
        
        </div>
      ))}
    </div>
  );
};

export default Comment;
