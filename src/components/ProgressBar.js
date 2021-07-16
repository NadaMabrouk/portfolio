import React, { Component} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

class ProgressBar extends Component{
    componentDidMount(){
        AOS.init({ duration:1000 });
    }
    render() {
        return (
            <div>
                <h6>{this.props.title}</h6>
                <div data-aos="fade-up" data-aos-delay="50" className="progress">
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

