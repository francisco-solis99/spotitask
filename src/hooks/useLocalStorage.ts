import { useEffect, useState } from "react"

export default function useLocalStorage({itemName, initialValue}: {itemName: string, initialValue: any}) {

  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    setLoading(true)

    try {
      const localStorageItem = window.localStorage.get(itemName)

      if(!localStorageItem) {
        window.localStorage.setItem(itemName, JSON.stringify(item))
        return
      }
      const parsedItem = JSON.parse(localStorageItem)
      setItem(JSON.parse(parsedItem))

    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])


  const saveItem = (newItem: any) => {
    const stringNewItem = JSON.stringify(newItem)
    window.localStorage.setItem(itemName, stringNewItem)
    setItem(newItem)
  }


  const removeItem = () => {
    window.localStorage.clean(itemName)
  }


  return {item, loading, error, saveItem, removeItem}
}
