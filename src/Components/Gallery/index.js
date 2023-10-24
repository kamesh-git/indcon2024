import React, { useState } from 'react'
import { images_url } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'
import { Carousel, Modal } from 'react-bootstrap'

const Gallery = () => {
  const numImages = 14
  const [galleryShow, setGalleryShow] = useState(false)
  const [imgModal, setImgModal] = useState([])

  const showImage = (num) => {
    const temp = []
    for (let index = -1; index < numImages-1; index++) {
      temp.push((num+index)%(numImages)+1)
    }
    setImgModal(temp)
    setGalleryShow(num)
  }
  return (
    <div className="pb-5" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
      <Modal size='xl' show={galleryShow} onHide={() => setGalleryShow(false)}>
        <Modal.Header onClick={() => setGalleryShow(false)}>X</Modal.Header>
        <Modal.Body>
          <Carousel data-aos="fade-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500">
            {imgModal.map((item, index) => {
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
        </Modal.Body>
      </Modal>
      <HeadingComp head={'Gallery'} />
      <div className="row justify-content-center ms-1 me-1">
        {[...Array(numImages).keys()].map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mt-2">
            <img
              onClick={() => showImage(item + 1)}
              style={{ width: '100%' }}
              className="d-block w-100"
              src={images_url + `gallery indcon/1 (${item + 1}).jpeg`}
              alt="First slide"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery