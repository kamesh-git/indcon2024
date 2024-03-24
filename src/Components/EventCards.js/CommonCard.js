import React from 'react'
import styles from './CommonCard.module.css'
import HeadingComp from '../Others/HeadingComp'
import { images_url } from '../../assests/DataBase'
import { Button } from 'react-bootstrap'

const CommonCard = ({ data, heading }) => {
    return (
        <>
            <HeadingComp head={heading} />
            <div className="row commonEvents justify-content-center ps-4 pe-4">
                {
                    data.map((item, index) => (
                        <div style={{height: data.contHeight ? data.contHeight: "600px"}} className={`col-12 col-sm-6 col-lg-4 pt-2 pb-2 ${styles.flipcontainer}`}>
                            <div key={`item${index}`} className={`${styles.flipcard}`}>
                                <div className={`card ${styles.commonEventscard} ${styles.front}`}
                                    data-aos="fade-up" data-aos-offset="50" data-aos-delay="200" data-aos-duration="500"
                                >
                                    <div>
                                        <div className="card-header">
                                            <p className="circle"> {index + 1} </p>
                                        </div>
                                        <div className={`card-body ${styles.cardbody}`} style={{ overflow: 'hidden',height: data.bodyHeight ? data.bodyHeight: "450px" }}>
                                            <h4 className="card-title">{item.eventName}</h4>
                                            <p style={{ whiteSpace: 'pre-line', verticalAlign: 'bottom', wordWrap: "break-word" }} className="card-text">{item.eventOneLine}</p>
                                            {item.deadline && <div className='mb-1'>DeadLine: <span className="card-text ms-2">{item.deadline}</span></div>}
                                            {item.time1 && <div className='mb-1'>{item.time2 ? 'Round 1:' : 'Time: '} <span className="card-text ms-2">{item.time1}</span></div>}
                                            {item.time2 && <div className='mb-1'>Round 2 : <span className="card-text ms-2">{item.time2}</span></div>}
                                            {item.day && <div className='d-flex align-items-center'><img alt='loading...' width={25} style={{ filter: 'invert(1)' }} src={images_url + '/navbar images/date.svg'}></img><span className="card-text ms-2">{item.day}</span></div>}<br></br>
                                            {item.register && <div className='d-flex align-items-center'>
                                                <a target='_blank' href={item.register}><Button variant='dark'>Register</Button></a>
                                            </div>}<br></br>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.back}`}>
                                    <img src={`${images_url}events/${item.eventName}.jpg`} alt="" style={{width:"100%"}} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CommonCard