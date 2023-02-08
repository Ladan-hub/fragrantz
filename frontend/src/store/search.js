import { csrfFetch } from "./csrf";

const LOAD_SEARCHED_PERFUMES = "searchedPerfumes/LOAD";

// AC for loading searched perfumes 
export const loadSearchedPerfumes = (perfumes) => {
    return {
      type: LOAD_SEARCHED_PERFUMES,
      perfumes
    }
  }

  // Thunk AC for fetching SEARCHED perfumes from the backend
export const loadSearchedPerfumesThunk = (perfumeToBeSearched) => async (dispatch) => {
    const response = await csrfFetch('/api/search/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(perfumeToBeSearched)
    })
    
    if (response.ok) {
      const perfumes = await response.json();
      dispatch(loadSearchedPerfumes(perfumes));
      return perfumes;
    }
  }

  const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_SEARCHED_PERFUMES : {
            const perfumesLoaded = {};
            action.perfumes.forEach((perfume) => {
              perfumesLoaded[perfume.id] = perfume;
            });
            return perfumesLoaded;
          }
          default: 
          return state;
    }
  }

  export default searchReducer;
