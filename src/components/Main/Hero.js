import React from 'react'
import forest from '../../assets/forest_.jpg'
import arrow from '../../assets/arrow.svg'
const Hero = () => {
  return (
    <div className="md:container   mx-auto">
      <div className=" flex  mx-auto bg-white rounded-lg w-full dark:bg-light-dark py-3 text-sm text-black font-semibold mt-28">
        <span className="flex mx-auto dark:text-white">
          📰 LATEST NEWS:
          <a
            className="text-green ml-2 underline text-left"
            href="https://medium.com/@PulseAirDAO/introducing-air-a-liquidity-engine-for-the-carbon-markets-44279bd444e6"
            target="_blank"
          >
            Introducing AIR, a liquidity engine for the carbon markets
          </a>
        </span>
      </div>
      <div className="flex md:flex-nowrap shrink flex-wrap justify-between mt-6  gap-6">
        <div className="container flex grow flex-col md:h-96 h-fit z-10 w-80 rounded-2xl mx-auto basis-full items-start justify-between md:px-16 px-4 md:py-28 py-4 dark:bg-light-dark bg-white ">
          <span className="text-grey dark:text-dark-white text-xl font-bold">
            WELCOME TO
          </span>
          <span className="text-5xl text-black dark:text-white font-bold mt-1 mb-4">
            Pulse AirDAO
          </span>
          <p className="text-xl dark:text-white font-semibold text-left">
            Fight climate change and earn rewards with AIR, a digital currency
            backed by real carbon assets.
          </p>
          <br></br>
        </div>

        <img
          className="shrink md:h-96 h-full md:mt-0 -mt-32 rounded-2xl basis-full"
          src={forest}
          alt=""
        />
      </div>

      <a
        className="flex items-center hover:opacity-60 flex-col mt-24 pb-32"
        href=""
      >
        <span className="text-sm text-black dark:text-white font-medium  cursor-pointer">
          LEARN MORE
        </span>
        <svg
          class="dark:fill-white w-6 m-4"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ArrowDownwardIcon"
        >
          <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
        </svg>
      </a>
    </div>
  )
}

export default Hero
