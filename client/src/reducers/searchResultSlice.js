import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: "" }

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    // increment(state) {
    //   state.value++
    // },
    // decrement(state) {
    //   state.value--
    // },
    // incrementByAmount(state, action) {
    //   state.value += action.payload
    // },
    update(state, action) {
      state.value = action.payload
    },
  },
})

export const { update } = searchResultSlice.actions
export default searchResultSlice.reducer
