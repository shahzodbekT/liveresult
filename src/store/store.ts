import { configureStore } from "@reduxjs/toolkit";
import { matchApi } from "./Api/matchApi";

export const store = configureStore({
  reducer: {
    [matchApi.reducerPath]: matchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(matchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
