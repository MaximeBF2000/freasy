import React from 'react'
import { InputWrapper, Input as StyledInput } from './Input.styled'

export const Input = ({ ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...props} />
    </InputWrapper>
  )
}
