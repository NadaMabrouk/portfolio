import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration:1000 });
    },[])
    return (
        <div data-aos="fade-right" 
            data-aos-offset="300"   
            data-aos-easing="ease-in-sine" className="row">
        <div className="col-sm-12 about animated fadeInUp">
            <h6>About Me</h6>
            <h2>Who am i?</h2>
            <p>
            <strong>Hi, I'm Nada. </strong>I'm a Computer Science graduate, worked as a Teaching Assistant at the Faculty of
            Computers and Information for 3 years then i had to move out from my country to California
            where i had no working visa and then had a baby so i had to stay off work for 3 years taking
            care of her.
            </p>
            <p>
            Now, I'm trying to get back to work as a software engineer. I've been practicing Front-End
            web development while staying at home and practicing problem solving. I completed the
            Udacity Front-End nanodegree program and the Udacity React nanodegree program.
            Currently, I’m working on the FreeCodeCamp set of projects to deploy what I've learnt out of
            the nanodegrees I took.
            </p>
            <p>
            I'm currently looking for Job opportunities as Front-end Web developer.
            </p>
        </div>
        </div>
    )
}

export default About;