import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

import userSlice from "./slices/userInfo";

const persistUserConfig = {
  key: "userCard",
  storage: storage,
};

const persistSessionConfig = {
  key: "session",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  userCard: persistReducer(persistUserConfig, userSlice),
});

const persistedReducer = persistReducer(persistSessionConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Persistor to persist the store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

