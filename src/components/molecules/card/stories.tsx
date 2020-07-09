/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './index'

storiesOf('Molecule', module).add('card', () => (
  <Card
    desc='All-New Kindle (10th Gen), 6" Display now with Buil…'
    brand="Amazon"
    price="7,999"
    rate="4"
    src=""
  />
))
