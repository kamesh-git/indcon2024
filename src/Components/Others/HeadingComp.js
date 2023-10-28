import React from 'react'
import './HeadingComp.css'

const HeadingComp = ({head,pt}) => {
    return (
        <div className={`col-12 pt-${pt || "5"}`}>
            <h5 style={{color:'var(--brand-dark-col)'}} className="display-5 text-center p-2">{head}
            <hr></hr>
            </h5>
        </div>
    )
}

export default HeadingComp