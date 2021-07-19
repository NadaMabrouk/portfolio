import React, { Component } from 'react'
import { Carousel,CarouselItem } from 'react-bootstrap'
import {CarouselData} from './CarouselData'
import AOS from 'aos'
import 'aos/dist/aos.css';

class Projects extends Component {
    componentDidUpdate(){
        AOS.init({ duration:1000 });
    }
    render() {
        return(
            <div data-aos="fade-right" style={styles.projects}>
                <div className="row">
                <Carousel style={styles.carousel}>
                    {CarouselData.map(entry => {
                        return (
                            <CarouselItem key={entry.key}>
                                <img
                                    className="d-block w-100"
                                    src={entry.src}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <a className="carouselLink" href={entry.link} target="_blank"  rel="noreferrer">{entry.title}</a>
                                </Carousel.Caption>
                            </CarouselItem>
                        )
                    })}
                    </Carousel>
                </div>
            </div>
        )
    }
}
const styles = {
    projects: {
    width: '100%',
    padding: '10px'
    },
    carousel: {
        height:'100%',
        width:'100%',
    }
}
export default Projects