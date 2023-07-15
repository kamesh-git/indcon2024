import React, { useEffect, useState } from 'react'
import './EventCard.css'
import $ from 'jquery';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import LoadSpinner from '../Loading/LoadSpinner';
import useFirebase from '../../assests/useFirebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { images_url } from '../../assests/DataBase';

const EventCards = ({ data }) => {
    const { db } = useFirebase()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);
    const [modalitem, setModalitem] = useState({});
    const [sucessMsg, setSucessMsg] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [college, setCollege] = useState(null);
    const [department, setDepartment] = useState(null);
    const [year, setYear] = useState(null);
    const [phoneNO, setPhoneNo] = useState(null);

    const onshowModalListener = () => {
        $(".modal-body .register-event").click(function () {
            $(this).parent().parent().addClass('flip-card')
        })
        $(".close-flip").click(function () {
            $(this).parent().parent().removeClass('flip-card')
        })
        window.dispatchEvent(new Event('resize'))
    }

    const imgLoad = () => {
        window.dispatchEvent(new Event('resize'));
    }
    const handleClose = () => setShow(false);
    const handleShow = (e, data) => {
        setModalitem(data)
        setShow(true)
    };


    useEffect(() => {
        window.addEventListener("load", () => {
            window.dispatchEvent(new Event('resize'));
        });
        window.addEventListener('resize', function () {
            console.log('modal resize')
            document.querySelectorAll('.containerflip').forEach((elem, key) => {
                console.log(elem.getElementsByClassName('front')[0], elem.getElementsByClassName('back')[0])
                const frontheight = elem.getElementsByClassName('front')[0].clientHeight
                const backheight = elem.getElementsByClassName('back')[0].clientHeight
                console.log(frontheight, backheight)
                elem.style.height = (frontheight > backheight) ? frontheight + 'px' : backheight + 'px';
            })
        })
    }, [])


    const registerEvent = async (e) => {
        e.preventDefault()
        handleClose()
        setLoading(true)
        const docCollection = collection(db, 'paper presentation')
        const docQuery = query(docCollection, where('email', '==', name), where('number', '==', phoneNO))
        const docExists = await getDocs(docQuery)
        let addToDoc = {
            name: name,
            email: email,
            college: college,
            year: year,
            department: department,
            number: phoneNO,
        }
        if (docExists.size === 0) {
            await addDoc(collection(db, modalitem.collection), addToDoc);
            setSucessMsg('success')
        }
        else {
            setSucessMsg('failure')
        }
        setTimeout(() => {
            setLoading(false)
            setSucessMsg(null)
        }, 2000);


    }
    return (
        <>
            <div className="container-fluid padding p-0" >
                <Modal backdrop='static' show={loading} onShow={onshowModalListener} onHide={handleClose}>
                    <Modal.Body className='p-0'>
                        <LoadSpinner sucessMsg={sucessMsg} />
                    </Modal.Body>
                </Modal>
                <Modal backdrop='static' show={show} onShow={onshowModalListener} onHide={handleClose} dialogClassName="modal-90w">
                    <Modal.Header className='' closeButton>
                        <Modal.Title> {modalitem.eventName} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='containerflip'>
                            <div className="card">
                                <div className='front'>
                                    <button className="btn btn-outline-primary register-event">Register</button>
                                    <div className="row g-0">
                                        <div data-aos="fade-left" data-aos-offset="100" data-aos-delay="100" data-aos-duration="500" className="col-md-12">
                                            <div className="card-body">
                                                <p className="card-text" style={{ whiteSpace: 'pre-line', verticalAlign: 'bottom' }}> {modalitem.eventDesc} </p>
                                                <p className="card-text"><small className="text-muted">Deadline : {modalitem.deadline}</small></p>
                                                <p className="card-text"><small className="text-muted">Date : {modalitem.date}</small></p>
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center">
                                            {modalitem.brochure &&
                                                <iframe title='modalbrochure' src={modalitem.brochure} width="640" height="480" allow="autoplay"></iframe>
                                            }
                                        </div>
                                        <div className='col-md-12'>
                                            <div className="row justify-content-center">
                                                {modalitem.posters && [...Array(modalitem.posters[1]).keys()].map(item => (
                                                    <img onLoad={imgLoad} className='col-md-4 p-3' src={`${modalitem.posters[0]}${item + 1}.jpg`} alt="img" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="back p-2">
                                    <p className='close-flip text-start'> <button type='button' className="btn btn-dark">Back</button> </p>
                                    <Form onSubmit={registerEvent}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Name"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="College"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="College" value={college} onChange={e => setCollege(e.target.value)} required />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Department"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Department" value={department} onChange={e => setDepartment(e.target.value)} required />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Year"
                                            className="mb-3"
                                        >
                                            <Form.Control type="number" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} required />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Phone"
                                            className="mb-3"
                                        >
                                            <Form.Control type="number" placeholder="Phone" value={phoneNO} onChange={e => setPhoneNo(e.target.value)} required />
                                        </FloatingLabel>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <div className="row preEvents justify-content-center padding ps-4 pe-4">
                    {data.map((item, index) => (
                        <div key={`item${index}`} className="col-md-6 col-lg-3 pt-2 pb-2">
                            <div className="card" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                                <div className=''>
                                    <div className="card-header">
                                        <p className="circle"> {index + 1} </p>
                                    </div>
                                    <div className="card-body" style={{ overflow: 'hidden' }}>
                                        <h4 className="card-title">{item.eventName}</h4>
                                        <p className="card-text">{item.eventOneLine}</p>
                                        {item.time1 && <div className='mb-1'>Time : <span className="card-text ms-2">{item.time1}</span></div>}
                                        {item.day && <div className='d-flex align-items-center'><img alt='loading...' width={25} style={{ filter: 'invert(1)' }} src={images_url+'/navbar images/date.svg'}></img><span className="card-text ms-2">{item.day}</span></div>}<br></br>

                                        <button onClick={(e) => handleShow(e, item)} className="btn btn-outline-light know-more">Know more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default EventCards