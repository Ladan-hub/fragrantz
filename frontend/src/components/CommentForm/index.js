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

    }

    const reset = () => {
        setComment('');
        history.push(`/perfumes/${perfumeId}`)
    }

    // Form Validations 
    useEffect(() => {
        const errors = [];
        if (comment.length < 3) {
            errors.push("Comment must be at least 3 chatracters")
        }
        setValidationErrors(errors)
    }, [comment])



    return loggedInUser && (
        <div className="comment-div">
            <h1>Write your Comment!</h1>
            <ul className="error-messages">
                {validationErrors.map((validationError) => (
                    <li key={validationError}>{validationError}</li>
                ))}
            </ul>
            <form onSubmit={commentSubmitted}>
                <textarea value={comment} name="comment" onChange={(e) => setComment(e.target.value)}>
                </textarea>
                <button type="submit">Submit!</button>
            </form>

        </div>

    )
}

export default CommentForm;
