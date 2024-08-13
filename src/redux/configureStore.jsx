import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../../../../GMO/admin_pl/src/reducers';

/** redux-saga */
import rootSaga from '../../../../GMO/admin_pl/src/sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middleWares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...(middleWares))];
    const store = createStore(rootReducers, composeWithDevTools(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
};
export const RootStore = rootReducers;

export default configureStore;