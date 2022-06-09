import React, { useEffect, useState } from 'react'
import CoinSelect from './CoinSelect'
import Timer from './Timer/Timer'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import copy from '../../../assets/copy_.png'
import BTC from '../../../assets/btc-logo.svg'
import usdt from '../../../assets/usdt-logo.png'
import avax from '../../../assets/avax-token.png'
import eth from '../../../assets/eth-logo.png'
import hex from '../../../assets/hex-logo.png'
import matic from '../../../assets/matic-logo.png'
import wbtc from '../../../assets/wbtc-logo.png'
import usdc from '../../../assets/usdc-logo.png'
import luna from '../../../assets/luna-logo.png'
import bnb from '../../../assets/bnb-logo.png'
import trx from '../../../assets/trx-logo.png'
import ada from '../../../assets/ada-logo.png'
import dot from '../../../assets/dot-logo.png'
import xrp from '../../../assets/xrp-logo.png'
import btcb from '../../../assets/btcb-logo.png'
import bch from '../../../assets/bch-logo.png'
import doge from '../../../assets/doge-logo.png'
import dai from '../../../assets/dai_.png'
import fantom from '../../../assets/t3.png'
import inch from '../../../assets/t0.svg'
import curve from '../../../assets/t1.svg'
import yfi from '../../../assets/t2.svg'
import aave from '../../../assets/t4.png'
import fUSD from '../../../assets/fUSD.png'
import BUSD from '../../../assets/BUSD.png'
const WalletSelect = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('ETH')
  const [sentence0, setSentence0] = useState('AirDAO Sacrifice')
  const [sentence1, setSentence1] = useState('Starts in')
  const [visible, setVisible] = useState(false)
  const [nextDate, setNextDate] = useState(1656540000)
  const setClipboard = (e) => {
    //! ADD Notify PopUp message
    e.clipboardData.setData('0x4297A2bEDf9bbC0f0701E6522bdD34C0967D0e89')
  }

  const checkData = () => {
    const now = +new Date()
    // const _now = now.setSeconds(now.getSeconds())
    const _now = Math.floor(+new Date() / 1000)
    // const _now = 1653947000
    console.log(_now)
    console.log(_now)
    console.log(_now)
    console.log(_now)
    console.log(_now)
    console.log(_now)
    console.log(_now)
    console.log(_now)
    if (_now <= 1652738400) {
      //? 17/05/22
      //*Sacrifice Starts in..
      setSentence1('Starts in')
      setNextDate(1652738400)
    } else if (_now > 1652738400 && _now < 1653948000) {
      //? 31/05/22
      //* Sacrifice BONUS Multiplier x5
      setSentence1('BONUS Multiplier x5 ends in')
      setVisible(true)
      setNextDate(1653948000)
    } else if (_now >= 1653948000 && _now < 1656540000) {
      //? 30/06//22
      //* Sacrifice BONUS Multiplier x2 (Decreasing 1% x day)
      setSentence1('BONUS Multiplier x2  ends in')
      setVisible(true)
      setNextDate(1656540000)
    } else if (_now >= 1656540000 && _now < 1658008800) {
      //? 17/07/22
      //* Sacrifice BONUS Multiplier x1 (While decreasign 1% x day since previous-stage)
      setSentence1('BONUS Multiplier x1  ends in')
      setNextDate(1658008800)
      setVisible(true)
    }
    console.log(visible)
    console.log(visible)
    console.log(visible)
    console.log(visible)
    console.log(visible)
  }

  useEffect(() => {
    checkData()
  }, [])

  return (
    <div className="mt-24">
      <div className="md:container mx-auto mt-24 flex flex-col items-center">
        <span className="text-5xl font-bold text-black dark:text-white ">
          <font className="text-black dark:text-white">{sentence0}</font>
        </span>
      </div>

      <Timer nextDate={nextDate} />
      <br></br>

      <div className="selection flex flex-col items-center justify-center ">
        <p style={{ fontSize: '16px', marginTop: '16px' }}>
          <b>
            <font className="text-black dark:text-white">{sentence1}</font>
          </b>
        </p>
        <br></br>
        <br></br>
        <p style={{ fontSize: '16px', marginTop: '16px' }}>
          <font className="text-black dark:text-white">
            {' '}
            Select in which network you want to sacrifice
          </font>
        </p>
        <div
          style={{ gap: '20px' }}
          className=" my-9  select-network flex-wrap w-full md:flex-nowrap flex items-center justify-center "
        >
          <span
            onClick={() => setSelectedNetwork('ETH')}
            className="cursor-pointer text-black dark:text-white"
            style={{ color: selectedNetwork === 'ETH' ? '#d5de26' : '' }}
            // style={{ color: selectedNetwork === 'ETH' ? '#00cc33' : '#313131' }}
          >
            <b>ETH</b>
          </span>
          <span className="text-black dark:text-white"> </span>
          <span
            onClick={() => setSelectedNetwork('BSC')}
            className="cursor-pointer text-black dark:text-white"
            style={{ color: selectedNetwork === 'BSC' ? '#d5de26' : '' }}
          >
            <b>BSC</b>
          </span>

          <span className="text-black dark:text-white"> </span>
          <span
            onClick={() => setSelectedNetwork('FANTOM')}
            className="cursor-pointer text-black dark:text-white"
            style={{
              color: selectedNetwork === 'FANTOM' ? '#d5de26' : '',
            }}
          >
            <b>FANTOM</b>
          </span>
          <span className="text-black dark:text-white"> </span>
          <span
            onClick={() => setSelectedNetwork('AVAX')}
            className="cursor-pointer text-black dark:text-white"
            style={{
              color: selectedNetwork === 'AVAX' ? '#d5de26' : '',
            }}
          >
            <b>AVAX</b>
          </span>
          <span className="text-black dark:text-white"> </span>

          <span
            onClick={() => setSelectedNetwork('MATIC')}
            className="cursor-pointer text-black dark:text-white"
            style={{
              color: selectedNetwork === 'MATIC' ? '#d5de26' : '',
            }}
          >
            <b>MATIC</b>
          </span>
        </div>
        <div style={{ margin: 'auto' }} className="mt-3 flex align-self-start ">
          <div
            style={{
              display: selectedNetwork === 'ETH' ? 'flex' : 'none',
              gap: '10px',
            }}
            className="flex-wrap w-full md:flex-nowrap flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={eth}
                alt="ETH"
              />
              <span className="text-black dark:text-white">ETH</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdt}
                alt="USDT"
              />
              <span className="text-black dark:text-white">USDT</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={hex}
                alt="HEX"
              />
              <span className="text-black dark:text-white">HEX</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={dai}
                alt="DAI"
              />
              <span className="text-black dark:text-white">DAI</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={matic}
                alt="MATIC"
              />
              <span className="text-black dark:text-white">MATIC</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={wbtc}
                alt="WBTC"
              />
              <span className="text-black dark:text-white">WBTC</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={fantom}
                alt="FTM"
              />
              <span className="text-black dark:text-white">FTM</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={aave}
                alt="FTM"
              />
              <span className="text-black dark:text-white">AAVE</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={inch}
                alt="FTM"
              />
              <span className="text-black dark:text-white">1INCH</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={curve}
                alt="FTM"
              />
              <span className="text-black dark:text-white">CRV</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={yfi}
                alt="FTM"
              />
              <span className="text-black dark:text-white">YFI</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdc}
                alt="USDC"
              />
              <span className="text-black dark:text-white">USDC</span>
            </div>
            <br></br>
          </div>
          <div
            style={{
              display: selectedNetwork === 'BSC' ? 'flex' : 'none',
              gap: '20px',
            }}
            className="flex-wrap w-full md:flex-nowrap flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={bnb}
                alt="BNB"
              />
              <span className="text-black dark:text-white">BNB</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={BUSD}
                alt="BUSD"
              />
              <span className="text-black dark:text-white">BUSD</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdt}
                alt="USDT"
              />
              <span className="text-black dark:text-white">USDT</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={dai}
                alt="DAI"
              />
              <span className="text-black dark:text-white">DAI</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={trx}
                alt="TRX"
              />
              <span className="text-black dark:text-white">TRX</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={eth}
                alt="ETH"
              />
              <span className="text-black dark:text-white">ETH</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={dot}
                alt="DOT"
              />
              <span className="text-black dark:text-white">DOT</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={xrp}
                alt="XRP"
              />
              <span className="text-black dark:text-white">XRP</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={btcb}
                alt="BTCB"
              />
              <span className="text-black dark:text-white">BTCB</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdc}
                alt="USDC"
              />
              <span className="text-black dark:text-white">USDC</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={bch}
                alt="BCH"
              />
              <span className="text-black dark:text-white">BCH</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={doge}
                alt="DOGE"
              />
              <span className="text-black dark:text-white">DOGE</span>
            </div>
            <br></br>
          </div>
          <div
            style={{
              display: selectedNetwork === 'MATIC' ? 'flex' : 'none',
              gap: '20px',
            }}
            className="flex-wrap w-full md:flex-nowrap flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={matic}
                alt=""
              />
              <span className="text-black dark:text-white">MATIC</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdt}
                alt=""
              />
              <span className="text-black dark:text-white">USDT</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img className="w-4" style={{ width: '32px' }} src={hex} alt="" />
              <span className="text-black dark:text-white">HEX</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={dai}
                alt="DAI"
              />
              <span className="text-black dark:text-white">DAI</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={eth}
                alt="ETH"
              />
              <span className="text-black dark:text-white">WETH</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={wbtc}
                alt=""
              />
              <span className="text-black dark:text-white">WBTC</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={fantom}
                alt="FTM"
              />
              <span className="text-black dark:text-white">FTM</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdc}
                alt=""
              />
              <span className="text-black dark:text-white">USDC</span>
            </div>
            <br></br>
          </div>
          {/* //TODO: */}
          <div
            style={{
              display: selectedNetwork === 'FANTOM' ? 'flex' : 'none',
              gap: '20px',
            }}
            className="flex-wrap w-full md:flex-nowrap flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={fantom}
                alt="FTM"
              />
              <span className="text-black dark:text-white">FTM</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={curve}
                alt="FTM"
              />
              <span className="text-black dark:text-white">CRV</span>
            </div>
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={yfi}
                alt="FTM"
              />
              <span className="text-black dark:text-white">YFI</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={fUSD}
                alt=""
              />
              <span className="text-black dark:text-white">fUSD</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={wbtc}
                alt=""
              />
              <span className="text-black dark:text-white">WBTC</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdc}
                alt=""
              />
              <span className="text-black dark:text-white">USDC</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img className="w-4" style={{ width: '32px' }} src={eth} alt="" />
              <span className="text-black dark:text-white">WETH</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img className="w-4" style={{ width: '32px' }} src={dai} alt="" />
              <span className="text-black dark:text-white">DAI</span>
            </div>
            <br></br>
          </div>
          {/* //TODO: */}
          <div
            style={{
              display: selectedNetwork === 'AVAX' ? 'flex' : 'none',
              gap: '20px',
            }}
            className="flex-wrap w-full md:flex-nowrap flex items-center justify-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={avax}
                alt=""
              />
              <span className="text-black dark:text-white">AVAX</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdt}
                alt=""
              />
              <span className="text-black dark:text-white">USDT</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={wbtc}
                alt=""
              />
              <span className="text-black dark:text-white">WBTC</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img
                className="w-4"
                style={{ width: '32px' }}
                src={usdc}
                alt=""
              />
              <span className="text-black dark:text-white">USDC</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img className="w-4" style={{ width: '32px' }} src={eth} alt="" />
              <span className="text-black dark:text-white">WETH</span>
            </div>
            <br></br>

            <div className="flex flex-col justify-center items-center">
              <img className="w-4" style={{ width: '32px' }} src={dai} alt="" />
              <span className="text-black dark:text-white">DAI</span>
            </div>
            <br></br>
          </div>
        </div>
        {selectedNetwork === '' ? (
          <div className="address mt-3 flex items-center justify-content-space-between">
            <br></br>
          </div>
        ) : !visible ? (
          <div className="address mt-3 flex items-center justify-content-space-between">
            <span
              className="flex items-center justify-center dark:text-white text-black text-align-center"
              style={{ fontSize: '30px' }}
            >
              <br></br>
              <br></br>
              <font color="#d5de26">Sacrifice has not started </font>
            </span>
          </div>
        ) : (
          <div className="address mt-3 px-9 flex items-center justify-content-space-between">
            <br></br>
            <br></br>
            <span
              className="flex items-center w-full break-all  justify-center dark:text-white text-black text-align-center"
              style={{ fontSize: '30px' }}
            >
              0x4297A2bEDf9bbC0f0701E6522bdD34C0967D0e89{' '}
            </span>
            <CopyToClipboard
              text={'0x4297A2bEDf9bbC0f0701E6522bdD34C0967D0e89'}
            >
              <button
                style={{ background: 'none', border: 'none', outline: 'none' }}
              >
                <img
                  style={{ cursor: 'pointer' }}
                  className="ml-3 w-9"
                  src={copy}
                  onClick={setClipboard}
                  alt=""
                />
              </button>
            </CopyToClipboard>
          </div>
        )}
      </div>
    </div>
  )
}

export default WalletSelect
