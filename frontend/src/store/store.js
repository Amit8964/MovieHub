import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
user:userReducer
})


const persistConfig = {
    key: 'root',
    storage,
  };
  


  const persistedReducer = persistReducer(persistConfig, rootReducer);




export const store = configureStore({  
    reducer:persistedReducer
})

export const persistor = persistStore(store);