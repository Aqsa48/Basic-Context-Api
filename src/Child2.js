// for the reducer

import React, { useContext, useReducer } from 'react'
import numberReducer from './numberReducer'



export const Child2 = () => {
    let [state, dispatch] = useReducer(numberReducer, 43);

    return (
        <div>
            Using useReducer
            This is Child2 {state}
            <button onClick={() => { dispatch({ type: 'increament' }); }} > Increament</button>
            <button onClick={() => { dispatch({ type: 'decr eament' }); }}> Decreaments</button>
        </div >
    )
}
