import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import counterReducer from '../reducers/counterSlice';
import layoutReducer from '../reducers/layoutSlice';
import cardListSlice from '../reducers/cardListSlice';


export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    content: cardListSlice,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch