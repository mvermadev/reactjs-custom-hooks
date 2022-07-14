import React, { useEffect, useState } from 'react'
import {useLocalStorage, getLocalStorageValue} from '../hooks/useLocalStorage';

export default function LSExample() {

    const [task, useTask] = useLocalStorage('task', '');

    const [storageValue, setStorageValue] = useState('')
  
    useEffect(() => {
        return localStorage.length > 0 ? setStorageValue(true) : false;
    }, [])


  return (
    <div>
        <form className='form-vertical'>
            <div>
                <label className='control-label'>Task</label>
                <input type='text' value={task} onChange={(e)=>useTask(e.target.value)} />
            </div>
            <div>
                <p>
                    {
                        storageValue && getLocalStorageValue('task')
                    }
                </p>
            </div>
        </form>
    </div>
  )
}
