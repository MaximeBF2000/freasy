export const hasProp = (propKey, style) => props => {
  if (props[propKey]) {
    return style instanceof Function ? style(props) : style
  } else {
    return ''
  }
}
