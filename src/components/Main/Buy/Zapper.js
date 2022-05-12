import React from 'react'
import zapper from '../../../assets/px_.png'
const Zapper = () => {
  return (
    <div className="container mx-auto flex flex-col px-3     py-24">
      <span className="text-2xl text-grey dark:text-dark-white dark:text-dark-white font-semibold ">
        LISTING
      </span>
      <span className="text-5xl text-black dark:text-white font-bold my-7">
        PULSE CHAIN
      </span>
      <div className="flex flex-col flex md:flex-row gap-14">
        <center>
          <p className=" text-xl text-grey dark:text-dark-white font-semibold mb-7">
            If you already have a Pulse Chain wallet with PLS, you will be able
            to use decentralized exchanges like PulseX to swap for AIR. This
            helps you to avoid paying extra fees, and represents the fair market
            price.
          </p>
        </center>
      </div>
      <img className="rounded-xl mb-7" src={zapper} alt="" />
      <br></br>
      <span className="text-3xl dark:text-dark-white font-semibold mb-12">
        How do I get AIR?
      </span>
      <center>
        <p className=" text-xl text-grey dark:text-dark-white font-semibold mb-7">
          For getting AIR you have 2 alternatives
        </p>
      </center>
      <div className="flex md:flex-row flex-col mt-6">
        <div className="flex flex-col items-center px-2 md:px-28">
          <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
            001
          </span>
          <div style={{ width: '3px' }} className=" h-full bg-grey"></div>
        </div>
        <div className="flex flex-col   text-left">
          <span className="text-3xl text-black dark:text-dark-white font-semibold ">
            {' '}
            PARTICIPATE IN AirDAO SACRIFICE
          </span>
          <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium">
            Once all Sacrifice stages finish, you will be airdropped with AIR in
            the wallet from which you sacrified. <br></br>
            <br></br>
            <b>Remember: </b>Do not sacrifice from an exchange wallet, you must
            do it from one that you really own, like MetaMask, Trust Wallet, or
            others.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col mt-6">
        <div className="flex flex-col items-center px-2 md:px-28">
          <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
            002
          </span>
          <div style={{ width: '3px' }} className=" h-full bg-grey"></div>
        </div>
        <div className="flex flex-col px-3 text-left">
          <span className="text-3xl text-black dark:text-dark-white font-semibold ">
            {' '}
            BUY IT ON PULSEX
          </span>
          <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium">
            If you decide to wait until PulseX listing, you will not be able to
            enjoy the BONUS multiplier factors we have setup for those who
            sacrifice. <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Zapper
