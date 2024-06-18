import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '@commons/storage';
import { PATH_ROUTE } from '@constants/pathRoute';
import Header from '@helpers/Header/index';
import clsx from 'clsx';


import useStyles from './styles';
function PrivateRoute(props) {
    const { component: ChildrenAdminComponent, location,...other } = props;

    const classes = useStyles();

    const checkAdminHomePage = (location) => {
        const baseUrls = [
            PATH_ROUTE.dashboard,
        ];
        const num = baseUrls.indexOf(location);
        return num !== -1;
    };
    return (
        <React.Fragment>
            <Route
                {...other}
                render={(routeProps) => getToken() ? (
                    // <div style={{display:'flex'}}>
                    //     <Header/> 
                    <main className={classes.content}>
                        <div 
                            className={clsx(classes.toolbar, {
                                [classes.contentAdmin]: !checkAdminHomePage(location.pathname),
                            })}
                        >
                            <ChildrenAdminComponent {...routeProps} />
                        </div>
                    </main>
                    // </div>  
                ) : 
                    <Redirect
                        to={{
                            pathname: '/',
                        }}
                    />
                }
            />
        </React.Fragment>
    );
}

export default React.memo(PrivateRoute);