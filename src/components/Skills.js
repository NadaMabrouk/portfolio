import React, { useEffect } from 'react'
import ProgressBar from './ProgressBar'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Skills (){
    
    useEffect(() => {
        AOS.init({ duration:1000 });
    },[])
    return (
            <div data-aos="fade-left" className="skills">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <h6>My Skills</h6>
                    <p>Here I'm showing my Front-End web development skills and My level in each one 
                        of them from my point of view 
                    </p>
                    </div>
                </div>
                <div className="row">
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