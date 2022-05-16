import React from 'react'
import bond from '../../../assets/bonding.png'
// import partner0
// import partner1
// import partner2

const Bonding = () => {
  return (
    <div className="bg-white dark:bg-light-dark">
      <div className="container mx-auto flex flex-col py-24 items-center">
        {' '}
        <span className="text-2xl text-grey dark:text-dark-white dark:text-dark-white font-semibold ">
          FAQS
        </span>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          When does Sacrifice starts?
        </span>
        <center>
          <p
            style={{ maxWidth: '50%' }}
            className=" text-xl text-grey dark:text-dark-white font-semibold"
          >
            Pulse AirDAO Sacrifice starts on 17th May 2022 (00:00:000 GMT +1),
            in{' '}
            <a href="https://airdao.app" taget="_blank">
              <i>
                <font color="#d5de26">https://airdao.app</font>
              </i>{' '}
            </a>
            and will have 3 stages, each one with a different BONUS Multiplier.
          </p>
        </center>
        <br></br>
        <br></br>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          When does Sacrifice end?
        </span>
        <center>
          <p
            style={{ maxWidth: '50%' }}
            className=" text-xl text-grey dark:text-dark-white font-semibold"
          >
            Pulse AirDAO Sacrifice ends on 31st July 2022 (00:00:000 GMT +1),{' '}
            after Sacrifice, all valid sacrifiers will receive AIR in the
            wallets from which they sacrificed.
          </p>
        </center>
        <br></br>
        <br></br>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          When will AIR be AIRDROPPED?
        </span>
        <center>
          <p
            style={{ maxWidth: '50%' }}
            className=" text-xl text-grey dark:text-dark-white font-semibold"
          >
            AIR will be distributed once PulseChain mainnet launches and Pulse
            AirDAO Sacrifice is over.
          </p>
        </center>
        <br></br>
        <br></br>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          Is there a whitepaper?
        </span>
        <center>
          <p
            style={{ maxWidth: '50%' }}
            className="  text-xl text-grey dark:text-dark-white font-semibold"
          >
            Yes but we have decided to present it through Gitbook. It is more
            formal and gives a better project understanding. Available on:{' '}
            <br></br>
            <br></br>
            <a
              href="https://pulse-airdao.gitbook.io/pulse-airdao/"
              target="_blank"
            >
              <i>
                <font color="#d5de26">
                  https://pulse-airdao.gitbook.io/pulse-airdao/
                </font>
              </i>{' '}
            </a>
          </p>
        </center>
        <br></br>
        <br></br>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          Will there be an Audit?
        </span>
        <center>
          <p
            style={{ maxWidth: '50%' }}
            className="  text-xl text-grey dark:text-dark-white font-semibold"
          >
            Yes. We will be using Certik and RugDoc. These audits have not been
            completed yet because we are still working on the site. Once
            completed we will provide this information.
          </p>
        </center>
        <br></br>
        <br></br>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          What tokens can I sacrifice?
        </span>
        <center>
          <p
            style={{ maxWidth: '50%' }}
            className="  text-xl text-grey dark:text-dark-white font-semibold"
          >
            <b>
              On <font color="#d5de26">ETHEREUM:</font>
            </b>
            <br></br>
            ETH, USDT, HEX, DAI, MATIC, wBTC, FTM, AAVE, 1INCH, CRV, YFI, USDC
            <br></br>
            <br></br>
            <b>
              On <font color="#d5de26">BINANCE SMART CHAIN:</font>
            </b>
            <br></br> BNB, USDT, DAI, TRX, ETH, DOT, XRP, BTCB, USDC, BCH, DOGE
            <br></br>
            <br></br>
            <b>
              On <font color="#d5de26">FANTOM:</font>
            </b>
            <br></br>
            FTM, CRV, YFI, fUSD, wBTC, USDC, WETH, DAI
            <br></br>
            <br></br>
            <b>
              On <font color="#d5de26">AVALANCHE:</font>
            </b>
            <br></br>
            AVAX, USDT, wBTC, USDC, WETH, DAI
            <br></br>
            <br></br>
            <b>
              On <font color="#d5de26">MATIC:</font>
            </b>
            <br></br>
            MATIC, USDT, HEX, DAI, WETH, wBTC, FTM, USDC
          </p>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <span className="text-5xl text-black dark:text-white font-bold my-7">
          <i>"All together we will build a better future"</i>
        </span>
        <div
          style={{ backgroundColor: 'black' }}
          className="md:container overf mx-auto flex items-center justify-center rounded-xl mt-7 h-80"
        >
          <span>
            <img className="h-full" src={bond} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Bonding
