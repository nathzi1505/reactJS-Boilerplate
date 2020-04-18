import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <div>
                <h1 className="box-layout__title">Boilerplate</h1>
                <p>Tagline for App.</p>
            </div>
            <button className="button" onClick={props.startLogin}>Login with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)