import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';

//Provider is component allows us to INJECT STORE into React COMPONENTS
//createStore is a function
//reducer is a function
//thunk is a Middleware function that blocks old action and dispatches it in future. Reducer function gets action after some time.
//thunk allows action creators (methods) to not return a ACTION JS OBJECT but a FUNCTION with dispatch({action})

const rootReducer = combineReducers({

    ctr : counterReducer,
    res : resultReducer

});

//A redux method will execute Middleware function and give us store
const logger = store => {

    return next => {

        return action => {

            console.log("[Middleware] Dispatching", action);

            const result = next(action);
            //SENDING ACTION TO REDUCER

            console.log('[Middleware] next state ', store.getState());

            return result;
        }

    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();