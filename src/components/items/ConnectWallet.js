import React, { useEffect } from 'react'
import { useWeb3Context } from 'web3-react'
import Loading from '../../animations/Loading'

// This component must be a child of <App> to have access to the appropriate context
export default () => {
    const context = useWeb3Context()
    console.log(context)

    useEffect(() => {
        context.setFirstValidConnector(['MetaMask'])
    }, [context])

    if (!context.active && !context.error) {
        return <Loading />
    } else if (context.error) {
        alert(context.error)
        return <h1>{context.error}</h1>
    } else {
        return <h1>Account: {context.account}</h1>
    }
}