import { csrfFetch } from "./csrf";
import perfumeReducer from "./perfumes";


// Action Type Variables
const CREATE = "comments/CREATE";
const READ = "comments/READ";
const UPDATE = "comments/UPDATE";
const DELETE = "comments/DELETE";


// -- AC -- 

// AC => CREATE
export const createComment = (comment) => {
    return {
        type: CREATE,
        comment
    }
}

// AC => READ
export const readComments = (comments) => {
    return {
        type: READ,
        comments
    }
}

// AC => UPDATE
export const updateCommentAction = (comment) => {
    return {
        type: UPDATE,
        comment
    }
}

// AC => DELETE
export const deleteComment = (comment) => {
    return {
        type: DELETE,
        comment
    }
}



// -- THUNK -- 

// THUNK => CREATE 

export const addComment = (comment) => async dispatch => {
    const response = await csrfFetch (`/api/comments/${comment.perfumeId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const comment = await response.json();
        dispatch(createComment(comment));
        return comment
    }
}

// THUNK => READ 
export const commentsRead = (perfumeId) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${perfumeId}`)
    if (response.ok) {
        const comments = await response.json();
// console.log(comments)
        dispatch(readComments(comments));
        return comments;
    }
};

// THUNK => UPDATE

export const updateCommentThunk = (updatedComment, commentId) => async(dispatch) => {
    const response = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedComment)
    })
    if (response.ok) {
        const comment = await response.json();
        dispatch(updateCommentAction(comment));
        return comment
    }
}

// THUNK  => DELETE
export const commentDelete = (id) => async dispatch => {
    const response = await csrfFetch(`/api/comments/delete`, {
        method: 'DELETE',
        body: JSON.stringify({id})
    })
    if (response.ok) {
        const deletedComment = await response.json();
        dispatch(deleteComment(deletedComment))
        return deletedComment;
    }
}

// -- REDUCER --

const commentReducer = (state = {}, action) => {
    switch(action.type) {
        case READ: {
            const commentsLoaded = {};
            action.comments.forEach((comment) => {
                commentsLoaded[comment.id] = comment;
            });
            return commentsLoaded;
        }
        case CREATE: {
            return {...state, [action.comment.id]: action.comment}
        }

        case UPDATE: {
            const newState = {...state};
            newState[action.comment.id] = action.comment;
            return newState;
        }

        case DELETE: {
            const newState = {...state};
            delete newState[action.comment.id];
            return newState;
        }
        default: 
        return state;
    }
};

export default commentReducer;
