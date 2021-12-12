import { CButton, CCollapse, CContainer, CNavbar, CNavbarNav, CNavbarToggler, CNavItem } from '@coreui/react';
import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Link } from 'react-router-dom';
import { injected } from '../../connectors';

const onConnect = () => {
    const { ethereum } = window
    ethereum.fire
}

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const web3React = useWeb3React()

    return (
        <>
            <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
                <CContainer fluid>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <span style={{ color: "#B9BEC7" }}>Todo List</span>

                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className="me-auto mb-2 mb-lg-0">
                            <CNavItem>
                                <Link to="/" className='custom-nav-link'>
                                    Home
                                </Link>
                                <CButton onClick={}>
                                    Connect
                                </CButton>
                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    )
}

export default Navbar
