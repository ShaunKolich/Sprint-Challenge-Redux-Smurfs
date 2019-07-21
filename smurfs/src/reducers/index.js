/*
  Be sure to import in all of the action types from `../actions`

*/
import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILED,
  ADD_SMURF

} from '../actions'



//  Your initial/default state for this project could *Although does not have to* look a lot like this

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SMURF: {
      const { name, age, height, id } = action.payload;
      // state.smurfs.concat
      return {
        ...state,
        addingSmurf: true

      }
    }
    case GET_SMURF_START: {

      return {
        ...state,
        fetchingSmurfs: true,
      }
    }
    case GET_SMURF_SUCCESS: {
      const { name, age, height, id } = action.payload
      return {
        ...state,
        fetchingSmurfs: true,
        name,
        age,
        height,
        id

      }
    }
    case GET_SMURF_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    }

  }

}