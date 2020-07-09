/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import BestSeller from './index'

storiesOf('Atom', module).add('bestseller', () => <BestSeller text="best seller"></BestSeller>)
