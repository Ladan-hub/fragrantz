import { csrfFetch } from "./csrf";

// Action Type Variables

const LOAD_PERFUMES = "perfumes/LOAD";
const LOAD_DETAIL = "perfume/DETAIL";
const CREATE = "perfume/CREATE";
const DELETE = "perfume/DELETE";
const UPDATE = "perfume/UPDATE"

// ACs:

// AC for loading perfumes
export const loadPerfumes = (perfumes) => {
  return {
    type: LOAD_PERFUMES,
    perfumes,
  };
};

// AC for loading the perfume detail
export const loadDetail = (perfume) => {
  return {
    type: LOAD_DETAIL,
    perfume,
  };
};

// AC for CREATE 
export const createPerfume = (perfume) => {
  return {
      type: CREATE,
      perfume
  }
}

// AC for UPDATE (updatePerfume)
export const updatePerfume = (perfume) => {
  return {
    type: UPDATE,
    perfume
  }
}

// AC for DELETE (deletePerfume)

export const deletePerfume = (perfumeId) => {
  return {
    type: DELETE,
    perfumeId
  }
}


// THUNK ACs:

// Thunk AC for fetching all perfumes from the backend database
export const fetchPerfumes = () => async (dispatch) => {
  const response = await csrfFetch("/api/perfumes/");
  if (response.ok) {
    const perfumes = await response.json();
    dispatch(loadPerfumes(perfumes));
    return perfumes;
  }
};

// Thunk AC for fetching one perfume from the backend database
export const fetchDetail = (perfumeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/perfumes/${perfumeId}`);
  if (response.ok) {
    const perfume = await response.json();
    dispatch(loadDetail(perfume));
    return perfume;
  }
};

// Thunk AC CREATE
export const addPerfume = (perfume) => async dispatch => {
  const response = await csrfFetch ('/api/perfumes', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(perfume)
  })
  if (response.ok) {
    const perfume = await response.json();
    dispatch(createPerfume(perfume));
    return perfume;
  };
};

// Thunk AC UPDATE 
export const perfumeUpdate = (perfume) => async dispatch => {
  
  const response = await csrfFetch (`/api/perfumes/${perfume.id}`, {
    method: "PUT",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(perfume)
  })
  if (response.ok) {
    const perfume = await response.json();
    //console.log(perfume)
    dispatch(updatePerfume(perfume));
    return perfume;
  }
}

// Thunk AC DELETE (perfumeDelete)

export const perfumeDelete = (perfume) => async dispatch => {
  const response = await csrfFetch('/api/perfumes/delete', {
    method: 'DELETE',
    body: JSON.stringify(perfume)
  })
  if (response.ok) {
    const deletedPerfume = await response.json();
    dispatch(deletePerfume(deletedPerfume.id))
    return deletedPerfume;
  }
}




//Reducer
const perfumeReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PERFUMES: {
      const perfumesLoaded = {};
      action.perfumes.forEach((perfume) => {
        perfumesLoaded[perfume.id] = perfume;
      });
      return perfumesLoaded;
    }
    case LOAD_DETAIL: {
      const detailLoaded = {...state};
      detailLoaded[action.perfume.id] = action.perfume;
      return detailLoaded; 
    }
    case CREATE: {
      // const newState = {...state};
      // newState[action.perfume.id] = action.perfume
      // return newState;
      return { ...state, [action.perfume.id]: action.perfume}
    }
    case UPDATE: {
      const newState = {...state};
      newState[action.perfume.id] = action.perfume
    }
    case DELETE: {
      const newState = {...state};
      delete newState[action.perfumeId]
      return newState;

    }

    default:
      return state;
  }
};

export default perfumeReducer;
