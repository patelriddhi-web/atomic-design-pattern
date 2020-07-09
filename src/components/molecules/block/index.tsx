/* @flow */
import * as React from 'react'

import Button from '../../atoms/button/index'
import TextBox from '../../atoms/textbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../index.scss'

const SearchBar = () => {
  const searchResult = () => {
    console.log('hello')
  }
  return (
    <div className="searchbarWrapper">
      <Button type="button" disabled={false} className="left-btn" onClick={searchResult}>
        Kindle Store
      </Button>

      <TextBox type="text" className="text-box"></TextBox>

      <Button type="button" className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  )
}

export default SearchBar
