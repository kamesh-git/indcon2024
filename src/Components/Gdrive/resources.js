import React from 'react'
import { useState } from 'react'
import { rs_gdrive } from '../../assests/DataBase'
import { Button, Col, Row } from 'react-bootstrap';
import Files from './gdrive_scrap';

const Resources = () => {


  const [gID, setGID] = useState(rs_gdrive[0].url)



  return (
    <>
      <div>
        <Row xs>
          {rs_gdrive.map((item) => (
            <Col>
              <Button size="lg">{item.name} th</Button>
            </Col>
          ))}
        </Row>

        <div>
          <Files id={gID} />
        </div>

      </div>
    </>
  )
}

export default Resources