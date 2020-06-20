import React from 'react'
import { Child } from './Child'

export const Parent = (props) => {
    return (
        <div>
            this is parent
            <Child num={props.num} />
        </div>
    )
}
