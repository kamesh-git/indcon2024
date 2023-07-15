import React from 'react'
import CegAbt from './CegAbt'
import IndconAbt from './IndconAbt'

const About = () => {
  return (
    <div id='AboutScroll' style={{ backgroundColor: 'var(--brand-light-col)' }}>
    <CegAbt />
    <IndconAbt />
    </div>
  )
}

export default About