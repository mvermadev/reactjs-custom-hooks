import React, { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {

  const [localStorageValue, setLocalStorageValue] = useState(()=>getLocalStorageValue(key, initialValue))
  

  const setValue = (value) =>{
    // check if function
    const valueToStore = value instanceof Function ? value(localStorageValue) : value;
    // now set the state.
    setLocalStorageValue(value);
    // set to localStorage.
    localStorage.setItem(key, JSON.stringify(valueToStore));
    
  }

  return [localStorageValue, setValue]
}

export function getLocalStorageValue(key, initialValue) {
  let itemFromStorage;
  if (typeof window !== "undefined") {
    itemFromStorage = localStorage.getItem(key)
  }
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

