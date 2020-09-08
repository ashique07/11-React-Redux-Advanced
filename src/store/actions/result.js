import * as actionTypes from './actionTypes';

export const saveResult = result => {

    //Data Changing before updating state
    //const updatedResult = result * 2;

    return {
        type : actionTypes.STORE_RESULT,
        result: result
    };

};

//Asynchronous code / Accessing the server
export const storeResult = result => {

    return dispatch => {

        setTimeout(() => {

            dispatch(saveResult(result));

        }, 2000);

    };
};

export const deleteResult = resultElementId => {

    return {
        type : actionTypes.DELETE_RESULT,
        resultElementId: resultElementId
    }
};