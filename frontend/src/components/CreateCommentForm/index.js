import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addComment } from "../../store/comments"
import "./CommentForm.css"


const CommentForm = () => {
    // dispatch variable
    const dispatch = useDispatch();

    // history variable
    const history = useHistory();

    // logged in user
    const loggedInUser = useSelector(state => state.session.user)

    // grabbing the perfumeId from the URL 
    const {perfumeId} = useParams()

    // useStates
    const [comment, setComment] = useState('');
    const [validationErrors, setValidationErrors] = useState([])

    // comment form submition event handler function 
    const commentSubmitted = (e) => {
        e.preventDefault();

        const userComment = {
            userId: loggedInUser.id,
            perfumeId: perfumeId,
            comment
        }

        // dispatch the comment 
        dispatch(addComment(userComment))
        reset();
        setComment('');
    }

    const reset = () => {
        history.push(`/perfumes/${perfumeId}`)
    }

    // Form Validations 
    useEffect(() => {
        const errors = [];
        if (comment === "") {
            errors.push("")
          }
        else if (comment.length < 3) {
            errors.push("Comment must be at least 3 chatracters")
        }
        else if (comment.length > 255)  {
            errors.push("Comment must be less than 255 characters")
        }
        setValidationErrors(errors)
    }, [comment])



    return loggedInUser && (
        <div className="comment-div">
            <span class="error-message-container">
            <ul className="error-messages">
                {validationErrors.map((validationError) => (
                    <li key={validationError}>{validationError}</li>
                ))}
            </ul>
            </span>
            <form className="comment-form" onSubmit={commentSubmitted}>
                <textarea className="comment-field" value={comment} name="comment" onChange={(e) => setComment(e.target.value)}>
                </textarea>
                <button className="comment-submit-button" type="submit" disabled={validationErrors.length > 0}>Submit</button>
            </form>

        </div>

    )
}

export default CommentForm;
