import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    city: "",
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    password: "",
    __v: 0,
    _id: "",
  },
]

const loggedUserSlice = createSlice({
  name: "loggedUser",
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
      console.log("updating")
      state[0].city = action.payload.city
      state[0].email = action.payload.email
      state[0].firstName = action.payload.firstName
      state[0].gender = action.payload.gender
      state[0].lastName = action.payload.lastName
      state[0].password = action.payload.password
    },
    reset(state) {
      state.user = {}
    },
  },
})

export const { update, reset } = loggedUserSlice.actions
export default loggedUserSlice.reducer
