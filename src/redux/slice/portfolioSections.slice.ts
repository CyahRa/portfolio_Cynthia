import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Section {
  id: string;
  name: string;
  content: string;
}

const portfolioSectionsSlice = createSlice({
  name: "portfolioSections",
  initialState: [] as Section[],
  reducers: {
    setSections: (_state, action: PayloadAction<Section[]>) => {
      return action.payload;
    },
  },
});

export const { setSections } = portfolioSectionsSlice.actions;
export const portfolioSectionsReducer = portfolioSectionsSlice.reducer;
