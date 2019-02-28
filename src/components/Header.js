import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-5">Project quan ly thanh vien bang React JS</h1>
                    <p className="lead">Voi du lieu Json</p>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Header;