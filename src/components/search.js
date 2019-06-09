import React, { Component } from 'react'

export default class search extends Component {
    render() {
        const {handleChange,handleSubmit,search}=this.props;
        return (
            <div className="container">
                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                    <h1 className="text-slanted text-capitalize">
                        Search recipes with{" "}
                        <strong className="text-orange">
                            Food2fork
                        </strong>
                    </h1>
                    <form className="mt-4">
                        <label htmlfor="search" className="text-capitalize">
                            Search recipes
                        </label>
                        <div className="input-group">
                            <input type="text" name="search"
                            className="form-control" 
                            placeholder="chicken,onion"
                            value={search}
                            onChange={handleChange}/>
                            <div className="input-group-append">
                                <button className="input-group-text 
                                bg-primary text-white"
                                onClick={handleSubmit}>
                                <i className="fas fa-search" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
