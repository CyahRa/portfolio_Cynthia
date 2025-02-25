import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slice/theme.slice";
import { portfolioSectionsReducer } from "./slice/portfolioSections.slice";
import { projectsReducer } from "./slice/projects.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    portfolioSections: portfolioSectionsReducer,
    projects: projectsReducer,
  },
});

export type AppStoreType = typeof store;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<AppStoreType["getState"]>
> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
