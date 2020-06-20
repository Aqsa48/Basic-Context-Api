import React, { useContext } from 'react'
import ValueContext from './ValueContext'

export const Child = () => {
    let value = useContext(ValueContext)
    //   updatefunc = value[1]

    return (
        <div>
            Using useState
            child component data is {value}
            <button onClick={() => { value[1](++value[0]) }}  > Increase</button>
            <button onClick={() => { value[1](--value[0]) }}  > Decrease</button>

        </div >
    )
}
