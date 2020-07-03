/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../atoms/button/index'
import SearchBar from './block'

storiesOf('Molecule', module).add('searchbar', () => <SearchBar></SearchBar>)
