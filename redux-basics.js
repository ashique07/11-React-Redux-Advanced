const redux = require ('redux');

const createStore = redux.createStore;

initialState = {
    counter : 0
}

//REDUCER == 2
const rootReducer = (state = initialState, action) => {

    if(action.type === 'INC_COUNTER')
    {
        return {

            ...state,
            counter: state.counter + 1
        }

    }

    if(action.type === 'ADD_COUNTER')
    {
        return {
            ...state,
            counter: state.counter + action.value
        }

    }

    return state;
}

//STORE == 3
const store = createStore(rootReducer);

console.log(store.getState());

//SUBSCRIPTION = PROTITA ACTION DISPATCH KORAR POR SUBCRIBE KORE DIBE == 4
store.subscribe(() => {

    console.log("[SUBSCRIPTION]", store.getState());
});

//DISPATCHING ACTIONS == 1
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState());