import React from 'react'
import sprouts from '../../assets/future.jpg'
const Invest = () => {
  return (
    <div className="bg-white dark:bg-light-dark">
      <div className="flex container flex-col md:flex-row items-start px-10 pt-40 mx-auto">
        <div className="flex flex-col">
          <span className="text-6xl text-left  mb-20 text-black dark:text-white font-bold">
            INVEST <br /> IN THE <br /> FUTURE.
          </span>
          <img className="rounded-t-2xl w-3/4" src={sprouts} alt="" />
        </div>
        <div className="flex flex-col  mt-14 pb-14">
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-start flex-col">
              <span className="md:text-6xl text-4xl mb-2  text-left text-black dark:text-white font-bold">
                RESERVE ASSET
              </span>
              <span className="text-2xl text-grey dark:text-light-black  mb-2 font-semibold ">
                OF THE CARBON ECONOMY
              </span>
            </div>
            <p className="max-w-md text-xl font-semibold text-grey text-left dark:text-dark-white">
              Every AIR token is backed by a real-world carbon asset. Tokens are
              used to offset carbon emissions, interact with DeFi applications,
              and get exposure to the rapidly growing global carbon market.
            </p>
          </div>
          <div className="flex flex-col mt-12 items-start">
            <div className="flex items-start  flex-col">
              <span className="md:text-6xl text-4xl text-left mb-2 text-black dark:text-white  font-bold">
                4% WEEKLY
                <br />
                REWARDS
              </span>
              <span className="text-2xl text-grey dark:text-light-black mb-2 font-semibold ">
                FOR TOKEN HOLDERS
              </span>
            </div>
            <p className="max-w-md text-xl font-semibold text-grey text-left dark:text-dark-white">
              AIR tokens are minted and distributed automatically every ~7 hours
              to staked AIR holders. Grow your AIR holdings as we usher in a
              more sustainable future together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invest
