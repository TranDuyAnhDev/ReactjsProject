/* eslint-disable no-undef */
import React from 'react';
import LoginComponent from '@components/Default/Login/index';
import { withRouter } from 'react-router';
import { connect, } from 'react-redux';
import {
    bindActionCreators, compose,
} from 'redux';
import * as loginActions from '@actions/login';
import queryString from 'query-string';

function LoginContainer(props) {
    const { loginActionCreators, status, infoLogin, history, isLoad } = props;
    const params = queryString.parse(history.location.search);
    return (
        <LoginComponent />
    );
}
const mapStateToProps = (state) => ({
    infoLogin: state.login.infoLogin,
    isLoad: state.login.status.isLoad,
    status: state.login.status,
});
const mapDispatchToProps = (dispatch) => ({
    loginActionCreators: bindActionCreators(loginActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withRouter,
    withConnect,
)(LoginContainer);
