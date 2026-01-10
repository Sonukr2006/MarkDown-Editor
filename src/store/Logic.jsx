import React, { useContext } from 'react'
import style from './style.module.css'

export const ContextProvider  = () => {
    const UseContext = React.createContext({
        Contant : "",
    });
}


export const Logic = ({children}) => {
  return (
    <span className={style.Container}>{children}</span>
  )
}

