import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/lib/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';


const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['currentUser', 'selectedJournals']
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(
  persistedReducer, composeEnhancers(
    applyMiddleware(...middleware)
  ));

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   
        <App />
       
    </PersistGate>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();