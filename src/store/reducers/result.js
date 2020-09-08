import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {

    results : []

}

const deleteResult = (state, action) => {

    const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
            
    return updateObject(state,  {results: updatedArray});  
}

const reducer = (state = initialState, action) => 
{
    console.log('[RESULT REDUCER]', action);

    switch(action.type) {
        
        case actionTypes.STORE_RESULT:

            return updateObject(state,{results: state.results.concat({id: new Date(), value: action.result * 2})});
            //Data changing before updating state

        case actionTypes.DELETE_RESULT:

            return deleteResult(state,action);
    }

    return state;
}

export default reducer;