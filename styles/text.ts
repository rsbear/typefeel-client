import { jsx, css } from '@emotion/core'
import { colors } from './main'

export const fontSize = {
  huge: '6rem',
  big: '3rem',
  small: '.875rem',
  tiny: '.75rem'
}

const line = css`
  font-size: .875rem;
  line-height: 24px;
  color: ${colors.black60};
`

export const f1 = css`
  font-size: 3rem;
  color: ${colors.black70};
`

export const text = {
  line: line,
  heading: f1
}