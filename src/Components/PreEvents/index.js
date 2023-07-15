import React from 'react'
import EventCards from '../EventCards.js'
import CommonCard from '../EventCards.js/CommonCard.js'
import { preEventsDataBase,onlineEventsDatabase, fieldEventsDatabase, techEventsDatabase, nonTechEventsDatabase } from './EventsData'
import HeadingComp from '../Others/HeadingComp.js'
const PreEvents = () => {
    return (
        <div id='EventsScroll'>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <div className="row welcome text-center">
                    <HeadingComp head={'Last Year Events'} />
                    <div className="col-12">
                        <p className="lead">Events engagement ideas are creative measures ensuring that your event is visible to the audience.</p>
                    </div>
                </div>
            </div>
            <EventCards data={preEventsDataBase} />
            <CommonCard heading={'Online Events'} data={onlineEventsDatabase} />
            <CommonCard heading={'Field Events'} data={fieldEventsDatabase} />
            <CommonCard heading={'Tech Events'} data={techEventsDatabase} />
            <CommonCard heading={'Non Tech Events'} data={nonTechEventsDatabase} />
            
        </div>
    )
}

export default PreEvents