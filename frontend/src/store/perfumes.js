import { csrfFetch } from "./csrf";

// Action Type Variables

const LOAD_PERFUMES = "perfumes/LOAD";
const LOAD_DETAIL = "perfume/DETAIL";
const CREATE = "perfume/CREATE";

// ACTION CREATORS:

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


// THUNK ACTION CREATORS:

// Thunk AC for fetching perfumes from the backend database
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

// Thunk AC for sending CREATE data to the db
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

    default:
      return state;
  }
};

export default perfumeReducer;
