/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Star from './index'

storiesOf('Atom', module).add('star', () => <Star color="checked" />)
