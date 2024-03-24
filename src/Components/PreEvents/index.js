import React, { useContext } from 'react'
import EventCards from '../EventCards.js'
import CommonCard from '../EventCards.js/CommonCard.js'
import { preEventsDataBase, onlineEventsDatabase, fieldEventsDatabase, techEventsDatabase, nonTechEventsDatabase } from './EventsData'
import HeadingComp from '../Others/HeadingComp.js'
import ContextProvider from '../../assests/Contextprovider.js'
const PreEvents = () => {
    const {indconlogo} = useContext(ContextProvider)

    return (
        <div id='EventsScroll'>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <div className="row welcome text-center">
                    <div className='d-flex justify-content-center'>
                        <div style={{ width: "5%",margin:"auto 0" }}>
                            <img style={{ width: "100%", height: "auto" }} src={indconlogo} alt="Loading..." />
                        </div>
                        <div className={``}>
                            <h5 style={{ color: 'var(--brand-dark-col)' }} className="display-5 text-center p-2">Indcon'24 Events
                            </h5>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <p className="lead text-start p-3" style={{textAlign:'justify'}}>
                            INDCON'24, a National-level techno-management symposium, is poised to captivate enthusiasts from March 26th to March 28th, 2024. With a diverse array of offerings, including 8 technical events, 5 non-technical events, and a flagship industrial event, the symposium promises a dynamic platform for knowledge exchange and networking. Participants can anticipate engaging discussions, hands-on workshops, and opportunities to interact with industry leaders, fostering innovation and collaboration across disciplines. Mark your calendars for this enriching experience where academia meets industry, propelling the realms of technology and management forward into a vibrant future.</p>
                    </div>
                </div>
            </div>
            {/* <EventCards data={preEventsDataBase} /> */}
            {/* <CommonCard heading={'Field Events'} data={fieldEventsDatabase} /> */}
            {/* <CommonCard heading={'Online Events'} data={onlineEventsDatabase} /> */}
            <CommonCard heading={'Tech Events'} data={techEventsDatabase} />
            <CommonCard heading={'Non Tech Events'} data={nonTechEventsDatabase} />

        </div>
    )
}

export default PreEvents