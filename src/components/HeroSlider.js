import React from 'react'
import {Carousel} from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Ct2x0T6/Cover-063330.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>2 - 20 years from now</h3>
                        <p>Hi.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/qmPJ15Z/Img1-0-00-00-00.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>2 years from now</h3>
                        <p>Starting MIT Masters Degree.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/w0pksrX/Img2.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>2 years from now</h3>
                        <p>Getting my first appartment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/L1y8TSk/Img3.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>5 years from now</h3>
                        <p>Finishing my PhD</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XSrgTHW/09.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>5 years from now</h3>
                        <p>Getting a fckin BMW</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ZYMH3mj/Img4.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>10 years from now: My 35th B-Day</h3>
                        <p>Hangover night in Las Vegas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/St5tR2r/Img5.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>15 years from now</h3>
                        <p>Receiving a VFX Award</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pQkyK6d/IMG6-062050.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>20 years from now</h3>
                        <p>Getting my first house</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider
