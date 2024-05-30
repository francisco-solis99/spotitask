import { useRef } from "react"

export default function useToggle() {
  const elementToToggle = useRef<HTMLElement>(null)

  const openElement = () => {
    elementToToggle?.current?.classList.add('is-open')
  }

  const closeElement = () => {
    elementToToggle?.current?.classList.remove('is-open')
  }

  return {
    elementToToggle,
    openElement,
    closeElement,
  }
}
