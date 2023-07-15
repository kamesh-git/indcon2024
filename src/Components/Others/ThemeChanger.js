import React, { useEffect, useRef, useState } from 'react'
import './ThemeChanger.css'

const ThemeChanger = ({ listener }) => {

    const themechange = useRef(null)

    useEffect(() => {
        localStorage.getItem('theme') === 'dark' && themechange.current.classList.add('toggle')
    }, [])



    return (
        <div className='themetoggle'>
            <label htmlFor="theme" className="theme">
                <span className="theme__toggle-wrap">
                    <input
                        type="checkbox"
                        className="theme__toggle"
                        id="theme"
                        role="switch"
                        name="theme"
                        ref={themechange}
                        onClick={e => { e.target.classList.toggle('toggle'); listener() }}
                    />
                    <span className="theme__icon">
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                        <span className="theme__icon-part"></span>
                    </span>
                </span>
            </label>
        </div>
    )
}

export default ThemeChanger