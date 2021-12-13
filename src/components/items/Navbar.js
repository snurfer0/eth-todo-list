import { CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler } from '@coreui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectButton from './ConnectButton';


const Navbar = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
                <CContainer fluid>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CNavbarBrand href="#">
                        TaskList
                    </CNavbarBrand>
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className="me-auto mb-2 mb-lg-0">
                            <Link to="/" className='custom-nav-link'>
                                Home
                            </Link>
                        </CNavbarNav>
                    </CCollapse>
                    <ConnectButton />
                </CContainer>
            </CNavbar>
        </>
    )
}

export default Navbar
