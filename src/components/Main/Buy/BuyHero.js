import React from 'react'
import mastercard from '../../../assets/5.png'
import zapper from '../../../assets/2.png'
import bond from '../../../assets/stg3.png'
const BuyHero = () => {
  return (
    <div className="md:container mx-auto mt-24 flex flex-col items-center">
      <span className="text-5xl font-bold text-black dark:text-white ">
        How it works?
      </span>
      <p
        style={{ maxWidth: '50%' }}
        className="mb-12 mt-7 text-xl text-grey font-semibold dark:text-dark-white"
      >
        You can get AIR in three different stages
      </p>
      <div className="flex gap-8 pb-48 gap-y-32 gap-x-4 justify-center mx-auto flex-wrap">
        <a
          href="https://pulse-airdao.gitbook.io/pulse-airdao/tokonomics-and-mechanisms/initial-supply"
          target="_blank"
        >
          <div className="flex w-72 h-48 flex-col ">
            <img
              className="w-full h-full rounded-t-lg"
              src={mastercard}
              alt=""
            />
            <div className="w-full h-full flex flex-col text-left bg-white dark:bg-light-dark rounded-b-lg py-5 px-7">
              <span className="text-base text-grey dark:text-dark-white font-medium">
                Pulse AirDAO
              </span>
              <span className="text-3xl text-black dark:text-white font-semibold">
                Stage I
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://pulse-airdao.gitbook.io/pulse-airdao/tokonomics-and-mechanisms/initial-supply"
          target="_blank"
        >
          <div className="flex w-72 h-48 flex-col ">
            <img className="w-full h-full rounded-t-lg" src={zapper} alt="" />
            <div className="w-full h-full flex flex-col text-left bg-white dark:bg-light-dark rounded-b-lg py-5 px-7">
              <span className="text-base text-grey dark:text-dark-white font-medium">
                Pulse AirDAO
              </span>
              <span className="text-3xl text-black dark:text-white font-semibold">
                Stage II
              </span>
            </div>
          </div>
        </a>
        <a
          href="https://pulse-airdao.gitbook.io/pulse-airdao/tokonomics-and-mechanisms/initial-supply"
          target="_blank"
        >
          <div className="flex w-72 h-48 flex-col ">
            <img className="w-full h-full rounded-t-lg" src={bond} alt="" />
            <div className="w-full h-full flex flex-col text-left bg-white dark:bg-light-dark rounded-b-lg py-5 px-7">
              <span className="text-base text-grey dark:text-dark-white font-medium">
                Pulse AirDAO
              </span>
              <span className="text-3xl text-black dark:text-white font-semibold">
                Stage III
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default BuyHero
