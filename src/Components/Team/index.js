import React from 'react'
import { images_url, team_indcon } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'
import './Team.css'

const Team = () => {
  const animation = ["fade-right", "fade-left"]
  return (
    <>
      <div className="pb-5" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <HeadingComp head={'Meet the Team'} />
        {team_indcon.map((item, index) => (
          <div key={index} data-aos-offset="100" data-aos-duration="1000" data-aos={animation[index % 2]} className="row justify-content-center our-team">
            <div className={`col-md-6 order-md-${index % 2} mt-1 mb-5 ps-2 pe-2 `}>
              <div style={{ width: '330px', height: '330px', overflow: 'hidden' }} className="pic m-auto">
                <img src={images_url + `team sie/${item.roll}.jpg`} alt='Loading...'></img>
              </div>
            </div>
            <div className="team-content col-md-4 pt-md-5">
              <h3 className='text-center'>{item.Name}</h3>
              <p className='text-center'>{item.Designation}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Team