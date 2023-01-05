import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CartSlice from './cart/cartSlice';
import SearchSlice  from './search/searchSlice';

const rootReducer = combineReducers({
    CartSlice, SearchSlice
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['SearchSlice']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})


export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;