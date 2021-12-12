import { CCollapse, CContainer, CNavbar, CNavbarNav, CNavbarToggler, CNavItem } from '@coreui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <span style={{ color: "#B9BEC7" }}>Todo List</span>

                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className="me-auto mb-2 mb-lg-0">
                            <CNavItem>
                                <Link to="/" className='custom-nav-link'>
                                    Home
                                </Link>
                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    )
}

export default Navbar
