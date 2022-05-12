import React from 'react'
import wormhole from '../../assets/blackH.png'
const Hole = () => {
  return (
    <div className="bg-white dark:bg-light-dark overflow-hidden">
      <div className="md:container flex flex-col mx-auto pt-32 ">
        <span className="text-dark-grey dark:text-light-black font-semibold text-5xl mb-16 w-5/6 mx-auto">
          Pulse AirDAO is a{' '}
          <font className="text-black dark:text-white">
            {' '}
            black hole for carbon{' '}
          </font>{' '}
          at the center of a{' '}
          <font className="text-black dark:text-white"> new green economy</font>
          .
        </span>
        <div className="flex flex-wrap md:flex-nowrap gap-28 text-xl w-5/6 mx-auto text-grey font-semibold mb-12">
          <span className="text-left dark:text-dark-white">
            We’ve kick-started a{' '}
            <font className="text-black dark:text-white">
              {' '}
              decentralized and open market for carbon{' '}
            </font>
            . Our token incentivizes investors, citizens, and organizations to
            participate in and govern this new economy.
          </span>
          <span className="text-left dark:text-dark-white">
            By increasing access and demand for carbon offsets, we make
            pro-climate projects more profitable, while forcing companies to
            adapt more quickly to the realities of climate change.
          </span>
        </div>
        <img className="h-80 rounded-t-2xl" src={wormhole} alt="" />
      </div>
    </div>
  )
}

export default Hole
