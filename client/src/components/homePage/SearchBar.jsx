import axios from "axios"
const { useState } = require("react")

const SearchBar = () => {
  const [value, setValue] = useState("")

  function isNumber(char) {
    if (typeof char !== "string") {
      return false
    }

    if (char.trim() === "") {
      return false
    }

    return !isNaN(char)
  }
  const ExtractNumber = (string, start) => {
    let endOfNumber
    for (let index = start; index < string.length; index++) {
      if (!isNumber(string[index + 1])) {
        endOfNumber = index + 1
        break
      }
    }
    const number = string.substring(start, endOfNumber)
    return number.toString()
  }

  async function search() {
    let query = ""
    let input = value

    if (input) {
      if (input.includes("floor")) {
        query
          ? (query += `&floor=${await ExtractNumber(
              input.substring(input.indexOf(`floor`)),
              5
            )}`)
          : (query += `?floor=${await ExtractNumber(
              input.substring(input.indexOf(`floor`)),
              5
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`floor`)),
          5
        )
        input =
          input.slice(0, input.indexOf(`floor`)) +
          input.slice(input.indexOf(number) + number.length, input.length)
      }
      if (input.includes("price")) {
        query
          ? (query += `&price=${await ExtractNumber(
              input.substring(input.indexOf(`price`)),
              5
            )}`)
          : (query += `?price=${await ExtractNumber(
              input.substring(input.indexOf(`price`)),
              5
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`price`)),
          5
        )
        input =
          input.slice(0, input.indexOf(`price`)) +
          input.slice(input.indexOf(number) + number.length, input.length)
      }
      if (input.includes("room")) {
        query
          ? (query += `&romms=${await ExtractNumber(
              input.substring(input.indexOf(`room`) - 3),
              0
            )}`)
          : (query += `?romms=${await ExtractNumber(
              input.substring(input.indexOf(`room`) - 3),
              0
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`room`) - 3),
          0
        )
        input =
          input.slice(0, input.indexOf(number)) +
          input.slice(input.indexOf("room") + 5, input.length)
      }
      if (input.includes("size")) {
        query
          ? (query += `&size=${await ExtractNumber(
              input.substring(input.indexOf(`size`)),
              4
            )}`)
          : (query += `?size=${await ExtractNumber(
              input.substring(input.indexOf(`size`)),
              4
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`size`)),
          4
        )
        input =
          input.slice(0, input.indexOf(`size`)) +
          input.slice(input.indexOf(number) + number.length, input.length)
      }
      query += `&adress=${input}`
    }
    query = query.replace(/\s/g, "")
    axios.get(`http://localhost:3001/apartments/${query}`).then((res) => {
      res.data && console.log(res.data)
    })
  }

  return (
    <div>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search adress, rooms etc.. (example: 'shoham mitzpe 61, floor 3 4 rooms...')  "
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          onClick={() => search()}
        >
          Search
        </button>
      </div>
    </div>
  )
}
export default SearchBar
