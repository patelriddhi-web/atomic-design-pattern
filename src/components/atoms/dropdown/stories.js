/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import DropDown from './index'

storiesOf('Atom', module).add('dropdown', () => (
  <DropDown op1="customer" op2="customer2" op3="customer3">
    Example
  </DropDown>
))
