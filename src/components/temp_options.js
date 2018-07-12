import React, { Component } from 'react'

export default class TempOptions extends Component {
    render() {
        return (
            <div className="dropdown">
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                    Units
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">F</a>
                    <a className="dropdown-item" href="#">C</a>
                    <a className="dropdown-item" href="#">K</a>
                </div>
            </div>
        )
    }
}