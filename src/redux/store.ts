import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { menuApi } from "./services/menuApi";

export const store = configureStore({
    reducer: { 
        counterReducer,
        [userApi.reducerPath]: userApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([userApi.middleware]).concat([menuApi.middleware]),
});
setupListeners(store.dispatch); // refetchOnFocus Active

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;