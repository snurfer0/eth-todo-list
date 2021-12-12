import { cilWallet } from "@coreui/icons"
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { injected } from '../../connectors'
import { useEagerConnect, useInactiveListener } from '../../hooks'
import { formatWalletAddress } from "../../utils/formatters"

const ConnectButton = () => {

    const context = useWeb3React()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context
    const [activatingConnector, setActivatingConnector] = React.useState()
    const [connected, setConnected] = React.useState(false)


    React.useEffect(() => {
        const conn = account !== undefined
        setConnected(conn)
        console.log(connected)
    }, [account])

    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    React.useEffect(() => {
        console.error(error)
    }, [error])

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    return <CButton color="dark" style={{ color: "white" }} disabled={connected} onClick={() => activate(injected)}>
        {connected
            ? <><CIcon icon={cilWallet} /> {formatWalletAddress(account)} </>
            : <><CIcon icon={cilWallet} /> Connect wallet</>
        }
    </CButton>

}

export default ConnectButton


