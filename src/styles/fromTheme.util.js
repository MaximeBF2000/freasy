import { DictionaryPicker } from '../utils'
import { theme } from '.'

export const fromTheme = (selector, transform) => {
  const getTheme = new DictionaryPicker(theme)
  const value = getTheme(selector)

  if (transform && transform instanceof Function) return transform(value)

  return value
}
