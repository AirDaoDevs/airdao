import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-white dark:bg-light-dark pt-36 pb-40">
      <div className="flex flex-col items-center md:container mx-auto">
        <span className="text-base text-grey dark:text-dark-white font-medium">
          ALL THE ALPHA, STRAIGHT TO YOUR INBOX
        </span>
        <span className="text-5xl text-black dark:text-white font-bold my-6 ">
          NEWSLETTER
        </span>
        <span className="text-xl text-grey dark:text-dark-white font-semibold mb-9 max-w-md">
          Get the latest updates on Pulse AirDAO, as we build the future of the
          carbon economy.
        </span>
        <a href="https://forms.gle/WzzoFipQoGVnJP6T8" target="_blank">
          <button className="text-sm font-semibold px-8 mb-6 bg-green text-white py-3 rounded">
            SIGN UP
          </button>
        </a>
        <span className="text-base text-grey dark:text-dark-white font-medium">
          Never shared. Never spammed.
        </span>
      </div>
    </div>
  )
}

export default Newsletter
