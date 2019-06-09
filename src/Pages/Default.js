import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/header";
export default class Default extends Component {
    render() {
        return (
            <Header title="404" styleClass='default-hero'>
                <h2 className="text-light text-uppercase">you are in wrong page</h2>
                <Link to='/'
                className="text-uppercase btn btn-info
                bt-lg mt-3">
                    return home
                    </Link>            
            </Header>
        )
    }
}
