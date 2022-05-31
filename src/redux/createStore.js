
import { applyMiddleware, createStore } from 'redux'
import logger from "redux-logger";

import rootReducer from "./rootReducer";

export const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;











// import { createBrowserHistory, History } from "history";
// import { configureStore } from "@reduxjs/toolkit";
// import {
// 	routerMiddleware,
// 	connectRouter,
// 	RouterState,
// } from "connected-react-router";
// import userReducer from "./User/user.reducer";

// export const history = createBrowserHistory();

// // combineReducers will be handled internally by configureStore
// const rootReducer = (history) => ({
// 	user: userReducer,
	
// });

// const preloadedState = {};
// const store = configureStore({
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(routerMiddleware(history)),
// 	reducer: rootReducer(history),

// 	preloadedState,
// });

// export default store;