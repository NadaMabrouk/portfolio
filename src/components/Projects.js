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
                                    <a href={entry.link} target="_blank"  rel="noreferrer">{entry.title}</a>
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
    height: '400px',
    width: '100%',
    },
    carousel: {
        height:'100%',
        width:'100%',
        background:'red'
    }
}
export default Projects