export class DictionaryPicker {
  constructor(json) {
    return (selector = '') => {
      const select = selector.split('.')
      return select.reduce((acc, selector) => acc[selector], json)
    }
  }
}
