import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { injected } from '../../connectors'


// This component must be a child of <App> to have access to the appropriate context
const WalletConnect = () => {
    console.log("WalletConnect.js running..")
    const web3React = useWeb3React()
    const { account } = web3React
    console.log(account)

    React.useEffect(() => {
        web3React.activate(injected)
        console.log(web3React)
    }, [])

    console.log(web3React)

    return <h1>sasati</h1>
}
export default WalletConnect