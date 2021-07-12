import React, { Component} from 'react'

class ProgressBar extends Component{
    render() {
        return (
            <div>
                <h6>{this.props.title}</h6>
                <div className="progress">
                    <div className={[ "progress-bar" ,this.props.bgcolor].join(" ")}
                         role="progressbar" 
                         aria-valuenow={this.props.width} 
                         aria-valuemin="0" 
                         aria-valuemax="100" 
                         style={{width: this.props.width}}>
                        {this.props.width}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;

