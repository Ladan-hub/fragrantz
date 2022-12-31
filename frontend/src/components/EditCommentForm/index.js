import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addComment } from "../../store/comments"
import { updateCommentThunk } from "../../store/comments"
import "./EditCommentForm.css"


const EditCommentForm = () => {
    // dispatch variable
    const dispatch = useDispatch();

    // history variable
    const history = useHistory();

    // logged in user
    const loggedInUser = useSelector(state => state.session.user)



    // grabbing the perfumeId from the URL 
    const {perfumeId} = useParams()

    // grabbing the commendId from the URL
    const {commentId} = useParams();

     // grabbing the comment from state
     const commentsObj = useSelector(state => state.comments);
     const oldComment = commentsObj[commentId]
    //  console.log("THIS IS THE OLD COMMENT", oldComment)
    

    // useStates
    const [comment, setComment] = useState(`${oldComment.comment}`);
    const [validationErrors, setValidationErrors] = useState([])

    // comment form submition event handler function 
    const editCommentSubmitted = (e) => {
        // e.preventDefault();

        const updatedComment = {
            id: commentId,
            userId: loggedInUser.id,
            perfumeId: perfumeId,
            comment
        }

        // dispatch the comment 
        dispatch(updateCommentThunk(updatedComment, commentId))
        reset();
    }

    const reset = () => {
        history.push(`/perfumes/${perfumeId}`)
    }

    //Form Validations 
    useEffect(() => {
        const errors = [];
        if (comment.length < 3) {
            errors.push("Comment must be at least 3 chatracters")
        }
        else if (comment.length > 255)  {
            errors.push("Comment must be less than 255 characters")
        }
        setValidationErrors(errors)
    }, [comment])



    return loggedInUser && (
        <div className="comment-div">
            <div className="error-message-container">
            <ul className="error-messages">
                {validationErrors.map((validationError) => (
                    <li key={validationError}>{validationError}</li>
                ))}
            </ul>
            </div>
            <form className="comment-form" onSubmit={editCommentSubmitted}>
                <textarea className="comment-field" value={comment} name="comment" onChange={(e) => setComment(e.target.value)}>
                </textarea>
                <button className="comment-submit-button" type="submit" disabled={validationErrors.length > 0}>Submit!</button>
            </form>

        </div>

    )
}

export default EditCommentForm;
