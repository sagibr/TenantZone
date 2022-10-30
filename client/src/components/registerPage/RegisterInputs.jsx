import axios from "axios"
import { Formik } from "formik"
import * as Yup from "yup"
import "./registerInput.css"

const RegisterInputs = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .label("first Name")
      .required("Enter Your First Name"),
    lastName: Yup.string().label("last Name").required("Enter Your Last Name"),
    email: Yup.string()
      .email("please entar a valid email example: jhon@jhonson.com")
      .required("enter email"),
    city: Yup.string().label("city").required("Enter Your city"),
    gender: Yup.string().required("The gender you chose does not exist"),
    password: Yup.string()
      .min(7, "password must have more then 7 digits")
      .required("you must enter Password"),
  })

  return (
    <div>
      <h1 className="register text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">Register</span>{" "}
      </h1>
      <div className="container bg-gray-50 shadow-xl flex">
        <div className="divInputsRegister">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Change
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 md:col-span-2 md:mt-0">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                city: "",
                gender: "",
                password: "",
              }}
              onSubmit={(values) => {
                alert(`You are registered! Name: ${values.firstName}. Email: ${values.email}. gender: ${values.gender}. 
            password: ${values.password}`)
                const user = {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  city: values.city,
                  gender: values.gender,
                  password: values.password,
                }
                axios
                  .post("http://localhost:3001/users", user)
                  .then((response) => console.log(response))
                  .catch((err) => console.log(err))
              }}
              validationSchema={schema}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                handleBlur,
                touched,
              }) => (
                <form action="#" method="POST" onSubmit={handleSubmit}>
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.firstName}
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p style={{ color: "red" }}>
                            {errors.firstName &&
                              touched.firstName &&
                              errors.firstName}
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.lastName}
                            autoComplete="lastName"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p style={{ color: "red" }}>
                            {errors.lastName &&
                              touched.lastName &&
                              errors.lastName}
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.email}
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p style={{ color: "red" }}>
                            {errors.email && touched.email && errors.email}
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.city}
                            autoComplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p style={{ color: "red" }}>
                            {errors.city && touched.city && errors.city}
                          </p>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Gender
                          </label>
                          <select
                            id="gender"
                            name="gender"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.gender}
                            autoComplete="gender"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                          <p style={{ color: "red" }}>
                            {errors.gender && touched.gender && errors.gender}
                          </p>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            name="password"
                            id="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            values={values.password}
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p style={{ color: "red" }}>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </p>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => handleSubmit()}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
        <div>
          <img
            className="imgRegister"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeynT5WtQQd9ReVJXpxexQfrKwuma7H7svIQ&usqp=CAU"
            alt="asdas"
          ></img>
        </div>
      </div>
    </div>
  )
}
export default RegisterInputs
