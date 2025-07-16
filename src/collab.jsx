import React from 'react'
import './Collab.css'
import Quanon from './assets/quanon.svg'
import Dhl from './assets/dhl.svg'
import Aws from './assets/aws.svg'
import Api from './assets/api.svg'
import Figma from './assets/figma.svg'

const Collab = () => {
  return (
    <div className='large-container'>
      <img src={Quanon} alt="" />
      <img src={Dhl} alt="" />
      <img src={Aws} alt="" />
      <img src={Api} alt="" />
      <img src={Figma} alt="" />
    </div>
  )
}

export default Collab
