import React, { useEffect, useState } from 'react'
import language from '../../assets/language.svg'
import moon from '../../assets/dark-mode.svg'
import MobileNav from './MobileNav'
import Air from '../../assets/AIR.png'
import LanguageSelect from './LanguageSelect'
import { Link } from 'react-router-dom'

const Header = ({ IsDark, setIsDark }) => {
  const [IsLanguageSelectOpen, setIsLanguageSelectOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <React.Fragment>
      <div className=" flex bg-white dark:bg-light-dark px-2 md:px-0 md:bg-transparent md:dark:bg-transparent md:pt-12  xl:container pt-0  mx-auto justify-between items-center">
        <Link to="">
          <span className="dark:text-white font-semibold">
            <img height="50px" width="50px" src={Air}></img>
          </span>
        </Link>
        <nav>
          <ul className="hidden md:flex gap-14 text-sm  text-dark-grey font-medium ">
            <Link to="Sacrifice">
              <li className="nav-item hover:text-green dark:hover:text-green cursor-pointer">
                <b>
                  <u>
                    <font color="#d5de26"> Pulse AirDAO Sacrifice</font>
                  </u>
                </b>
              </li>
            </Link>
            <li> </li>
            <li> </li>
            <a href="https://medium.com/@PulseAirDAO" target="_blank">
              <li className="nav-item hover:text-green dark:hover:text-green cursor-pointer">
                Blog
              </li>
            </a>
            <a href="https://twitter.com/pulseairdao" target="_blank">
              <li className="nav-item hover:text-green dark:hover:text-green cursor-pointer">
                Twitter
              </li>
            </a>
            <a href="https://t.me/+yE3vMwyR7T1mYTFk" target="_blank">
              <li className="nav-item hover:text-green dark:hover:text-green cursor-pointer">
                Telegram
              </li>
            </a>
            <a
              href="https://pulse-airdao.gitbook.io/pulse-airdao/"
              target="_blank"
            >
              <li className="nav-item hover:text-green dark:hover:text-green cursor-pointer">
                Docs
              </li>
            </a>
          </ul>
        </nav>
        <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setIsLanguageSelectOpen(!IsLanguageSelectOpen)}
            className="bg-white dark:bg-light-dark 	p-3 hover:opacity-70 rounded"
          >
            <svg
              class="w-4 py-1 dark:fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LanguageIcon"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
            </svg>
          </button>
          <button
            onClick={() => setIsDark(!IsDark)}
            className="bg-white dark:bg-light-dark p-3 hover:opacity-70 rounded"
          >
            <svg
              class="w-4 dark:fill-white"
              width="13"
              height="18"
              viewBox="0 0 13 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.33332 2.33341C8.00832 2.33341 11 5.32508 11 9.00008C11 12.6751 8.00832 15.6667 4.33332 15.6667C4.04999 15.6667 3.76666 15.6501 3.49166 15.6084C5.08332 13.8084 5.99999 11.4584 5.99999 9.00008C5.99999 6.54175 5.08332 4.19175 3.49166 2.39175C3.76666 2.35008 4.04999 2.33341 4.33332 2.33341ZM4.33332 0.666748C2.81666 0.666748 1.39166 1.08341 0.166656 1.79175C2.65832 3.23341 4.33332 5.91675 4.33332 9.00008C4.33332 12.0834 2.65832 14.7667 0.166656 16.2084C1.39166 16.9167 2.81666 17.3334 4.33332 17.3334C8.93332 17.3334 12.6667 13.6001 12.6667 9.00008C12.6667 4.40008 8.93332 0.666748 4.33332 0.666748Z"
                fill="var(--font-01)"
              ></path>
            </svg>
          </button>
          <button className="enter-btn hidden md:flex text-sm font-bold py-3 leading-6 px-7 bg-green text-white rounded">
            VIEW DEMO
          </button>
          <div
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="flex md:hidden gap-1 flex-col"
          >
            <div className="w-6 h-1 bg-grey"></div>
            <div className="w-6 h-1 bg-grey"></div>
            <div className="w-6 h-1 bg-grey"></div>
          </div>
        </div>
      </div>
      <LanguageSelect IsLanguageSelectOpen={IsLanguageSelectOpen} />
    </React.Fragment>
  )
}

export default Header
