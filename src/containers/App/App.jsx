/* eslint-disable no-undef */
import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ThemeRoute from '@commons/Theme';
// import { ADMIN_ROUTES } from '@constants/index';
// import LoginContainer from '@containers/Default/Login/index';
// import { Provider } from 'react-redux';
// import configureStore from '@redux/configureStore';
// import PrivateRoute from '@commons/Layout/PrivateRoute';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import NotFoundRoute from '@commons/Layout/NotFoundRoute';
// import * as _ from 'lodash';

// const store = configureStore();
function App() {
    // const ADMIN_ROUTES_TEMP = [...ADMIN_ROUTES];
    // const url = window?.location?.pathname;
    // const renderAdminRoutes = () => {
    //     const xhtml = ADMIN_ROUTES_TEMP.map((route) => (
    //         <PrivateRoute
    //             key={route.id}
    //             path={route.pathRoute}
    //             component={route.component}
    //             exact={route.exact}
    //             name={route.name}
    //         />
    //     ));
    //     return xhtml;
    // };
    // console.disableYellowBox = true;
    // console.error = () => { };
    // const renderNotFoundRoute = () => <NotFoundRoute />;

    return (
        <div>â</div>
        // <Provider store={store}>
        //     <BrowserRouter>
        //         <MuiThemeProvider theme={ThemeRoute}>
        //             <CssBaseline />
        //             <ToastContainer
        //                 position="top-right"
        //                 autoClose={2000}
        //                 limit={1}
        //                 hideProgressBar={false}
        //                 newestOnTop={false}
        //                 closeOnClick
        //                 rtl={false}
        //                 pauseOnFocusLoss
        //                 draggable
        //                 pauseOnHover={false}
        //             />
        //             {
        //                 _.find(ComponentPermission, ['pathRoute', url]) ?
        //                     <div style={{ display: 'flex' }}>
        //                         <Switch>
        //                             {renderAdminRoutes()}
        //                         </Switch>
        //                     </div>
        //                     :
        //                     <Switch>
        //                         <Route exact path="/" component={LoginContainer} />
        //                         {renderNotFoundRoute()}
        //                     </Switch>
        //             }
        //         </MuiThemeProvider>
        //     </BrowserRouter>
        // </Provider>
    );
}

export default React.memo(App);
