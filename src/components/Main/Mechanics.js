import React from 'react'
import windmills from '../../assets/wind.jpg'
import steams from '../../assets/fabri.jpg'
import oceans from '../../assets/impact.jpg'
const Mechanics = () => {
  return (
    <div className="pt-40 md:container md:flex-nowrap px-4 flex-wrap justify-between mx-auto pb-44">
      <div className="flex-col flex items-start">
        <h3 className="text-5xl dark:text-white font-bold">MECHANICS</h3>
        <p className="max-w-sm text-black dark:text-white mt-4 text-left text-xl font-bold">
          The DAO sells bonds and distributes rewards to AIR holders. Every bond
          we sell adds to an ever-growing green treasury, or improves liquidity
          for key environmental assets. A win-win for people and planet.
        </p>
      </div>
      <div className="flex flex-col items-start md:items-end gap-10 mt-10 md:-mt-32">
        <div className="relative ">
          <div className="flex  md:mr-80 mr-0">
            <img className="w-60 rounded-2xl" src={windmills} alt="" />
            <div className="flex flex-col md:items-start items-end text-left absolute md:text-6xl text-3xl dark:text-white text-black left-44 md:right-13 mt-24 font-bold">
              <span className="text-grey dark:text-dark-white text-2xl">
                <font color="white">/01</font>
              </span>
              <span className="max-w-sm">Backed by Carbon.</span>
            </div>
          </div>
        </div>
        <div className="relative self-end md:mr-56 mr-0 z-10 mt-0 md:-mt-5">
          <div className="flex mr-0 md:mr-80">
            <img className="w-60 rounded-2xl" src={steams} alt="" />
            <div className="flex flex-col items-start text-left absolute md:text-6xl text-3xl dark:text-white text-black -left-24 mt-24 font-bold">
              <span className="text-grey dark:text-dark-white text-2xl">
                /02
              </span>
              <span className="max-w-sm">Strong incentives.</span>
            </div>
          </div>
        </div>
        <div className="relative mt-0 md:-mt-12 mr-0 ">
          <div className="flex mr-0 md:mr-80">
            <img className="w-60 rounded-2xl" src={oceans} alt="" />
            <div className="flex flex-col items-end text-right absolute md:text-6xl text-3xl dark:text-white text-black md:right-56 left-44 mt-24 font-bold ">
              <span className="text-grey dark:text-dark-white text-2xl">
                /03
              </span>
              <span className="max-w-sm">Massive impact.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mechanics
