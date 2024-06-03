import { useEffect, useState } from "react"

export default function useLocalStorage({itemName, initialValue}: {itemName: string, initialValue: any}) {

  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    try {
      setTimeout(() => {
        const localStorageItem = window.localStorage.getItem(itemName)

        if(!localStorageItem) {
          console.log('not exist list in storage');
          window.localStorage.setItem(itemName, JSON.stringify(item))

        }
        else {
          const parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
      }, 2000)

    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }, [])


  const saveItem = (newItem: any) => {
    if(!newItem.length) return
    const stringNewItem = JSON.stringify(newItem)
    window.localStorage.setItem(itemName, stringNewItem)
  }


  const removeItem = () => {
    window.localStorage.clean(itemName)
  }

  return {item, loading, error, saveItem, removeItem}
}
