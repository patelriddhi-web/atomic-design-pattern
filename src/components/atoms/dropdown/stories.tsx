/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { options } from '../../constants'

import DropDown from './index'

storiesOf('Atom', module).add('dropdown', () => <DropDown option={options}></DropDown>)
