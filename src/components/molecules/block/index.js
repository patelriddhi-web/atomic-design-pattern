/* @flow */
import * as React from 'react'

import Button from '_components/atoms/button'
import TextBox from '_components/atoms/textbox'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../index.scss';



const SearchBar = ()=> {
  return (
    <div className='searchbarWrapper'>

    <Button type='button' disabled='false' className='left-btn'>Kindle Store</Button>
    
    <TextBox type='text' className='text-box'></TextBox>
   
    <Button type='button' disabled='false' height='40px' width='45px' className='search-btn'><FontAwesomeIcon icon={faSearch} /></Button>
    </div>
  )
}
  



export default SearchBar
