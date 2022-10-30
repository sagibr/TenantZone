import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

export default function ImagesCarusal(props) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-w-2xl"
      >
        {props.images &&
          props.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="object-fill w-full h-96 rounded-3xl my-7"
                  src={image.url}
                  alt={`slide ${index + 1}`}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}
