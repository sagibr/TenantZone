import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: "" }

const selectedIdSlice = createSlice({
  name: "selectedId",
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

export const { update } = selectedIdSlice.actions
export default selectedIdSlice.reducer
