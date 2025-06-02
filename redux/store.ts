import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
const persistConfig = {
  key: "user",
  storage: AsyncStorage,
};

const userPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: userPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
