import React from 'react'
import './FooterMap.css'
import { images_url } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'
import { useContext } from 'react'
import ContextProvider from '../../assests/Contextprovider'

const FooterMap = () => {
    const {indconlogo,setIndconlogo} = useContext(ContextProvider)
    return (
        <footer>
            <HeadingComp head={'Reach us at'} />
            <div className="container-fluid padding aos-init" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <div className="row text-center">
                    <div className="col-lg-3 pt-0">
                        <div className="footer-image">
                            <img alt='loading...' src={indconlogo} style={{ width: '150px', height: '150px' }}></img>
                        </div>
                        <hr className="light"></hr>
                        <p><a href="mailto:sieofficial24@gmail.com">sieofficial24@gmail.com</a></p>
                        <p>I Jaikanth: <a href="tel:+919345456525">+919345456525</a></p>
                        <p>Shneha Puviarasan: <a href="tel:+919499953603">+919499953603</a></p>
                    </div>
                    <div className="col-lg-5 p-0 d-flex justify-content-center align-items-center">
                        <div className="container-fluid padding">
                            <div className="row text-center padding">

                                <div className="col-12 social padding" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                                    <a target='_blank' rel="noreferrer" href="mailto:sieofficial24@gmail.com"><img height={63} src={images_url + 'navbar images/gmail.jpeg'} alt="" srcSet="" /></a>
                                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/society-of-industrial-engineers-sie-6805b9281/"><img height={63} src={images_url + 'navbar images/linkedin.jpeg'} alt="" srcSet="" /></a>
                                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/sie_ceg">
                                        <img height={63} src={images_url + 'navbar images/instagram.jpeg'} alt="" srcSet="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mapouter"><div className="gmap_canvas d-flex justify-content-center"><iframe title='gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4031783645196!2d80.2340815!3d13.0099778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fb20daafd%3A0xe724395896086108!2sDepartment%20of%20Industrial%20Engineering!5e0!3m2!1sen!2sin!4v1688200879731!5m2!1sen!2sin" width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div></div>
                    </div>
                    <div className="col-12">
                        <hr className="light-100"></hr>
                        <h5>© DoIE </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterMap