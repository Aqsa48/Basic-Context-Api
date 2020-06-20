import React, { useContext } from 'react'
import ValueContext from './ValueContext'

export const Child = () => {
    let value = useContext(ValueContext)
    return (
        <div>
            child component data is {value}
        </div>
    )
}
