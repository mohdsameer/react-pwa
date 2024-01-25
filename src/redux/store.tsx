import { configureStore } from '@reduxjs/toolkit';
import applicationReducer from './reducer/applicationSlice';
import storage from 'redux-persist/lib/storage';
import themeReducer from './reducer/themeSlice';
import { 
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, themeReducer)

export const store = configureStore({
  reducer: {
    appData: applicationReducer,
    mode: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }
  ),
})

export const presistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
