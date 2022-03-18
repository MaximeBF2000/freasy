import { useToggle } from '../../utils'

export const useExpensesScroll = () => {
  const [showEndListCover, toggleShowEndListCover] = useToggle(true)

  const handleScroll = evt => {
    const { scrollTop, scrollHeight, clientHeight } = evt.target
    if (scrollHeight - scrollTop <= clientHeight) {
      toggleShowEndListCover(true)
    } else if (showEndListCover) {
      toggleShowEndListCover(false)
    }
  }

  return [showEndListCover, handleScroll]
}
