import React from 'react'
import mastercard from '../../../assets/greenEarth.png'
const CreditCard = () => {
  return (
    <div className="bg-white dark:bg-light-dark">
      <div className="container mx-auto px-3 flex flex-col py-24">
        <span className="text-2xl text-grey dark:text-dark-white font-semibold ">
          You are one step away from making the earth a better place
        </span>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          Sacrifice Steps
        </span>
        <center>
          <img
            className="rounded-xl mb-12"
            height="400px"
            width="400px"
            src={mastercard}
            alt=""
          />
        </center>
        <p
          style={{ maxWidth: '50%' }}
          className="mx-auto text-xl text-grey dark:text-dark-white font-semibold mb-7"
        >
          Be sure to fulfill all the steps in order to sucessfully participate
          in AirDAO Sacrifice
        </p>
        <div className="flex md:flex-row flex-col mt-6">
          <div className="flex flex-col items-center px-2 md:px-28">
            <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
              001
            </span>
            <div
              style={{ width: '3px' }}
              className=" h-full bg-grey dark:bg-dark-white"
            ></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-3xl dark:text-white text-black font-semibold ">
              {' '}
              INSTALL METAMASK
            </span>
            <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium">
              Metamask is the most popular wallet. This is what you use to
              connect to our app and send transactions. Be sure to install the
              extension for your web browser.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col mt-6">
          <div className="flex flex-col items-center px-2 md:px-28">
            <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
              002
            </span>
            <div
              style={{ width: '3px' }}
              className=" h-full bg-grey dark:bg-dark-white"
            ></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-3xl dark:text-white text-black font-semibold ">
              {' '}
              SEND TOKENS TO SACRIFICE
            </span>
            <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium">
              Sacrifice must be done through a non Exchange wallet, so first
              send ERC-20 tokens to your MetaMask Account. <br />
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col mt-6">
          <div className="flex flex-col items-center px-2 md:px-28">
            <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
              003
            </span>
            <div
              style={{ width: '3px' }}
              className=" h-full bg-grey dark:bg-dark-white"
            ></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-3xl dark:text-white text-black font-semibold ">
              {' '}
              COPY AirDAO SACRIFICE WALLET
            </span>
            <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium">
              Select the Network in which you will like to Sacrifice, once
              selected copy the wallet you will get below.
              <br />
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col mt-6">
          <div className="flex flex-col items-center px-2 md:px-28">
            <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
              004
            </span>
            <div
              style={{ width: '3px' }}
              className=" h-full bg-grey dark:bg-dark-white"
            ></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-3xl dark:text-white text-black font-semibold ">
              {' '}
              SEND TO SACRIFICE
            </span>
            <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium">
              Now you are ready for participating in the Pulse AirDAO Sacrifice.{' '}
              <br />
              <br />
              Send your desired ERC-20 tokens to the wallet you copied from{' '}
              <a href="https://airdao.app">
                <i>
                  <font color="#d5de26">https://airdao.app</font>
                </i>{' '}
              </a>
              and send the tokens. Those will be automatically recorded by our
              Team so you become one of the first initial supply holders of AIR.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col mt-6">
          <div className="flex flex-col items-center px-2 md:px-28">
            <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
              +++
            </span>
            <div
              style={{ width: '3px' }}
              className=" h-full bg-grey dark:bg-dark-white"
            >
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-3xl dark:text-white text-black font-semibold "></span>
            <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium"></p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col mt-6">
          <div className="flex flex-col items-center px-2 md:px-28">
            <span className="mb-6  text-2xl text-grey dark:text-dark-white font-semibold">
              005
            </span>
            <div
              style={{ width: '3px' }}
              className=" h-full bg-grey dark:bg-dark-white"
            ></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-3xl dark:text-white text-black font-semibold ">
              {' '}
              Pulse AirDAO mainnet Release
            </span>
            <p className="pb-12 mt-4 text-xl text-grey dark:text-dark-white font-medium">
              Congratulations you will have AIR and PLS in your wallet, you can
              stake it for sAIR to start accruing rewards. You can also use it
              to offset carbon emissions. And as a token holder, you can use
              your AIR and sAIR to participate in the governance of the Pulse
              AirDAO! So keep an eye out for proposals on our forum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
