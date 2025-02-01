import Image from 'next/image'
import React from 'react'
import desktop from "./DesktopHome.png"
import bubblr from  "./bubble.png"

const ImageComponent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden p-10 flex justify-center items-center">
      <div className="absolute top-5 left-0 z-0 mt-4">
        <Image
          src={bubblr}
          alt="Bubblr Image"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      <div className="absolute top-20 left-0 z-10">
        <Image
          src={desktop}
          alt="Desktop Image"
          width={650}
          height={700}
          className="object-cover "
        />
      </div>
    </div>
  )
}

export default ImageComponent
