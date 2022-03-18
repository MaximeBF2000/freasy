import initialState from './initialState'

export default (state = initialState, action = {}) => {
  const { type, ...payload } = action

  switch (type) {
    case 'change_route':
      return { ...state, currentRoute: payload?.to }

    default:
      return state
  }
}
