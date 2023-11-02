import React from 'react'
import './about.css'
import { images_url } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'

const SieAbt = () => {
	return (
		<>
			<div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
				<div className="row">
					<HeadingComp head={'Society of Industrial Engineers(SIE)'} />
				</div>
				<div style={{ background: 'transparent' }} className="card pb-3">
					<div className="row align-items-center g-0">
						<div className="col-lg-4 order-lg-1">
							<img style={{width:"90%"}} src={images_url + "navbar images/sielogo.png"} className="img-fluid rounded-start" alt="..."></img>
						</div>
						<div className="col-lg-8">
							<div style={{ textAlign: 'justify' }} className="card-body">
								<p className="card-text about-text">The Society of Industrial Engineers (SIE), College of Engineering Guindy, Anna
									University stands as a beacon of brilliance with a steadfast commitment to the prosperity
									of the budding student community. As a society deeply rooted in the principles of
									engineering excellence, fortified by years of establishment, SIE has entrenched a
									comprehensive environment that nurtures talent, fosters innovation and propels students
									towards remarkable achievements.</p>
								<br></br>
								<p className='card-text about-text'> SIE is a student-led community mentored by Staffs. With their expertise and guidance,
									they contribute to the efficient functioning of our society, imparting knowledge and
									experience to empower students in their endeavours.</p>
								<br></br>
								<br></br>
								<p><a target='_blank' rel="noreferrer" href="https://www.annauniv.edu/industrial/students-activities.html/"><button style={{
								}} className="btn text-light btn-primary">Know More</button></a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SieAbt