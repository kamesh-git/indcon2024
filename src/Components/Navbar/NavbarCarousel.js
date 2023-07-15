import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import NavCssTyping from './NavCssTyping';
import { images_url } from '../../assests/DataBase';
import About from '../About';

const NavbarCarousel = () => {
    return (
        <>
            <div id='HomeScroll' style={{ position:'relative' }}>
                <Carousel data-aos="fade-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500">
                    {[3, 2, 1, 5, 6, 7, 10, 8, 9, 4, 11].map((item, index) => {
                        return (
                            <Carousel.Item style={{ backgroundColor: 'black' }} key={`slide${item + 1}`}>
                                <img
                                    style={{ filter: 'opacity(0.7)', width: '50vw' }}
                                    className="d-block w-100"
                                    src={images_url + `gallery indcon/1 (${item}).jpeg`}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <div className='d-flex justify-content-center' style={{ position: 'absolute', top: '50%', width: '100%' }}><NavCssTyping /></div>
            </div>
            <About />

        </>
    )
}

export default NavbarCarousel