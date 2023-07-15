import React from 'react'
import { images_url } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'

const Gallery = () => {
  return (
    <div className="pb-5" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
      <HeadingComp head={'Gallery'} />
      <div className="row justify-content-center ms-1 me-1">
        {[...Array(14).keys()].map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mt-2">
            <img
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