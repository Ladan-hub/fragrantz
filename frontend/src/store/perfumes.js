import { csrfFetch } from "./csrf";

// Action Type Variables
//initial load
const LOAD_PERFUMES = "perfumes/LOAD";
const LOAD_DETAIL = "perfume/DETAIL";

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

    default:
      return state;
  }
};

export default perfumeReducer;
