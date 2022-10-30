import React from "react"
import videoBg from "./../LoginPage/video.mp4"
import "./main.css"
export default function Main() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  )
}
