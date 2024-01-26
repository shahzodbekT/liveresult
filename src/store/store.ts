import { configureStore } from "@reduxjs/toolkit";
import { matchApi } from "./Api/matchApi";

export const store = configureStore({
  reducer: {
    matchApi: matchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(matchApi.middleware as any), // Use 'as any' to override type mismatch
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;