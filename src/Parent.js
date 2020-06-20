import React from 'react'
import { Child } from './Child'

export const Parent = (props) => {
    return (
        <div>
            This Is Parent
            <Child num={props.num} />
        </div>
    )
}
