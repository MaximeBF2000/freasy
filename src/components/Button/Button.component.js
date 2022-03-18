import React from 'react'
import { Button as StyledButton } from './Button.styled'
import cx from 'classnames'

export const Button = ({ variant, children, className, ...props }) => {
  return (
    <StyledButton className={cx(className, variant)} {...props}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: 'primary',
}
