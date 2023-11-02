import React from 'react'
import CegAbt from './CegAbt'
import SieAbt from './SieAbt'

const About = () => {
  return (
    <div id='AboutScroll' style={{ backgroundColor: 'var(--brand-light-col)' }}>
    <CegAbt />
    <SieAbt />
    </div>
  )
}

export default About