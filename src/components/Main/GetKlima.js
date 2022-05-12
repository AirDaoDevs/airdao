import React from 'react'
import dummyswap from '../../assets/airSwap.png'
import swappy from '../../assets/swappy.png'
const GetKlima = () => {
  return (
    <div>
      <div className="md:container px-4 mx-auto flex items-center pt-40 pb-40 ">
        <div className="flex rounded-2xl md:flex-row flex-col  bg-white dark:bg-light-dark items-center ">
          <div className="flex flex-col items-start pt-16 pb-32 pr-16 pl-16">
            <span className="text-5xl text-dark font-bold dark:text-white">
              GET AIR
            </span>
            <p className="text-left text-xl text-grey dark:text-dark-white my-4 ">
              Get exposure to the growing carbon economy. AIR will be available
              on PulseX.<br></br>
              <br></br> Acquire, stake, and get rewarded. Financial activism for
              the climate.
              <br></br>
            </p>
            <a href="https://app.v2b.testnet.pulsex.com/" target="_blank">
              <button className="text-sm leading-10 rounded font-semibold text-white bg-green px-7 py-1">
                SEE PULSEX
              </button>
            </a>
          </div>
          <img className="w-11/12 md:w-1/2 self-end" src={swappy} alt="" />
        </div>
      </div>
    </div>
  )
}

export default GetKlima
