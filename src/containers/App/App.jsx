import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ADMIN_ROUTES } from '@constants/index';
import { Provider } from 'react-redux';
import configureStore from '@redux/configureStore';
import PrivateRoute from '@commons/Layout/PrivateRoute';
import * as _ from 'lodash';
console.log(11111);

const store = configureStore();
console.log(store,'store');

console.log('aaa');
function App() {
    const ADMIN_ROUTES_TEMP = [...ADMIN_ROUTES];
    const url = window?.location?.pathname;
    const renderAdminRoutes = () => {
        const xhtml = ADMIN_ROUTES_TEMP.map((route) => (
            <div>aa</div>
            // <PrivateRoute
            //     key={route.id}
            //     path={route.pathRoute}
            //     component={route.component}
            //     exact={route.exact}
            //     name={route.name}
            // />
        ));
        return xhtml;
    };
    // console.disableYellowBox = true;
    // console.error = () => { };
    // const renderNotFoundRoute = () => <NotFoundRoute />;
    console.log(1111);
    return (
        <Provider store={store}>
            <BrowserRouter>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        limit={1}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                    />
                    <div style={{ display: 'flex' }}>
                        sss
                    </div>
                    {/* {
                        _.find(ComponentPermission, ['pathRoute', url]) ?
                            <div style={{ display: 'flex' }}>
                                <Switch>
                                    {renderAdminRoutes()}
                                </Switch>
                            </div>
                            :
                            <Switch>
                                <Route exact path="/" component={LoginContainer} />
                                {renderNotFoundRoute()}
                            </Switch>
                    } */}
            </BrowserRouter>
        </Provider>
    );
}

export default React.memo(App);
