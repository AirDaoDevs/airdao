import React from 'react'
import twitter from '../../assets/twitter.svg'
import yt from '../../assets/yt.svg'
import discord from '../../assets/discord.svg'
import reddit from '../../assets/reddit.svg'
import twitch from '../../assets/twitch.svg'
import github from '../../assets/github.svg'
import tiktok from '../../assets/tiktok.svg'
import linkedin from '../../assets/linkedin.svg'
import telegram from '../../assets/telegram.svg'
import ssr from '../../assets/ssr.svg'
import Air from '../../assets/AIR.png'

import pdf from '../../assets/Disclaimer.pdf'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="md:container flex justify-between mx-auto py-12 flex-wrap ">
      <div className="flex justify-center md:justify-between flex-wrap items-center text-sm text-grey dark:text-white font-medium gap-8">
        <a href="" className="cursor-pointer hover:text-black">
          <span className="dark:text-white font-semibold">
            <img height="35px" width="35px" src={Air}></img>
          </span>
        </a>
        <Link to="Sacrifice">Pulse AirDAO Sacrifice</Link>
        <a href="https://medium.com/@PulseAirDAO" target="_blank">
          Blog
        </a>
        <a href="https://twitter.com/pulseairdao" target="_blank">
          Twitter
        </a>
        <a href="https://t.me/+yE3vMwyR7T1mYTFk" target="_blank">
          Telegram
        </a>
        <a href={pdf} target="_blank">
          Disclaimer
        </a>
        <a href="https://pulse-airdao.gitbook.io/pulse-airdao/" target="_blank">
          Docs
        </a>
      </div>
      <div className="flex flex-wrap md:mt-0 mt-10 items-center mx-auto justify-center gap-4">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/pulseairdao"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 28.1 310 253.81"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-grey  dark:fill-white hover:fill-black"
          >
            <title>Twitter</title>
            <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73   c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783   c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598   C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467   c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977   c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889   c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597   c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961   c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895   c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367   c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998   C307.394,57.037,305.009,56.486,302.973,57.388z"></path>
          </svg>
        </a>

        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/PulseAirDAO"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0.4 32 31.21"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-grey dark:fill-white hover:fill-black"
          >
            <title>Github</title>
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </a>

        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://t.me/+yE3vMwyR7T1mYTFk"
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-grey dark:fill-white hover:fill-black"
            width="20"
            height="20"
            viewBox="2 3.61 20.02 16.79"
          >
            <title>Telegram</title>
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Footer
