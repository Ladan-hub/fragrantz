import { csrfFetch } from "./csrf";
import perfumeReducer from "./perfumes";


// Action Type Variables
const READ = "comments/READ";
const CREATE = "comments/CREATE";
const DELETE = "comments/DELETE";


// AC => READ
export const readComments = (comments) => {
    return {
        type: READ,
        comments
    }
}
// AC => CREATE
export const createComment = (comment) => {
    return {
        type: CREATE,
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

// THUNK AC => READ 
export const commentsRead = (perfumeId) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${perfumeId}`)
    if (response.ok) {
        const comments = await response.json();
// console.log(comments)
        dispatch(readComments(comments));
        return comments;
    }
};

// THUNK AC => CREATE 

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

// THUNK AC => DELETE
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

// REDUCER 

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
