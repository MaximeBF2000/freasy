import { useState } from 'react'

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)

  const toggleState = value =>
    setState(prevState => (value ? value : !prevState))

  return [state, toggleState]
}
