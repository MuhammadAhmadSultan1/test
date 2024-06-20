import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

import userSlice from "./slices/userInfo";
import { baseApi } from "../services/baseApi";
import selectedCard from "./slices/selectedCard";
import selectedColorVariation from "./slices/selectedColorVariation";
import templateData from "./slices/templateData";
import selectedTemplateData from "./slices/selectedTemplate";
import generatedColors from "./slices/generatedColorVariation";

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
  selectedCard: selectedCard,
  selectedColorVariation: selectedColorVariation,
  templateData: templateData,
  selectedTemplateData: selectedTemplateData,
  generatedColors: generatedColors,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistSessionConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

// Persistor to persist the store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
