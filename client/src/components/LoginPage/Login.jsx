import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { update } from "../../reducers/loggedUserSlice"
import videoBg from "./../LoginPage/video.mp4"
import logo from "./img/tenantsZone.png"
import "./login.css"
export default function Login() {
  const [passwordValue, setPasswordValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [allUsers, setAllUsers] = useState([])
  const dispatch = useDispatch()
  const handleSubmit = () => {
    axios
      .get(`http://localhost:3001/users`)
      .then((response) => setAllUsers(response.data))
      .catch((err) => console.log(err))
    console.log(allUsers)
    // allUsers.forEach((element) => {
    //   if (element.email === emailValue && element.password === passwordValue)
    //     dispatch(update(element))
    //   // console.log(element)
    //   // : alert("wrong email and passwords")
    // })
    for (let index = 0; index < allUsers.length; index++) {
      if (
        allUsers[index].email === emailValue &&
        allUsers[index].password === passwordValue
      ) {
        dispatch(update(allUsers[index]))
      }
    }
  }

  return (
    <div className="AllLogin">
      {/* <div className="overlay"></div> */}

      <video className="videoUrl" src={videoBg} autoPlay loop muted />

      <div className="Login flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="LoginWords w-full max-w-md space-y-8">
          <div>
            <img
              className="logo mx-auto h-26 w-26"
              src={logo}
              alt="Your Company"
            />
            <h1 className="block text-indigo-600 xl:inline">Sign in</h1>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                value={passwordValue}
                onChange={(e) => {
                  setPasswordValue(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>

          <div>
            <Link to={"/"}>
              <button
                type="text"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => handleSubmit()}
              >
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
