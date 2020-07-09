/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import CheckBox from './index'

storiesOf('Atom', module).add('checkbox', () => <CheckBox values={['a']} />)
