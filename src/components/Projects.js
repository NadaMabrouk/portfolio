import React, { Component } from 'react'
import { Carousel,CarouselItem } from 'react-bootstrap'
import {CarouselData} from './CarouselData'

class Projects extends Component {
    render() {
        return(
            <div style={styles.projects}>
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