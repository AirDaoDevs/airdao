import React from 'react'
import mastercard from '../../../assets/mastercard-small.jpg'
import zapper from '../../../assets/zapper-small.jpg'
import bond from '../../../assets/bond-carbon.png'
import BuyHero from './BuyHero'
import Safety from './Safety'
import CreditCard from './CreditCard'
import Zapper from './Zapper'
import Bonding from './Bonding'
import WalletSelect from './WalletSelect'
const Buy = () => {
  return (
    <div className="">
      <WalletSelect />
      <BuyHero />
      <Safety />
      <CreditCard />
      {/* <CreditCard2 /> */}
      <Zapper />
      <Bonding />
    </div>
  )
}

export default Buy
