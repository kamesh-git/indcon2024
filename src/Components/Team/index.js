import React from 'react'
import { images_url, team_indcon } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'
import './Team.css'

const Team = () => {
  const animation = ["fade-right", "fade-left"]
  return (
    <>
      <div className="row pb-5" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <HeadingComp head={'Meet the Team'} />
        {team_indcon.map((item, index) => (
          <div className={`our-team col-lg-4 col-md-6 col-12 mt-1 mb-5 ps-2 pe-2 `}>
            <div style={{ width: '330px', height: '330px', overflow: 'hidden', borderColor: item.tag || 'brown' }} className="pic m-auto">
              <div className="img" style={{ width: '330px', height: '330px', overflow: 'hidden',borderColor: item.tag || 'brown' }}>
                <img src={images_url + `team sie/${item.roll}.jpg`} alt='Loading...'></img>
              </div>
              <div className="team-content pt-md-5">
                <h4 className='text-center'>{item.Name}</h4>
                <p className='text-center'>{item.Designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Team