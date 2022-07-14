import React, { useEffect, useState } from 'react'

export default function InputValue(props) {

    const { setValue, showValue = false } = props; 

    const [getValue, setGetValue] = useState('')
  
    // useEffect(()=>{
    //     setGetValue(setValue)
    // }, setValue)

  return showValue ? <p>{setValue}</p> : ''
}
