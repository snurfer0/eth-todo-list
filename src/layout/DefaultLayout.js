import { CContainer, CSpinner } from '@coreui/react';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/items/Navbar';
import HomePage from "../components/pages/HomePage";

class PublicLayout extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                {/* <ConnectWallet /> */}
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <div className="body flex-grow-1 px-3">
                        <CContainer lg>
                            <Suspense fallback={<CSpinner color="primary" />}>
                                <Switch>
                                    <Route exact path='/' component={HomePage} />
                                </Switch>
                            </Suspense>
                        </CContainer>
                    </div>
                </div>
            </>
        );
    }
}

export default PublicLayout