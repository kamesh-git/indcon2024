import React from 'react'
import './about.css'
import { images_url } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'

const CegAbt = () => {
	return (
		<>
			<div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
					<div className="row">
						<HeadingComp head={'Department of Industrial Engineering (DOIE)'} />
					</div>
				<div style={{background:'transparent'}} className="card pb-3">
					<div className="row align-items-center g-0">
						<div className="col-lg-4">
							<img src={images_url+"navbar images/doie building.png"} className="img-fluid rounded-start" alt="..."></img>
						</div>
						<div className="col-lg-8">
							<div style={{textAlign:'justify'}} className="card-body">
								<p className="card-text about-text">Anna
							University, Chennai is a well known Technical
							Institute in India offering higher education and
							research opportunities in a wide array of fields,
							prominently in Engineering. Technology and
							Management.</p>
							<br></br>
							<p className='card-text about-text'> The Department of Industrial
							Engineering (<b>DoIE</b>) in CEG offers excellent
							research opportunities and encourages
							extracurricular activities for students. The
							department nurtures Industrial Engineering
							students by helping and guiding them to widen
							and enhance their knowledge levels and skillset.</p>
							<br></br>
							<br></br>
							<p><a target='_blank' rel="noreferrer" href="https://www.annauniv.edu/industrial/"><button style={{
								}} className="btn text-light btn-primary">Know More</button></a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CegAbt