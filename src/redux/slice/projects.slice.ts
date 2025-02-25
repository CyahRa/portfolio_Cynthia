import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const projectsSlice = createSlice({
  name: "projects",
  initialState: [] as Project[],
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.push(action.payload);
    },
    setProjects: (_state, action: PayloadAction<Project[]>) => {
      return action.payload;
    },
  },
});

export const { addProject, setProjects } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
