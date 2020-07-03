/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import TextBlock from './index'

storiesOf('Molecule', module).add('textBlock', () => <TextBlock upText='hello' downText='world' ></TextBlock>)
