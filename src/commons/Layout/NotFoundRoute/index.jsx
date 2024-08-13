/**
 Mr : Pham Van Long
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import NotFoundComponents from '@helpers/NotFount';
 
function NotFoundLayoutRoute(props) {
    return (
        <Route component={NotFoundComponents} />
    );
}
 
export default NotFoundLayoutRoute;