import { configureStore } from "@reduxjs/toolkit"
import searchResultSlice from "../reducers/searchResultSlice"
import selectedIdSlice from "../reducers/selectedIdSlice"

export const store = configureStore({
  reducer: {
    searchResult: searchResultSlice,
    selectedId: selectedIdSlice,
  },
})
