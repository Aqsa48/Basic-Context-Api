import React from 'react'

// passing the function with variable to update the state
const ValueContext = React.createContext(56, () => { })

export default ValueContext;