import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/header';
export default class home extends Component {
    render() {
        return (
            <Header title="Amazing Recipes">
                <Link to="/recipes" 
                className="text-uppercase btn btn-info
                bt-lg mt-3">
                    search recipes
                </Link>
            </Header>
        )
    }
}
