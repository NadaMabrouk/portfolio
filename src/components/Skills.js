import React, { Component, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Skills (){
    // componentDidMount(){
    //     const observer = new IntersectionObserver(entries => {
    //         // Loop over the entries
    //         entries.forEach(entry => {
    //           // If the element is visible
    //           if (entry.isIntersecting) {
    //             // Add the animation class
    //             entry.target.classList.add('animated');
    //             entry.target.classList.add('fadeInUp');
    //           }
    //         });
    //       });
          
    //       var allElements = document.querySelectorAll('.skills .progress')
    //       allElements.forEach(elem => observer.observe(elem))
    // }
    // render(){
    useEffect(() => {
        AOS.init({ duration:500 });
    },[])
    return (
            <div className="skills">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <h6>My Skills</h6>
                    <p>Here I'm showing my Front-End web development skills and My level in each one 
                        of them from my point of view 
                    </p>
                    </div>
                </div>
                <div data-aos="fade-in" className="row">
                    <div className=" col-md-5 col-lg-5">
                        <ProgressBar title="HTML5" bgcolor="color-1" width="90%"/>
                        <ProgressBar title="CSS" bgcolor="color-2" width="85%"/>
                        <ProgressBar title="Javascript" bgcolor="color-3" width="75%"/>
                        <ProgressBar title="JQuery" bgcolor="color-4" width="60%"/>
                    </div>
                    
                    <div className="col-md-5 col-lg-5">
                        <ProgressBar title="React" bgcolor="color-2" width="60%"/>
                        <ProgressBar title="Bootstrap" bgcolor="color-1" width="80%"/>
                        <ProgressBar title="Ajax" bgcolor="color-3" width="40%"/>        
                    </div>
                </div>
            </div>
    )
// }
}

// export default Skills;