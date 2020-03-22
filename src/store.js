import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import expensesListReducer from 'pages/Dashboard/behavior';
import notificationsReducer from 'containers/AppHeader/behavior';
import logger from 'middleware/loggerMiddleware'

import thunk from 'redux-thunk';

const node1reducer = combineReducers({
    expensesList: expensesListReducer,
    notifications: notificationsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(node1reducer,
    composeEnhancers(
        applyMiddleware(thunk, logger))
);