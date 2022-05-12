import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = ({ isNavOpen, setIsNavOpen }) => {
  const handleClick = () => {
    setIsNavOpen(false)
  }
  return (
    <div>
      <nav style={{ display: isNavOpen ? 'flex' : 'none' }}>
        <ul className=" flex md:hidden flex-col justify-start items-center absolute bg-white dark:bg-light-dark right-0 left-0 top-12 pt-10 bottom-0   z-40 gap-10 text-4xl dark:text-white text-black font-medium ">
          <div
            className="flex flex-col gap-10 "
            onClick={() => setIsNavOpen(false)}
          >
            <Link to="Sacrifice">
              <li className="nav-item flex items-center gap-4 hover:text-grey dark:hover:text-white cursor-pointer">
                <font className="text-xl">01</font>Pulse AirDAO Sacrifice
              </li>
            </Link>
            <a href="https://medium.com/@PulseAirDAO" target="_blank">
              <li className="nav-item flex items-center gap-4 hover:text-grey dark:hover:text-white cursor-pointer">
                <font className="text-xl">01</font>Blog
              </li>
            </a>
            <a href="https://twitter.com/pulseairdao" target="_blank">
              <li className="nav-item flex items-center gap-4 hover:text-grey dark:hover:text-white cursor-pointer">
                <font className="text-xl">01</font>Twitter
              </li>
            </a>
            <a href="https://t.me/PulseAirDAO" target="_blank">
              <li className="nav-item flex items-center gap-4 hover:text-grey dark:hover:text-white cursor-pointer">
                <font className="text-xl">01</font>Telegram
              </li>
            </a>
            <a
              href="https://pulse-airdao.gitbook.io/pulse-airdao/"
              target="_blank"
            >
              <li className="nav-item flex items-center gap-4 hover:text-grey dark:hover:text-white cursor-pointer">
                <font className="text-xl">01</font>Docs
              </li>
            </a>
            {/* <li className='nav-item flex items-center  gap-4  hover:text-grey dark:hover:text-white cursor-pointer' >
							<font className='text-xl'>02</font>Stake
						</li>
						<li className='nav-item flex items-center gap-4  hover:text-grey dark:hover:text-white cursor-pointer' >
							<font className='text-xl'>03</font>Love Letters
						</li>
						<li className='nav-item flex items-center gap-4  hover:text-grey dark:hover:text-white cursor-pointer' >
							<font className='text-xl'>04</font>Resources
						</li> */}
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav
