import React from 'react'
import SigmaAbt from './SigmaAbt'
import IndconAbt from './IndconAbt'

const About = () => {
  return (
    <div id='AboutScroll' style={{ backgroundColor: 'var(--brand-light-col)' }}>
    <SigmaAbt />
    <IndconAbt />
    </div>
  )
}

export default About