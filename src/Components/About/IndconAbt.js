import React from 'react'
import './about.css'
import { images_url } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'

const IndconAbt = () => {
	return (
		<>
			<div className="container-fluid padding"  data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
				<div className="row">
					<HeadingComp head={'INDCON'} />
				</div>
				<div style={{background:'transparent'}} className="card pb-3">
					<div className=" align-items-start row g-0">
						<div className="col-lg-4 order-lg-1 d-flex justify-content-center">
							<img src={images_url+"navbar images/indcon.jpg"} className="img-fluid rounded-start" alt="..."></img>
						</div>
						<div className="col-lg-8">
							<div style={{ textAlign: 'justify' }} className="card-body">
								<p className="card-text about-text">INDCON, organized by the Society of Industrial
									Engineers is a National level Technomanagement Symposium which is conducted
									every year in the month of April.
									</p>
									<br></br>
									<p className='card-text about-text'> Indcon is a
									forum that provides a stage for the discussion of
									contemporary applications and research on the
									various topics of Industrial Engineering towards
									excellence in Industrial/Service applications. It
									provides a sound platform for students, faculty
									members, practicing engineers and research
									scholars to disseminate knowledge and enhance
									perception by presenting high quality content
									oriented papers</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default IndconAbt