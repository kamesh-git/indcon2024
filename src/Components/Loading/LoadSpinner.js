import React from 'react'
import './LoadSpinner.css'


const LoadSpinner = ({ sucessMsg }) => {
  return (
    <>
      {sucessMsg ? sucessMsg === 'success' ?
        <>
          <div style={{ backgroundColor: 'transparent' }} className='spin-parent'>
            <div className="success-checkmark d-block">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div><br></br>
          </div>
          <div className="alert alert-success text-center d-block" role="alert">
            SuccessFully Registerd!.
          </div>
        </>
        :
        <div className="alert alert-danger text-center d-block m-0" role="alert">
          You have already registered
        </div>
        :
        <div style={{ height: '40vh', width: '100%', backgroundColor: '#263038',display:'flex',justifyContent:'center',alignItems:'center' }}>
          <span className="loader"></span>
        </div>
      }
    </>
  )
}

export default LoadSpinner