import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

export default function OpinionCarusal(props) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-w-3xl"
      >
        {props.opinions &&
          props.opinions.map((opinion, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="my-20 shadow-md bg-gray-50 rounded-2xl ">
                  <div>
                    <div className="flex justify-evenly">
                      <div>
                        <img alt="" src={opinion.user.profileImage}></img>
                        <h1 className="font-mono font-semibold m-8">
                          {opinion.user.name}
                        </h1>
                      </div>
                      <div>
                        <h1 className="font-mono font-semibold m-8">
                          {opinion.payed}
                        </h1>
                      </div>
                    </div>
                    <div className="h-auto">
                      <h1 className="">{opinion.opinion}</h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}
