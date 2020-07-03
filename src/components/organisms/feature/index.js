/* @flow */
import * as React from 'react'

import Button from '../../atoms/button'
import SearchBar from '../../molecules/block'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import Image from '../../atoms/images/index'
import  logo  from '../../assets/icons/logo.svg'
import flag from '../../assets/icons/flag.jpg'
import TextBlock from '../../molecules/textBlock/index'
import cart from '../../assets/icons/cart.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='btn-img'>
        <Button type='button' className='menu-btn' height='40px'  width='40px'><FontAwesomeIcon icon={faBars} /></Button>
        <Image height='30px' width='100px' src={logo} alt='' className='logo'></Image>
        </div>
        
        <div className='search-bar'>
          <SearchBar></SearchBar>
        </div>
         <div className='flag'>
          <Image height='30px' width='40px' src={flag}/>
        </div>
       <div className='text-block'>
         <TextBlock upText='Hello,Riddhi' downText='Account & Lists' />
       </div>
       <div className='text-block'>
         <TextBlock upText='Returns' downText='& Orders' />
       </div>
       <div className='text-block'>
         <TextBlock upText='Try' downText='Prime' />
       </div>
       <div className='cart'>
         <Image height='60px' width='100px' src={cart}/>
       </div>
    </div>
  )
}


export default Header
